<template>
  <div class="about-projects-section">
    <div class="about-projects-section-decor">
      <div class="about-projects-section-decor-dot" />
    </div>
    <span
      class="about-projects-section-year"
      :class="{
        'text-body1': $mq === 'xl' || $mq === 'l',
        'text-body3': $mq === 'm'
      }"
    >
      <slot name="year"></slot>
    </span>
    <p
      class="about-projects-section-txt"
      :class="{
        'text-body3': $mq === 'xl' || $mq === 'l',
        'text-body5': $mq === 'm'
      }"
    >
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
  @include respond-to(xs)
  @include respond-to(s)
  @include respond-to(m)
    margin-left: 26px
  @include respond-to(l)
    margin-left: 42px
  @include respond-to(xl)
    margin-left: 49px
  &-decor
    position: relative
    width: 20px
    @include respond-to(xs)
    @include respond-to(s)
    @include respond-to(m)
    @include respond-to(l)
    @include respond-to(xl)
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
    width: 85px
    margin-left: 53px
    box-sizing: border-box
    @include respond-to(xs)
    @include respond-to(s)
    @include respond-to(m)
      width: 97px
      margin-left: 55px
    @include respond-to(l)
      width: 85px
      margin-left: 53px
    @include respond-to(xl)
      width: 85px
      margin-left: 73px

  &-txt
    display: block
    padding-bottom: 30px
    box-sizing: border-box
    margin-left: 126px
    width: 712px
    @include respond-to(xs)
    @include respond-to(s)
    @include respond-to(m)
      margin-left: 22px
      width: 451px
    @include respond-to(l)
      margin-left: 126px
      width: 712px
    @include respond-to(xl)
      margin-left: 61px
      width: 848px
</style>
