<template>
  <footer>
    <span class="copyright_span">© 2019 </span>
    <router-link
      :to="`/`"
      class="copyright_span copyright_epc"
      @click.native="selectPage"
      >epc.</router-link
    >
    <span class="copyright_span rights_reserved">Все права защищены</span>
    <span class="copyright_span rights_reserved"
      >Политика конфиденциальности</span
    >
  </footer>
</template>

<script>
export default {
  name: "app-footer",
  methods: {
    selectPage() {
      this.$store.dispatch("selectPage", "");
    }
  }
};
</script>

<style lang="sass" scoped>
footer
  min-height: 10vh
  background: #4f4f51
  position: relative
  display: -webkit-flex
  display: -moz-flex
  display: -ms-flex
  display: -o-flex
  display: flex
  flex-flow: row nowrap
  justify-content: center
  align-items: center

.copyright_span
  line-height: 1rem
  padding: 0 0.5rem 0 0.7rem
  color: #c0c0c0
  text-transform: uppercase

.copyright_epc
  color: white
  text-decoration: none

.rights_reserved
  position: relative

.rights_reserved:before
  content: ""
  position: absolute
  top: 40%
  left: 0
  width: 3px
  height: 3px
  -webkit-border-radius: 100%
  border-radius: 100%
  background: #c0c0c0
</style>
