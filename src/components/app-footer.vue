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
  min-height: 40px
  background: #4f4f51
  display: -webkit-flex
  display: -moz-flex
  display: -ms-flex
  display: -o-flex
  display: flex
  flex-flow: row nowrap
  justify-content: space-between
  box-sizing: border-box
  align-items: center
  padding: 0 205px
  @include respond-to(xs)
  @include respond-to(s)
  @include respond-to(m)
  @include respond-to(l)
    padding: 0 100px
  @include respond-to(xl)
    padding: 0 245px

.footer_span
  color: #000000
  text-align: center
  width: 30%
  &-left
    text-align: left
  &-right
    text-align: right

@media (max-height: 950px)
  footer
    min-height: 40px
</style>
