<template>
  <div class="flex flex-col bg-gray-100 p-5 rounded text-base">
    <div class="info-item uppercase">Zip Code: <span class="font-semibold uppercase">{{
      zipCodeInfoData.zipcode }}</span></div>
    <div class="info-item">Country name: <span class="font-semibold">{{
      zipCodeInfoData.county_name }}</span>
    </div>
    <div class="info-item">Zip Code Type: <span class="font-semibold">{{
      zipCodeInfoData.zipcode_type }}</span>
    </div>
    <div class="info-item">City: <span class="font-semibold">{{
      zipCodeInfoData.default_city }}</span></div>
    <div class="info-item">Country fips: <span class="font-semibold">{{
      zipCodeInfoData.county_fips }}</span>
    </div>
    <div class="info-item">State abbr: <span class="font-semibold">{{
      zipCodeInfoData.state_abbreviation
    }}</span></div>
    <div class="info-item">State: <span class="font-semibold">{{
      zipCodeInfoData.state }}</span></div>
    <div class="info-item">Latitude: <span class="font-semibold">{{
      zipCodeInfoData.latitude }}</span></div>
    <div class="info-item">Longitude: <span class="font-semibold">{{
      zipCodeInfoData.longitude }}</span></div>
    <div class="info-item">Precision: <span class="font-semibold">{{
      zipCodeInfoData.precision }}</span></div>
  </div>
</template>
<script>
export default {
  name: "ZipCodeInfo",
  props: ['zipCodeInfoData'],
}
</script>