<template>
  <footer>
    <div class="epc_copyright_div">
      <span class="copyright_span">© {{ new Date().getFullYear() }} </span>
      <router-link
        :to="`/`"
        class="copyright_span copyright_epc"
        @click.native="selectPage"
      >
        epc&nbsp;llc
      </router-link>
    </div>
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
  height: 60px
  background: #4f4f51
  position: relative
  display: -webkit-flex
  display: -moz-flex
  display: -ms-flex
  display: -o-flex
  display: flex
  flex-flow: row nowrap
  justify-content: space-between
  box-sizing: border-box
  align-items: center
  +text-h1()
  padding: 16px 100px

.epc_copyright_div
  display: -webkit-flex
  display: -moz-flex
  display: -ms-flex
  display: -o-flex
  display: flex
  flex-flow: row nowrap
  justify-content: center
  flex-grow: 1

.copyright_span
  color: #c0c0c0
  text-transform: uppercase
  text-align: center
  &:first-child
    padding: 0

.copyright_epc
  color: white
  text-decoration: none
  margin-left: 20%
  &:hover
    color: #ec021c

.rights_reserved
  position: relative
  flex-grow: 1

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

@media (min-width: 900px)
  footer
    height: 60px
    padding: 16px 100px

@media (min-width: 1850px)
  footer
</style>
