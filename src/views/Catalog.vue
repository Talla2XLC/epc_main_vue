<template>
  <div class="catalog">
    <h1 class="text-h1">Каталог продукции</h1>
    <div class="catalog-list">
      <CatalogSection
        v-for="(item, index) in catalog"
        :key="index"
        :ind="index"
        :date="item.date"
        :header="item.header"
        :desc="item.desc"
        :img="item.img"
      />
    </div>
  </div>
</template>

<script>
import CatalogSection from "../components/Catalog/CatalogSection";

export default {
  name: "Catalog",
  components: {
    CatalogSection
  },
  computed: {
    catalog() {
      return this.$store.state.catalog;
    }
  }
};
</script>

<style scoped lang="sass">
.catalog
  padding: 100px 50px
  display: flex
  flex-flow: column nowrap
  align-items: center
  >h1
    margin-bottom: 60px
</style>
