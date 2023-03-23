<template>
  <div class="flex flex-col bg-gray-100 p-5 rounded text-base" @click="onGetInfo">
    <div class="info-item uppercase" @click="onGetInfo">Zip Code: <span class="font-semibold uppercase">{{
      infoData.zipcode }}</span></div>
    <div class="info-item">Country name: <span class="font-semibold">{{
      infoData.county_name }}</span>
    </div>
    <div class="info-item">Zip Code Type: <span class="font-semibold">{{
      infoData.zipcode_type }}</span>
    </div>
    <div class="info-item">City: <span class="font-semibold">{{
      infoData.default_city }}</span></div>
    <div class="info-item">Country fips: <span class="font-semibold">{{
      infoData.county_fips }}</span>
    </div>
    <div class="info-item">State abbr: <span class="font-semibold">{{
      infoData.state_abbreviation
    }}</span></div>
    <div class="info-item">State: <span class="font-semibold">{{
      infoData.state }}</span></div>
    <div class="info-item">Latitude: <span class="font-semibold">{{
      infoData.latitude }}</span></div>
    <div class="info-item">Longitude: <span class="font-semibold">{{
      infoData.longitude }}</span></div>
    <div class="info-item">Precision: <span class="font-semibold">{{
      infoData.precision }}</span></div>
  </div>
</template>
<script>
export default {
  name: "ZipCodeInfo",
  computed: {
    infoData() {
      return this.$store.state.infoDataByZipCode
    }
  }
}
</script>