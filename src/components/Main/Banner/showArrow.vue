<template>
  <div class="nupi-banner-show-arrowZone">
    <div class="nupi-banner-show-arrow arrow-8" ref="arrows" />
  </div>
</template>

<script>
export default {
  name: "showArrow"
};
</script>

<style scoped lang="sass">
.nupi-banner-show-arrowZone
  position: absolute
  width: 40px
  height: 40px
  bottom: 1rem
  left: 3rem
  cursor: pointer
  @include respond-to(s)
    top: 0
    right: 1.5rem
    left: auto
    width: 20px
    height: 20px
  @include respond-to(m)
    left: 1.5rem
  @include respond-to(l)
    left: 2rem
  @include respond-to(xl)
    left: 2.5rem

.arrow-8
  position: absolute
  bottom: 0
  right: 20%
  width: 20px
  height: 20px
  margin: 0
  transform: rotate(-270deg)
  @include respond-to(s)
    transform: rotate(-180deg)
    width: 10px
    height: 10px
  &:before
    content: ''
    position: absolute
    box-sizing: border-box
    width: 100%
    height: 100%
    border-left: 4px solid white
    border-bottom: 4px solid white
    transform: translate(5px, 52px) rotate(-45deg)
    animation: arrow-8 1.5s linear infinite
    @include respond-to(s)
      border-left: 2px solid white
      border-bottom: 2px solid white
      animation: arrow-8 1s linear infinite

@keyframes arrow-8
  0%
    opacity: 0
    transform: translate(-6px, -10px) rotate(-45deg)
  50%
    opacity: 1
    transform: translate(-6px, 0px) rotate(-45deg)
  100%
    opacity: 0
    transform: translate(-6px, 10px) rotate(-45deg)
</style>
