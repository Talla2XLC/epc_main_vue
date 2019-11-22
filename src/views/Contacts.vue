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
      <iframe class="map office_map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2248.1074522820827!2d37.58828431582637!3d55.704503980540444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54b63dfccd73b%3A0xa8bb915b9b55a7a3!2z0YPQuy4g0JLQsNCy0LjQu9C-0LLQsCwgNSwg0JzQvtGB0LrQstCwLCAxMTkzMzQ!5e0!3m2!1sru!2sru!4v1574425857716!5m2!1sru!2sru" width="1000" height="1000" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
    </div>
    <div class="contact_stock">
      <span>Склад</span>
      <div class="stock_line"></div>
      <div class="contact_stock_details">        
        <span class="details_span">Адрес: Московская обл, г. Наро-Фоминск, д. Селятино,<br>3-й Шоссейный проезд, 3&nbsp;км автодороги А107</span>
        <span class="details_span">Телефон: +7 (499) 125-44-55</span>
        <iframe class="map office_map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2802.5872699984075!2d37.032485210840896!3d55.49466207753695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDI5JzQyLjMiTiAzN8KwMDInMDYuNSJF!5e0!3m2!1sru!2sru!4v1574427568624!5m2!1sru!2sru" width="1000" height="1000" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
      </div>
      <div class="map stock_map"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  components: {},
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

.map
  position: absolute
  width: 20%
  height: 100%
  top: 0
  left: 60%

@media (min-width: 1450px)
  .contact_office > span,
  .contact_stock > span,
  .contact_office_details, .contact_stock_details
    padding: 0.5rem 20%

</style>
