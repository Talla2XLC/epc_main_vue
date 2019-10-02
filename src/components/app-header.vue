<template>
  <header @mouseover="showMainMenu" @mouseleave="hideMainMenu">
    <main-nav-burger></main-nav-burger>
    <div class="header_bottom" :class="{ big_header_bottom: mainMenuVisible }">
      <main-nav></main-nav>
    </div>
  </header>
</template>

<script>
import mainNav from "@/components/main-nav";
import mainNavBurger from "@/components/main-nav-burger";

export default {
  name: "app-header",
  components: {
    mainNav,
    mainNavBurger
  },
  computed: {
    mainMenuVisible() {
      return this.$store.state.mainMenuVisible;
    }
  },
  methods: {
    showMainMenu() {
      this.$store.dispatch("showMainMenu");
    },

    hideMainMenu() {
      this.$store.dispatch("hideMainMenu");
    }
  }
};
</script>

<style lang="sass" scoped>
header
  display: -webkit-flex
  display: -moz-flex
  display: -ms-flex
  display: -o-flex
  display: flex
  flex-flow: column nowrap
  align-items: center
  justify-content: flex-end
  position: relative
  min-height: 6rem
  z-index: 1
.header_bottom
  display: -webkit-flex
  display: -moz-flex
  display: -ms-flex
  display: -o-flex
  display: flex
  flex-flow: row nowrap
  justify-content: center
  position: relative
  width: 100%
  background: #c8c3c2
  -webkit-box-shadow: inset -3px -8px 10px -10px #000000, inset 0px 4px 4px -3px #000000
  box-shadow: inset -3px -8px 10px -10px #000000, inset 0px 4px 4px -3px #000000
  transition: min-height 300ms ease-in
  z-index: 1
  min-height: 1.4rem
.big_header_bottom
  min-height: 6rem
</style>
