<template>
  <div
    class="partners-view-section"
    :class="{ 'partners-view-section-last': isLast }"
    :ref="producer.name + '-section'"
  >
    <div class="partners-view-section-content">
      <h3
        ref="productHeader"
        :class="{
          'partners-view-section-content-header': true,
          'text-h3': $mq === 'xl' || $mq === 'l',
          'text-h4': $mq === 'm',
          'text-h5': $mq === 's'
        }"
        v-html="producer.fullName"
      />
      <div
        :class="{
          'partners-view-section-content-description': true,
          'text-body2': $mq === 'xl' || $mq === 'l',
          'text-body4': $mq === 'm',
          'text-body6': $mq === 's'
        }"
        v-html="producer.partnerDescription"
      />
      <h4
        class="partners-view-section-content-list-header"
        :class="{ 'text-caption2': $mq === 's' }"
        v-if="producer.name !== 'PlugMe'"
        v-html="'Продукция'"
      />
      <div
        class="partners-view-section-content-list-wrapper"
        v-if="producer.name !== 'PlugMe'"
      >
        <ul
          class="partners-view-section-content-list"
          ref="partnersViewSectionList"
          v-show="isOpened"
        >
          <PartnerSectionItem
            v-for="item in producer.products"
            :key="item.name"
            :item="item"
            :sectionName="producer.name"
            :selectHandler="selectHandler"
            v-show="isOpened"
            ref="listItem"
            @hook:mounted="calculateLineHeight"
          />
        </ul>
        <div
          ref="partnersViewSectionListLine"
          class="partners-view-section-content-list-line"
        />
      </div>
      <div class="partners-view-section-markets-wrapper" v-else>
        <AppStoreSVG
          class="market-svg appStore-svg"
          @click="
            redirectTo(
              `https://apps.apple.com/ru/app/plugmenow/id1541521419?ign-mpt=uo%3D4`
            )
          "
        />
        <GooglePlay
          class="market-svg googlePlay-svg"
          @click="
            redirectTo(
              `https://play.google.com/store/apps/details?id=com.plugme`
            )
          "
        />
      </div>
    </div>
    <div
      :class="[
        'partners-view-section-img-filter-r',
        `partners-view-section-img-filter-r-${this.producer.name}`
      ]"
    />
    <img
      :src="imgSrc || defaultImgSrc"
      class="partners-view-section-img-r"
      :style="imgStyle"
      :alt="'partners_' + ind + '_right_pic'"
    />
  </div>
</template>

<script>
import PartnerSectionItem from "./PartnersSectionItem";
import AppStoreSVG from "@/assets/svg/AppStore.svg";
import GooglePlay from "@/assets/svg/GooglePlay.svg";

export default {
  name: "PartnersSection",
  components: { PartnerSectionItem, AppStoreSVG, GooglePlay },
  props: ["producer", "isLast", "ind", "selectHandler"],
  data() {
    return {
      isOpened: true,
      lineHeight: 0,
      defaultImgSrc: require(`@/assets/images/Partners/${this.producer.name.toLowerCase()}_r.png`)
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
    imgStyle() {
      let imgStyle = {};
      switch (this.$mq) {
        case "xl":
          if (this.producer.styles.xl.imagePosition) {
            imgStyle.objectPosition =
              this.producer.styles.xl.imagePosition.right +
              "px " +
              this.producer.styles.xl.imagePosition.top +
              "px";
          }
          if (this.producer.styles.xl.scale) {
            imgStyle.maxWidth = this.producer.styles.xl.scale.width + "px";
            imgStyle.maxHeight = this.producer.styles.xl.scale.width + "px";
          }
          break;

        case "l":
          if (this.producer.styles.l.imagePosition) {
            imgStyle.objectPosition =
              this.producer.styles.l.imagePosition.right +
              "px " +
              this.producer.styles.l.imagePosition.top +
              "px";
          }
          if (this.producer.styles.l.scale) {
            imgStyle.maxWidth = this.producer.styles.l.scale.width + "px";
            imgStyle.maxHeight = this.producer.styles.l.scale.width + "px";
          }
          break;

        case "m":
          if (this.producer.styles.m.imagePosition) {
            imgStyle.objectPosition =
              this.producer.styles.m.imagePosition.right +
              "px " +
              this.producer.styles.m.imagePosition.top +
              "px";
          }
          if (this.producer.styles.m.scale) {
            imgStyle.maxWidth = this.producer.styles.m.scale.width + "px";
            imgStyle.maxHeight = this.producer.styles.m.scale.width + "px";
          }
          break;

        case "s":
          if (this.producer.styles.s.imagePosition) {
            imgStyle.objectPosition =
              this.producer.styles.s.imagePosition.right +
              "px " +
              this.producer.styles.s.imagePosition.top +
              "px";
          }
          if (this.producer.styles.s.scale) {
            imgStyle.maxWidth = this.producer.styles.s.scale.width;
            imgStyle.maxHeight = this.producer.styles.s.scale.height;
          }
          break;

        default:
          break;
      }

      return imgStyle;
    },
    imgSrc() {
      switch (this.$mq) {
        case "xl":
          if (this.producer.styles.xl.imageSrc) {
            return this.producer.styles.xl.imageSrc;
          }
          break;
        case "l":
          if (this.producer.styles.l.imageSrc) {
            return this.producer.styles.l.imageSrc;
          }
          break;
        case "m":
          if (this.producer.styles.m.imageSrc) {
            return this.producer.styles.m.imageSrc;
          }
          break;
        case "s":
          if (this.producer.styles.s.imageSrc) {
            return this.producer.styles.s.imageSrc;
          }
          break;
        default:
          break;
      }

      return require(`@/assets/images/Partners/${this.producer.name.toLowerCase()}_r.png`);
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

    setLineHeight(height) {
      this.$refs.partnersViewSectionListLine.style.height = height + "px";
    },
    redirectTo(url) {
      window.location = url;
    },
    calculateLineHeight() {
      if (!this.$refs.partnersViewSectionList) {
        return false;
      }
      const listItems = this.$refs.partnersViewSectionList.querySelectorAll(
        ".partners-view-section-content-list-item-dot"
      );

      const firstElPoint = listItems[0].getBoundingClientRect().y;
      const lastElPoint = listItems[
        listItems.length - 1
      ].getBoundingClientRect().y;

      this.setLineHeight(lastElPoint - firstElPoint);
    }
  },
  mounted() {
    if (this.choosedProduct === this.producer.name) {
      this.isOpened = true;
      this.$refs[this.producer.name + "-section"].scrollIntoView({
        alignToTop: true,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style scoped lang="sass">
.partners-view-section
  box-sizing: border-box
  margin-bottom: 40px
  position: relative
  overflow: hidden
  display: flex
  flex-flow: column nowrap
  align-items: flex-start
  @include respond-to(s)
    padding: 20px 12px 125px 12px
  @include respond-to(m)
    padding: 30px 0 30px 40px
  @include respond-to(l)
    padding: 70px 0 70px 50px
  @include respond-to(xl)
    padding: 70px 0 70px 145px
  &-last
    margin-bottom: 0
  &-content
    position: relative
    z-index: 5
    display: flex
    flex-flow: column nowrap
    @include respond-to(s)
      width: 100%
    @include respond-to(m)
      width: 570px
    @include respond-to(l)
      width: 820px
    @include respond-to(xl)
      width: 820px
    &-header
      position: relative
      display: flex
      flex-flow: row nowrap
      align-items: center
      cursor: pointer
      border-bottom: 2px solid #940000
      @include respond-to(s)
        margin-bottom: 18px
      @include respond-to(m)
        margin-bottom: 31px
      @include respond-to(l)
        margin-bottom: 40px
      @include respond-to(xl)
        margin-bottom: 40px
    &-description
      width: 100%
      margin-bottom: 30px
      @include respond-to(s)
        margin-bottom: 10px
      @include respond-to(m)
        width: 452px
        margin-bottom: 24px
    &-list
      position: relative
      height: 100%
      @include respond-to(s)
        padding-left: 16px
      @include respond-to(m)
      @include respond-to(l)
      @include respond-to(xl)
      &-header
        margin-bottom: 26px
        @include respond-to(s)
          margin-bottom: 8px
        @include respond-to(m)
          margin-bottom: 14px
      &-wrapper
        position: relative
        display: flex
        flex-flow: column nowrap
      &-line
        position: absolute
        width: 2px
        background: #940000
        max-height: 90%
        min-height: 65%
        height: 90%
        top: 7px
        left: 9px
        z-index: 0
        @include respond-to(s)
          height: 70%
          left: 4px
  > img
    position: absolute
    max-height: 100%
    max-width: 100%
    object-fit: cover
    right: 0
    top: 0
    z-index: 0
    align-self: center
    @include respond-to(s)
      top: auto
      bottom: 0
      width: 100%
    @include respond-to(m)
      max-height: 110%
      max-width: 150%
  &-img-filter-r
    position: absolute
    width: 100%
    height: 100%
    top: 0
    right: 0
    z-index: 1
    background: radial-gradient(134.93% 855.13% at 0% 52.93%, #F0EFEF 44.11%, rgba(240, 239, 239, 0) 98.46%)
    @include respond-to(s)
      background: radial-gradient(610.43% 129.1% at 20.69% 0%, #F0EFEF 60.5%, rgba(240, 239, 239, 0) 98.46%)
    @include respond-to(m)
    @include respond-to(l)
    @include respond-to(xl)
    &-EVBox
      @include respond-to(s)
        background: radial-gradient(597.27% 126.33% at 20.69% 0%, #F0EFEF 60.5%, rgba(240, 239, 239, 0) 98.46%)
      @include respond-to(xxl)
        background: radial-gradient(150.4% 1016.39% at 0% 52.93%, #F0EFEF 47.46%, rgba(240, 239, 239, 0) 98.46%)
    &-PlugMe
      @include respond-to(s)
        background: radial-gradient(472.93% 100% at 20.69% 0%, #F0EFEF 60.5%, rgba(240, 239, 239, 0) 98.46%)
      @include respond-to(xxl)
        background: radial-gradient(140.4% 1016.39% at 0% 52.93%, #F0EFEF 47.46%, rgba(240, 239, 239, 0) 98.46%)
  &-markets-wrapper
    display: flex
    flex-flow: row nowrap
    @include respond-to(s)
      flex-flow: column nowrap

.market-svg
  cursor: pointer
  @include respond-to(s)
    flex-flow: column nowrap
    width: 100px
    height: 29px
    &:first-of-type
      margin-bottom: 6px
  @include respond-to(m)
    margin-right: 18px
  @include respond-to(l)
    margin-right: 21px
  @include respond-to(xl)
    margin-right: 21px

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
