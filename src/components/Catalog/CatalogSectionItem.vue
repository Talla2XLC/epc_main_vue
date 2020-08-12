<template>
  <li class="catalog-section-content-list-item" ref="section">
    <div class="catalog-section-content-list-item-dot" />
    <span
      :class="{
        'text-body2': $mq === 'xl' || $mq === 'l',
        'text-body4': $mq === 'm',
        'text-body6': $mq === 's'
      }"
      @click="selectHandler(sectionName, item.name)"
      v-html="item.fullName"
    />
  </li>
</template>

<script>
export default {
  name: "CatalogSectionItem",
  props: ["sectionName", "item", "selectHandler"]
};
</script>

<style scoped lang="sass">
.catalog-section-content-list-item
  position: relative
  display: flex
  flex-flow: row nowrap
  align-items: center
  opacity: 1
  max-height: 36px
  margin-bottom: 20px
  z-index: 1
  @include respond-to(s)
    margin-bottom: 10px
    height: auto
  @include respond-to(m)
    height: 26px
    margin-bottom: 14px
  @include respond-to(l)
    height: 32px
    margin-bottom: 20px
  @include respond-to(xl)
    height: 32px
    margin-bottom: 20px
  &:last-of-type
    margin-bottom: 0
  &-dot
    position: absolute
    width: 20px
    height: 20px
    background: #940000
    border-radius: 50%
    left: -72px
    @include respond-to(s)
      width: 9px
      height: 9px
      left: -23px
  >span
    cursor: pointer
    position: relative
    z-index: 1
    &:hover:after
      content: ""
      width: 100%
      display: block
      border-bottom: 1px solid black
      position: absolute
      left: 0
      animation: lining 0.5s ease-in-out

@keyframes lining
  0%
    width: 0
  100%
    width: 100%
</style>
