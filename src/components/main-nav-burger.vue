<template>
  <div class="burger-div">
    <div class="burger-top"></div>
    <div class="burger-center"></div>
    <div class="burger-bot"></div>
  </div>
</template>

<script></script>

<style lang="sass" scoped>
.burger-div
    position: relative
    display: -webkit-flex
    display: -moz-flex
    display: -ms-flex
    display: -o-flex
    display: flex
    flex-flow: column nowrap
    align-items: center

.burger-top
    width: 3rem
    border: 0.5px solid #ed001e
    animation: glow 3s infinite ease-in-out 1s
    box-sizing: border-box
.burger-center
    margin: 0.5rem 0
    width: 2rem
    border: 0.5px solid #ed001e
    animation: glow 3s infinite ease-in-out 0.5s
.burger-bot
    margin-bottom: 0.6rem
    width: 3rem
    border: 0.5px solid #ed001e
    animation: glow 3s infinite ease-in-out
</style>
