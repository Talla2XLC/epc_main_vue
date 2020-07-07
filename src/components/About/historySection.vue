<template>
  <div class="about-history-section">
    <div class="about-history-section-decor">
      <div
        class="about-history-section-decor-dot"
        :class="{ bigDot: isLast }"
      />
      <div
        class="about-history-section-decor-line"
        :class="{ hidden: isLast }"
      />
    </div>
    <span
      class="about-history-section-year text-body1"
      :class="{ red: isLast }"
    >
      <slot name="year"></slot>
    </span>
    <p class="about-history-section-txt text-body3">
      <slot name="text"></slot>
    </p>
  </div>
</template>

<script>
export default {
  name: "history-section",
  props: ["isLast"]
};
</script>

<style scoped lang="sass">
.about-history-section
  display: flex
  flex-flow: row nowrap
  align-items: stretch
  position: relative
  &-decor
    position: relative
    width: 20px
    margin-left: 16px
    @include respond-to(xs)
    @include respond-to(s)
    @include respond-to(m)
    @include respond-to(l)
      margin-left: 40px
    @include respond-to(xl)
      margin-left: 0
    &-dot
      width: 14px
      height: 14px
      background: #4F4F51
      border-radius: 50%
      position: relative
      top: 11px
      left: 3px
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
    @include respond-to(xs)
    @include respond-to(s)
    @include respond-to(m)
    @include respond-to(l)
      margin-left: 53px
    @include respond-to(xl)
      margin-left: 74px

  &-txt
    display: block
    padding-bottom: 30px
    box-sizing: border-box
    margin-left: 94px
    @include respond-to(xs)
    @include respond-to(s)
    @include respond-to(m)
    @include respond-to(l)
      margin-left: 94px
      width: 715px
    @include respond-to(xl)
      margin-left: 28px
      width: 848px

.bigDot
  width: 20px
  height: 20px
  top: 8px
  left: 0

.red
  color: #EC001D

.hidden
  display: none
</style>
