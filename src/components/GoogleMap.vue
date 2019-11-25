<template>	
	<div class="container">
		<gmap-map
      v-bind="options"
	    id="map"
	  >
    <gmap-marker :position="options.center"/>
	  </gmap-map>
	</div>	
</template>

<script>
import { gmapApi } from 'vue2-google-maps';

export default {
  name: "GoogleMap",
  props: ["lat", "lng"],
  data() {
    return {
      options: {
        zoom: 16,
        center: {
          lat: +this.lat,
          lng: +this.lng
        },
        mapTypeId: 'roadmap'
      }
    };
  },
  computed: {
    google: gmapApi,
    mapMarkers: function () {
      return this.markers
    }
  },
  methods: {
  }
};
</script>

<style lang="sass" scoped>
#map
  position: absolute
  width: 40%
  height: 80%
  top: 10%
  right: 5%
</style>