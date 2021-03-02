<template>
  <div class="gilbarco-banner-content">
    <span
      class="gilbarco-banner-content-top"
      :class="{
        'text-h2': $mq === 'xl' || $mq === 'l',
        'text-h2T': $mq === 'm',
        'text-h4': $mq === 's'
      }"
    >
      СПЕЦИАЛЬНАЯ АКЦИЯ!
    </span>
    <img
      class="gilbarco-banner-gilbarco-img"
      src="~@/assets/partners_logo/gilbarco_logo.png"
      alt="Gilbarco logo"
    />
    <div class="gilbarco-banner-content-bottom">
      <span
        class="gilbarco-banner-content-bottom-txt"
        :class="{
          'text-h3': $mq === 'xl' || $mq === 'l' || $mq === 'm',
          'text-h5': $mq === 's'
        }"
      >
        Эксклюзивные цены на запасные части со склада в Москве
        от&nbsp;поставщика ПАО&nbsp;"ЛУКОЙЛ". Особые&nbsp;скидки для оптовых
        клиентов!
      </span>
      <Button
        type="callback"
        color="white"
        @click.native="$router.push({ name: 'specialOffer' })"
        >Посмотреть прайс-лист</Button
      >
    </div>
  </div>
</template>

<script>
import Button from "../../General/Button";

export default {
  name: "gilbarco-banner-content",
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
.gilbarco-banner-content
  height: 100%
  width: 100%
  display: flex
  flex-flow: column nowrap
  align-items: center
  justify-content: space-between
  text-align: center
  color: #F0EFEF
  @include respond-to(s)
    padding: 0 12px
  @include respond-to(m)
  &-top
    @include respond-to(s)
    @include respond-to(m)
    @include respond-to(l)
    @include respond-to(xl)
  &-bottom
    display: flex
    flex-flow: column nowrap
    &-txt
      margin-bottom: 60px
      @include respond-to(s)
        margin-bottom: 22px !important

.gilbarco-banner-gilbarco-img
  width: auto
  height: auto
  position: relative
  top: 0
  bottom: 0
  margin-top: 50px
  @include respond-to(s)
    width: auto
    height: auto
    position: relative
  @include respond-to(m)
    position: relative
    top: auto
    bottom: auto
    margin: 0
  @include respond-to(l)
    width: auto
    height: auto
    margin-top: 50px
  @include respond-to(xl)
    width: auto
    height: auto

.gilbarco-banner-callback-btn
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
  .gilbarco-banner-content
    &-top
      margin-top: 40px
    &-bottom
      margin-bottom: 30px
      &-txt
        margin-bottom: 30px

@media (max-height: 850px)
  .gilbarco-banner-content
    &-top
      margin-top: 0
    &-bottom
      margin-bottom: 0
      &-txt
        margin-bottom: 20px

@media (max-height: 750px)
  .gilbarco-banner-content
    &-top
      margin-top: 0
    &-bottom
      margin-bottom: 0
      &-txt
        margin-bottom: 15px

@media (max-height: 750px)
  .gilbarco-banner-content
    &-bottom
      &-txt
        margin-bottom: 5px
</style>
