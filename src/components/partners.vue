<template>
  <div class="partners">
    <a href="https://www.nupiindustrieitaliane.com/en/index.html">
      <img
        class="partner_logo"
        src="@/assets/partners_logo/nupi_logo.png"
        height="75"
        width="76"
      />
    </a>
    <a href="https://www.scully.com">
      <img
        class="partner_logo"
        src="@/assets/partners_logo/scully_logo.png"
        height="75"
        width="250"
      />
    </a>
    <a href="https://www.gardnerdenver.com/ru-ru/emcowheaton">
      <img
        class="partner_logo"
        src="@/assets/partners_logo/emco_logo.png"
        height="75"
        width="200"
      />
    </a>
    <a href="https://www.rotork.com/en">
      <img
        class="partner_logo"
        src="@/assets/partners_logo/rotork_logo.png"
        height="75"
        width="250"
      />
    </a>
    <a href="http://tokheim.com/products-solutions/progauge/">
      <img
        class="partner_logo"
        src="@/assets/partners_logo/progauge_logo.png"
        height="75"
        width="250"
      />
    </a>
  </div>
</template>

<script>
export default {
  name: "partners"
};
</script>

<style lang="sass">
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
  .partners
    padding: 0.5rem 20%
</style>
