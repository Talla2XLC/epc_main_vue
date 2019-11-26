<template>
  <div class="contacts_page_div">
    <div class="contact_office">
      <span>Офис</span>
      <transition name="moving_left" appear>
        <div class="office_line"></div>
      </transition>
      <div class="contact_office_details">
        <span class="details_span"
          >Адрес: г. Москва, ул. Вавилова, д.5, корп.3</span
        >
        <span class="details_span">Телефон: +7 (499) 125-44-55</span>
        <span class="details_span">Факс: +7 (495) 633-01-41</span>
      </div>
      <transition name="fade" appear>
        <google-map class="map" lat="55.703543" lng="37.591152" zoom="14" />
      </transition>
    </div>
    <div class="contact_stock">
      <span>Склад</span>
      <transition name="moving_right" appear>
        <div class="stock_line"></div>
      </transition>
      <div class="contact_stock_details">
        <span class="details_span"
          >Адрес: Московская обл, г. Наро-Фоминск, д. Селятино,<br />3-й
          Шоссейный проезд, 3&nbsp;км автодороги А107</span
        >
        <span class="details_span">Телефон: +7 (499) 125-44-55</span>
      </div>
      <transition name="fade" appear>
        <google-map class="map" lat="55.494308" lng="37.033840" zoom="12" />
      </transition>
    </div>
  </div>
</template>

<script>
import GoogleMap from "@/components/GoogleMap.vue";

export default {
  name: "About",
  components: {
    GoogleMap
  },
  methods: {}
};
</script>

<style lang="sass">
.contacts_page_div
  display: -webkit-flex
  display: -moz-flex
  display: -ms-flex
  display: -o-flex
  display: flex
  flex-flow: column nowrap
  justify-content: space-around
  height: 100%
  width: 100%
  box-sizing: border-box
  padding: 2rem 0
  position: relative
  font-family: "raleway-regular", "calibri", sans-serif

.contact_office, .contact_stock
  display: -webkit-flex
  display: -moz-flex
  display: -ms-flex
  display: -o-flex
  display: flex
  flex-flow: column nowrap
  position: relative
  width: 100%
  >span
    font-family: "raleway-medium", "calibri", sans-serif
    font-size: 3vw
    padding: 0 5%
    margin-top: 3rem

.office_line, .stock_line
  border-bottom: 2px solid #ec021c
  width: 95%
  position: relative
.office_line
  left: 0
.stock_line
  right: -5%

.contact_office_details, .contact_stock_details
  display: -webkit-flex
  display: -moz-flex
  display: -ms-flex
  display: -o-flex
  display: flex
  flex-flow: column nowrap
  font-family: "raleway-regular", "calibri", sans-serif
  padding: 0 5%
  font-size: 1.8vw
  line-height: 120%
  margin-bottom: 3rem

.details_span
  padding: 0.2rem 0
  width: 50%

.map
  position: absolute
  width: 30%
  height: 100%
  top: 0
  right: 12%
  -webkit-box-shadow: 0px 0px 4px 1px #000000
  box-shadow: 0px 0px 4px 1px #000000

.moving_left-enter-active, .moving_left-leave-active
  transition: left 1s ease-in
.moving_left-enter, .moving_left-leave-to
  left: -100%

.moving_right-enter-active, .moving_right-leave-active
  transition: right 1s ease-in
.moving_right-enter, .moving_right-leave-to
  right: -110%

.fade-enter-active, .fade-leave-active
  transition: opacity 100ms ease-in 1s
.fade-enter, .fade-leave-to
  opacity: 0

@media (min-width: 900px)
  .contact_office > span,
  .contact_stock > span,
  .contact_office_details, .contact_stock_details
    padding: 0 10%
  .contact_office > span,
  .contact_stock > span
    font-size: 2vw
  .contact_office_details, .contact_stock_details
    font-size: 1.2vw
  .office_line
    width: 90%
  .stock_line
    width: 90%
    transform: translateX(5%)

@media (min-width: 1450px)
  .contact_office > span,
  .contact_stock > span,
  .contact_office_details, .contact_stock_details
    padding: 0.5rem 15%

@media (min-width: 1850px)
  .contact_office > span,
  .contact_stock > span,
  .contact_office_details, .contact_stock_details
    padding: 0.5rem 20%
  .contact_office > span,
  .contact_stock > span
    font-size: 1.1vw
  .contact_office_details, .contact_stock_details
    font-size: 0.7vw
</style>
