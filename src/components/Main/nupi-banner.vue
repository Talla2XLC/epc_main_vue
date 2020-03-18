<template>
  <div class="nupi-banner">
    <span>Централизованный склад трубопровода Nupi в России</span>
    <p>Спецальные цены для партнёров, сезонные акции, предложения и скидки!</p>
  </div>
</template>

<script>
export default {
  name: "nupi-banner"
};
</script>

<style lang="sass">

.nupi-banner
  width: 50%
  height: 70%
  border: 1px solid #ed001e
  border-radius: 2rem
  display: -webkit-flex
  display: -moz-flex
  display: -ms-flex
  display: -o-flex
  display: flex
  flex-flow: column nowrap
  flex-grow: 1
  align-self: center
  background: url("~@/assets/partners_logo/nupi_logo.png") center no-repeat
  background-size: auto 40%
  padding: 1rem 0.5rem
  box-sizing: border-box
  cursor: pointer
  text-align: center
  transition: transform 200ms ease-in
  >span
    font-family: "calibri", sans-serif
    flex-grow: 1
    font-weight: 600
    font-size: 1.1rem
  >p
    font-family: "calibri", sans-serif

  &:hover
    background-color: #dad7d7
    transform: scale(1.05)

@media (min-width: 900px)

@media (min-width: 1850px)
</style>
