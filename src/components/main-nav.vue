<template>
  <nav class="main_nav" ref="main_nav">
    <router-link :to="`/`" class="epc_logo_div" @click.native="selectPage('')">
      <EPCLogo class="epc-logo" />
    </router-link>
    <div class="menu-list">
      <menu-section page_name="news">Новости</menu-section>
      <menu-section page_name="about">О компании</menu-section>
      <menu-section page_name="products">Каталог</menu-section>
      <menu-section page_name="contacts">Контакты</menu-section>
    </div>
    <a href="http://epcelectro.ru/">
      <EPCelectroLogo class="epcelectro-logo" />
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
.main_nav
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
  padding: 0 100px
  z-index: 1
  min-height: 80px
  @include respond-to(xs)
  @include respond-to(s)
  @include respond-to(m)
  @include respond-to(l)
    padding: 0 100px
    min-height: 80px
  @include respond-to(xl)
.epc-logo
  &:hover >path
    &:nth-of-type(1)
      fill: url(#color_radial)
    &:nth-of-type(2), &:nth-of-type(4)
      fill: #EC001D

.epcelectro-logo
  &:hover >path
    &:nth-of-type(1)
      fill: #E6E6E6
    &:nth-of-type(2), &:nth-of-type(3), &:nth-of-type(5)
      fill: #18BFF6

.menu-list
  margin-left: 30px
</style>
