<template>
  <div class="partners">
    <a
      class="partner_logo-link"
      href="https://www.gardnerdenver.com/ru-ru/emcowheaton"
    >
      <img
        class="partner_logo-img"
        src="@/assets/partners_logo/emco_logo.png"
        height="40"
        width="162"
        alt="partner_logo"
      />
    </a>
    <a class="partner_logo-link" href="https://www.scully.com">
      <img
        class="partner_logo-img"
        src="@/assets/partners_logo/scully_logo.png"
        height="40"
        width="150"
        alt="partner_logo"
      />
    </a>
    <a
      class="partner_logo-link"
      href="https://www.nupiindustrieitaliane.com/en/index.html"
    >
      <img
        class="partner_logo-img nupi_logo"
        src="@/assets/partners_logo/nupi_logo.png"
        height="50"
        width="50"
        alt="partner_logo"
      />
    </a>
    <a
      class="partner_logo-link"
      href="http://tokheim.com/products-solutions/progauge/"
    >
      <img
        class="partner_logo-img"
        src="@/assets/partners_logo/progauge_logo.png"
        height="46"
        width="122"
        alt="partner_logo"
      />
    </a>
    <a class="partner_logo-link" href="https://www.rotork.com/en">
      <img
        class="partner_logo-img"
        src="@/assets/partners_logo/rotork_logo.png"
        height="40"
        width="136"
        alt="partner_logo"
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
  padding: 0 205px
  background: #dad7d7
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25)
  position: relative
  z-index: 6

.partner_logo
  &-img
    object-fit: contain
    cursor: pointer
    filter: grayscale(100%) contrast(80%)
    opacity: 0.7
    transition: transform 200ms ease-in
    &:hover
      filter: none
      opacity: 1
      transform: scale(1.1)
  &-link
    display: flex
    flex-flow: row nowrap
    align-items: center
    justify-content: center
    height: 94px
    width: 190px

@media (min-width: 900px)
  .partners
    padding: 0 205px

@media (min-width: 1850px)
  .partners
    padding: 0 205px
</style>
