<template>
  <div class="about">
    <img
      class="epc_logo_img"
      src="@/assets/logo.png"
      @click.native="selectPage"
    />
  </div>
</template>

<script>
export default {
  name: "About",
  components: {},
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
