<template>
  <div class="contacts_page_div">
    <div class="contact_office">
      <span>Офис</span>
      <div class="office_line"></div>
      <div class="contact_office_details"></div>
    </div>
    <div class="contact_stock">
      <span>Склад</span>
      <div class="stock_line"></div>
      <div class="contact_stock_details"></div>
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
  padding: 0 10%
  font-family: "raleway-regular", "calibri", sans-serif

.contact_office, .contact_stock
  display: -webkit-flex
  display: -moz-flex
  display: -ms-flex
  display: -o-flex
  display: flex
  flex-flow: column nowrap
  >span
    font-family: "raleway-medium", "calibri", sans-serif

.office_line, .stock_line
  border-bottom: 2px solid #ec021c
  width: 80%
  position: absolute
  left: 0
.stock_line
  align-self: flex-end

@media (min-width: 1850px)
  .contacts_page_div
    padding: 0.5rem 20%
</style>
