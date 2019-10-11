<template>
  <div class="nupi_page_div">
    <h1 class="nupi_header">
      Пластиковый трубопровод Nupi
    </h1>
    <product-nav />
  </div>
</template>

<script>
import productNav from "@/components/product-nav";

export default {
  name: "Main",
  components: {
    productNav
  },
  methods: {
    hideProductNav() {
      this.$store.dispatch("hideProductNav");
    }
  }
};
</script>

<style lang="sass">
.nupi_page_div
  height: 100%
  width: 100%
  box-sizing: border-box
  padding: 0.5rem 10%
  padding-top: 2rem
  position: relative

.nupi_header
  font-size: 30px
  text-align: center

@media (min-width: 1850px)
  .nupi_page_div
    padding: 0.5rem 20%
</style>
