<template>
  <header>
    <main-nav @closeConfidential="$emit('closeConfidential')" />
    <div class="header_bottom" />
  </header>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import mainNav from "@/components/main-nav";

@Component({
  components: {
    mainNav
  }
})
export default class appHeader extends Vue {
  name: string = "app-header";
}
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
  z-index: 8
  background: #fff
  position: sticky
  top: 0
  width: 100%
  @include respond-to(s)
    position: fixed
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
  @include respond-to(s)
    min-height: 6px
  @include respond-to(m)
    min-height: 10px
  @include respond-to(l)
    min-height: 10px
  @include respond-to(xl)
    min-height: 10px
</style>
