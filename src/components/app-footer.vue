<template>
  <footer class="text-body3">
    <span class="footer_span footer_span-left"
      >Политика конфиденциальности</span
    >
    <span class="footer_span footer_span-center"
      >© {{ new Date().getFullYear() }}
    </span>
    <span class="footer_span footer_span-right">Все права защищены</span>
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
  padding: 0 100px

.footer_span
  color: #000000
  text-align: center
  width: 30%
  &-left
    text-align: left
  &-right
    text-align: right

@media (min-width: 1300px)
  footer
    height: 60px
    padding: 0 100px

@media (min-width: 1600px)

</style>
