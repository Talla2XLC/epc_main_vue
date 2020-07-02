<template>
  <div id="app" :class="this.$route.path === '/' ? 'fixed-app' : ''">
    <perfect-scrollbar ref="scroll">
      <app-header />
      <main>
        <router-view />
      </main>
      <app-footer />
    </perfect-scrollbar>
  </div>
</template>

<script>
import appHeader from "@/components/app-header";
import appFooter from "@/components/app-footer";
import { PerfectScrollbar } from "vue2-perfect-scrollbar";

import "./sass/normalize.css";
import "@/sass/_fonts.sass";
import "reset-css";

export default {
  name: "App",
  components: {
    appHeader,
    appFooter,
    PerfectScrollbar
  },
  watch: {
    $route() {
      this.$refs.scroll.$el.scrollTop = 0;
    }
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
  height: 100vh

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

.ps
  height: 100%
  display: flex
  flex-flow: column nowrap
</style>
<style src="vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css" />
