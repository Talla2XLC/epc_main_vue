<template>
  <div class="about">
    <EPCLogoFull />
  </div>
</template>

<script>
import EPCLogoFull from "@/assets/svg/epc-logo-full.svg";

export default {
  name: "About",
  components: {
    EPCLogoFull
  },
  methods: {
    selectPage() {
      this.$store.dispatch("selectPage", "about");
    }
  }
};
</script>

<style lang="sass">
.about
  display: -webkit-flex
  display: -moz-flex
  display: -ms-flex
  display: -o-flex
  display: flex
  flex-flow: column nowrap
  justify-content: center
  align-items: center
  height: 100%

.epc_logo_img
  cursor: pointer
  transition: transform 200ms ease-in
  z-index: 2
  max-width: 30vw
  &:hover
    transform: scale(1.15)
</style>
