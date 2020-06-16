<template>
  <nav class="main_nav" ref="main_nav">
    <router-link :to="`/`" class="epc_logo_div" @click.native="selectPage('')">
      <EPCLogo class="epc-logo" viewBox="0 0 400 123" />
    </router-link>
    <menu-section page_name="about">О компании</menu-section>
    <menu-section page_name="products">Каталог</menu-section>
    <menu-section page_name="contacts">Контакты</menu-section>
    <a href="http://epcelectro.ru/">
      <EPCelectroLogo />
    </a>
  </nav>
</template>

<script type="text/javascript">
import menuSection from "@/components/menu-section";
import EPCLogo from "@/assets/svg/epc-logo.svg";
import EPCelectroLogo from "@/assets/svg/epcelectro_logo.svg";

export default {
  name: "main-nav",
  components: {
    menuSection,
    EPCLogo,
    EPCelectroLogo
  },
  computed: {},
  methods: {
    selectPage(page) {
      this.$store.dispatch("selectPage", page);
    }
  }
};
</script>

<style lang="sass" scoped>
@import "@/sass/_media.sass"

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
  padding: 0 5%
  z-index: 1
  min-height: 8vh
  @include respond-to(xs)
  @include respond-to(s)
  @include respond-to(m)
  @include respond-to(l)
    min-height: 8vh
  @include respond-to(xl)
    min-height: 10vh
.epc-logo
  width: 85px
  height: 26px
  /*viewBox: "0 0 85 26"*/

.epcelectro
  height: 2vw
  transition: transform 200ms ease-in
  filter: grayscale(100%) contrast(80%)
  &:hover
    transform: scale(1.15)
    filter: none

@media (min-width: 900px)
  .main_nav
    padding: 0 10%
  .epcelectro
    height: 1.5vw

@media (min-width: 1850px)
  .main_nav
    padding: 0.5rem 20%
</style>
