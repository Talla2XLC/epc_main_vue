<template>
  <div class="about">
    <h1
      :class="{
        'text-hero': $mq === 'xl' || $mq === 'l',
        'text-h2T': $mq === 'm',
        'text-h3': $mq === 's'
      }"
    >
      {{ aboutHeader }}
    </h1>
    <h5 class="text-h5" v-if="this.$mq === 's'">
      (Единый Процессинговый Центр)
    </h5>
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
  computed: {
    aboutHeader() {
      return this.$mq === "s"
        ? "ООО «ЕРС»"
        : "ООО «Единый Процессинговый Центр»";
    }
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
  @include respond-to(s)
    padding: 98px 0 50px
  @include respond-to(m)
    padding: 70px 20px
  @include respond-to(l)
    padding: 100px 50px
  @include respond-to(xl)
    padding: 100px 245px
  >h1
    margin-bottom: 60px
    @include respond-to(s)
      margin-bottom: 2px
    @include respond-to(m)
      margin-bottom: 30px
    @include respond-to(l)
      margin-bottom: 60px
    @include respond-to(xl)
      margin-bottom: 60px
  >h5
    margin-bottom: 46px
</style>
