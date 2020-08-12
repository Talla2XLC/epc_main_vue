<template>
  <div class="container">
    <gmap-map v-bind="options" id="map" :options="mapControl">
      <gmap-marker :position="options.center" />
    </gmap-map>
  </div>
</template>

<script>
import { gmapApi } from "vue2-google-maps";

export default {
  name: "GoogleMap",
  props: ["lat", "lng", "zoom"],
  data() {
    return {
      options: {
        zoom: +this.zoom,
        center: {
          lat: +this.lat,
          lng: +this.lng
        },
        mapTypeId: "roadmap"
      },
      mapControl: {
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false
      }
    };
  },
  computed: {
    google: gmapApi
  },
  methods: {}
};
</script>

<style lang="sass" scoped>
#map
  width: 100%
  height: 100%
</style>
