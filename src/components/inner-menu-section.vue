<template>
  <router-link :to="`/products/${page_name}`"
    class="btn inner_btn"
    :class="[
      page_name + '_page',
      { selected_page: this.selectedPage === this.page_name }
    ]"
    @click.native="selectPage"
  >
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: "inner-menu-section",
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
	text-transform: uppercase
	background: transparent
	border: none
	cursor: pointer
	text-decoration: none
	box-sizing: border-box
	font-size: 24px
	transition: transform 100ms ease-in
	position: relative
	font-family: "montserrat-regular", "calibri", sans-serif
	&:hover
		font-weight: 800
	&:focus
		outline: none

.inner_btn
	font-size: 24px
	color: rgb(255, 255, 255)
	margin-bottom: 2rem
	text-transform: none
	line-height: 1.5rem
	text-align: left
	&:hover
		font-weight: 800
		transform: none

.selected_page
	color: #910102
	&:hover
		transform: none
</style>
