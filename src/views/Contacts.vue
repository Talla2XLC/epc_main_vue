<template>
  <div class="contacts-page">
    <div class="contacts-page-content">
      <h1 class="contacts-page-content-header text-h1">Наши контакты</h1>
      <div class="contacts-page-content-block">
        <div class="contacts-page-content-block-header">
          <h2 class="text-h2">
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
            <h3 class="text-h3">Адрес</h3>
            <span class="text-body2">
              г. Москва<br />ул. Вавилова, д.5, корп.3
            </span>
          </div>
          <div class="contacts-page-content-details-block">
            <h3 class="text-h3">Телефон</h3>
            <span class="text-body2">+7 (499) 125-44-55</span>
          </div>
          <div class="contacts-page-content-details-block">
            <h3 class="text-h3">Факс</h3>
            <span class="text-body2">+7 (495) 633-01-41</span>
          </div>
          <transition name="fade" appear>
            <google-map class="map" lat="55.703543" lng="37.591152" zoom="14" />
          </transition>
        </div>
      </div>

      <div class="contacts-page-content-block">
        <div class="contacts-page-content-block-header">
          <h2 class="text-h2">
            Склад
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
            <h3 class="text-h3">Адрес</h3>
            <span class="text-body2">
              Московская обл, д. Селятино<br />
              3-й Шоссейный проезд, 3&nbsp;км<br />
              автодороги А107
            </span>
          </div>
          <transition name="fade" appear>
            <google-map class="map" lat="55.494308" lng="37.033840" zoom="12" />
          </transition>
        </div>
      </div>
    </div>
    <Modal v-if="showModal" :closeModal="closeModal">
      <span class="text-body2" slot="body">Спасибо! Ваши данные получены. Мы скоро Вам перезвоним!</span>
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
  &-content
    display: flex
    flex-flow: column nowrap
    padding: 0 105px
    margin-bottom: 93px
    &-block
      display: flex
      flex-flow: column nowrap
      align-items: stretch
      position: relative
      margin-bottom: 10px
      min-height: 398px
      &-header
        margin-bottom: 46px
        position: relative
      &-details
        position: relative

    &-header
      align-self: center
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

.map_line
  border-top: 2px solid #940000
  border-right: 2px solid #940000
  width: 830px
  height: 63px
  position: absolute
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

.map
  position: absolute
  padding: 20px 25px
  box-sizing: border-box
  width: 400px
  height: 300px
  top: 0
  right: 0
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.15)

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
