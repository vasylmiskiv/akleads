<template>
  <div class="container mx-auto max-w-[720px] py-10 px-5">
    <router-link to="/" class="bg-blue-300 rounded px-8 p-2 transition-all hover:bg-blue-400">Back</router-link>
    <div class="flex flex-col items-center py-8">
      <form @submit.prevent="onSendZipCode" class="mt-5 w-full">
        <label for="zipcode">Enter your zipcode:</label>
        <input type="text" id="zipcode" v-model="zipCodeInput"
          class="mt-2 w-full bg-gray-100 py-3 px-4 rounded outline-none border border-gray-100 focus:border focus:border-gray-300">
        <button type="submit"
          class="mt-5 bg-green-400 rounded w-full py-3 transition-all hover:bg-green-500 ">Render</button>
        <p class="mt-2 text-red-400 text-sm font-semibold">{{ zipCodeReqestError }}</p>
      </form>
    </div>
    <ZipCodeInfo v-if="!zipCodeReqestError && Object.keys(zipCodeInfoData).length" :zipCodeInfoData="zipCodeInfoData" />
    <pulse-loader v-if="isLoading" :loading="loading" :color="color" :size="size" class="text-center"></pulse-loader>
  </div>
</template>

<script>
import axios from 'axios';
import ZipCodeInfo from './ZipCodeInfo.vue';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
export default {
  name: "ZipCodeSearch",
  components: {
    ZipCodeInfo,
    PulseLoader,
  },
  data() {
    return {
      zipCodeInput: "",
      zipCodeInfoData: {},
      zipCodeReqestError: "",
      isLoading: false,
    }
  },
  methods: {
    onSendZipCode() {
      this.isLoading = true;
      axios.get(`${import.meta.env.VITE_SMARTYSTREETS_URL}lookup?auth-id=${import.meta.env.VITE_AUTH_ID}&auth-token=${import.meta.env.VITE_AUTH_TOKEN}&zipcode=${this.zipCodeInput}`)
        .then(res => {
          const { reason, zipcodes } = res.data[0];
          if (!reason) {
            if (this.zipCodeReqestError.length) return this.zipCodeReqestError = ""
            this.zipCodeInfoData = zipcodes[0];
          } else {
            this.zipCodeReqestError = reason;
          }
        })
        .catch(err => console.log(err))
      this.isLoading = false;
    }
  }
}
</script>

<style></style>
