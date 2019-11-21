<template>
  <div id="app">
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
import "reset-css";
import "@/sass/_fonts.sass";

export default {
  name: "App",
  components: {
    appHeader,
    appFooter,
    productNav
  }
};
</script>

<style lang="sass">
#app
  font-family: "montserrat-regular", "calibri", sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  display: -webkit-flex
  display: -moz-flex
  display: -ms-flex
  display: -o-flex
  display: flex
  flex-flow: column nowrap
  height: 100vh
  overflow: hidden

main
  flex-grow: 1
  display: -webkit-flex
  display: -moz-flex
  display: -ms-flex
  display: -o-flex
  display: flex
  flex-flow: column nowrap
  position: relative
  z-index: 5
</style>
