<template>
	<transition name="glow" appear>
			<div class="burger_div">
				<div class="burger-top"></div>
				<div class="burger-center"></div>
				<div class="burger-bot"></div>
			</div>
		</transition>
</template>

<script>
	
</script>

<style lang="sass" scoped>
.burger_div
	position: absolute
	top: 1rem
	display: -webkit-flex
	display: -moz-flex
	display: -ms-flex
	display: -o-flex
	display: flex
	flex-flow: column nowrap
	align-items: center

.burger-top
	height: 0.5rem
	width: 3rem
	border-bottom: solid #ed001e 1px
.burger-center
	height: 0.5rem
	width: 2rem
	border-bottom: solid #ed001e 1px
.burger-bot
	height: 0.5rem
	width: 3rem
	border-bottom: solid #ed001e 1px
</style>