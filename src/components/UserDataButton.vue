<template>
  <button @click="onOpenModal" class="bg-purple-400 rounded py-2 px-4 transition-all hover:bg-purple-500">{{
    isLoading ?
    "Loading..." : "Get client data" }}</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "UserData",
  components: {},
  methods: {
    ...mapActions([
      'toggleModalInfo'
    ]),
    onOpenModal() {
      this.toggleModalInfo(true);
    }
  }
}
</script>
<style></style>