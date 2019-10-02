<template>
  <button
    class="btn inner_btn"
    :class="[
      page_name + '_page',
      { selected_page: this.selectedPage === this.page_name }
    ]"
    @click.prevent="selectPage"
  >
    <slot></slot>
  </button>
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
	font-size: 18px
	margin-bottom: 1rem
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
	&:hover:after
		content: ""
		width: 100%
		display: block
		border-bottom: 2px solid #910102
		position: absolute
		bottom: -0.7rem
</style>
