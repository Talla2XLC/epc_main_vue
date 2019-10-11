<template>
  <div class="contacts_page_div">
    <h1 class="contacts_header">
      Контакты
    </h1>
    <product-nav />
  </div>
</template>

<script>

export default {
  name: "About",
  components: {
  },
  methods: {
  }
};
</script>

<style lang="sass">
.contacts_page_div
  height: 100%
  width: 100%
  box-sizing: border-box
  padding: 0.5rem 10%
  padding-top: 2rem
  position: relative

.contacts_header
  font-size: 30px
  text-align: center
</style>