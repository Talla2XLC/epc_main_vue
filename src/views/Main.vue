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
  font-family: "raleway-regular", "calibri", sans-serif
  text-align: justify
  box-sizing: border-box
  line-height: 1.5rem

@media (min-width: 900px)
  .main_content
    padding: 0 10%

@media (min-width: 1850px)
  .main_content
    padding: 0 20%
</style>
