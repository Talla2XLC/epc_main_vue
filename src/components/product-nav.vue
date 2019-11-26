<template>
  <transition name="move">
    <nav
      class="product_nav"
      ref="product_nav"
      v-if="productNavVisible"
      @mouseleave="hideProductNav"
    >
      <inner-menu-section page_name="nupi">
        Nupi Industrie Italiane S.p.A.
      </inner-menu-section>
      <inner-menu-section page_name="scully">
        Scully Signal Company
      </inner-menu-section>
      <inner-menu-section page_name="emco">
        Emco Wheaton GmbH
      </inner-menu-section>
      <inner-menu-section page_name="rotork">
        Rotork plc
      </inner-menu-section>
      <inner-menu-section page_name="progauge">
        Start Italiana s.r.l.
      </inner-menu-section>
      <transition name="fade">
        <img
          src="@/assets/products/nupi.png"
          alt="nupi_img"
          class="product_nav_img to_left"
          v-if="this.productNavImg === 'nupi'"
        />
        <img
          src="@/assets/products/scully.png"
          alt="scully_img"
          class="product_nav_img"
          v-if="this.productNavImg === 'scully'"
        />
        <img
          src="@/assets/products/emco.png"
          alt="emco_img"
          class="product_nav_img"
          v-if="this.productNavImg === 'emco'"
        />
        <img
          src="@/assets/products/rotork.png"
          alt="rotork_img"
          class="product_nav_img"
          v-if="this.productNavImg === 'rotork'"
        />
        <img
          src="../assets/products/progauge.png"
          alt="progauge_img"
          class="product_nav_img"
          v-if="this.productNavImg === 'progauge'"
        />
      </transition>
    </nav>
  </transition>
</template>

<script>
import innerMenuSection from "@/components/inner-menu-section";

export default {
  name: "product-nav",
  components: {
    innerMenuSection
  },
  computed: {
    productNavVisible() {
      return this.$store.state.productNavVisible;
    },
    productNavImg() {
      return this.$store.state.productNavImg;
    }
  },
  methods: {
    showProductNav() {
      this.$store.dispatch("showProductNav");
    },
    hideProductNav() {
      this.$store.dispatch("hideProductNav");
    }
  }
};
</script>

<style lang="sass" scoped>
.product_nav
  position: absolute
  display: -webkit-flex
  display: -moz-flex
  display: -ms-flex
  display: -o-flex
  display: flex
  flex-flow: column nowrap
  height: 100%
  width: 55%
  top: 0
  right: 0
  padding: 3rem
  box-sizing: border-box
  z-index: 4
  background-image: -moz-linear-gradient( 180deg, rgb(79,79,81) 0%, rgb(218,215,215) 100%)
  background-image: -webkit-linear-gradient( 180deg, rgb(79,79,81) 0%, rgb(218,215,215) 100%)
  background-image: -ms-linear-gradient( 180deg, rgb(79,79,81) 0%, rgb(218,215,215) 100%)
  background-image: linear-gradient( 180deg, rgb(79,79,81) 0%, rgb(218,215,215) 100%)

.move-leave-active, .move-enter-active
  transition: right 300ms ease-in
.move-enter, .move-leave-to
  right: -50%

.product_nav_img
  width: 100%
  height: 100%
  object-fit: contain
  object-position: center center
  position: absolute
  top: 0
  right: 0
  z-index: 1

.to_left
  object-position: left center

.fade-leave-active, .fade-enter-active
  transition: opacity 400ms ease-in-out
.fade-enter, .fade-leave-to
  opacity: 0
</style>
