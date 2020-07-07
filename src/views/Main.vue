<template>
  <div class="main_page">
    <div class="main_content">
      <div class="main_left">
        <router-link
          :to="`/about`"
          class="epc_logo_link"
          @click.native="selectPage"
        >
          <EPCLogoFull class="epc_logo_big" viewBox="0 0 400 123" />
        </router-link>
      </div>
      <div class="content_div">
        <div class="mission-txt">
          <h1
            class="main_content-header"
            :class="{
              'text-hero': $mq === 'xl',
              'text-h1': $mq === 'l',
              'text-h2': $mq === 'm'
            }"
          >
            Технологии и качество на&nbsp;высшем&nbsp;уровне
          </h1>
          <p :class="{
              'text-body1': $mq === 'xl',
              'text-body2': $mq === 'l',
              'text-body4': $mq === 'm'
            }"
          >
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
  flex-basis: max-content
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
    display: grid
    grid-template-columns: 1fr
    grid-auto-rows: 50%
    grid-row-gap: 0
    justify-items: center
    align-items: start
    padding: 0
  @include respond-to(s)
    display: grid
    grid-template-columns: 1fr
    grid-auto-rows: 50%
    grid-row-gap: 0
    justify-items: center
    align-items: start
    padding: 0
  @include respond-to(m)
    display: grid
    grid-template-columns: 1fr
    grid-auto-rows: 50%
    grid-row-gap: 0
    justify-items: center
    align-items: start
    padding: 0
  @include respond-to(l)
    flex-flow: row nowrap
    padding: 0 100px
  @include respond-to(xl)
    flex-flow: row nowrap
    padding: 0 100px
  &-header
    margin-bottom: 47px
    @include respond-to(xs)
      margin-bottom: 30px
    @include respond-to(s)
      margin-bottom: 30px
    @include respond-to(m)
      margin-bottom: 30px
    @include respond-to(l)
      margin-bottom: 47px
    @include respond-to(xl)
      margin-bottom: 50px

.main_left
  width: 50%
  height: 100%
  margin-right: 10px
  box-sizing: border-box
  flex-grow: 1
  display: -webkit-flex
  display: -moz-flex
  display: -ms-flex
  display: -o-flex
  display: flex
  flex-flow: row nowrap
  align-items: center
  justify-content: center
  @include respond-to(xs)
    width: auto
    margin-right: 0
  @include respond-to(s)
    width: auto
    margin-right: 0
  @include respond-to(m)
    width: auto
    margin-right: 0
  @include respond-to(l)
    width: 50%
    margin-right: 10px
  @include respond-to(xl)
    width: 50%
    margin-right: 10px

.epc_logo_big
  transition: transform 200ms ease-in
  &:hover
    transform: scale(1.15)
  @include respond-to(xs)
  @include respond-to(s)
  @include respond-to(m)
    width: 450px
    height: 139px
  @include respond-to(l)
    width: 400px
    height: 123px
  @include respond-to(xl)
    width: 560px
    height: 173px

.content_div
  width: 50%
  margin-left: 10px
  box-sizing: border-box
  flex-grow: 1
  display: -webkit-flex
  display: -moz-flex
  display: -ms-flex
  display: -o-flex
  display: flex
  flex-flow: column nowrap
  justify-content: center
  @include respond-to(xs)
    width: auto
    margin-left: 0
  @include respond-to(s)
    width: auto
    margin-left: 0
  @include respond-to(m)
    width: auto
    margin-left: 0
  @include respond-to(l)
    width: 50%
    margin-left: 10px
  @include respond-to(xl)
    width: 50%
    margin-left: 10px

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
  max-width: 610px
  @include respond-to(xs)
  @include respond-to(s)
  @include respond-to(m)
    max-width: 447px
  @include respond-to(l)
    max-width: 610px
  @include respond-to(xl)
    max-width: 850px
</style>
