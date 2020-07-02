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
        class="feedback-form-content-txt "
        :class="popupForm ? 'text-body2' : 'text-h3'"
      >
        <slot></slot>
      </span>
      <div class="feedback-form-content-fields">
        <label for="feedback-form-input-name" class="feedback-form-input-label">
          <span class="feedback-form-input-label-txt text-caption">Имя</span>
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
        >
          <span class="feedback-form-input-label-txt text-caption"
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
    },
    emailDelivered() {
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
  padding: 105px
  background: linear-gradient(87.27deg, #F0EFEF 49.5%, rgba(240, 239, 239, 0) 97.5%), url('../../assets/images/feedbackFormBCG.jpg') no-repeat right
  background-size: contain
  min-height: 563px

  &-header
    align-self: flex-end
    position: relative

  &-content
    flex-grow: 1
    box-sizing: border-box
    display: flex
    flex-flow: column nowrap
    justify-content: space-between
    width: 505px
    &-txt
      display: block
      text-align: left
    &-fields
      display: flex
      flex-flow: column nowrap

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

  &-input
    background: #FFFFFF
    border: 1px solid #DDDEE4
    box-sizing: border-box
    border-radius: 2px
    padding: 10px 14px
    margin-bottom: 14px
    &-label
      display: flex
      flex-flow: column nowrap
      &:last-of-type
        margin-bottom: 31px

.popup-form
  height: 100%
  z-index: 10
  padding: 0
  background: none
  min-height: 0
  &-content
    width: 100%
    background: #FFFFFF
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25)
    padding: 72px 48px 90px
    > span
      text-align: center

@media (max-height: 950px)
  .popup-form
    &-content
      padding: 40px 48px
@media (max-height: 850px)
  .feedback-form-header
      position: absolute
      top: -50px
@media (max-height: 750px)
</style>
