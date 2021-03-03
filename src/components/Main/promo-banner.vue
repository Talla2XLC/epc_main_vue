<template>
  <div
    class="promo-banner"
    v-click-outside-banners="emitClickOutsideBanners"
    v-touch:swipe.bottom="emitClickOutsideBanners"
    v-touch:swipe.top="swipeUpHandler"
    :ref="`${producer}Banner`"
  >
    <div class="promo-banner-contentArea">
      <gilbarcoBannerContent v-if="this.producer === 'gilbarco'" />
      <nupi-banner-content
        :showFeedbackForm="showForm"
        v-if="this.producer === 'nupi' && !formCreating && !emailDelivered"
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
      <div class="promo-banner-emailDelivered" v-if="emailDelivered">
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
      <showArrow @click.native="emitOpeningBanner(index)" v-if="!isBannerOpened" />
      <crumbs
        :crumbsQty="bannersQty"
        :currentCrumbId="index"
        @crumbPressed="handleCrumbPressed"
      />
    </div>
  </div>
</template>

<script>
import feedbackForm from "../General/feedbackForm";
import nupiBannerContent from "./Banner/nupiBannerContent";
import gilbarcoBannerContent from "@/components/Main/Banner/gilbarcoBannerContent";
import showArrow from "./Banner/showArrow";
import crumbs from "@/components/Main/Banner/crumbs";
import { gsap } from "gsap";

export default {
  name: "promo-banner",
  props: [
    "producer",
    "currentBanner",
    "currentBannerID",
    "index",
    "bannersQty"
  ],
  data() {
    return {
      formCreating: false,
      emailDelivered: false,
      switchInterval: null
    };
  },
  computed: {
    bannerClosed() {
      return this.$store.state.bannerClosed;
    },
    isBannerOpened() {
      return this.index === this.currentBannerID;
    }
  },
  watch: {
    isBannerOpened(state) {
      if (!state) {
        console.log("Banner switch to CLOSED", this.producer);
        this.closeCurrentBanner();
      } else {
        console.log("Banner switch to OPENED", this.producer)
        this.showBanner();
      }
    },
    $mq(size) {
      if (this.isBannerOpened) return;
      switch (size) {
        case "xl":
          gsap.set(this.$refs[`${this.producer}Banner`], {
            right: "-59.7%"
          });
          break;
        case "l":
          gsap.set(this.$refs[`${this.producer}Banner`], {
            right: "-58%"
          });
          break;
        case "m":
          gsap.set(this.$refs[`${this.producer}Banner`], {
            right: "-83%"
          });
          break;
        case "s":
          gsap.set(this.$refs[`${this.producer}Banner`], {
            right: 0,
            bottom: "-86.5%"
          });
          break;
        default:
          gsap.set(this.$refs[`${this.producer}Banner`], {
            right: "-58%"
          });
          break;
      }
    },

    currentBannerID(id) {
      if (id !== this.index) {
        this.closeCurrentBanner();

        // Если выбран другой баннер, текщий помещаем на задний план
        if (typeof id === "number") {
          this.getOnTop(false);
        }
      }
    }
  },
  directives: {
    clickOutside: {
      bind: function(el, binding, vnode) {
        el.clickOutsideEvent = function(event) {
          console.log(!(el === event.target || event.path.includes(el)))
          if (!(el === event.target || event.path.includes(el))) {
            vnode.context[binding.expression](event);
          }
        };
        document.body.addEventListener("click", el.clickOutsideEvent);
      },
      unbind: function(el) {
        document.body.removeEventListener("click", el.clickOutsideEvent);
      }
    },
    clickOutsideBanners: {
      bind: function(el, binding, vnode) {
        el.clickOutsideBannersEvent = function(event) {
          const classNameToCheck = "promo-banner";
          const isTargetClasslistMatch = event.target.classList.contains(
            classNameToCheck
          );
          const isTargetPathClasslistMatch = event.path.find(elem => {
            if (elem.classList) {
              return elem.classList.contains(classNameToCheck);
            }
          });

          if (!(isTargetClasslistMatch || isTargetPathClasslistMatch)) {
            console.log("Clicked outside banners!")
            vnode.context[binding.expression](event);
          }
        };
        document.body.addEventListener("click", el.clickOutsideBannersEvent);
      },
      unbind: function(el) {
        document.body.removeEventListener("click", el.clickOutsideBannersEvent);
      }
    }
  },
  mounted() {
    // Определям при первичной отрисовке баннера, является ли он первым для показа
    if (this.isBannerOpened) {
      console.log("Opening banner on mounted:", this.producer);
      setTimeout(this.showBanner, 1000);
    }

    // Устанавливаем Z-Index`ы ,баннерам согласно их положению в массиве
    gsap.set(this.$refs[`${this.producer}Banner`], {
      zIndex: this.index
    });
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
      console.log("Showing banner:", this.producer);

      gsap.to(this.$refs[`${this.producer}Banner`], {
        duration: 1.5,
        right: 0,
        bottom: 0,
        ease: "power1.out"
      });
      this.getOnTop(true);
      this.startSwitchInterval();
    },

    closeCurrentBanner() {
      switch (this.$mq) {
        case "xl":
          gsap.to(this.$refs[`${this.producer}Banner`], {
            duration: 1.5,
            right: "-59.7%",
            ease: "power1.out"
          });
          break;
        case "l":
          gsap.to(this.$refs[`${this.producer}Banner`], {
            duration: 1.5,
            right: "-58%",
            ease: "power1.out"
          });
          break;
        case "m":
          gsap.to(this.$refs[`${this.producer}Banner`], {
            duration: 1.5,
            right: "-83%",
            ease: "power1.out"
          });
          break;
        case "s":
          gsap.to(this.$refs[`${this.producer}Banner`], {
            duration: 1.5,
            bottom: "calc(-100% + 70px)",
            ease: "power1.out"
          });
          break;
        default:
          gsap.to(this.$refs[`${this.producer}Banner`], {
            duration: 1.5,
            right: "-58%",
            ease: "power1.out"
          });
          break;
      }
      this.stopSwitchInterval();
      this.$emit("closingBanner", this.producer);
    },

    emitClickOutsideBanners() {
      this.$emit("clickedOutsideBanners", this.producer);
    },

    emitOpeningBanner(id = this.index) {
      console.log('Emiting opening', id)
      this.$emit("openingBanner", id);
    },

    setEmailDelivered() {
      this.formCreating = false;
      this.emailDelivered = true;
    },

    getOnTop(state = true) {
      if (state) {
        this.$refs[`${this.producer}Banner`].style.zIndex = 5;
      } else {
        this.$refs[`${this.producer}Banner`].style.zIndex = 1;
      }
    },

    handleCrumbPressed(crumbID) {
      if (crumbID !== this.index) {
        this.emitOpeningBanner(crumbID);
      }
    },

    /**
     * Запускает интервал проверки необходимости смены баннера
     */
    startSwitchInterval() {
      this.switchInterval = setInterval(() => this.emitSwitchCommercial(), 10000);
    },

    /**
     * Останавливает интервал проверки необходимости смены баннера
     */
    stopSwitchInterval() {
      clearInterval(this.switchInterval);
      this.switchInterval = null;
    },

    /**
     * Генерирует событие необходимости смены баннера, если
     * текущий баннер открыт и не в состоянии заполениния формы обратной связи
     */
    emitSwitchCommercial() {
      if (this.isBannerOpened && !this.formCreating) {
        this.$emit("switchCommercial");
      }
    },

    swipeUpHandler() {
      this.emitOpeningBanner(this.index);
    }
  },
  components: {
    feedbackForm,
    nupiBannerContent,
    gilbarcoBannerContent,
    showArrow,
    crumbs
  }
};
</script>

<style lang="sass">
.promo-banner
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
    clip-path: polygon(66% 0, 100% 0, 100% 100%, 0 100%, 0 24%) !important
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
    justify-content: center
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
  .promo-banner
    clip-path: polygon(30% 0, 100% 0, 100% 100%, 0 100%)

@media (max-height: 950px)
  .promo-banner-contentArea
    margin-top: 70px

@media (max-height: 850px)
  .promo-banner-contentArea
    margin-top: 60px

@media (max-height: 750px)
  .promo-banner
    &-contentArea
      margin-top: 40px

@media (max-height: 700px)
  .promo-banner
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
