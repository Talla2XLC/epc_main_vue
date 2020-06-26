<template>
  <div class="feedback-form">
    <span class="feedback-form-txt">
      Пожалуйста, отправьте нам Ваши данные и мы с Вами обязательно свяжемся!
    </span>
    <div class="feedback-form-fields"></div>
  </div>
</template>

<script>
export default {
  name: "feedbackForm",
  data() {
    return {
      errors: [],
      name: null,
      phone: null
    };
  }
};
</script>

<style lang="sass" scoped>
.feedback-form
  position: absolute
  max-width: 505px
  max-height: 620px
  height: 80%
  box-sizing: border-box
  z-index: 10
  background: #FFFFFF
</style>
