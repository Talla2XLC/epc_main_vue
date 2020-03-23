<template>
  <div class="main_page">
    <div class="main_content">
      <div class="main_left" @mouseover="hideProductNav">
        <router-link
          :to="`/about`"
          class="epc_logo_div"
          @click.native="selectPage"
        >
          <img class="epc_logo_img" src="@/assets/logo.png" />
        </router-link>
      </div>
      <div class="content_div">
        <div class="mission-txt">
          <p>
            Наша компания является официальным сервисным и логистическим
            партнёром ряда европейских производителей технологичесокго
            оборудования, таких как Nupi Industrie Italiane S.p.A., Scully
            Signal Company, Emco Wheaton GmbH, Rotork plc и Start Italiana
            s.r.l.
          </p>
          <p>
            Наша основная задача - предоставить российским клиентам европейское
            технологическое оборудование по ценам производителей в совокупности
            с высоким уровнем технической поддержки.
          </p>
        </div>
        <nupi-banner />
      </div>
    </div>
    <partners />
  </div>
</template>

<script>
import partners from "@/components/partners";
import nupiBanner from "@/components/Main/nupi-banner";

export default {
  name: "Main",
  metaInfo: {
    title: "EPC Main"
  },
  components: {
    partners,
    nupiBanner
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
@import "@/sass/_media.sass"

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
  padding: 0 5%
  box-sizing: border-box
  position: relative
  z-index: 2
  @include respond-to(xs)
    padding: 0 5%
  @include respond-to(s)
    padding: 0 5%
  @include respond-to(m)
    padding: 0 10%
  @include respond-to(l)
    padding: 0 10%
  @include respond-to(xl)
    padding: 0 20%

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
  line-height: 1.5rem
  box-sizing: border-box
  display: -webkit-flex
  display: -moz-flex
  display: -ms-flex
  display: -o-flex
  display: flex
  flex-flow: column nowrap
  justify-content: space-around
  height: 50%
  font-family: Ubuntu
  text-align: justify
  padding: 0 3rem
  @include respond-to(xs)
    font-size: 8px
    line-height: 1rem
    padding: 0 0.2rem
  @include respond-to(s)
    font-size: 12px
    line-height: 1rem
    padding: 0 1rem
  @include respond-to(m)
    font-size: 14px
    line-height: 1.5rem
    padding: 0 1rem
  @include respond-to(l)
    font-size: 16px
    line-height: 1.5rem
    padding: 0 2rem
  @include respond-to(xl)
    font-size: 20px
    line-height: 1.5rem
    padding: 0 3rem
</style>
