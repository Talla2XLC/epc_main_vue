<template>
  <div class="main_page">
    <div class="main_content">
      <div class="main_left" @mouseover="hideProductNav">
        <router-link
          :to="`/about`"
          class="epc_logo_div"
          @click.native="selectPage"
        >
          <EPCLogoFull />
        </router-link>
      </div>
      <div class="content_div">
        <div class="mission-txt">
          <h1 class="main-content-header text-h1">
            Технологии и качество на высшем уровне
          </h1>
          <p class="text-body2">
            Наша компания является официальным сервисным <br />
            и логистическим партнёром ряда европейских <br />
            производителей технологического оборудования,<br />
            таких как Nupi Industrie Italiane S.p.A.,<br />
            Scully Signal Company, Emco Wheaton GmbH,<br />
            Rotork Plc и Start Italiana s.r.l.
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
    switchMainMenu() {
      if (this.mainMenuVisible) {
        this.$store.dispatch("hideMainMenu");
      } else {
        this.$store.dispatch("showMainMenu");
      }
    },
    hideProductNav() {
      this.$store.dispatch("hideProductNav");
    },
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
  display: -webkit-flex
  display: -moz-flex
  display: -ms-flex
  display: -o-flex
  display: flex
  flex-flow: row nowrap
  align-items: center
  justify-content: center

.epc_logo_img
  cursor: pointer
  transition: transform 200ms ease-in
  margin-right: 5rem
  max-width: 30vw
  &:hover
    transform: scale(1.15)

.content_div
  width: 50%
  height: 100%
  display: -webkit-flex
  display: -moz-flex
  display: -ms-flex
  display: -o-flex
  display: flex
  box-sizing: border-box
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
