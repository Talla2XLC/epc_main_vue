<template>
  <footer>
    <div class="epc_copyright_div">
      <span class="copyright_span">© 2019 </span>
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
  min-height: 5vh
  background: #4f4f51
  position: relative
  display: -webkit-flex
  display: -moz-flex
  display: -ms-flex
  display: -o-flex
  display: flex
  flex-flow: row nowrap
  justify-content: space-between
  align-items: center
  font-family: "raleway-regular", "calibri", sans-serif
  font-size: 1vw
  line-height: 0.8rem
  padding: 0 5%

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
    padding: 0 10%
    font-size: 0.6vw

@media (min-width: 1850px)
  footer
    padding: 0 20%
</style>
