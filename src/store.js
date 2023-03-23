import { createStore } from 'vuex'
import axios from 'axios'
// import VuexPersistence from 'vuex-persist'

/* Vuex persist plugin */
// const vuexLocal = new VuexPersistence({
//   storage: window.localStorage
// })

const store = createStore({
  state() {
    return {
      isLoading: false,
      isUserDataModalActive: false,
      infoDataByZipCode: {},
      userAgentData: {},
      clientData: {},
      statusText: ''
    }
  },
  getters: {
    getImageUrl: (state) => {
      return state.clientData.flag.png
    }
  },
  mutations: {
    setInfoDataByZipCode: (state, infoData) => {
      state.infoDataByZipCode = infoData
    },
    setIsUserDataModalActive: (state, isActive) => {
      state.isUserDataModalActive = isActive
    },
    setUserAgentData: (state, userAgentData) => {
      state.userAgentData = userAgentData
    },
    setClientData: (state, clientData) => {
      state.clientData = clientData
    },
    setStatusText: (state, statusText) => {
      state.statusText = statusText
    }
  },
  actions: {
    getDataByZipCode({ commit }, zipcode) {
      axios
        .get(`${import.meta.env.VITE_ZIPCODE_API}`, {
          params: {
            zipcode
          }
        })
        .then((res) => {
          console.log(res.data)
          const { reason, zipcodes } = res.data[0]
          if (!reason) {
            commit('setInfoDataByZipCode', zipcodes[0])
          } else {
            commit('setStatusText', reason)
          }
        })
        .catch((err) => console.log(err))
    },
    getClientData({ commit }) {
      commit('setUserAgentData', {
        browser: window.navigator.userAgentData.brands[0].brand,
        browserVersion: window.navigator.userAgentData.brands[0].version,
        system: navigator.platform
      })

      axios
        .get(
          `${import.meta.env.VITE_ABSTRACT_URL}/v1/?api_key=${import.meta.env.VITE_ABSTRACT_KEY}`
        )
        .then((res) => {
          if (res.status === 200) {
            commit('setClientData', res.data)
          } else {
            commit('setStatusText', res.statusText)
          }
        })
        .catch((err) => commit('setStatusText', err.message))
    },
    toggleModalInfo({ commit }, isOpen) {
      commit('setIsUserDataModalActive', isOpen)
    }
  },
  modules: {}
  /* Vuex persist plugin */
  // plugins: [vuexLocal.plugin]
})

export default store
