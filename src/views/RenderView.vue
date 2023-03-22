<script setup>
import ZipCodeSearch from '../components/ZipCodeSearch.vue';
import UserDataModal from '../components/modals/UserDataModal.vue';
</script>

<template>
  <main class="relative">
    <UserDataModal v-if="$store.state.isUserDataModalActive" />
    <ZipCodeSearch />
  </main>
</template>
