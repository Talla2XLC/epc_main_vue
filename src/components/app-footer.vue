<template>
  <footer
    :class="{
      'text-body3': $mq === 'xl' || $mq === 'l',
      'text-body5': $mq === 'm',
      'text-body6': $mq === 's'
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
  @include respond-to(s)
    flex-flow: column nowrap
    padding: 12px
    min-height: 66px !important
    z-index: 1
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
    display: block
    position: relative
    &:hover:after
      content: ""
      width: 100%
      display: block
      border-bottom: 1px solid black
      position: absolute
      left: 0
      animation: lining 0.5s ease-in-out
  &-right
    text-align: right

@keyframes lining
  0%
    width: 0
  100%
    width: 100%

@media (max-height: 950px)
  footer
    min-height: 40px
</style>
