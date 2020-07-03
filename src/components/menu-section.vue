<template>
  <router-link
    :to="`/${page_name}`"
    class="btn main_btn text-body3"
    :class="[
      page_name + '_page',
      {
        selected_page: this.selectedPage === this.page_name
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
  background: transparent
  border: none
  cursor: pointer
  text-decoration: none
  color: black
  box-sizing: border-box
  transition: transform 100ms ease-in
  position: relative
  z-index: 1
  &:focus
    outline: none
.main_btn
  margin-right: 36px
  &:hover:after
    content: ""
    width: 100%
    display: block
    border-bottom: 1px solid black
    position: absolute
    left: 0
    animation: lining 0.5s ease-in-out

.selected_page
  color: #910102
  &:hover:after
    content: ""
    display: none

@keyframes lining
  0%
    width: 0
  100%
    width: 100%

@media (min-width: 1300px)

@media (min-width: 1600px)
</style>
