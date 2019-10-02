<template>
	<transition name="glow" appear>
	<div class="burger_div">
		<div class="burger-top"></div>
		<div class="burger-center"></div>
		<div class="burger-bot"></div>
	</div>
	</transition>
</template>

<script></script>

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
	margin-top: 0.5rem
	width: 3rem
	border-bottom: solid #ed001e 1px
	animation: glow 2s infinite ease-in-out
.burger-center
	margin-top: 0.5rem
	width: 2rem
	border-bottom: solid #ed001e 1px
	animation: glow 2s infinite ease-in-out
.burger-bot
	margin-top: 0.5rem
	width: 3rem
	border-bottom: solid #ed001e 1px
	animation: glow 2s infinite ease-in-out
@keyframes glow
	0%
		-webkit-box-shadow: none
		-moz-box-shadow: none
		box-shadow: none
	50%
		-webkit-box-shadow: 0px 0px 10px 1px rgba(245,27,27,1)
		-moz-box-shadow: 0px 0px 10px 1px rgba(245,27,27,1)
		box-shadow: 0px 0px 10px 0.2px rgba(245,27,27,1)
	100%
		-webkit-box-shadow: none
		-moz-box-shadow: none
		box-shadow: none
</style>
