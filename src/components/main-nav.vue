<template>
  <nav
    class="main_nav"
    ref="mainNav"
    v-touch:swipe.bottom="showMobileMenu"
    v-touch:swipe.top="closeMobileMenu"
  >
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
          v-for="section in sections"
          class="menu-list-section"
          :key="section.id"
          :page_name="section.name"
          :selectPage="selectPage"
          :color="section.color ? section.color : '#000000'"
        >
          {{ section.label }}
        </menu-section>
      </div>
      <div
        v-if="mobileView"
        class="mobile-menu-arrow-wrapper"
        @click="switchMobileMenu"
      >
        <div class="mobile-menu-arrow" ref="menuArrow" />
      </div>
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
    sections() {
      return this.$store.state.mainNav.sections;
    },
    bannerClosed() {
      return this.$store.state.bannerClosed;
    },
    mobileView() {
      return this.$mq === "s" || this.$mq === "m";
    },
    tabletView() {
      return this.$mq === "m";
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
    },
    showMobileMenu() {
      if (this.mobileView) {
        this.mobileMenuOpened = true;
      }
    },
    closeMobileMenu() {
      if (this.mobileView) {
        this.mobileMenuOpened = false;
      }
    }
  },
  watch: {
    mobileMenuOpened(state) {
      let tl = gsap.timeline();

      // Анимация открытия мобильного меню
      if (state && this.mobileView) {
        gsap.to(this.$refs.menuArrow, {
          duration: 1,
          rotation: 90,
          width: 18
          // borderColor: "#4F4F51"
        });
        gsap.to(this.$refs.menuList, {
          duration: 1,
          height: "100%"
        });

        // Анимация открытия для телефонов
        if (this.$mq === "s") {
          tl.to(this.$refs.mainNav, {
            duration: 0.7,
            height: 208
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

          // Анимация открытия для планшетов
        } else if (this.$mq === "m") {
          tl.to(this.$refs.mainNav, {
            duration: 1,
            height: 105
          });
          gsap.to(this.$refs.menuList, {
            duration: 1,
            opacity: 1,
            delay: 0.1
          });
        }

        // Анимация закрытия мобильного меню
      } else if (this.mobileView) {
        gsap.to(this.$refs.menuArrow, {
          duration: 0.7,
          width: 42,
          rotation: 0
          // borderColor: "#EC001D"
        });
        gsap.to(this.$refs.menuList, {
          duration: 0.7,
          height: "0%"
        });

        // Анимация закрытия для телефонов
        if (this.$mq === "s") {
          gsap.to(this.$refs.mainNav, {
            duration: 0.7,
            height: 42
          });
          gsap.to(".menu-list-section", {
            duration: 0.2,
            opacity: 0
          });
        }

        // Анимация закрытия для планшетов
        if (this.$mq === "m") {
          gsap.to(this.$refs.mainNav, {
            duration: 0.7,
            height: 60
          });
          gsap.to(this.$refs.menuList, {
            duration: 0.5,
            opacity: 0
          });
        }
      }
    },
    $mq(size) {
      if (size !== "s" && size !== "m") {
        this.mobileMenuOpened = false;
        gsap.to(this.$refs.mainNav, {
          duration: 0.5,
          height: 42
        });
        gsap.to(this.$refs.menuList, {
          duration: 0.5,
          height: "100%"
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
    justify-content: center
  @include respond-to(m)
    padding: 17px 40px 12px
    min-height: 60px
    align-items: stretch
    justify-content: center
  @include respond-to(l)
    padding: 0 100px
    min-height: 60px
  @include respond-to(xl)
    padding: 0 100px
    min-height: 60px

.epc_logo_div
  @include respond-to(s)
    position: absolute
    left: 12px
  @include respond-to(m)
    position: absolute
    left: 40px


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

.epcelectro-logo-link
  @include respond-to(s)
    position: absolute
    right: 12px
  @include respond-to(m)
    position: absolute
    right: 40px

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
      fill: #18BFF6
    &:nth-of-type(2), &:nth-of-type(5)
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
    height: 0
  @include respond-to(l)
    margin-left: 20px
  @include respond-to(xl)
    margin-left: 20px
  &-div
    display: flex
    flex-flow: column nowrap
    align-items: center
    justify-content: space-between
    @include respond-to(s)
      justify-content: center
    @include respond-to(m)
      justify-content: flex-end
  &-mobile
    flex-flow: column nowrap
    align-items: center
    justify-content: flex-end
    @include respond-to(m)
      opacity: 0
      flex-flow: row nowrap
      align-items: flex-end

.mobile-menu-arrow
  width: 42px
  height: 2px
  background: #EC001D
  &-wrapper
    position: absolute
    @include respond-to(s)
      top: 8px
      padding: 15px 0
    @include respond-to(m)
      padding: 20px 0
      top: 9px
  //border-left: 2px solid #EC001D
  //border-bottom: 2px solid #EC001D
  //transform: rotate(-45deg)
</style>
