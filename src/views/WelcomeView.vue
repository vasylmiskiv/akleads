<template>
  <div class="relative h-screen flex basis-0">
    <img src="../assets/greetings.jpg" alt="sea" class="h-screen w-1/2 max-xl:hidden">

    <div class="flex flex-col items-center justify-center gap-40 p-5 w-full">
      <h1 class="font-bold text-4xl text-center">Welcome to ZipCode Render!</h1>
      <router-link to="/render" class="bg-green-400 py-4 px-10 rounded-lg text-xl hover:bg-green-500">Get
        Started</router-link>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: "WelcomeView",
  methods: {
    ...mapActions([
      'getClientData'
    ]),
    ...mapGetters([
      'getClientIp'
    ]),
  },
  mounted() {
    if (!this.getClientIp()) {
      this.getClientData();
    }
  }
}
</script>
<style></style>
