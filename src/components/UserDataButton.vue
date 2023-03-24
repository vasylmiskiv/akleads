<template>
  <button @click="onOpenModal"
    class="flex justify-center items-center gap-4 bg-purple-400 rounded py-2 px-4 transition-all hover:bg-purple-500"><font-awesome-icon
      :icon="['fas', 'user']" />Get client data</button>
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