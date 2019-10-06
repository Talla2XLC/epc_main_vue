<template>
  <transition name="fade">
    <nav class="main_nav" ref="main_nav" v-if="mainMenuVisible">
      <menu-section page_name="" @mouseover.native="hideProductNav"
        >главная</menu-section
      >
      <menu-section page_name="epc" @mouseover.native="hideProductNav"
        >о компании</menu-section
      >
      <menu-section page_name="products" @mouseover.native="showProductNav"
        >продукция</menu-section
      >
      <menu-section page_name="contacts" @mouseover.native="hideProductNav"
        >контакты</menu-section
      >
    </nav>
  </transition>
</template>

<script type="text/javascript">
import menuSection from "@/components/menu-section";

export default {
  name: "main-nav",
  components: {
    menuSection
  },
  computed: {
    mainMenuVisible() {
      return this.$store.state.mainMenuVisible;
    }
  },
  methods: {
    showProductNav() {
      this.$store.dispatch("showProductNav");
    },
    hideProductNav() {
      this.$store.dispatch("hideProductNav");
    }
  }
};
</script>

<style lang="sass" scoped>
.main_nav
  position: absolute
  display: -webkit-flex
  display: -moz-flex
  display: -ms-flex
  display: -o-flex
  display: flex
  flex-flow: row nowrap
  justify-content: space-between
  align-items: center
  box-sizing: border-box
  width: 100%
  padding: 0.5rem 10%
  z-index: 3
  min-height: 6rem

.fade-enter-active
  transition: opacity 100ms ease-in 150ms
.fade-leave-active
  transition: opacity 200ms ease-in
.fade-enter, .fade-leave-to
  opacity: 0

@media (min-width: 1850px)
  .main_nav
    padding: 0.5rem 20%
</style>
