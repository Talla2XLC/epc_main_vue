<template>
  <div
    class="catalog-section"
    :class="{ 'catalog-section-last': isLast }"
    :ref="name + '-section'"
  >
    <div class="catalog-section-content">
      <div class="catalog-section-content-header" @click="toggleList">
        <h3 class="text-h3" ref="productHeader">{{ fullName }}</h3>
        <div class="list-arrow" :class="{ rotated: isOpened }" />
      </div>
      <transition-group
        name="rise"
        tag="ul"
        class="catalog-section-content-list"
      >
        <li
          v-for="(item, index) in items"
          :key="item.name"
          :data-index="index"
          class="catalog-section-content-list-item"
          v-if="isOpened"
        >
          <div class="catalog-section-content-list-item-dot" />
          <span class="text-body2"> {{ item.desc }} </span>
        </li>
        <div
          class="catalog-section-content-list-line"
          v-if="isOpened"
          :key="name"
          :style="{ width: this.$refs.productHeader.clientWidth + 60 + 'px' }"
        />
      </transition-group>
    </div>
    <img
      :src="require(`@/assets/images/Catalog/${name}_l.png`)"
      class="catalog-section-img-l"
      :alt="'catalog' + ind + '_left_pic'"
    />
    <div class="catalog-section-img-filter-l" />
    <img
      :src="require(`@/assets/images/Catalog/${name}_r.png`)"
      class="catalog-section-img-r"
      :alt="'catalog' + ind + 'right_pic'"
    />
    <div class="catalog-section-img-filter-r" />
  </div>
</template>

<script>
export default {
  name: "CatalogSection",
  props: ["name", "fullName", "items", "isLast", "ind"],
  data() {
    return {
      isOpened: false
    };
  },
  computed: {
    choosedProduct() {
      if (this.$route.params.product) {
        return this.$route.params.product;
      } else {
        return null;
      }
    }
  },
  methods: {
    toggleList() {
      this.isOpened = !this.isOpened;
    }
  },
  mounted() {
    if (this.choosedProduct == this.name) {
      this.isOpened = true;
      this.$refs[this.name + "-section"].scrollIntoView({
        alignToTop: true,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style scoped lang="sass">
.catalog-section
  padding: 100px 155px
  box-sizing: border-box
  background: linear-gradient(83.36deg, #F0EFEF 49.5%, rgba(240, 239, 239, 0) 97.5%)
  margin-bottom: 40px
  position: relative
  overflow: hidden
  &-last
    margin-bottom: 0
  &-content
    position: relative
    z-index: 5
    display: flex
    flex-flow: column nowrap
    &-header
      position: relative
      display: flex
      flex-flow: row nowrap
      align-items: center
      cursor: pointer
      >h3
        margin-right: 20px
    &-list
      position: relative
      &-item
        position: relative
        display: flex
        flex-flow: row nowrap
        align-items: center
        opacity: 1
        height: 32px
        margin-bottom: 20px
        margin-top: 50px
        &:last-of-type
          margin-bottom: 0
        &:not(:first-of-type)
          margin-top: 0
        &-dot
          position: absolute
          width: 20px
          height: 20px
          background: #940000
          border-radius: 50%
          left: -72px
      &-line
        position: absolute
        border-left: 2px solid #940000
        border-top: 2px solid #940000
        height: calc(100% - 20px)
        top: 0
        left: -63px
  >img
    position: absolute
    top: 0
    object-fit: contain
  &-img
    &-l
      left: 0
      z-index: 2
    &-r
      right: 0
      z-index: 0
    &-filter-l
      background: linear-gradient(270.57deg, #F0EFEF 77.08%, rgba(196, 196, 196, 0) 209.13%)
      position: absolute
      top: 0
      left: 0
      width: 50%
      height: 100%
      z-index: 3
    &-filter-r
      position: absolute
      top: 0
      right: 0
      width: 100%
      height: 100%
      z-index: 1
      background: linear-gradient(83.36deg, #F0EFEF 49.5%, rgba(240, 239, 239, 0) 97.5%)

.list-arrow
  width: 8px
  height: 8px
  border-left: 2px solid #940000
  border-bottom: 2px solid #940000
  position: relative
  z-index: 5
  bottom: 2px
  transform: rotate(-45deg)

.rotated
  transform: rotate(135deg)
  top: 2px
  border-left: 2px solid #4F4F51
  border-bottom: 2px solid #4F4F51

.rise-enter-active, .rise-leave-active
  transition: all 1s

.rise-enter, .rise-leave-to
  opacity: 0
  height: 0
  margin: 0
</style>
