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
            'text-body3': $mq === 'm',
            'text-body5': $mq === 's'
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
import { gsap } from "gsap";

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
    }
  },
  watch: {
    bannerClosed(state) {
      if (state) {
        switch (this.$mq) {
          case "xl":
            gsap.to(this.$refs.nupiBanner, {
              duration: 1.5,
              right: "-59.7%",
              ease: "power1.out"
            });
            break;
          case "l":
            gsap.to(this.$refs.nupiBanner, {
              duration: 1.5,
              right: "-58%",
              ease: "power1.out"
            });
            break;
          case "m":
            gsap.to(this.$refs.nupiBanner, {
              duration: 1.5,
              right: "-83%",
              ease: "power1.out"
            });
            break;
          case "s":
            gsap.to(this.$refs.nupiBanner, {
              duration: 1.5,
              bottom: "calc(-100% + 70px)",
              ease: "power1.out"
            });
            break;
          default:
            gsap.to(this.$refs.nupiBanner, {
              duration: 1.5,
              right: "-58%",
              ease: "power1.out"
            });
            break;
        }
      } else {
        gsap.to(this.$refs.nupiBanner, {
          duration: 1.5,
          right: 0,
          bottom: 0,
          ease: "power1.out"
        });
      }
    },
    $mq(size) {
      if (!this.bannerClosed) return;
      switch (size) {
        case "xl":
          gsap.set(this.$refs.nupiBanner, {
            right: "-59.7%"
          });
          break;
        case "l":
          gsap.set(this.$refs.nupiBanner, {
            right: "-58%"
          });
          break;
        case "m":
          gsap.set(this.$refs.nupiBanner, {
            right: "-83%"
          });
          break;
        case "s":
          gsap.set(this.$refs.nupiBanner, {
            right: 0,
            bottom: "-86.5%"
          });
          break;
        default:
          gsap.set(this.$refs.nupiBanner, {
            right: "-58%"
          });
          break;
      }
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
      this.$store.dispatch("showBanner");
    },

    closeBanner() {
      this.$store.dispatch("closeBanner");
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
  clip-path: polygon(35% 0, 100% 0, 100% 100%, 0 100%)
  right: -58%
  display: flex
  flex-flow: column nowrap
  align-items: flex-end
  justify-content: center
  @include respond-to(s)
    padding: 129px 0 36px
    width: 100%
    right: 0
    bottom: calc(-100% + 70px)
    height: calc(100% - 48px)
    clip-path: polygon(67% 0, 100% 0, 100% 100%, 0 100%, 0 24%) !important
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
    @include respond-to(s)
      width: 100%
      height: 100% !important
      margin-bottom: 0 !important
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
    @include respond-to(s)
      padding: 12px
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
  @include respond-to(s)
    width: 48px
    height: 48px
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
    @include respond-to(s)
      width: 13.34px
      height: 20px
      border-right: 2.67px solid #4F4F51
      border-bottom: 2.67px solid #4F4F51
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
