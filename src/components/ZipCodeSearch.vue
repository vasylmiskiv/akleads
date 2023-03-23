<template>
  <div class="container mx-auto max-w-[720px] py-10 px-5">
    <div class="flex justify-between">
      <router-link to="/" class="bg-blue-300 rounded px-8 p-2 transition-all hover:bg-blue-400">Back</router-link>
      <UserDataButton />
    </div>
    <div class="flex flex-col items-center py-8">
      <form @submit.prevent="onSendZipCode" class="mt-5 w-full">
        <label for="zipcode">Enter your zipcode:</label>
        <input type="text" id="zipcode" v-model="zipCodeInput"
          class="mt-2 w-full bg-gray-100 py-3 px-4 rounded outline-none border border-gray-100 focus:border focus:border-gray-300">
        <button type="submit" class="`mt-5 bg-green-400 rounded w-full py-3 transition-all hover:bg-green-500"
          :class="{ 'bg-gray-400 hover:bg-gray-400 cursor-default': !zipCodeInput.length }">Render</button>
        <p class="mt-2 text-red-400 text-sm font-semibold">{{ zipCodeReqestError }}</p>
      </form>
    </div>
    <ZipCodeInfo />
  </div>
</template>

<script>
import ZipCodeInfo from './ZipCodeInfo.vue';
import UserDataButton from './UserDataButton.vue';
import { mapActions } from 'vuex';
export default {
  name: "ZipCodeSearch",
  components: {
    ZipCodeInfo,
    UserDataButton,
  },
  data() {
    return {
      zipCodeInput: "",
      zipCodeReqestError: "",
    }
  },
  methods: {
    ...mapActions([
      'getDataByZipCode'
    ]),
    onSendZipCode() {
      this.getDataByZipCode(this.zipCodeInput);
    },
  },
}
</script>

<style></style>
