<template>
  <div class="contacts_page_div">
    <div class="contact_office">
      <span>Офис</span>
      <div class="office_line"></div>
      <div class="contact_office_details">
        <span class="details_span">Адрес: г. Москва, ул. Вавилова, д.5, корп.3</span>
        <span class="details_span">Телефон: +7 (499) 125-44-55</span>
        <span class="details_span">Факс: +7 (495) 633-01-41</span>
      </div>
    </div>
    <div class="contact_stock">
      <span>Склад</span>
      <div class="stock_line"></div>
      <div class="contact_stock_details">        
        <span class="details_span">Адрес: Московская обл, г. Наро-Фоминск, д. Селятино,<br>3-й Шоссейный проезд, 3&nbsp;км автодороги А107</span>
        <span class="details_span">Телефон: +7 (499) 125-44-55</span>
      </div>
    </div>
    <google-map lat="55.703543" lng="37.591152" />
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
    padding: 0.5rem 10%
    margin-top: 3rem

.office_line, .stock_line
  border-bottom: 2px solid #ec021c
  width: 90%
  position: relative
.stock_line
  left: 10%

.contact_office_details, .contact_stock_details
  display: -webkit-flex
  display: -moz-flex
  display: -ms-flex
  display: -o-flex
  display: flex
  flex-flow: column nowrap
  font-family: "raleway-regular", "calibri", sans-serif
  padding: 0.5rem 10%
  margin-bottom: 3rem

.details_span
  padding: 0.2rem 0
  width: 50%

@media (min-width: 1450px)
  .contact_office > span,
  .contact_stock > span,
  .contact_office_details, .contact_stock_details
    padding: 0.5rem 20%

</style>
