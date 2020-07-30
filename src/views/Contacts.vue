<template>
  <div class="contacts-page">
    <div class="contacts-page-content">
      <h1
        class="contacts-page-content-header"
        :class="{
          'text-h1': $mq === 'xl' || $mq === 'l',
          'text-h2T': $mq === 'm',
          'text-h3': $mq === 's'
        }"
      >
        Наши контакты
      </h1>
      <div class="contacts-page-content-block">
        <div class="contacts-page-content-block-header">
          <h2
            :class="{
              'text-h2': $mq === 'xl' || $mq === 'l',
              'text-h3': $mq === 'm',
              'text-h5': $mq === 's'
            }"
          >
            Офис
          </h2>
          <transition name="movingToMap" appear>
            <div class="map_line" />
          </transition>
          <transition name="dot-appear" appear>
            <div class="map_dot" />
          </transition>
        </div>
        <div class="contacts-page-content-block-details">
          <div class="contacts-page-content-details-block">
            <h3
              :class="{
                'text-h3': $mq === 'xl' || $mq === 'l',
                'text-button': $mq === 'm',
                'text-caption2': $mq === 's'
              }"
            >
              Адрес
            </h3>
            <span
              :class="{
                'text-body2': $mq === 'xl' || $mq === 'l',
                'text-body5': $mq === 'm',
                'text-body6': $mq === 's'
              }"
            >
              г. Москва<br />ул. Вавилова д.5 корп.3
            </span>
          </div>
          <div class="contacts-page-content-details-block">
            <h3
              :class="{
                'text-h3': $mq === 'xl' || $mq === 'l',
                'text-button': $mq === 'm',
                'text-caption2': $mq === 's'
              }"
            >
              Телефон
            </h3>
            <span
              :class="{
                'text-body2': $mq === 'xl' || $mq === 'l',
                'text-body5': $mq === 'm',
                'text-body6': $mq === 's'
              }"
              >+7 (499) 125-44-55</span
            >
          </div>
          <div class="contacts-page-content-details-block">
            <h3
              :class="{
                'text-h3': $mq === 'xl' || $mq === 'l',
                'text-button': $mq === 'm',
                'text-caption2': $mq === 's'
              }"
            >
              Факс
            </h3>
            <span
              :class="{
                'text-body2': $mq === 'xl' || $mq === 'l',
                'text-body5': $mq === 'm',
                'text-body6': $mq === 's'
              }"
              >+7 (495) 633-01-41</span
            >
          </div>
          <transition name="fade" appear>
            <google-map class="map" lat="55.703543" lng="37.591152" zoom="14" />
          </transition>
        </div>
      </div>

      <div class="contacts-page-content-block">
        <div class="contacts-page-content-block-header">
          <h2
            :class="{
              'text-h2': $mq === 'xl' || $mq === 'l',
              'text-h3': $mq === 'm',
              'text-h5': $mq === 's'
            }"
          >
            Склад
          </h2>
          <transition name="movingToMap" appear>
            <div class="map_line map_line-stock" />
          </transition>
          <transition name="dot-appear" appear>
            <div class="map_dot map_dot-stock" />
          </transition>
        </div>
        <div class="contacts-page-content-block-details">
          <div class="contacts-page-content-details-block">
            <h3
              :class="{
                'text-h3': $mq === 'xl' || $mq === 'l',
                'text-button': $mq === 'm',
                'text-caption2': $mq === 's'
              }"
            >
              Адрес
            </h3>
            <span
              :class="{
                'text-body2': $mq === 'xl' || $mq === 'l',
                'text-body5': $mq === 'm',
                'text-body6': $mq === 's'
              }"
            >
              Московская обл, д.&nbsp;Селятино<br />
              3-й Шоссейный проезд, 3&nbsp;км автодороги А107
            </span>
          </div>
          <transition name="fade" appear>
            <google-map class="map" lat="55.494308" lng="37.033840" zoom="12" />
          </transition>
        </div>
      </div>
    </div>
    <Modal v-if="showModal" :closeModal="closeModal">
      <span
        :class="{
          'text-body2': $mq === 'xl' || $mq === 'l',
          'text-body5': $mq === 'm',
          'text-body6': $mq === 's'
        }"
        slot="body"
      >
        Спасибо! Ваши данные получены. Мы скоро Вам перезвоним!
      </span>
    </Modal>
    <feedbackForm :emailDeliverHandler="openModal"
      >Возникли вопросы?</feedbackForm
    >
  </div>
</template>

<script>
import GoogleMap from "@/components/GoogleMap.vue";
import feedbackForm from "../components/General/feedbackForm";
import Modal from "../components/General/Modal";

export default {
  name: "About",
  metaInfo: {
    title: "EPC Contacts"
  },
  data() {
    return {
      showModal: false
    };
  },
  components: {
    GoogleMap,
    feedbackForm,
    Modal
  },
  methods: {
    closeModal() {
      this.showModal = false;
    },
    openModal() {
      this.showModal = true;
    }
  }
};
</script>

<style lang="sass">
.contacts-page
  display: -webkit-flex
  display: -moz-flex
  display: -ms-flex
  display: -o-flex
  display: flex
  flex-flow: column nowrap
  box-sizing: border-box
  padding: 100px
  position: relative
  @include respond-to(s)
    padding: 98px 0 50px
  @include respond-to(m)
    padding: 70px 20px
  @include respond-to(l)
    padding: 100px
  @include respond-to(xl)
    padding: 100px 245px
  &-content
    display: flex
    flex-flow: column nowrap
    padding: 0 105px
    margin-bottom: 90px
    @include respond-to(s)
      padding: 0 12px 50px
      margin-bottom: 0
    @include respond-to(m)
      margin-bottom: 44px
      padding: 0 20px
    @include respond-to(l)
      margin-bottom: 90px
      padding: 0 105px
    @include respond-to(xl)
      margin-bottom: 90px
      padding: 0 145px
    &-block
      display: flex
      flex-flow: column nowrap
      align-items: stretch
      position: relative
      margin-bottom: 10px
      min-height: 398px
      @include respond-to(s)
        min-height: auto
      @include respond-to(m)
        min-height: 304px
        margin-bottom: 26px
      @include respond-to(l)
        min-height: 398px
      @include respond-to(xl)
        min-height: 398px
      &-header
        margin-bottom: 46px
        position: relative
        @include respond-to(s)
          margin-bottom: 14px
        @include respond-to(m)
          margin-bottom: 24px
        @include respond-to(l)
          margin-bottom: 46px
        @include respond-to(xl)
          margin-bottom: 46px
      &-details
        position: relative

    &-header
      align-self: center
      margin-bottom: 60px
      @include respond-to(s)
        margin-bottom: 20px
      @include respond-to(m)
        margin-bottom: 30px
      @include respond-to(l)
        margin-bottom: 60px
      @include respond-to(xl)
        margin-bottom: 60px
    &-details
      &-block
        display: flex
        flex-flow: row nowrap
        align-items: flex-start
        >h3
          width: 190px
          margin-right: 20px
          margin-bottom: 46px
          position: relative
          @include respond-to(s)
            width: 74px
            margin-right: 10px
            margin-bottom: 0
            top: -2px
          @include respond-to(m)
            width: 98px
            margin-bottom: 22px
          @include respond-to(l)
            width: 190px
          @include respond-to(xl)
            width: 190px
        >span
          width: 400px
          @include respond-to(s)
            width: 198px
            margin-bottom: 10px
          @include respond-to(m)
            padding-top: 5px
            width: 216px
          @include respond-to(l)
            width: 400px
          @include respond-to(xl)
            width: 400px

.map_line
  border-top: 2px solid #940000
  border-right: 2px solid #940000
  width: 830px
  height: 63px
  position: absolute
  @include respond-to(s)
    width: 282px
    height: 120px
  @include respond-to(m)
    width: 520px
  @include respond-to(l)
    width: 830px
  @include respond-to(xl)
    width: 932px
.map_line-stock
  @include respond-to(s)
    height: 100px

.map_dot
  box-sizing: border-box
  border: 10px solid #940000
  border-radius: 50%
  width: 20px
  height: 20px
  position: absolute
  left: 820px
  bottom: -73px
  z-index: 6
  opacity: 1
  @include respond-to(s)
    width: 14px
    height: 14px
    left: 273px
    bottom: -131px
  @include respond-to(m)
    left: 510px
    bottom: -51px
  @include respond-to(l)
    left: 820px
    bottom: -73px
  @include respond-to(xl)
    left: 922px
    bottom: -73px
.map_dot-stock
  @include respond-to(s)
    bottom: -111px

.map
  position: absolute
  padding: 20px 25px
  box-sizing: border-box
  width: 400px
  height: 300px
  top: 0
  left: 632px
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.15)
  @include respond-to(s)
    position: relative
    width: 100%
    left: 0
    height: 240px
    margin-top: 6px
  @include respond-to(m)
    height: 240px
    width: 334px
    left: 355px
  @include respond-to(l)
    height: 300px
    width: 400px
    left: 632px
  @include respond-to(xl)
    height: 300px
    width: 415px
    left: 727px

.movingToMap-enter-active, .movingToMap-leave-active
  transition: width 0.8s ease-in, height 0.2s ease-in 0.8s
.movingToMap-enter, .movingToMap-leave-to
  width: 0
  height: 0

.dot-appear-enter-active, .dot-appear-leave-active
  transition: opacity 0.1s ease-in 1s
.dot-appear-enter, .dot-appear-leave-to
  opacity: 0

.fade-enter-active, .fade-leave-active
  transition: opacity 100ms ease-in 1s
.fade-enter, .fade-leave-to
  opacity: 0

@media (min-width: 900px)

@media (min-width: 1450px)

@media (min-width: 1850px)
</style>
