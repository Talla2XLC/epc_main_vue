<template>
  <div class="main_page">
    <div class="main_content">
      <div class="main_left" @mouseover="hideProductNav">
        <img class="epc_logo" src="@/assets/logo.png" @click="switchMainMenu" />
      </div>      
      <div class="content_div">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure illum eum
        porro. Iure voluptates voluptatem assumenda reiciendis. Autem modi ipsa,
        iure voluptatum saepe voluptatibus provident ducimus consequuntur qui
        optio! Magni ullam blanditiis, quasi, perspiciatis autem beatae eum
        at&nbsp;ad&nbsp;sed commodi mollitia. Similique officia
        accusantium&nbsp;et, nulla cumque. Vel esse quas quo non, totam rem eum
        consequuntur pariatur excepturi animi quam eos, quibusdam modi commodi
        nobis repellendus mollitia beatae, itaque aut. Eaque nam ex&nbsp;maiores
        necessitatibus, dolor animi assumenda iste eius repellat rem, quia
        labore enim voluptate placeat perspiciatis quis doloribus sed quos
        tempore distinctio&nbsp;ut. Molestiae dolores impedit temporibus?
      </div>
      <product-nav />
    </div>
    <partners />
  </div>
</template>

<script>
import partners from "@/components/partners";
import productNav from "@/components/product-nav";

export default {
  name: "Main",
  components: {
    partners,
    productNav
  },
  methods: {
    switchMainMenu() {
      if (this.mainMenuVisible) {
        this.$store.dispatch("hideMainMenu");
      } else {
        this.$store.dispatch("showMainMenu");
      }
    },
    hideProductNav() {
      this.$store.dispatch("hideProductNav");
    }
  }
};
</script>

<style lang="sass" scoped>
.main_page
  flex-grow: 1
  display: -webkit-flex
  display: -moz-flex
  display: -ms-flex
  display: -o-flex
  display: flex
  flex-flow: column nowrap
  z-index: 5

.main_content
  flex-grow: 1
  display: -webkit-flex
  display: -moz-flex
  display: -ms-flex
  display: -o-flex
  display: flex
  flex-flow: row nowrap
  align-items: center
  justify-content: center
  padding: 0 10%
  box-sizing: border-box
  position: relative

.main_left
  width: 50%
  height: 100%
  display: -webkit-flex
  display: -moz-flex
  display: -ms-flex
  display: -o-flex
  display: flex
  flex-flow: row nowrap
  align-items: center

.epc_logo
  cursor: pointer
  transition: transform 200ms ease-in
  margin-right: 5rem
  &:hover
    transform: scale(1.15)

.content_div
  width: 50%
  font-family: "montserrat-regular", "calibri", sans-serif
  text-align: justify
  box-sizing: border-box
  line-height: 1.5rem

@media (min-width: 1850px)
  .main_content
    padding: 0.5rem 20%
</style>
