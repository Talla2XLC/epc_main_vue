<template>
  <div class="about">
    <h1 class="text-hero">ООО «Единый Процессинговый Центр»</h1>
    <div class="about-history">
      <history-section>
        <template v-slot:year>2014</template>
        <template v-slot:text>
          Компания основана как инжиниринговый партнер ряда международных<br />
          консорциумов-производителей технологического оборудования<br />
          для нефтяной отрасли.
        </template>
      </history-section>
      <history-section>
        <template v-slot:year>2016</template>
        <template v-slot:text>
          Компания заключает партнерское соглашение с мировым лидером<br />
          в области производства оборудования для отпуска нефти<br />
          и нефтепродуктов западногерманским концерном Emco Wheaton GmbH.
        </template>
      </history-section>
      <history-section>
        <template v-slot:year>2017</template>
        <template v-slot:text>
          Компанией произведена поставка и ввод в эксплуатацию семи зарядных<br />
          станций быстрой зарядки для электромобилей на АЗС впервые<br />
          в России. Cоздание дочерней структуры - epc.electro.
        </template>
      </history-section>
      <history-section>
        <template v-slot:year>2019</template>
        <template v-slot:text>
          Компания заключает партнерское соглашение с промышленным<br />
          конгломератом Nupi Industrie Italiane S.p.A., занимающимся<br />
          производством решений для инженерных и технологических сетей.
        </template>
      </history-section>
      <history-section :is-last="true">
        <template v-slot:year>Сегодня</template>
        <template v-slot:text>
          ООО “ЕРС” - одна из ведущих инжиниринговых компаний в РФ,<br />
          предоставляющая своим клиентам весь спектр современных технологий<br />
          и услуг в нефтяной отрасли.
        </template>
      </history-section>
    </div>
    <div class="about-customers">

    </div>
    <div class="about-projects">

    </div>
    <div class="about-mission">

    </div>
  </div>
</template>

<script>
import historySection from "../components/About/historySection";

export default {
  name: "About",
  components: {
    historySection
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
  >h1
    margin-bottom: 60px


</style>
