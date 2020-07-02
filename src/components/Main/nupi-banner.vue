<template>
  <div class="nupi-banner" v-click-outside="closeBanner" ref="nupiBanner">
    <div class="nupi-banner-contentArea">
      <banner-content :showFeedbackForm="showForm" v-if="!formCreating && !emailDelivered" />
      <feedbackForm
        :popupForm="true"
        :closeFeedbackForm="closeForm"
        :emailDeliverHandler="setEmailDelivered"
        v-if="formCreating && !emailDelivered"
      >
        Пожалуйста, отправьте нам Ваши данные и мы с Вами обязательно свяжемся!
      </feedbackForm>
      <div class="nupi-banner-emailDelivered" v-if="emailDelivered">
        <span class="text-body2">
          Спасибо! Ваши данные получены. Мы скоро Вам перезвоним!
        </span>
        <button class="email-closeBtn" @click.prevent="closeForm">
          <span class="email-closeBtn-mark" />
        </button>
      </div>
      <showArrow @click.native="showBanner" v-if="bannerClosed" />
    </div>
  </div>
</template>

<script>
import feedbackForm from "../General/feedbackForm";
import bannerContent from "./Banner/bannerContent";
import showArrow from "./Banner/showArrow";

export default {
  name: "nupi-banner",
  data() {
    return {
      formCreating: false,
      bannerClosed: true,
      emailDelivered: false
    };
  },
  directives: {
    clickOutside: {
      bind: function(el, binding, vnode) {
        el.clickOutsideEvent = function(event) {
          if (!(el === event.target || event.path.includes(el))) {
            vnode.context[binding.expression](event);
          }
        };
        document.body.addEventListener("click", el.clickOutsideEvent);
      },
      unbind: function(el) {
        document.body.removeEventListener("click", el.clickOutsideEvent);
      }
    }
  },
  mounted() {
    setTimeout(this.showBanner, 1000);
  },
  methods: {
    showForm() {
      this.formCreating = true;
    },

    closeForm(e) {
      this.formCreating = false;
      this.emailDelivered = false;
    },

    showBanner() {
      this.$refs.nupiBanner.classList.remove("move-out");
      this.$refs.nupiBanner.classList.add("move-in");
      this.bannerClosed = false;
    },

    closeBanner() {
      if (this.$refs.nupiBanner.classList.contains("move-in")) {
        this.$refs.nupiBanner.classList.remove("move-in");
        this.$refs.nupiBanner.classList.add("move-out");
        this.bannerClosed = true;
      }
    },
    setEmailDelivered() {
      this.formCreating = false;
      this.emailDelivered = true;
    }
  },
  components: {
    feedbackForm,
    bannerContent,
    showArrow
  }
};
</script>

<style lang="sass">
.nupi-banner
  width: 65%
  height: 100%
  background: linear-gradient(180.27deg, #EC001D -32.99%, #940000 60.02%), #940000
  padding: 0 100px
  box-sizing: border-box
  position: absolute
  transition: 200ms ease-in
  clip-path: polygon(30% 0, 100% 0, 100% 100%, 0 100%)
  animation: move-in-init 5s ease-in
  right: 0
  display: flex
  flex-flow: column nowrap
  align-items: flex-end
  justify-content: center
  @include respond-to(xs)
  @include respond-to(s)
  @include respond-to(m)
  @include respond-to(l)
  @include respond-to(xl)
  &-contentArea
    max-width: 505px
    width: 505px
    max-height: 620px
    height: 80%
    margin-top: 30px
  &-emailDelivered
    box-sizing: border-box
    height: 100%
    width: 100%
    background: #FFFFFF
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25)
    padding: 33px 47px 0
    display: flex
    flex-flow: column nowrap
    justify-content: center
    align-items: center
    >span
      display: block
      text-align: center
      margin-bottom: 70px

.email-closeBtn
  width: 70px
  height: 70px
  border-radius: 50%
  background: transparent
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25)
  border: none
  display: flex
  flex-flow: column nowrap
  justify-content: center
  align-items: center
  position: relative
  cursor: pointer
  &-mark
    display: block
    width: 20px
    height: 30px
    position: relative
    box-sizing: border-box
    border-right: 4px solid #4F4F51
    border-bottom: 4px solid #4F4F51
    transform: rotate(45deg)
    bottom: 5px
  &:hover &-mark
    border-right: 4px solid #C4C4C4
    border-bottom: 4px solid #C4C4C4
  &:focus
    outline: none

@media (max-height: 950px)
  .nupi-banner-contentArea
    margin-top: 70px

@media (max-height: 850px)
  .nupi-banner-contentArea
    margin-top: 60px

@media (max-height: 750px)
  .nupi-banner
    clip-path: polygon(29% 0, 100% 0, 100% 100%, 0 100%)
    &-contentArea
      margin-top: 40px

.move-in
  animation: move-in 1.5s ease-in
  right: 0

.move-out
  animation: move-out 1.5s ease-in
  right: -58%
  @include respond-to(xs)

@keyframes move-in-init
  0%
    right: -58%
  50%
    right: -58%
  100%
    right: 0

@keyframes move-in-init-xs
  0%
    right: -85%
  50%
    right: -85%
  100%
    right: 0

@keyframes move-in
  0%
    right: -58%
  100%
    right: 0

@keyframes move-in-xs
  0%
    right: -85%
  100%
    right: 0

@keyframes move-out
  0%
    right: 0
  100%
    right: -58%

@keyframes move-out-xs
  0%
    right: 0
  100%
    right: -85%

@keyframes appear
  0%
    visibility: hidden
  90%
    visibility: hidden
    opacity: 0
  100%
    visibility: visible
    opacity: 1
</style>
