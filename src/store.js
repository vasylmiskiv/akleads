import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
  state() {
    return {
      isLoading: false,
      isUserDataModalActive: false,
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
            commit('setIsUserDataModalActive', true)
          } else {
            commit('setStatusText', res.statusText)
          }
        })
        .catch((err) => console.log(err))
    }
  },
  modules: {}
})

export default store
