<template>
  <div class="feedback-form" :class="{ 'popup-form': popupForm }">
    <div class="feedback-form-header" v-if="popupForm">
      <div class="feedback-form-close-cross" @click="closeFeedbackForm" />
    </div>
    <div
      class="feedback-form-content"
      :class="{ 'popup-form-content': popupForm }"
    >
      <span
        class="feedback-form-content-txt"
        :class="{
          'text-h3': !popupForm && ($mq === 'l' || $mq === 'xl' || $mq === 'm'),
          'text-h4': !popupForm && $mq === 's',
          'text-body2': popupForm && ($mq === 'l' || $mq === 'xl'),
          'text-body3': popupForm && $mq === 'm',
          'text-body5': popupForm && $mq === 's'
        }"
      >
        <slot></slot>
      </span>
      <div class="feedback-form-content-fields">
        <label
          for="feedback-form-input-name"
          class="feedback-form-input-label"
          :class="{ 'popup-form-input-label': popupForm }"
        >
          <span
            class="feedback-form-input-label-txt"
            :class="{
              'text-caption': $mq === 'l' || $mq === 'xl' || $mq === 'm',
              'text-caption2': $mq === 's'
            }"
            >Имя</span
          >
          <input
            id="feedback-form-input-name"
            maxlength="30"
            class="feedback-form-input text-body3"
            v-model="name"
            @keyup="filterInputName"
          />
        </label>
        <label
          for="feedback-form-input-phone"
          class="feedback-form-input-label"
          :class="{ 'popup-form-input-label': popupForm }"
        >
          <span
            class="feedback-form-input-label-txt"
            :class="{
              'text-caption': $mq === 'l' || $mq === 'xl' || $mq === 'm',
              'text-caption2': $mq === 's'
            }"
            >Телефон</span
          >
          <input
            id="feedback-form-input-phone"
            maxlength="17"
            class="feedback-form-input text-body3"
            v-model="phone"
            @keyup="filterInputPhone"
          />
        </label>
        <Button
          type="submit"
          :inactive="!validated"
          :color="popupForm ? 'grey' : 'red'"
          @click.native="sendEmail"
        >
          {{ popupForm ? "Отправить" : "Перезвоните мне!" }}
        </Button>
      </div>
    </div>
    <img
      class="feedback-form-background"
      src="../../assets/images/feedbackForm.png"
      alt="feedbackForm-background"
      v-if="!popupForm"
    />
    <div class="feedback-form-background-filter" v-if="!popupForm" />
  </div>
</template>

<script>
import Button from "./Button";
import emailjs from "emailjs-com";

export default {
  name: "feedbackForm",
  props: ["closeFeedbackForm", "popupForm", "emailDeliverHandler"],
  data() {
    return {
      errors: [],
      name: null,
      phone: null,
      validated: false
    };
  },
  components: {
    Button
  },
  methods: {
    validateForm() {
      this.errors = [];

      if (!this.name) {
        this.errors.push("Укажите имя");
      }
      if (!this.phone) {
        this.errors.push("Укажите телефон");
      }

      this.validated = !this.errors.length;
    },
    filterInputName() {
      if (this.name) {
        this.name = this.name.replace(
          /[0-9\r\n\t\f\v!@#$%^&*()_\-+=|/\\[\]{};:',.<>?№\x22]/gi,
          ""
        );
      }
      this.validateForm();
    },
    filterInputPhone() {
      if (this.phone) {
        this.phone = this.phone.replace(/[a-zA-Zа-яА-Я\s]/gi, "");
      }
      this.validateForm();
    },
    sendEmail() {
      if (this.name && this.phone) {
        let templateParams = {
          name: this.name,
          phone: this.phone
        };

        emailjs
          .send(
            "yandex",
            "template_KZss3ia0",
            templateParams,
            "user_SDm5qWRIDzUplj7ponZjX"
          )
          .then(
            result => {
              this.emailDelivered();
              console.log("SUCCESS!", result.status, result.text);
            },
            error => {
              console.log("FAILED...", error);
            }
          );
      }
    },
    emailDelivered() {
      ym(65858998, "reachGoal", "getFeedback");
      this.errors = [];
      this.name = null;
      this.phone = null;
      this.validated = false;
      this.emailDeliverHandler(true);
    }
  }
};
</script>

<style lang="sass" scoped>
.feedback-form
  box-sizing: border-box
  display: flex
  flex-flow: column nowrap
  position: relative
  align-content: flex-start
  padding: 100px 105px
  background-size: contain
  min-height: 536px
  overflow: hidden
  @include respond-to(s)
    padding: 50px 12px
    min-height: 370px
  @include respond-to(m)
    padding: 70px 20px
    min-height: 476px
  @include respond-to(l)
    padding: 100px 105px
    min-height: 476px
  @include respond-to(xl)
    padding: 100px 145px
    min-height: 476px
  &-background
    position: absolute
    object-fit: cover
    top: 0
    right: 0
    height: 100%
    z-index: 0
    @include respond-to(s)
      object-position: 138px -60px
      object-fit: none
    @include respond-to(m)
      width: 672px
      object-position: -165px
    @include respond-to(l)
      object-position: 100px
    @include respond-to(xl)
    &-filter
      position: absolute
      background: linear-gradient(87.27deg, #F0EFEF 49.5%, rgba(240, 239, 239, 0) 97.5%)
      top: 0
      right: 0
      left: 0
      bottom: 0
      z-index: 1
      @include respond-to(s)
        background: linear-gradient(92.05deg, #F0EFEF 76%, rgba(240, 239, 239, 0) 145.06%)

  &-header
    align-self: flex-end
    position: relative
    @include respond-to(s)
      top: -24px !important
      right: 12px

  &-content
    flex-grow: 1
    box-sizing: border-box
    display: flex
    flex-flow: column nowrap
    width: 505px
    position: relative
    z-index: 3
    @include respond-to(s)
      width: 100%
    @include respond-to(m)
      width: 334px
    @include respond-to(l)
      width: 505px
    @include respond-to(xl)
      width: 560px
    &-txt
      display: block
      text-align: left
      margin-bottom: 37px
      @include respond-to(s)
        margin-bottom: 20px
        text-align: center
      @include respond-to(m)
        margin-bottom: 37px
      @include respond-to(l)
        margin-bottom: 37px
      @include respond-to(xl)
        margin-bottom: 37px
    &-fields
      display: flex
      flex-flow: column nowrap

  &-close-cross
    position: relative
    width: 48px
    height: 48px
    cursor: pointer
    @include respond-to(s)
      width: 24px
      height: 24px
    &:after
      content: ""
      position: absolute
      width: 4px
      height: 30px
      background: #EC001D
      transform: rotate(-45deg)
      top: 20%
      right: 45%
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15)
      @include respond-to(s)
        width: 2.67px
        height: 20px
        top: 10%
    &:before
      content: ""
      position: absolute
      width: 4px
      height: 30px
      background: #EC001D
      transform: rotate(-135deg)
      top: 20%
      right: 45%
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15)
      @include respond-to(s)
        width: 2.67px
        height: 20px
        top: 10%
    &:hover:after, &:hover:before
      background: #F0EFEF
      box-shadow: none
    &:active:after, &:active:before
      background: #F0EFEF
      box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.15)
    &:focus
      outline: none

  &-input
    background: #FFFFFF
    border: 1px solid #DDDEE4
    box-sizing: border-box
    border-radius: 2px
    padding: 10px 14px
    margin-bottom: 14px
    @include respond-to(s)
      margin-bottom: 6px
    &-label
      display: flex
      flex-flow: column nowrap
      &:last-of-type
        margin-bottom: 31px
        @include respond-to(s)
          margin-bottom: 18px

.popup-form
  height: 100%
  z-index: 10
  padding: 0
  background: none
  min-height: 0
  overflow: visible
  @include respond-to(s)
    width: 100%
  &-content
    width: 100%
    background: #FFFFFF
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25)
    padding: 72px 48px 90px
    @include respond-to(s)
      padding: 30px 12px 22px !important
    > span
      text-align: center
      margin-bottom: 60px
      @include respond-to(s)
        margin-bottom: 16px !important
      @include respond-to(m)
        margin-bottom: 60px
      @include respond-to(l)
        margin-bottom: 60px
      @include respond-to(xl)
        margin-bottom: 60px
  &-input-label:last-of-type
    margin-bottom: 8px

@media (max-height: 850px)
  .popup-form
    &-content
      padding: 40px 48px
      justify-content: space-around
  .feedback-form-header
      position: absolute
      top: -50px
@media (max-height: 790px)
  .popup-form
    &-content
      > span
        margin-bottom: 0
  .feedback-form-header
    top: 0
    z-index: 4
</style>
