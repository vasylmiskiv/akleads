<template>
  <div class="container mx-auto max-w-[720px] py-10 px-5">
    <div class="flex justify-between">
      <router-link to="/"
        class="flex justify-center items-center gap-4 bg-blue-300 rounded px-8 p-2 transition-all hover:bg-blue-400"><font-awesome-icon
          :icon="['fas', 'arrow-left']" />Back</router-link>
      <UserDataButton />
    </div>
    <div class="flex flex-col items-center py-8">
      <form @submit.prevent="onSendZipCode" class="mt-5 w-full">
        <label for="zipcode" class="text-sm text-gray-700">Enter your zipcode (for example <span
            @click="pasteLayoutTempalte" class="underline cursor-pointer">90012</span>):</label>
        <input type="text" id="zipcode" v-model="zipCodeInput" placeholder="90012"
          class="mt-2 w-full bg-gray-100 py-3 px-4 rounded outline-none border border-gray-100 focus:border focus:border-gray-300">
        <button type="submit"
          class="mt-5 bg-green-400 rounded w-full py-3 transition-all hover:bg-green-500 cursor-pointer"><font-awesome-icon
            :icon="['fas', 'paper-plane']" /><span class="ml-4">Render</span></button>
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
    }
  },
  methods: {
    ...mapActions([
      'getDataByZipCode'
    ]),
    onSendZipCode() {
      this.getDataByZipCode(this.zipCodeInput);
    },
    pasteLayoutTempalte() {
      this.zipCodeInput = "90012"
    }
  },
}
</script>

<style></style>
