<template>
  <div
    class="catalog-section"
    :class="{ 'catalog-section-last': isLast }"
    :ref="name + '-section'"
    v-touch:swipe.bottom="openList"
    v-touch:swipe.top="closeList"
  >
    <div class="catalog-section-content">
      <div class="catalog-section-content-header" @click="toggleList">
        <h3
          ref="productHeader"
          :class="{
            'text-h3': $mq === 'xl' || $mq === 'l',
            'text-h4': $mq === 'm',
            'text-h5': $mq === 's'
          }"
        >
          {{ fullName }}
        </h3>
        <div class="list-arrow-zone">
          <div class="list-arrow" :class="{ rotated: isOpened }" />
        </div>
      </div>
      <transition name="grow" @after-enter="setLineHeight">
        <ul
          class="catalog-section-content-list"
          ref="catalogSectionList"
          v-show="isOpened"
        >
          <transition-group name="rise">
            <CatalogSectionItem
              v-for="item in items"
              :key="item.name"
              :item="item"
              :sectionName="name"
              :selectHandler="selectHandler"
              v-show="isOpened"
              ref="listItem"
            />
          </transition-group>
          <transition name="lineMoving">
            <div
              class="catalog-section-content-list-line"
              v-show="isOpened"
              :style="
                this.$mq !== 's'
                  ? { width: this.$refs.productHeader ? this.$refs.productHeader.clientWidth + 60 + 'px' : 'auto' }
                  : { height: 'calc(100% - ' + this.lineHeight / 2 + 'px)' }
              "
            />
          </transition>
        </ul>
      </transition>
    </div>
    <img
      :src="
        this.$mq === 'm' && this.name === 'Scully'
          ? require(`@/assets/images/Catalog/${name.toLowerCase()}_l_small.png`)
          : require(`@/assets/images/Catalog/${name.toLowerCase()}_l.png`)
      "
      class="catalog-section-img-l"
      :alt="'catalog' + ind + '_left_pic'"
      v-if="this.$mq !== 's'"
    />
    <div class="catalog-section-img-filter-l" v-if="this.$mq !== 's'" />
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
import CatalogSectionItem from "./CatalogSectionItem";

export default {
  name: "CatalogSection",
  components: { CatalogSectionItem },
  props: [
    "name",
    "fullName",
    "items",
    "imagePosition",
    "isLast",
    "ind",
    "selectHandler"
  ],
  data() {
    return {
      isOpened: false,
      lineHeight: 0
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
                "px"
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
    },
    openList() {
      this.isOpened = true;
    },
    closeList() {
      this.isOpened = false;
    },

    // js-hooks animations
    setLineHeight() {
      if (this.$refs.listItem) {
        this.lineHeight = this.$refs.listItem[this.$refs.listItem.length - 1]._vnode.elm
          .clientHeight;
      }
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
  @include respond-to(s)
    padding: 20px 12px 20px 26px
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
      @include respond-to(s)
        justify-content: space-between
      >h3
        margin-right: 20px
        @include respond-to(s)
          margin-right: 10px
          width: 248px
    &-list
      position: relative
      padding-top: 50px
      height: 100%
      @include respond-to(s)
        padding-left: 20px
        padding-top: 14px
      @include respond-to(m)
        padding-top: 30px
      @include respond-to(l)
        padding-top: 50px
      @include respond-to(xl)
        padding-top: 50px
      &-line
        position: absolute
        border-left: 2px solid #940000
        border-top: 2px solid #940000
        height: calc(100% - 20px)
        top: 0
        left: -63px
        z-index: 0
        @include respond-to(s)
          left: 0
          width: 248px
          height: 100%
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
      @include respond-to(s)
        background: linear-gradient(90.79deg, #F0EFEF 74.84%, rgba(240, 239, 239, 0) 151.69%)
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
  bottom: 2px
  transform: rotate(-45deg)
  &-zone
    width: 24px
    height: 24px
    position: relative
    z-index: 5
    display: flex
    flex-flow: row nowrap
    justify-content: center
    align-items: center
    @include respond-to(s)
      align-self: flex-end
      bottom: -4px

.rotated
  transform: rotate(135deg)
  top: 2px
  border-left: 2px solid #4F4F51
  border-bottom: 2px solid #4F4F51

/* Animations */
.grow-enter-active, .grow-leave-active
  transition: all 1s
.grow-enter, .grow-leave-to
  height: 0
  padding-top: 0

.rise-enter-active, .rise-leave-active
  transition: all 1s
.rise-enter, .rise-leave-to
  opacity: 0
  max-height: 0
  margin: 0

.lineMoving-enter-active, .lineMoving-leave-active
  transition: all 1s
  @include respond-to(s)
    transition: all 1.8s
.lineMoving-enter, .lineMoving-leave-to
  height: 0 !important
</style>
