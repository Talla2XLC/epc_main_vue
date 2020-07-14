<template>
  <div
    class="catalog-section"
    :class="{ 'catalog-section-last': isLast }"
    :ref="name + '-section'"
  >
    <div class="catalog-section-content">
      <div class="catalog-section-content-header" @click="toggleList">
        <h3
          ref="productHeader"
          :class="{
            'text-h3': $mq === 'xl' || $mq === 'l',
            'text-h4': $mq === 'm'
          }"
        >
          {{ fullName }}
        </h3>
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
          <span
            :class="{
              'text-body2': $mq === 'xl' || $mq === 'l',
              'text-body4': $mq === 'm'
            }"
            @click="selectHandler(name, item.name)"
          >
            {{ item.fullName }}
          </span>
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
      :src="this.$mq === 'm' && this.name === 'Scully' ? require(`@/assets/images/Catalog/${name.toLowerCase()}_l_small.png`) : require(`@/assets/images/Catalog/${name.toLowerCase()}_l.png`)"
      class="catalog-section-img-l"
      :alt="'catalog' + ind + '_left_pic'"
    />
    <div class="catalog-section-img-filter-l" />
    <img
      :src="require(`@/assets/images/Catalog/${name.toLowerCase()}_r.png`)"
      class="catalog-section-img-r"
      :style="imgPosition"
      :alt="'catalog' + ind + 'right_pic'"
    />
    <div
      class="catalog-section-img-filter-r"
      :class="this.$mq === 'm' && this.name === 'Emco' ? 'emco-m-filter' : ''"
    />
  </div>
</template>

<script>
export default {
  name: "CatalogSection",
  props: ["name", "fullName", "items", "imagePosition", "isLast", "ind", "selectHandler"],
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
    },
    imgPosition() {
      switch (this.$mq) {
        case "l":
          return {
            objectPosition:
              this.imagePosition.l.right +
              "px " +
              this.imagePosition.l.top +
              "px"
          };

        case "m":
          if (this.name === "Emco") {
            return {
              objectPosition:
                this.imagePosition.m.right +
                "px " +
                this.imagePosition.m.top +
                "px",

            };
          } else {
            return {
              objectPosition:
                this.imagePosition.m.right +
                "px " +
                this.imagePosition.m.top +
                "px"
            };
          }

        case "s":
        case "xs":
          return {
            objectPosition:
              this.imagePosition.s.right +
              "px " +
              this.imagePosition.s.top +
              "px"
          };

        default:
          return {
            top: 0,
            right: 0
          };
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
  padding: 100px 0 100px 155px
  box-sizing: border-box
  margin-bottom: 40px
  position: relative
  overflow: hidden
  @include respond-to(xs)
  @include respond-to(s)
  @include respond-to(m)
    padding: 70px 0 70px 135px
  @include respond-to(l)
    padding: 100px 0 100px 155px
  @include respond-to(xl)
    padding: 100px 0 100px 290px
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
        @include respond-to(xs)
        @include respond-to(s)
        @include respond-to(m)
          height: 26px
          margin-top: 30px
          margin-bottom: 14px
        @include respond-to(l)
          height: 32px
          margin-top: 50px
          margin-bottom: 20px
        @include respond-to(xl)
          height: 32px
          margin-top: 50px
          margin-bottom: 20px
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
        >span
          cursor: pointer
          position: relative
          z-index: 1
      &-line
        position: absolute
        border-left: 2px solid #940000
        border-top: 2px solid #940000
        height: calc(100% - 20px)
        top: 0
        left: -63px
        z-index: 0
  >img
    position: absolute
    top: 0
    object-fit: cover
  &-img
    &-l
      max-width: 50%
      height: initial
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
      @include respond-to(xs)
      @include respond-to(s)
      @include respond-to(m)
        background: linear-gradient(85.02deg, #F0EFEF 65.15%, rgba(240, 239, 239, 0) 97.5%)
      @include respond-to(l)
        background: linear-gradient(83.36deg, #F0EFEF 49.5%, rgba(240, 239, 239, 0) 97.5%)
      @include respond-to(xl)
        background: linear-gradient(81.54deg, #F0EFEF 49.5%, rgba(240, 239, 239, 0) 97.5%)

.emco-m-filter
  background: linear-gradient(87.79deg, #F0EFEF 49.5%, rgba(240, 239, 239, 0) 97.5%)

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
