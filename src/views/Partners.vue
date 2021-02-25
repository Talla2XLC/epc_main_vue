<template>
  <div class="partners-view" v-click-outside="closeModal">
    <h1
      :class="{
        'text-h1': $mq === 'xl' || $mq === 'l',
        'text-h2T': $mq === 'm',
        'text-h3': $mq === 's'
      }"
    >
      Партнеры
    </h1>
    <div class="partners-view-list">
      <PartnersSection
        v-for="(producer, key, index) in partners"
        :key="key"
        :ind="index"
        :producer="producer"
        :isLast="index === Object.keys(partners).length - 1"
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
import PartnersSection from "../components/Partners/PartnersSection";
import ProductModal from "../components/Partners/ProductModal";

export default {
  name: "PartnersView",
  data() {
    return {
      selectedProduct: null,
      selectedProducer: null,
      showModal: false
    };
  },
  computed: {
    partners() {
      return this.$store.state.partners;
    }
  },
  methods: {
    productSelectionHandler(producer, product) {
      this.selectedProduct = this.$store.state.partners[
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
  directives: {
    clickOutside: {
      bind: function(el, binding, vnode) {
        el.clickOutsideEvent = function(event) {
          if (!(el === event.target || event.path.includes(el))) {
            vnode.context[binding.expression](event);
          }
        };
        document.body.addEventListener("click", el.clickOutsideEvent);
      },
      unbind: function(el) {
        document.body.removeEventListener("click", el.clickOutsideEvent);
      }
    }
  },
  components: {
    ProductModal,
    PartnersSection
  }
};
</script>

<style scoped lang="sass">
.partners-view
  padding: 100px 50px
  display: flex
  flex-flow: column nowrap
  align-items: center
  @include respond-to(s)
    padding: 100px 0 50px
  @include respond-to(m)
    padding: 70px 0
  @include respond-to(l)
    padding: 100px 50px
  @include respond-to(xl)
    padding: 100px
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
