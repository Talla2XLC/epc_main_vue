<template>
  <nav class="main_nav" ref="mainNav">
    <router-link :to="`/`" class="epc_logo_div" @click.native="selectPage('')">
      <EPCLogo
        viewBox="0 0 85 26"
        class="epc-logo"
        :class="{
          'epc-logo-colored':
            this.$route.path !== '/' ||
            ((this.$mq === 'm' || this.$mq === 's') && !this.bannerClosed) ||
            (this.mobileView && this.mobileMenuOpened)
        }"
      />
    </router-link>
    <div class="menu-list-div">
      <div
        class="menu-list"
        :class="{
          'menu-list-mobile': mobileView
        }"
        ref="menuList"
      >
        <menu-section
          class="menu-list-section"
          page_name="news"
          :selectPage="selectPage"
        >
          Новости
        </menu-section>
        <menu-section
          class="menu-list-section"
          page_name="about"
          :selectPage="selectPage"
        >
          О компании
        </menu-section>
        <menu-section
          class="menu-list-section"
          page_name="catalog"
          :selectPage="selectPage"
        >
          Каталог
        </menu-section>
        <menu-section
          class="menu-list-section"
          page_name="contacts"
          :selectPage="selectPage"
        >
          Контакты
        </menu-section>
      </div>
      <div
        v-if="mobileView"
        class="mobile-menu-arrow"
        @click="switchMobileMenu"
        ref="menuArrow"
      />
    </div>
    <a class="epcelectro-logo-link" href="http://epcelectro.ru/">
      <EPCelectroLogo viewBox="0 0 140 26" class="epcelectro-logo" />
    </a>
  </nav>
</template>

<script type="text/javascript">
import menuSection from "@/components/menu-section";
import EPCLogo from "@/assets/svg/epc-logo.svg";
import EPCelectroLogo from "@/assets/svg/epcelectro_logo.svg";
import { gsap } from "gsap";

export default {
  name: "main-nav",
  data() {
    return {
      mobileMenuOpened: false
    };
  },
  computed: {
    bannerClosed() {
      return this.$store.state.bannerClosed;
    },
    mobileView() {
      return this.$mq === "s";
    },
    selectedPage() {
      return this.$store.state.selectedPage;
    }
  },
  methods: {
    selectPage(page) {
      this.$store.dispatch("selectPage", page);
      this.mobileMenuOpened = false;
      this.$emit("closeConfidential");
    },
    switchMobileMenu() {
      this.mobileMenuOpened = !this.mobileMenuOpened;
    }
  },
  watch: {
    mobileMenuOpened(state) {
      let tl = gsap.timeline();
      if (state && this.mobileView) {
        gsap.to(this.$refs.menuArrow, {
          duration: 1,
          rotation: 135,
          borderColor: "#4F4F51"
        });
        tl.to(this.$refs.mainNav, {
          duration: 0.7,
          height: 208
        });
        gsap.to(this.$refs.menuList, {
          duration: 0.5,
          height: "100%"
        });
        tl.fromTo(
          ".menu-list-section",
          {
            opacity: 0,
            y: -50
          },
          {
            opacity: 1,
            y: 0,
            ease: "back.out(1.5)",
            duration: 0.5,
            stagger: {
              each: 0.25,
              from: "end"
            }
          },
          "-=0.2"
        );
      } else if (this.mobileView) {
        gsap.to(this.$refs.menuArrow, {
          duration: 1,
          rotation: -45,
          borderColor: "#EC001D"
        });
        gsap.to(this.$refs.menuList, {
          duration: 0.7,
          height: 0
        });
        gsap.to(this.$refs.mainNav, {
          duration: 0.7,
          height: 42
        });
        gsap.to(".menu-list-section", {
          duration: 0.15,
          opacity: 0
        });
      }
    },
    $mq(size) {
      this.mobileMenuOpened = false;
      if (size !== "s") {
        gsap.to(this.$refs.mainNav, {
          height: 42
        });
      } else {
        gsap.to(this.$refs.menuList, {
          height: 0
        });
      }
    },
    bannerClosed(status) {
      if (!status && this.$mq === "s") {
        this.mobileMenuOpened = false;
      }
    }
  },
  components: {
    menuSection,
    EPCLogo,
    EPCelectroLogo
  },
  beforeRouteLeave(to, from, next) {
    this.mobileMenuOpened = false;
    next();
  }
};
</script>

<style lang="sass" scoped>
.main_nav
  display: -webkit-flex
  display: -moz-flex
  display: -ms-flex
  display: -o-flex
  display: flex
  flex-flow: row nowrap
  justify-content: space-between
  align-items: center
  box-sizing: border-box
  width: 100%
  padding: 0 100px
  z-index: 1
  min-height: 60px
  @include respond-to(s)
    align-items: stretch
    padding: 12px
    min-height: 42px
    height: 42px
  @include respond-to(m)
    padding: 0 40px
    min-height: 60px
  @include respond-to(l)
    padding: 0 100px
    min-height: 60px
  @include respond-to(xl)
    padding: 0 100px
    min-height: 60px

.epc-logo
  width: 85px
  height: 26px
  @include respond-to(s)
    width: 60px
    height: 18px
  @include respond-to(m)
    width: 78px
    height: 24px
  @include respond-to(l)
    width: 85px
    height: 26px
  @include respond-to(xl)
    width: 85px
    height: 26px
  &:hover >path
    &:nth-of-type(1)
      fill: url(#color_radial)
    &:nth-of-type(2), &:nth-of-type(4)
      fill: #EC001D
.epc-logo-colored > path
  &:nth-of-type(1)
    fill: url(#color_radial)
  &:nth-of-type(2), &:nth-of-type(4)
    fill: #EC001D

.epcelectro-logo
  width: 140px
  height: 26px
  @include respond-to(s)
    width: 96px
    height: 18px
  @include respond-to(m)
    width: 129px
    height: 24px
  @include respond-to(l)
    width: 140px
    height: 26px
  @include respond-to(xl)
    width: 140px
    height: 26px
  &:hover >path
    &:nth-of-type(1)
      fill: #E6E6E6
    &:nth-of-type(2), &:nth-of-type(3), &:nth-of-type(5)
      fill: #18BFF6
.menu-list
  margin-left: 20px
  display: flex
  flex-flow: row nowrap
  overflow: hidden
  @include respond-to(s)
    margin-left: 0
    height: 0
  @include respond-to(m)
    margin-left: 0
  @include respond-to(l)
    margin-left: 20px
  @include respond-to(xl)
    margin-left: 20px
  &-div
    display: flex
    flex-flow: column nowrap
    align-items: center
    justify-content: space-between
  &-mobile
    flex-flow: column nowrap
    align-items: center

.mobile-menu-arrow
  width: 10px
  height: 10px
  border-left: 2px solid #EC001D
  border-bottom: 2px solid #EC001D
  transform: rotate(-45deg)
</style>
