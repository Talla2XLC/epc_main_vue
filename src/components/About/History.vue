<template>
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
      <template v-slot:year>2017</template>
      <template v-slot:text>
        Переход ООО “ЕРС” в сегмент рынка электромобилей и создание<br />
        специализированного ресурса –
        <a href="http://epcelectro.ru/" class="text-link">epcelectro.ru</a>
        , предоставляющего<br />
        наиболее полное описание оборудования, которое обеспечивает<br />
        зарядку электромобилей.
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
</template>

<script>
import historySection from "./historySection";

export default {
  name: "history",
  components: {
    historySection
  }
};
</script>

<style scoped lang="sass">
.about-history
  margin-bottom: 70px
</style>
