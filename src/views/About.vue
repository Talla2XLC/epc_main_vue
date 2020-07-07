<template>
  <div class="about">
    <h1 class="text-hero">ООО «Единый Процессинговый Центр»</h1>
    <History />
    <Customers />
    <Projects />
    <Mission />
  </div>
</template>

<script>
import History from "../components/About/History";
import Customers from "../components/About/Customers";
import Projects from "../components/About/Projects";
import Mission from "../components/About/Mission";

export default {
  name: "About",
  components: {
    History,
    Customers,
    Projects,
    Mission
  },
  methods: {
    selectPage() {
      this.$store.dispatch("selectPage", "about");
    }
  }
};
</script>

<style lang="sass">
.about
  display: -webkit-flex
  display: -moz-flex
  display: -ms-flex
  display: -o-flex
  display: flex
  flex-flow: column nowrap
  justify-content: flex-start
  align-items: center
  padding: 100px 50px
  @include respond-to(xs)
  @include respond-to(s)
  @include respond-to(m)
  @include respond-to(l)
    padding: 100px 50px
  @include respond-to(xl)
    padding: 100px 245px
  >h1
    margin-bottom: 60px

</style>
