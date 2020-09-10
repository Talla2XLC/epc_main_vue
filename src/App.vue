<template>
  <div id="app" :class="this.$route.path === '/' ? 'fixed-app' : ''">
    <vue-scroll :ops="ops" ref="vs">
      <app-header @closeConfidential="closeConfidential" />
      <main>
        <router-view @open-modal="setToTopView" />
        <Confidential :closeModal="closeConfidential" v-if="showConfidential" />
      </main>
      <app-footer :openConfidential="openConfidential" />
    </vue-scroll>
  </div>
</template>

<script lang="ts">
import appHeader from "@/components/app-header.vue";
import appFooter from "@/components/app-footer.vue";
import Confidential from "./components/General/Confidential.vue";
import vueScroll from "vuescroll";

import "normalize.css";
import "reset-css";
import "@/sass/_fonts.sass";

export default {
  name: "App",
  data() {
    return {
      showConfidential: false,
      ops: {
        vuescroll: {
          mode: "native",
          sizeStrategy: "percent",
          detectResize: true
        },
        scrollPanel: {
          initialScrollY: 0,
          initialScrollX: 0,
          scrollingX: this.$mq === "s",
          scrollingY: true,
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
          opacity: 0,
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
  mounted() {
    this.selectPage(this.$route.name);
  },
  computed: {},
  components: {
    Confidential,
    appHeader,
    appFooter,
    vueScroll
  },
  watch: {
    $route() {
      this.scrollToTop();
      this.showConfidential = false;
    },
    showConfidential() {
      if (this.showConfidential) {
        this.setToTopView();
      }
    }
  },
  methods: {
    selectPage(page) {
      this.$store.dispatch("selectPage", page);
    },
    closeConfidential() {
      this.showConfidential = false;
    },
    openConfidential() {
      this.showConfidential = true;
    },
    scrollToTop() {
      this.$refs["vs"].scrollTo(
        {
          y: 0
        },
        500,
        "easeInQuad"
      );
    },
    setToTopView() {
      this.$refs["vs"].scrollTo(
        {
          y: 0
        },
        0,
        "easeInQuad"
      );
    }
  },
  metaInfo: {}
};
</script>

<style lang="sass">
*
  margin: 0
  padding: 0

#app
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  display: -webkit-flex
  display: -moz-flex
  display: -ms-flex
  display: -o-flex
  display: flex
  flex-flow: column nowrap
  min-height: 100vh

.fixed-app
  height: 100vh

main
  display: -webkit-flex
  display: -moz-flex
  display: -ms-flex
  display: -o-flex
  display: flex
  flex-flow: column nowrap
  position: relative
  z-index: 1
  flex-grow: 1

.__view
  display: flex
  flex-flow: column nowrap
  position: relative

.__rail-is-vertical
  z-index: 5 !important
</style>
