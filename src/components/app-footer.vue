<template>
  <footer
    :class="{
      'text-body3': $mq === 'xl' || $mq === 'l',
      'text-body5': $mq === 'm' || $mq === 's' || $mq === 'xs'
    }"
  >
    <span
      class="footer_span footer_span-confidential"
      @click="openConfidential"
    >
      Политика конфиденциальности
    </span>
    <span class="footer_span footer_span-right">
      © {{ new Date().getFullYear() }} ООО "ЕРС"
    </span>
  </footer>
</template>

<script>
export default {
  name: "app-footer",
  props: ["openConfidential"],
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
  padding: 0 100px
  @include respond-to(xs)
    padding: 0 40px
  @include respond-to(s)
    padding: 0 40px
  @include respond-to(m)
    padding: 0 40px
  @include respond-to(l)
    padding: 0 100px
  @include respond-to(xl)
    padding: 0 100px

.footer_span
  color: #000000
  text-align: center
  &-confidential
    text-align: left
    cursor: pointer
  &-right
    text-align: right

@media (max-height: 950px)
  footer
    min-height: 40px
</style>
