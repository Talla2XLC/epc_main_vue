<template>
  <div id="app" :class="this.$route.path === '/' ? 'fixed-app' : ''">
    <app-header />
    <main>
      <router-view />
      <product-nav />
    </main>
    <app-footer />
  </div>
</template>

<script>
import appHeader from "@/components/app-header";
import appFooter from "@/components/app-footer";
import productNav from "@/components/product-nav";

import "./sass/normalize.css";
import "@/sass/_fonts.sass";
import "reset-css";

export default {
  name: "App",
  components: {
    appHeader,
    appFooter,
    productNav
  },
  metaInfo: {}
};
</script>

<style lang="sass">
#app
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  display: -webkit-flex
  display: -moz-flex
  display: -ms-flex
  display: -o-flex
  display: flex
  flex-flow: column nowrap
  overflow: hidden
  min-height: 100vh

.fixed-app
  height: 100vh

main
  display: -webkit-flex
  display: -moz-flex
  display: -ms-flex
  display: -o-flex
  display: flex
  flex-flow: column nowrap
  position: relative
  z-index: 5
  flex-grow: 1
</style>
