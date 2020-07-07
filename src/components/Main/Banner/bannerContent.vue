<template>
  <div class="nupi-banner-content">
    <span class="nupi-banner-content-top text-h3">
      Официальный логистический центр
      компании Nupi Industrie Italiane S.p.A.
      в&nbsp;РФ&nbsp;и&nbsp;странах&nbsp;СНГ.
    </span>
    <img
      class="nupi-banner-nupi-img"
      src="~@/assets/partners_logo/nupi_logo.png"
      alt="Nupi logo"
    />
    <div class="nupi-banner-content-bottom">
      <span class="nupi-banner-content-bottom-txt text-h3">
        Мы всегда готовы предложить выгодные цены и скидки для Вашей компаний!
      </span>
      <Button type="callback" color="white" @click.native="showFeedbackForm"
        >Перезвоните мне!</Button
      >
    </div>
  </div>
</template>

<script>
import Button from "../../General/Button";

export default {
  name: "banner-content",
  props: ["showFeedbackForm"],
  data() {
    return {};
  },
  components: {
    Button
  }
};
</script>

<style lang="sass" scoped>
.nupi-banner-content
  height: 100%
  display: flex
  flex-flow: column nowrap
  align-items: center
  justify-content: space-between
  text-align: center
  color: #F0EFEF
  @include respond-to(xs)
  @include respond-to(s)
  @include respond-to(m)
    width: 452px
  &-top
    margin-top: 55px
    @include respond-to(xs)
    @include respond-to(s)
    @include respond-to(m)
      margin-top: 48px
    @include respond-to(l)
      margin-top: 55px
    @include respond-to(xl)
      margin-top: 30px
  &-bottom
    display: flex
    flex-flow: column nowrap
    &-txt
      margin-bottom: 40px

.nupi-banner-nupi-img
  width: 123px
  height: 123px
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.15)
  position: absolute
  top: 0
  bottom: 0
  margin: auto 0
  @include respond-to(xs)
  @include respond-to(s)
  @include respond-to(m)
    position: relative
    top: auto
    bottom: auto
    margin: 0
  @include respond-to(l)
    width: 123px
    height: 123px
  @include respond-to(xl)
    width: 150px
    height: 150px

.nupi-banner-callback-btn
  background: #F0EFEF
  box-shadow: 0 0 20px #EE001E
  border-radius: 4px
  border: none
  height: 50px
  align-self: stretch
  margin-top: 40px
  cursor: pointer
  &:focus
    outline: none

@media (max-height: 950px)
  .nupi-banner-content
    &-top
      margin-top: 40px
    &-bottom
      margin-bottom: 30px
      &-txt
        margin-bottom: 30px

@media (max-height: 850px)
  .nupi-banner-content
    &-top
      margin-top: 0
    &-bottom
      margin-bottom: 0
      &-txt
        margin-bottom: 20px

@media (max-height: 750px)
  .nupi-banner-content
    &-top
      margin-top: 0
    &-bottom
      margin-bottom: 0
      &-txt
        margin-bottom: 15px
</style>
