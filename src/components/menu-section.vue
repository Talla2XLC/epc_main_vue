<template>
	<button class="btn main_btn"
	:class="[page_name + '_page', {selected_page: this.selectedPage === this.page_name}]"
	@click.prevent="selectPage"
	><slot></slot></button>
</template>

<script>
export default {
  name: "menu-section",
	props: ['page_name'],
  computed: {
		selectedPage() {
			return this.$store.state.selectedPage;
		},
	},
	methods: {
		selectPage() {
  		this.$store.dispatch('selectPage', this.page_name);
  	},
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
	box-sizing: border-box
	font-size: 24px
	transition: transform 100ms ease-in
	position: relative
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
		bottom: -0.7rem

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