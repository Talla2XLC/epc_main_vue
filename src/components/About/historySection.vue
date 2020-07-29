<template>
  <div class="about-history-section">
    <div class="about-history-section-decor" v-if="this.$mq !== 's'">
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
      class="about-history-section-year "
      :class="{
        red: isLast,
        'text-body1': $mq === 'xl' || $mq === 'l',
        'text-body3': $mq === 'm',
        'text-body6': $mq === 's'
      }"
    >
      <slot name="year"></slot>
    </span>
    <p
      class="about-history-section-txt"
      :class="{
        'text-body3': $mq === 'xl' || $mq === 'l',
        'text-body5': $mq === 'm',
        'text-body6': $mq === 's'
      }"
    >
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
  margin-left: 40px
  box-sizing: border-box
  @include respond-to(s)
    margin-left: 0
    padding: 0 12px
  @include respond-to(m)
    margin-left: 40px
  @include respond-to(l)
    margin-left: 40px
  @include respond-to(xl)
    margin-left: 50px
  &-decor
    position: relative
    width: 20px
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
    @include respond-to(s)
      margin-left: 0
      width: 64px
      color: #940000
    @include respond-to(m)
      width: 98px
      margin-left: 56px
    @include respond-to(l)
      width: 116px
      margin-left: 53px
    @include respond-to(xl)
      width: 116px
      margin-left: 74px

  &-txt
    display: block
    padding-bottom: 30px
    box-sizing: border-box
    margin-left: 94px
    width: 715px
    @include respond-to(s)
      margin-left: 10px
      width: 222px
      padding-bottom: 6px
    @include respond-to(m)
      margin-left: 20px
      width: 452px
      padding-bottom: 14px
    @include respond-to(l)
      margin-left: 94px
      width: 715px
      padding-bottom: 30px
    @include respond-to(xl)
      margin-left: 28px
      width: 848px
      padding-bottom: 30px

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
