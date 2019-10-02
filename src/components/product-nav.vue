<template>
  <nav class="product_nav" ref="product_nav">
    <inner-menu-section page_name="nupi">
      Пластиковый<br />трубопровод Nupi
    </inner-menu-section>
    <inner-menu-section page_name="scully">
      Мониторы перелива<br />и заземления Scully
    </inner-menu-section>
    <inner-menu-section page_name="emco">
      АСН<br />Emco Wheaton
    </inner-menu-section>
    <inner-menu-section page_name="rotork">
      Электрические<br />приводы Rotork
    </inner-menu-section>
    <inner-menu-section page_name="rotork">
      Системы измерения<br />ProGauge
    </inner-menu-section>
  </nav>
</template>

<script>
import innerMenuSection from "@/components/inner-menu-section";

export default {
  name: "product-nav",
  components: {
    innerMenuSection
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
	top: 100px
	right: 0
	border: 2px solid #ff0000
	box-sizing: border-box
	transition: transform 200ms ease-in
	z-index: 2
</style>
