<template>
  <div class="about-customers">
    <h2 class="text-h2">Наши заказчики</h2>
    <div class="about-customers-list">
      <div class="about-customers-list-block">
        <span class="text-body1">
          Крупные российские нефтяные<br />
          компании
        </span>
        <div class="about-customers-list-block-svg">
          <LukoilLogo class="customer-svg lukoil-logo" />
          <TatneftLogo class="customer-svg tatneft-logo" />
          <GPNLogo class="customer-svg gpn-logo" />
        </div>
        <div class="about-customers-list-block-decor">
          <div class="about-customers-list-block-decor-dot" />
          <div class="about-customers-list-block-decor-line-left" />
        </div>
      </div>
      <div class="about-customers-list-block">
        <span class="text-body1">
          Малые и средние участники<br />
          нефтяного рынка РФ
        </span>
        <div class="about-customers-list-block-decor">
          <div class="about-customers-list-block-decor-dot" />
          <div class="about-customers-list-block-decor-line-right" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LukoilLogo from "@/assets/svg/About/customers-Lukoil.svg";
import TatneftLogo from "@/assets/svg/About/customers-Tatneft.svg";
import GPNLogo from "@/assets/svg/About/customers-GPN.svg";

export default {
  name: "Customers",
  components: {
    LukoilLogo,
    TatneftLogo,
    GPNLogo
  }
};
</script>

<style scoped lang="sass">
.about-customers
  display: flex
  flex-flow: column nowrap
  align-items: center
  justify-content: space-between
  min-height: 532px
  background: linear-gradient(94.68deg, #F0EFEF -2.48%, rgba(240, 239, 239, 0) 98.88%), url('../../assets/images/About/customers_tubeLeft.png') no-repeat left top, url('../../assets/images/About/customers_tubeRight.png') no-repeat right bottom
  width: 100%
  padding: 100px 50px
  box-sizing: border-box
  margin-bottom: 100px
  &-list
    display: flex
    flex-flow: row nowrap
    justify-content: center
    width: 100%
    &-block
      background: #FFFFFF
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.2)
      display: flex
      flex-flow: column nowrap
      align-items: center
      text-align: center
      justify-content: center
      padding: 44px 52px 39px
      box-sizing: border-box
      position: relative
      &:first-of-type
        margin-right: 20px
      >span
        width: 505px
      &-svg
        margin-top: 24px
      &-decor
        position: absolute
        top: 6px
        display: flex
        flex-flow: row
        justify-content: center
        align-items: center
        &-dot
          background: #940000
          border-radius: 50%
          width: 20px
          height: 20px
        &-line-left
          position: absolute
          bottom: 0
          left: 9px
          border-left: 2px solid #940000
          border-top: 2px solid #940000
          height: 105px
          width: 62px
        &-line-right
          position: absolute
          bottom: 0
          right: 9px
          border-right: 2px solid #940000
          border-top: 2px solid #940000
          height: 105px
          width: 62px

.customer-svg
  margin: 0 19px

.lukoil-logo:hover
  >path:first-of-type
    fill: #E22739

.tatneft-logo
  >g >path
    fill: #4F4F51
  &:hover
    >g >path:nth-of-type(even)
      fill: #71BB74
    >g >path:nth-of-type(odd)
      fill: #E9444B

.gpn-logo
  &:hover
    >path
      fill: #336CD1
    >path:nth-of-type(5)
      fill: #FFFFFF
</style>
