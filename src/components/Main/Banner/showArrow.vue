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
.arrow-8
  position: absolute
  width: 20px
  height: 20px
  margin: 0
  bottom: 1rem
  left: 3rem
  transform: rotate(-270deg)
  cursor: pointer
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

@keyframes arrow-8
  0%
    opacity: 0
    transform: translate(-6px, -10px) rotate(-45deg)
  50%
    opacity: 1
    border-left: 4px solid white
    border-bottom: 4px solid white
    transform: translate(-6px, 0px) rotate(-45deg)
  100%
    opacity: 0
    transform: translate(-6px, 10px) rotate(-45deg)
</style>
