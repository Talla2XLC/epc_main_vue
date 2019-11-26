<template>
  <router-link
    :to="link ? `/${page_name}` : ''"
    class="btn main_btn"
    :class="[
      page_name + '_page',
      {
        selected_page:
          this.selectedPage === this.page_name ||
          (this.page_name === 'products' && this.productSelected)
      }
    ]"
    @click.native="selectPage"
  >
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: "menu-section",
  props: ["page_name"],
  computed: {
    selectedPage() {
      return this.$store.state.selectedPage;
    },
    productSelected() {
      return this.$store.getters.productSelected;
    },
    link() {
      if (this.page_name != "products") {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    selectPage() {
      this.$store.dispatch("selectPage", this.page_name);
    }
  }
};
</script>

<style lang="sass" scoped>
.btn
  text-transform: uppercase
  background: transparent
  font-family: "montserrat-regular", "calibri", sans-serif
  border: none
  cursor: pointer
  text-decoration: none
  color: black
  box-sizing: border-box
  font-size: 20px
  transition: transform 100ms ease-in
  position: relative
  z-index: 1
  &:hover
    font-weight: 800
  &:focus
    outline: none
.main_btn
  &:hover:after
    content: ""
    width: 100%
    display: block
    border-bottom: 2px solid black
    position: absolute
    bottom: -0.5rem
    left: 0
    animation: lining 0.5s ease-in-out

.selected_page
  color: #910102
  &:hover
    transform: none
  &:hover:after
    content: ""
    display: block
    border-bottom: 2px solid #910102
    position: absolute
    bottom: -0.5rem
    animation: lining 0.5s ease-in-out

@keyframes lining
  0%
    width: 0
  100%
    width: 100%
</style>
