<template>
  <div class="main_page">
    <div class="main_content">
      <div class="main_left">
        <router-link
          :to="`/about`"
          class="epc_logo_link"
          @click.native="selectPage"
        >
          <EPCLogoFull class="epc_logo_img" viewBox="0 0 400 123" />
        </router-link>
      </div>
      <div class="content_div">
        <div class="mission-txt">
          <h1
            class="main-content-header"
            :class="$mq === 'xl' ? 'text-hero' : 'text-h1'"
          >
            Технологии и качество на высшем уровне
          </h1>
          <p :class="$mq === 'xl' ? 'text-body1' : 'text-body2'">
            Наша компания является официальным сервисным и&nbsp;логистическим
            партнёром ряда европейских производителей технологического
            оборудования, таких как Nupi Industrie Italiane S.p.A., Scully
            Signal Company, Emco Wheaton GmbH, Rotork Plc и EVBox
          </p>
        </div>
      </div>
      <nupi-banner />
    </div>
    <partners />
  </div>
</template>

<script>
import partners from "@/components/partners";
import nupiBanner from "@/components/Main/nupi-banner";
import EPCLogoFull from "@/assets/svg/epc-logo-full.svg";

export default {
  name: "Main",
  metaInfo: {
    title: "EPC Main"
  },
  components: {
    partners,
    nupiBanner,
    EPCLogoFull
  },
  methods: {
    selectPage() {
      this.$store.dispatch("selectPage", "about");
    }
  }
};
</script>

<style lang="sass" scoped>
.ps
  height: 100%

.main_page
  flex-grow: 1
  position: relative
  display: -webkit-flex
  display: -moz-flex
  display: -ms-flex
  display: -o-flex
  display: flex
  flex-flow: column nowrap
  z-index: 2

.main_content
  flex-grow: 1
  display: -webkit-flex
  display: -moz-flex
  display: -ms-flex
  display: -o-flex
  display: flex
  flex-flow: row nowrap
  align-items: center
  justify-content: center
  padding: 0 100px
  box-sizing: border-box
  position: relative
  z-index: 2
  @include respond-to(xs)
  @include respond-to(s)
  @include respond-to(m)
  @include respond-to(l)
    padding: 0 100px
  @include respond-to(xl)

.main_left
  width: 50%
  height: 100%
  margin-right: 10px
  box-sizing: border-box
  display: -webkit-flex
  display: -moz-flex
  display: -ms-flex
  display: -o-flex
  display: flex
  flex-flow: row nowrap
  align-items: center
  justify-content: center

.epc_logo_img
  transition: transform 200ms ease-in
  &:hover
    transform: scale(1.15)
  @include respond-to(xs)
  @include respond-to(s)
  @include respond-to(m)
  @include respond-to(l)
  @include respond-to(xl)
    width: 560px
    height: 173px

.content_div
  width: 50%
  height: 100%
  margin-left: 10px
  box-sizing: border-box
  display: -webkit-flex
  display: -moz-flex
  display: -ms-flex
  display: -o-flex
  display: flex
  flex-flow: column nowrap
  justify-content: center

.mission-txt
  box-sizing: border-box
  display: -webkit-flex
  display: -moz-flex
  display: -ms-flex
  display: -o-flex
  display: flex
  flex-flow: column nowrap
  justify-content: space-around
  text-align: center
  @include respond-to(xs)
  @include respond-to(s)
  @include respond-to(m)
  @include respond-to(l)
  @include respond-to(xl)

.main-content-header
  margin-bottom: 47px
</style>
