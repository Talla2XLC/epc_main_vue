<template>
  <div class="nupi-banner" v-click-outside="closeBanner" ref="nupiBanner">
    <div class="nupi-banner-contentArea">
      <banner-content
        :showFeedbackForm="showForm"
        v-if="!formCreating && !emailDelivered"
      />
      <feedbackForm
        :popupForm="true"
        :closeFeedbackForm="closeForm"
        :emailDeliverHandler="setEmailDelivered"
        v-if="formCreating && !emailDelivered"
      >
        Пожалуйста, отправьте нам Ваши&nbsp;данные и мы с Вами
        обязательно&nbsp;свяжемся!
      </feedbackForm>
      <div class="nupi-banner-emailDelivered" v-if="emailDelivered">
        <span
          :class="{
            'text-body2': $mq === 'xl' || $mq === 'l',
            'text-body3': $mq === 'm' || $mq === 's' || $mq === 'xs'
          }"
        >
          Спасибо! Ваши данные получены. Мы&nbsp;скоро Вам перезвоним!
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
      emailDelivered: false
    };
  },
  computed: {
    bannerClosed() {
      return this.$store.state.bannerClosed;
    },
    isBannerFullyOpen() {
      if (!this.isMounted) return null;
      let elem = this.$refs.flexibleArea;
      return window.getComputedStyle(elem,null).getPropertyValue("width")
    }
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

    closeForm() {
      this.formCreating = false;
      this.emailDelivered = false;
    },

    showBanner() {
      this.$refs.nupiBanner.classList.remove("move-out");
      this.$refs.nupiBanner.classList.add("move-in");
      this.$store.dispatch("showBanner");
    },

    closeBanner() {
      console.log(this.$refs.nupiBanner.style.height);
      if (this.$refs.nupiBanner.classList.contains("move-in")) {
        this.$refs.nupiBanner.classList.remove("move-in");
        this.$refs.nupiBanner.classList.add("move-out");
        this.$store.dispatch("closeBanner");
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
  width: 64%
  height: 100%
  background: linear-gradient(180.27deg, #EC001D -24.42%, #940000 62.59%), #940000
  padding-right: 100px
  box-sizing: border-box
  position: absolute
  transition: 200ms ease-in
  clip-path: polygon(35% 0, 100% 0, 100% 100%, 0 100%)
  right: -58%
  display: flex
  flex-flow: column nowrap
  align-items: flex-end
  justify-content: center
  @include respond-to(xs)
  @include respond-to(s)
  @include respond-to(m)
    width: 95%
    right: -83%
    padding-right: 40px
    clip-path: polygon(22% 0, 100% 0, 100% 100%, 0 100%) !important
  @include respond-to(l)
    width: 64%
    right: -58%
    padding-right: 100px
    clip-path: polygon(35% 0, 100% 0, 100% 100%, 0 100%)
  @include respond-to(xl)
    width: 64.5%
    right: -59.7%
    padding-right: 245px
    clip-path: polygon(35.5% 0, 100% 0, 100% 100%, 0 100%)
  &-contentArea
    max-width: 560px
    width: 505px
    max-height: 620px
    height: 80%
    margin-top: 30px
    display: flex
    justify-content: flex-end
    @include respond-to(xs)
    @include respond-to(s)
    @include respond-to(m)
      width: 505px
      margin-top: 0
    @include respond-to(l)
      width: 505px
    @include respond-to(xl)
      width: 560px
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
  &:hover
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.4)
  &:active
    box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.4)
  &:focus
    outline: none

@media (max-height: 1399px)
  .nupi-banner
    clip-path: polygon(30% 0, 100% 0, 100% 100%, 0 100%)

@media (max-height: 950px)
  .nupi-banner-contentArea
    margin-top: 70px

@media (max-height: 850px)
  .nupi-banner-contentArea
    margin-top: 60px

@media (max-height: 750px)
  .nupi-banner
    &-contentArea
      margin-top: 40px

@media (max-height: 700px)
  .nupi-banner
    justify-content: flex-end
    clip-path: polygon(25% 0, 100% 0, 100% 100%, 0 100%)
    &-contentArea
      margin-top: 0
      margin-bottom: 10px
      height: 90%

.move-in
  animation: move-in 1s ease-in
  right: 0

.move-out
  animation: move-out 1s ease-in
  right: -58%
  @include respond-to(xs)
  @include respond-to(s)
  @include respond-to(m)
    right: -83%
  @include respond-to(l)
    right: -58%
  @include respond-to(xl)
    right: -59.7%

@keyframes move-in
  0%
    right: -58%
  100%
    right: 0
@keyframes move-out
  0%
    right: 0
  100%
    right: -58%

@media (max-width: 1200px)
  @keyframes move-in
    0%
      right: -83%
    100%
      right: 0
  @keyframes move-out
    0%
      right: 0
    100%
      right: -83%

@media (min-width: 1800px)
  @keyframes move-in
    0%
      right: -59.7%
    100%
      right: 0
  @keyframes move-out
    0%
      right: 0
    100%
      right: -59.7%

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
