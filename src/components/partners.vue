<template>
  <div class="partners">
    <a class="partner_logo-link" href="https://www.scully.com">
      <img
        class="partner_logo-img scully-logo"
        src="@/assets/partners_logo/scully_logo.png"
        alt="partner_logo"
        height="40"
        width="150"
      />
    </a>
    <a
      class="partner_logo-link"
      href="https://www.gardnerdenver.com/ru-ru/emcowheaton"
    >
      <img
        class="partner_logo-img emco-logo"
        src="@/assets/partners_logo/emco_logo.png"
        alt="partner_logo"
        height="40"
        width="162"
      />
    </a>
    <a
      class="partner_logo-link"
      href="https://www.nupiindustrieitaliane.com/en/index.html"
    >
      <img
        class="partner_logo-img nupi-logo"
        src="@/assets/partners_logo/nupi_logo.png"
        alt="partner_logo"
        height="50"
        width="50"
      />
    </a>
    <a class="partner_logo-link" href="https://www.rotork.com/en">
      <img
        class="partner_logo-img rotork-logo"
        src="@/assets/partners_logo/rotork_logo.png"
        alt="partner_logo"
        height="40"
        width="136"
      />
    </a>
    <a class="partner_logo-link" href="https://evbox.com/en/">
      <img
        class="partner_logo-img evbox-logo"
        src="@/assets/partners_logo/evbox_logo.png"
        alt="partner_logo"
        height="46"
        width="134"
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
  position: sticky
  bottom: 40px
  z-index: 8

.partner_logo
  &-img
    object-fit: contain
    cursor: pointer
    transition: transform 200ms ease-in
    &:hover
      filter: none
      transform: scale(1.1)
  &-link
    display: flex
    flex-flow: row nowrap
    align-items: center
    justify-content: center
    height: 80px
    width: 190px

.scully-logo
  filter: saturate(0)

.rotork-logo
  filter: saturate(0) contrast(40%)

.emco-logo
  filter: saturate(0) opacity(50%)

.nupi-logo
  filter: saturate(0) opacity(60%)

.evbox-logo
  filter: saturate(0) contrast(0) brightness(0.9)
@media (min-width: 900px)
  .partners
    padding: 0 205px

@media (min-width: 1850px)
  .partners
    padding: 0 205px

@media (max-height: 950px)
  .partners
    bottom: 40px
  .partner_logo-link
    height: 64px
</style>
