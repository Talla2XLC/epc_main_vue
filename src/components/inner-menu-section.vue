<template>
  <a
    :href="pageLink"
    class="btn inner_btn"
    :class="[
      page_name + '_page',
      { selected_page: this.selectedPage === this.page_name }
    ]"
    @click.native="selectPage"
    @mouseover="setProductNavImg"
    @mouseleave="hideProductNavImg"
  >
    <slot />
  </a>
</template>

<script>
export default {
  name: "inner-menu-section",
  props: ["page_name"],
  computed: {
    selectedPage() {
      return this.$store.state.selectedPage;
    },
    pageLink() {
      return this.$store.state[this.page_name];
    }
  },
  methods: {
    selectPage() {
      this.$store.dispatch("selectPage", this.page_name);
    },
    setProductNavImg() {
      this.$store.dispatch("setProductNavImg", this.page_name);
    },
    hideProductNavImg() {
      this.$store.dispatch("hideProductNavImg");
    }
  }
};
</script>

<style lang="sass" scoped>
.btn
  text-transform: uppercase
  background: transparent
  border: none
  cursor: pointer
  text-decoration: none
  box-sizing: border-box
  font-size: 2vw
  transition: transform 100ms ease-in
  position: relative
  font-family: "montserrat-regular", "calibri", sans-serif
  &:hover
    font-weight: 800
    -moz-text-shadow: 0 0 45px #910102, 0 0 25px #910102, 0 0 10px #910102, 0 0 15px #910102
    -webkit-text-shadow: 0 0 45px #910102, 0 0 25px #910102, 0 0 10px #910102, 0 0 15px #910102
    text-shadow: 0 0 45px #910102, 0 0 25px #910102, 0 0 10px #910102, 0 0 15px #910102

  &:focus
    outline: none

.inner_btn
  color: rgb(255, 255, 255)
  margin-bottom: 2rem
  text-transform: none
  line-height: 1.5rem
  text-align: left
  z-index: 2
  &:hover
    font-weight: 800
    transform: none

.selected_page
  color: #910102
  &:hover
    transform: none

@media (min-width: 900px)
  .btn
    font-size: 1.5vw
    line-height: 2vw
</style>
