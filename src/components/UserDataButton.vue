<template>
  <button @click="onGetClientData()" class="bg-purple-400 rounded py-2 px-4 transition-all hover:bg-purple-500">{{
    isLoading ?
    "Loading..." : "Get client data" }}</button>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';
export default {
  name: "UserData",
  components: {},
  data() {
    return {
      isShowedModal: false,
    }
  },
  methods: {
    ...mapActions([
      'getClientData',
    ]),
    onGetClientData() {
      this.getClientData();
    }
  }
}
</script>
<style></style>