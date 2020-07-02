<template>
  <div class="about-projects-section">
    <div class="about-projects-section-decor">
      <div class="about-projects-section-decor-dot" />
    </div>
    <span class="about-projects-section-year text-body1">
      <slot name="year"></slot>
    </span>
    <p class="about-projects-section-txt text-body3">
      <slot name="text"></slot>
    </p>
  </div>
</template>

<script>
export default {
  name: "projectsSection"
};
</script>

<style scoped lang="sass">
.about-projects-section
  display: flex
  flex-flow: row nowrap
  align-items: stretch
  position: relative
  &-decor
    position: relative
    width: 20px
    margin-left: 16px
    &-dot
      width: 20px
      height: 20px
      top: 8px
      left: 0
      background: #940000
      border-radius: 50%
      position: relative
      z-index: 2

    &-line
      position: absolute
      top: 11px
      height: 100%
      box-sizing: border-box
      border-left: 2px solid #DAD7D7
      left: 9px
      z-index: 0

  &-year
    display: block
    width: 116px
    margin-left: 53px
    box-sizing: border-box

  &-txt
    display: block
    padding-bottom: 30px
    box-sizing: border-box
    margin-left: 94px
</style>
