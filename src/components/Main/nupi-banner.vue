<template>
  <div class="nupi-banner">
    <span>Централизованный склад трубопровода Nupi в России</span>
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
  height: 50%
  border: 1px solid red
  border-radius: 2rem
  display: -webkit-flex
  display: -moz-flex
  display: -ms-flex
  display: -o-flex
  display: flex
  flex-grow: 1
  align-self: center
  background: url("~@/assets/banners/nupi/tube.jpg") center no-repeat
  background-size: contain
  padding: 1rem 0
  box-sizing: border-box

  >span
    text-align: center
    flex-grow: 1

@media (min-width: 900px)
  .partners
    padding: 0 10%

@media (min-width: 1850px)
  .partners
    padding: 0.5rem 20%
</style>
