<template>
  <div class="nupi-banner-feedback-form">
    <div class="nupi-banner-feedback-form-header">
      <div
        class="nupi-banner-feedback-form-close-cross"
        @click="closeFeedbackForm"
      />
    </div>
    <div class="nupi-banner-feedback-form-content">
      <span class="nupi-banner-feedback-form-content-txt text-body2">
        Пожалуйста, отправьте нам Ваши данные и мы с Вами обязательно свяжемся!
      </span>
      <div class="nupi-banner-feedback-form-content-fields" />
    </div>
  </div>
</template>

<script>
export default {
  name: "feedbackForm",
  props: ["closeFeedbackForm"],
  data() {
    return {
      errors: [],
      name: null,
      phone: null
    };
  },
  components: {}
};
</script>

<style lang="sass" scoped>
.nupi-banner-feedback-form
  height: 100%
  box-sizing: border-box
  z-index: 10
  display: flex
  flex-flow: column nowrap
  &-header
    align-self: flex-end
  &-content
    background: #FFFFFF
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25)
    flex-grow: 1
    padding: 72px 48px 90px
    &-txt
      display: block
      text-align: center
  &-close-cross
    position: relative
    width: 48px
    height: 48px
    cursor: pointer
    &:after
      content: ""
      position: absolute
      width: 4px
      height: 30px
      background: #EC001D
      transform: rotate(-45deg)
      top: 20%
      right: 45%
    &:before
      content: ""
      position: absolute
      width: 4px
      height: 30px
      background: #EC001D
      transform: rotate(-135deg)
      top: 20%
      right: 45%
    &:hover:after, &:hover:before
      background: #C4C4C4
    &:focus
      outline: none
</style>
