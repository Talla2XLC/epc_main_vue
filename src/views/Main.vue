<template>
  <div class="main_page">
    <div class="main_content">
      <div class="main_left">
        <router-link
          :to="`/about`"
          class="epc_logo_link"
          @click.native="selectPage('about')"
        >
          <EPCLogoFull class="epc_logo_big" viewBox="0 0 400 123" />
        </router-link>
      </div>
      <div class="content_div">
        <div class="mission-txt">
          <h1
            class="main_content-header"
            :class="{
              'text-hero': $mq === 'xl',
              'text-h1': $mq === 'l',
              'text-h2': $mq === 'm',
              'text-h4': $mq === 's'
            }"
          >
            Движение вперед и&nbsp;достижение целей
          </h1>
          <p
            class="main_content-text"
            :class="{
              'text-body1': $mq === 'xl',
              'text-body2': $mq === 'l',
              'text-body4': $mq === 'm',
              'text-body6': $mq === 's'
            }"
            v-html="contentTxt"
          />
        </div>
      </div>
      <template v-if="currentBanner !== undefined">
        <promo-banner
          v-for="(banner, index) in banners"
          :key="index"
          :index="index"
          :producer="banner"
          :currentBanner="currentBanner"
          :currentBannerID="currentBannerID"
          :bannersQty="banners.length"
          @clickedOutsideBanners="closeAllBanners"
          @openingBanner="showBanner"
          @switchCommercial="switchCommercial"
        />
      </template>
      <!--      <promo-banner-->
      <!--        producer="gilbarco"-->
      <!--        :currentBanner="currentBanner"-->
      <!--        v-if="currentBanner === 'gilbarco'"-->
      <!--      />-->
    </div>
    <vue-scroll :ops="ops" ref="vs">
      <partners />
    </vue-scroll>
  </div>
</template>

<script>
import partners from "@/components/Main/partnersLogos";
import promoBanner from "@/components/Main/promo-banner";
import EPCLogoFull from "@/assets/svg/epc-logo-full.svg";
import vueScroll from "vuescroll";

export default {
  name: "Main",
  metaInfo: {
    title: "EPC Main"
  },
  data() {
    return {
      currentBanner: undefined,
      currentBannerID: undefined,
      ops: {
        vuescroll: {
          mode: "native",
          sizeStrategy: "percent",
          detectResize: true
        },
        scrollPanel: {
          initialScrollY: 0,
          initialScrollX: 0,
          scrollingX: true,
          scrollingY: false,
          speed: 300,
          easing: "easeInQuad",
          verticalNativeBarPos: "right"
        },
        rail: {
          background: "#F0EFEF",
          opacity: 0,
          size: "6px",
          specifyBorderRadius: false,
          gutterOfEnds: null,
          gutterOfSide: "2px",
          keepShow: false
        },
        bar: {
          showDelay: 800,
          onlyShowBarOnScroll: false,
          keepShow: false,
          background: "#DAD7D7",
          opacity: 1,
          hoverStyle: {
            background: "#FFF"
          },
          specifyBorderRadius: false,
          minSize: 0,
          size: "6px",
          disable: false
        }
      }
    };
  },
  computed: {
    contentTxt() {
      return (
        "Мы целеустремленны и всегда идем в&nbsp;ногу \n" +
        "со&nbsp;временем. Чтобы добиться успеха, \n" +
        "нужно&nbsp;верить в себя и&nbsp;своих&nbsp;партнеров.\n" +
        "Мы&nbsp;уверены в&nbsp;наших&nbsp;партнерах, поскольку \n" +
        "мы&nbsp;сотрудничаем только с лучшими!"
      );
    },
    banners() {
      return this.$store.state.banners;
    }
  },
  components: {
    partners,
    promoBanner,
    EPCLogoFull,
    vueScroll
  },
  methods: {
    selectPage(page) {
      this.$store.dispatch("selectPage", page);
    },

    showBanner(bannerID) {
      if (this.currentBannerID !== bannerID) {
        this.currentBannerID = bannerID;

        if (bannerID === null) {
          this.currentBanner = null;
        } else {
          this.currentBanner = this.banners[bannerID];
        }
      }
    },

    closeAllBanners() {
      if (this.currentBanner) {
        console.log("Close all banners from Main");
        this.showBanner(null);
        this.setIsBannerOpened(false);
      }
    },

    setIsBannerOpened(state) {
      if (state) {
        this.$store.dispatch("showBanner");
      } else {
        this.$store.dispatch("closeBanner");
      }
    },

    /**
     * Переключает текущий рекламный баннер
     * Если массив рекламных баннеров закончен, возвращаемся в начало
     */
    switchCommercial() {
      console.log('Catch emit switch commercial')
      if (this.currentBannerID + 1 > this.banners.length - 1) {
        this.showBanner(0);
      } else {
        this.showBanner(this.currentBannerID + 1);
      }
    },

    printInConsole(msg) {
      console.log(msg);
    }
  },
  mounted() {
    console.log('Mounted main view');
    this.showBanner(0);
  },
  watch: {
    currentBanner(banner) {
      if (banner === null) {
        this.setIsBannerOpened(false);
      } else {
        this.setIsBannerOpened(true);
      }
    }
  },
  beforeRouteLeave(to, from, next) {
    this.$store.dispatch("closeBanner");
    next();
  }
};
</script>

<style lang="sass" scoped>
.ps
  height: 100%

.main_page
  flex-grow: 1
  position: relative
  display: -webkit-flex
  display: -moz-flex
  display: -ms-flex
  display: -o-flex
  display: flex
  flex-flow: column nowrap
  z-index: 2

.main_content
  flex-grow: 1
  flex-basis: max-content
  display: -webkit-flex
  display: -moz-flex
  display: -ms-flex
  display: -o-flex
  display: flex
  flex-flow: row nowrap
  align-items: center
  justify-content: center
  padding: 0 100px
  box-sizing: border-box
  position: relative
  z-index: 2
  overflow: hidden
  @include respond-to(s)
    flex-flow: column nowrap
    padding: 138px 10px 90px
  @include respond-to(m)
    display: grid
    grid-template-columns: 1fr
    grid-auto-rows: 50%
    grid-row-gap: 0
    justify-items: center
    align-items: start
    padding: 0
  @include respond-to(l)
    flex-flow: row nowrap
    padding: 0 100px
  @include respond-to(xl)
    flex-flow: row nowrap
    padding: 0 100px
  &-header
    margin-bottom: 47px
    @include respond-to(s)
      line-height: 28px
      margin-bottom: 12px
    @include respond-to(m)
      margin-bottom: 30px
    @include respond-to(l)
      margin-bottom: 47px
    @include respond-to(xl)
      margin-bottom: 50px
  &-text
    max-width: 610px

.main_left
  width: 50%
  height: 100%
  margin-right: 10px
  box-sizing: border-box
  flex-grow: 1
  display: -webkit-flex
  display: -moz-flex
  display: -ms-flex
  display: -o-flex
  display: flex
  flex-flow: row nowrap
  align-items: center
  justify-content: center
  @include respond-to(s)
    width: auto
    margin-right: 0
    flex-grow: 0
    margin-bottom: 50px
  @include respond-to(m)
    width: auto
    margin-right: 0
  @include respond-to(l)
    width: 50%
    margin-right: 10px
  @include respond-to(xl)
    width: 50%
    margin-right: 10px

.epc_logo_big
  transition: transform 200ms ease-in
  &:hover
    transform: scale(1.15)
  @include respond-to(s)
    width: 250px
    height: 76px
  @include respond-to(m)
    width: 450px
    height: 139px
  @include respond-to(l)
    width: 400px
    height: 123px
  @include respond-to(xl)
    width: 560px
    height: 173px

.content_div
  width: 50%
  margin-left: 10px
  box-sizing: border-box
  flex-grow: 1
  display: -webkit-flex
  display: -moz-flex
  display: -ms-flex
  display: -o-flex
  display: flex
  flex-flow: column nowrap
  justify-content: center
  @include respond-to(s)
    width: auto
    margin-left: 0
  @include respond-to(m)
    width: auto
    margin-left: 0
  @include respond-to(l)
    width: 50%
    margin-left: 10px
  @include respond-to(xl)
    width: 50%
    margin-left: 10px

.mission-txt
  box-sizing: border-box
  display: -webkit-flex
  display: -moz-flex
  display: -ms-flex
  display: -o-flex
  display: flex
  flex-flow: column nowrap
  justify-content: space-around
  text-align: center
  align-items: center
  max-width: 610px
  @include respond-to(s)
    max-width: 296px
  @include respond-to(m)
    max-width: 447px
  @include respond-to(l)
    max-width: 610px
  @include respond-to(xl)
    max-width: 850px
</style>
