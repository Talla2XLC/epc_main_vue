<template>
	<div class="main_page">
		<div class="main_content">
			<img class="epc_logo" src="@/assets/logo.png" @click="switchMainMenu">
			<div class="content_div">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure illum eum porro. Iure voluptates voluptatem assumenda reiciendis. Autem modi ipsa, iure voluptatum saepe voluptatibus provident ducimus consequuntur qui optio! Magni ullam blanditiis, quasi, perspiciatis autem beatae eum at ad sed commodi mollitia. Similique officia accusantium et, nulla cumque. Vel esse quas quo non, totam rem eum consequuntur pariatur excepturi animi quam eos, quibusdam modi commodi nobis repellendus mollitia beatae, itaque aut. Eaque nam ex maiores necessitatibus, dolor animi assumenda iste eius repellat rem, quia labore enim voluptate placeat perspiciatis quis doloribus sed quos tempore distinctio ut. Molestiae dolores impedit temporibus?
			</div>
		</div>
		<div class="partners">
			<a href="https://www.nupiindustrieitaliane.com/en/index.html"><img class="partner_logo" src="@/assets/partners_logo/nupi_logo.png" height="75" width="76"></a>
			<a href="https://www.scully.com"><img class="partner_logo" src="@/assets/partners_logo/scully_logo.png" height="75" width="250"></a>
			<a href="https://www.gardnerdenver.com/ru-ru/emcowheaton"><img class="partner_logo" src="@/assets/partners_logo/emco_logo.png" height="75" width="200"></a>
			<a href="https://www.rotork.com/en"><img class="partner_logo" src="@/assets/partners_logo/rotork_logo.png" height="75" width="250"></a>
			<a href="http://tokheim.com/products-solutions/progauge/"><img class="partner_logo" src="@/assets/partners_logo/progauge_logo.png" height="75" width="250"></a>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Main',
  computed: {
    mainMenuVisible() {
      return this.$store.state.mainMenuVisible;
    },
  },
	methods: {
		switchMainMenu() {
			if (this.mainMenuVisible) {
  			this.$store.dispatch('hideMainMenu');
			} else {
  			this.$store.dispatch('showMainMenu');
			}
  	}
	}
};
</script>

<style lang="sass" scoped>
.main_page	
  flex-grow: 1
  display: -webkit-flex
  display: -moz-flex
  display: -ms-flex
  display: -o-flex
  display: flex
  flex-flow: column nowrap
  z-index: 5

.main_content
	flex-grow: 1
	display: -webkit-flex
	display: -moz-flex
	display: -ms-flex
	display: -o-flex
	display: flex
	flex-flow: row nowrap
	align-items: center
	justify-content: space-between
	padding: 0 10%
	box-sizing: border-box

.epc_logo
	cursor: pointer
	transition: transform 200ms ease-in
	margin-right: 5rem
	&:hover
		transform: scale(1.15)

.content_div
	width: 50%
	font-family: "montserrat-regular", "calibri", sans-serif
	text-align: justify
	box-sizing: border-box
	line-height: 1.5rem

.partners
	display: -webkit-flex
	display: -moz-flex
	display: -ms-flex
	display: -o-flex
	display: flex
	flex-flow: row nowrap
	justify-content: space-between
	padding: 0.5rem 10%
	min-height: 5vh
	background: #dad7d7

.partner_logo
	height: 4rem
	width: auto
	cursor: pointer
	filter: grayscale(100%) contrast(80%)
	opacity: 0.7
	transition: transform 200ms ease-in
	&:hover
		filter: none
		opacity: 1
		transform: scale(1.1)

@media (min-width: 1850px)
	.main_content, .partners
		padding: 0.5rem 20%
</style>