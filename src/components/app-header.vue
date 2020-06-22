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
  @include respond-to(xs)
  @include respond-to(s)
  @include respond-to(m)
  @include respond-to(l)
  @include respond-to(xl)
.header_bottom
  display: -webkit-flex
  display: -moz-flex
  display: -ms-flex
  display: -o-flex
  display: flex
  flex-flow: row nowrap
  justify-content: center
  bottom: 0
  width: 100%
  background: #DAD7D7
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25)
  z-index: 1
  min-height: 10px
</style>
