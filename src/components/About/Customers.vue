<template>
  <div class="about-customers">
    <h2
      :class="{
        'text-h2': $mq === 'xl' || $mq === 'l',
        'text-h2T': $mq === 'm'
      }"
    >
      Наши заказчики
    </h2>
    <div class="about-customers-list">
      <div class="about-customers-list-block">
        <span
          :class="{
            'text-body1': $mq === 'xl' || $mq === 'l',
            'text-body3': $mq === 'm'
          }"
        >
          Крупные российские нефтяные<br />
          компании
        </span>
        <div class="about-customers-list-block-svg">
          <LukoilLogo viewBox="0 0 40 40" class="customer-svg lukoil-logo" />
          <TatneftLogo viewBox="0 0 147 40" class="customer-svg tatneft-logo" />
          <GPNLogo viewBox="0 0 82 40" class="customer-svg gpn-logo" />
        </div>
        <div class="about-customers-list-block-decor">
          <div class="about-customers-list-block-decor-dot" />
          <div class="about-customers-list-block-decor-line-left" />
        </div>
      </div>
      <div class="about-customers-list-block">
        <span
          :class="{
            'text-body1': $mq === 'xl' || $mq === 'l',
            'text-body3': $mq === 'm'
          }"
        >
          Малые и средние участники<br />
          нефтяного рынка РФ
        </span>
        <div class="about-customers-list-block-decor">
          <div class="about-customers-list-block-decor-dot" />
          <div class="about-customers-list-block-decor-line-right" />
        </div>
      </div>
    </div>
    <img
      class="about-customers-imageLeft"
      alt="tube-left"
      src="../../assets/images/About/customers_tubeLeft.png"
    />
    <img
      class="about-customers-imageRight"
      alt="tube-right"
      src="../../assets/images/About/customers_tubeRight.png"
    />
    <div class="about-customers-imageFilter" />
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
  position: relative
  display: flex
  flex-flow: column nowrap
  align-items: center
  justify-content: space-between
  min-height: 532px
  width: 100%
  padding: 100px 50px
  box-sizing: border-box
  margin-bottom: 100px
  overflow: hidden
  @include respond-to(xs)
  @include respond-to(s)
  @include respond-to(m)
    min-height: 377px
    padding: 70px 20px
    margin-bottom: 70px
  @include respond-to(l)
    min-height: 532px
    padding: 100px 50px
    margin-bottom: 100px
  @include respond-to(xl)
    min-height: 532px
    padding: 100px 50px
    margin-bottom: 100px
  >h2
    position: relative
    z-index: 10
  &-list
    display: flex
    flex-flow: row nowrap
    justify-content: center
    width: 100%
    position: relative
    z-index: 10
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
      @include respond-to(xs)
      @include respond-to(s)
      @include respond-to(m)
        padding: 32px 0
      @include respond-to(l)
        padding: 44px 52px 39px
      @include respond-to(xl)
        padding: 44px 27px 39px
      &:first-of-type
        margin-right: 20px
      >span
        width: 505px
        @include respond-to(xs)
        @include respond-to(s)
        @include respond-to(m)
          width: 334px
        @include respond-to(l)
          width: 505px
        @include respond-to(xl)
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
          @include respond-to(xs)
          @include respond-to(s)
          @include respond-to(m)
            height: 65px
            width: 39px
          @include respond-to(l)
            height: 105px
            width: 62px
          @include respond-to(xl)
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
          @include respond-to(xs)
          @include respond-to(s)
          @include respond-to(m)
            height: 65px
            width: 39px
          @include respond-to(l)
            height: 105px
            width: 62px
          @include respond-to(xl)
            height: 105px
            width: 62px

.customer-svg:nth-of-type(2)
  margin: 0 38px
  @include respond-to(xs)
  @include respond-to(s)
  @include respond-to(m)
  @include respond-to(l)
    margin: 0 38px
  @include respond-to(xl)
    margin: 0 50px

.lukoil-logo
  width: 40px
  height: 40px
  @include respond-to(xs)
  @include respond-to(s)
  @include respond-to(m)
    width: 30px
    height: 30px
  @include respond-to(l)
    width: 40px
    height: 40px
  @include respond-to(xl)
    width: 40px
    height: 40px
  &:hover >path:first-of-type
    fill: #E22739

.tatneft-logo
  width: 147px
  height: 40px
  @include respond-to(xs)
  @include respond-to(s)
  @include respond-to(m)
    width: 110px
    height: 30px
  @include respond-to(l)
    width: 147px
    height: 40px
  @include respond-to(xl)
    width: 147px
    height: 40px
  >g >path
    fill: #4F4F51
  &:hover
    >g >path:nth-of-type(even)
      fill: #71BB74
    >g >path:nth-of-type(odd)
      fill: #E9444B

.gpn-logo
  width: 82px
  height: 40px
  @include respond-to(xs)
  @include respond-to(s)
  @include respond-to(m)
    width: 62px
    height: 30px
  @include respond-to(l)
    width: 82px
    height: 40px
  @include respond-to(xl)
    width: 82px
    height: 40px
  &:hover
    >path
      fill: #336CD1
    >path:nth-of-type(5)
      fill: #FFFFFF

.about-customers-imageLeft
  position: absolute
  z-index: 0
  left: 0
  bottom: 0
  object-fit: none
  object-position: right top
  width: 535px
  height: 514px
  @include respond-to(xs)
  @include respond-to(s)
  @include respond-to(m)
    width: 269px
    height: 361px
  @include respond-to(l)
    width: 535px
    height: 514px
  @include respond-to(xl)
    width: 580px
    height: 518px

.about-customers-imageRight
  position: absolute
  z-index: 0
  right: 0
  bottom: 0
  object-fit: none
  object-position: left top
  width: 619px
  height: 393px
  @include respond-to(xs)
  @include respond-to(s)
  @include respond-to(m)
    width: 273px
    height: 239px
  @include respond-to(l)
    width: 619px
    height: 393px
  @include respond-to(xl)
    width: 664px
    height: 396px
.about-customers-imageFilter
  position: absolute
  z-index: 1
  top: 0
  bottom: 0
  left: 0
  right: 0
  background: linear-gradient(94.68deg, #F0EFEF -2.48%, rgba(240, 239, 239, 0) 98.88%)
</style>
