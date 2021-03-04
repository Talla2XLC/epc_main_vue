<template>
  <div class="about">
    <h1
      :class="{
        'text-hero': $mq === 'xl' || $mq === 'l',
        'text-h2T': $mq === 'm',
        'text-h3': $mq === 's'
      }"
    >
      {{ aboutHeader }}
    </h1>
    <h5 class="text-h5" v-if="this.$mq === 's'">
      (Единый Процессинговый Центр)
    </h5>
    <div
      v-if="mobileView"
      class="mobile-history-arrow"
      @click="switchSectionsVisibility"
      ref="historyArrow"
      v-touch:swipe.bottom="openHistorySections"
      v-touch:swipe.top="closeHistorySections"
    />
    <History />
    <div
      v-if="mobileView && sectionsOpened"
      class="mobile-history-arrow-bottom"
      @click="switchSectionsVisibility"
      v-touch:swipe.top="closeHistorySections"
    />
    <Customers />
    <Projects />
    <Mission />
  </div>
</template>

<script>
import History from "../components/About/History";
import Customers from "../components/About/Customers";
import Projects from "../components/About/Projects";
import Mission from "../components/About/Mission";
import { gsap } from "gsap";

export default {
  name: "About",
  data() {
    return {
      sectionsOpened: false
    };
  },
  components: {
    History,
    Customers,
    Projects,
    Mission
  },
  computed: {
    mobileView() {
      return this.$mq === "s";
    },
    aboutHeader() {
      return this.$mq === "s"
        ? "ООО «ЕРС»"
        : "ООО «Единый Процессинговый Центр»";
    }
  },
  methods: {
    selectPage() {
      this.$store.dispatch("selectPage", "about");
    },
    switchSectionsVisibility() {
      this.sectionsOpened = !this.sectionsOpened;
    },
    closeHistorySections() {
      this.sectionsOpened = false;
    },
    openHistorySections() {
      this.sectionsOpened = true;
    }
  },
  watch: {
    sectionsOpened(state) {
      if (state) {
        gsap.to(".about-history", {
          duration: 1,
          maxHeight: 1000
        });
        gsap.to(this.$refs.historyArrow, {
          duration: 1,
          rotation: 135,
          borderColor: "#4F4F51"
        });
      } else if (this.mobileView) {
        gsap.to(".about-history", {
          duration: 1,
          maxHeight: 112
        });
        gsap.to(this.$refs.historyArrow, {
          duration: 1,
          rotation: -45,
          borderColor: "#940000"
        });
      }
    }
  }
};
</script>

<style lang="sass">
.about
  display: -webkit-flex
  display: -moz-flex
  display: -ms-flex
  display: -o-flex
  display: flex
  flex-flow: column nowrap
  justify-content: flex-start
  align-items: center
  padding: 100px 50px
  @include respond-to(s)
    padding: 98px 0 50px
  @include respond-to(m)
    padding: 70px 20px
  @include respond-to(l)
    padding: 100px 50px
  @include respond-to(xl)
    padding: 100px 245px
  >h1
    margin-bottom: 60px
    @include respond-to(s)
      margin-bottom: 2px
    @include respond-to(m)
      margin-bottom: 30px
    @include respond-to(l)
      margin-bottom: 60px
    @include respond-to(xl)
      margin-bottom: 60px
  >h5
    margin-bottom: 36px

.mobile-history-arrow, .mobile-history-arrow-bottom
  width: 10px
  height: 10px
  border-left: 2px solid #940000
  border-bottom: 2px solid #940000
  transform: rotate(-45deg)
  position: relative
  top: -30px

.mobile-history-arrow-bottom
  border-left: 2px solid #4F4F51
  border-bottom: 2px solid #4F4F51
  transform: rotate(135deg)
  top: -40px
</style>
