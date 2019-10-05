<template>
<transition name="move">
  <nav 
    class="product_nav"
    ref="product_nav"
    v-if="productNavVisible"
    @mouseleave="hideProductNav"
  >
    <inner-menu-section page_name="nupi" @mouseover.native="toggleNupiBgi" @mouseleave.native="toggleNupiBgi">
      Пластиковый трубопровод Nupi
    </inner-menu-section>
    <inner-menu-section page_name="scully">
      Мониторы перелива и заземления Scully
    </inner-menu-section>
    <inner-menu-section page_name="emco">
      АСН Emco Wheaton
    </inner-menu-section>
    <inner-menu-section page_name="rotork">
      Электрические приводы Rotork
    </inner-menu-section>
    <inner-menu-section page_name="progauge">
      Системы измерения ProGauge
    </inner-menu-section>
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
    }
  },
  methods: {
    showProductNav() {
      this.$store.dispatch("showProductNav");
    },
    hideProductNav() {
      this.$store.dispatch("hideProductNav");
    },
    toggleNupiBgi() {
      document.querySelector('.product_nav').classList.toggle('nupi');
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
  width: 50%
  top: 0
  right: 0
  padding: 3rem
  box-sizing: border-box
  z-index: 2
  background-image: -moz-linear-gradient( 180deg, rgb(79,79,81) 0%, rgb(218,215,215) 100%)
  background-image: -webkit-linear-gradient( 180deg, rgb(79,79,81) 0%, rgb(218,215,215) 100%)
  background-image: -ms-linear-gradient( 180deg, rgb(79,79,81) 0%, rgb(218,215,215) 100%)
  background-image: linear-gradient( 180deg, rgb(79,79,81) 0%, rgb(218,215,215) 100%)

.move-leave-active, .move-enter-active
  transition: right 300ms ease-in
.move-enter, .move-leave-to
  right: -50%

.nupi
  background-image: url("../assets/products/nupi.png")
  background-image: url("../assets/products/nupi.png")
  background-image: url("../assets/products/nupi.png")
  background-image: url("../assets/products/nupi.png")
  background-size: cover

</style>
