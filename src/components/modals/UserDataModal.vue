<template>
  <div class="absolute w-full h-screen flex justify-center items-center bg-modal px-5 z-10 backdrop-blur-sm">
    <div class="w-[720px] flex bg-white pb-8 pt-2 px-5 flex-col rounded shadow-xl">
      <button class="ml-auto" @click="onCloseModal">
        <font-awesome-icon icon="fa-sharp fa-solid fa-door-closed" />x
      </button>
      <div class="mt-2">
        <div class="info-item">Your ip address: <span class="font-semibold">{{ clientData.ip_address
        }}</span></div>
        <div class="info-item">Your country: <span class="flex items-center justify-center gap-2 font-semibold">{{
          clientData.country }} <img :src="imageData" alt="country" class="h-4"></span>
        </div>
        <div class="info-item">Your region: <span class="font-semibold">{{ clientData.region }}</span>
        </div>
        <div class="info-item">Your city: <span class="font-semibold">{{ clientData.city }}</span></div>
        <div class="info-item">Your ISP (Internet service provider): <span class="text-right font-semibold">{{
          clientData.connection.isp_name
        }}</span>
        </div>
        <div class="info-item">Organization: <span class="font-semibold">{{
          clientData.connection.organization_name
        }}</span>
        </div>
        <div class="info-item">Your browser: <span class="font-semibold">{{
          userAgentData.browser
        }}, Version {{ userAgentData.browserVersion }}</span></div>
      </div>
      <div class="info-item">System: <span class="font-semibold">{{ userAgentData.system }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: "UserDataModal",
  components: {},
  methods: {
    ...mapActions([
      'toggleModalInfo'
    ]),
    ...mapGetters([
      'getImageUrl'
    ]),
    onCloseModal() {
      this.toggleModalInfo(false)
    }
  },
  computed: {
    clientData() {
      return this.$store.state.clientData
    },
    userAgentData() {
      return this.$store.state.userAgentData
    },
    imageData() {
      return this.getImageUrl()
    }
  }

}
</script>