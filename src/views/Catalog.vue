<template>
  <div class="catalog">
    <h1
      :class="{
        'text-h1': $mq === 'xl' || $mq === 'l',
        'text-h2T': $mq === 'm',
        'text-h3': $mq === 's'
      }"
    >
      Каталог продукции
    </h1>
    <div class="catalog-list">
      <CatalogSection
        v-for="(producer, key, index) in catalog"
        :key="key"
        :ind="index"
        :name="producer.name"
        :fullName="producer.fullName"
        :items="producer.products"
        :imagePosition="producer.imagePosition"
        :isLast="index === Object.keys(catalog).length - 1"
        :selectHandler="productSelectionHandler"
      />
    </div>
    <ProductModal
      v-if="showModal"
      :closeModal="closeModal"
      :product="selectedProduct"
      :producer="selectedProducer"
    />
  </div>
</template>

<script>
import CatalogSection from "../components/Catalog/CatalogSection";
import ProductModal from "../components/Catalog/ProductModal";

export default {
  name: "Catalog",
  data() {
    return {
      selectedProduct: null,
      selectedProducer: null,
      showModal: false
    };
  },
  computed: {
    catalog() {
      return this.$store.state.catalog;
    }
  },
  methods: {
    productSelectionHandler(producer, product) {
      this.selectedProduct = this.$store.state.catalog[
        producer.toLowerCase()
      ].products.find(item => item.name === product);
      this.selectedProducer = producer.toLowerCase();
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.selectedProduct = null;
    }
  },
  watch: {
    $route() {
      this.showModal = false;
    },
    showModal() {
      if (this.showModal) {
        this.$emit("open-modal");
      }
    }
  },
  components: {
    ProductModal,
    CatalogSection
  }
};
</script>

<style scoped lang="sass">
.catalog
  padding: 100px 50px
  display: flex
  flex-flow: column nowrap
  align-items: center
  @include respond-to(s)
    padding: 98px 0 50px
  @include respond-to(m)
    padding: 70px 20px
  @include respond-to(l)
    padding: 100px 50px
  @include respond-to(xl)
    padding: 100px 100px
  >h1
    margin-bottom: 60px
    @include respond-to(s)
      margin-bottom: 20px
    @include respond-to(m)
      margin-bottom: 30px
    @include respond-to(l)
      margin-bottom: 60px
    @include respond-to(xl)
      margin-bottom: 60px
  &-list
    align-self: stretch
</style>
