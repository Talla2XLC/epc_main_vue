<template>
  <header>
    <main-nav />
    <div class="header_bottom" />
  </header>
</template>

<script>
import mainNav from "@/components/main-nav";

export default {
  name: "app-header",
  components: {
    mainNav
  },
  methods: {}
};
</script>

<style lang="sass" scoped>
@import "@/sass/_media.sass"

header
  display: -webkit-flex
  display: -moz-flex
  display: -ms-flex
  display: -o-flex
  display: flex
  flex-flow: column nowrap
  align-items: center
  justify-content: center
  position: relative
  min-height: 8vh
  z-index: 1
  overflow: hidden
  @include respond-to(xs)
  @include respond-to(s)
  @include respond-to(m)
  @include respond-to(l)
    min-height: 8vh
  @include respond-to(xl)
    min-height: 10vh
.header_bottom
  display: -webkit-flex
  display: -moz-flex
  display: -ms-flex
  display: -o-flex
  display: flex
  flex-flow: row nowrap
  justify-content: center
  position: absolute
  bottom: 0
  width: 100%
  background: #c8c3c2
  -webkit-box-shadow: inset -3px -8px 10px -10px #000000, inset 0px 4px 4px -3px #000000
  box-shadow: inset -3px -8px 10px -10px #000000, inset 0px 4px 4px -3px #000000
  transition: min-height 300ms ease-in
  z-index: 1
  min-height: 0.5rem
.big_header_bottom
  @include respond-to(xs)
  @include respond-to(s)
  @include respond-to(m)
  @include respond-to(l)
    min-height: 8vh
  @include respond-to(xl)
    min-height: 10vh
</style>
