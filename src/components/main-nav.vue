<template>
  <nav class="main_nav" ref="main_nav">
    <router-link :to="`/`" class="epc_logo_div" @click.native="selectPage('')">
      <EPCLogo
        viewBox="0 0 85 26"
        class="epc-logo"
        :class="{
          'epc-logo-colored': this.$route.path !== '/'
        }"
      />
    </router-link>
    <div class="menu-list">
      <menu-section page_name="news">Новости</menu-section>
      <menu-section page_name="about">О компании</menu-section>
      <menu-section page_name="catalog">Каталог</menu-section>
      <menu-section page_name="contacts">Контакты</menu-section>
    </div>
    <a class="epcelectro-logo-link" href="http://epcelectro.ru/">
      <EPCelectroLogo viewBox="0 0 140 26" class="epcelectro-logo" />
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
  min-height: 60px
  @include respond-to(xs)
  @include respond-to(s)
  @include respond-to(m)
    padding: 0 40px
  @include respond-to(l)
    padding: 0 100px
    min-height: 60px
  @include respond-to(xl)
    padding: 0 100px
    min-height: 60px

.epc-logo
  width: 85px
  height: 26px
  @include respond-to(xs)
  @include respond-to(s)
  @include respond-to(m)
    width: 78px
    height: 24px
  @include respond-to(l)
    width: 85px
    height: 26px
  @include respond-to(xl)
    width: 85px
    height: 26px
  &:hover >path
    &:nth-of-type(1)
      fill: url(#color_radial)
    &:nth-of-type(2), &:nth-of-type(4)
      fill: #EC001D
.epc-logo-colored > path
  &:nth-of-type(1)
    fill: url(#color_radial)
  &:nth-of-type(2), &:nth-of-type(4)
    fill: #EC001D

.epcelectro-logo
  width: 140px
  height: 26px
  @include respond-to(xs)
  @include respond-to(s)
  @include respond-to(m)
    width: 129px
    height: 24px
  @include respond-to(l)
    width: 140px
    height: 26px
  @include respond-to(xl)
    width: 140px
    height: 26px
  &:hover >path
    &:nth-of-type(1)
      fill: #E6E6E6
    &:nth-of-type(2), &:nth-of-type(3), &:nth-of-type(5)
      fill: #18BFF6
  &-link
    l

.menu-list
  margin-left: 20px
  @include respond-to(xs)
  @include respond-to(s)
  @include respond-to(m)
    margin-left: 0
  @include respond-to(l)
    margin-left: 20px
  @include respond-to(xl)
    margin-left: 20px

@media (max-height: 950px)
  .main_nav
    min-height: 60px
</style>
