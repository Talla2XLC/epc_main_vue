<template>
  <div class="about-history">
    <history-section>
      <template v-slot:year>2014</template>
      <template v-slot:text>
        Компания основана как&nbsp;инжиниринговый партнер ряда международных
        консорциумов&#8209;производителей технологического оборудования&nbsp;для
        нефтяной отрасли.
      </template>
    </history-section>
    <history-section>
      <template v-slot:year>2016</template>
      <template v-slot:text>
        Компания заключает партнерское соглашение с&nbsp;мировым лидером в
        области производства оборудования для отпуска нефти
        и&nbsp;нефтепродуктов западногерманским концерном Emco Wheaton GmbH.
      </template>
    </history-section>
    <history-section>
      <template v-slot:year>2017</template>
      <template v-slot:text>
        Компанией произведена поставка и ввод в&nbsp;эксплуатацию семи зарядных
        станций быстрой зарядки для&nbsp;электромобилей на АЗС впервые
        в&nbsp;России. Cоздание дочерней структуры - epc.electro.
      </template>
    </history-section>
    <history-section>
      <template v-slot:year>2017</template>
      <template v-slot:text>
        Переход ООО “ЕРС” в сегмент рынка электромобилей и&nbsp;создание
        специализированного ресурса –<br v-if="$mq === 'm'" />
        <a
          href="http://epcelectro.ru/"
          :class="{
            'text-link': $mq === 'xl' || $mq === 'l',
            'text-link2': $mq === 'm',
            'text-link3': $mq === 's'
          }"
        >
          epcelectro.ru
        </a>
        , предоставляющего наиболее полное описание оборудования, которое
        обеспечивает зарядку электромобилей.
      </template>
    </history-section>
    <history-section>
      <template v-slot:year>2019</template>
      <template v-slot:text>
        Компания заключает партнерское соглашение с&nbsp;промышленным
        конгломератом&nbsp;Nupi Industrie Italiane&nbsp;S.p.A., занимающимся
        производством решений для инженерных и&nbsp;технологических сетей.
      </template>
    </history-section>
    <history-section :is-last="true">
      <template v-slot:year>Сегодня</template>
      <template v-slot:text>
        ООО “ЕРС” - одна из ведущих инжиниринговых компаний в&nbsp;РФ,
        предоставляющая своим клиентам весь спектр современных технологий
        и&nbsp;услуг в нефтяной отрасли.
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
  @include respond-to(s)
    margin-bottom: 70px
    display: flex
    flex-flow: column nowrap
    justify-content: flex-end
    overflow: hidden
    max-height: 112px
  @include respond-to(s)
    margin-bottom: 50px
  @include respond-to(m)
    margin-bottom: 40px
  @include respond-to(l)
    margin-bottom: 70px
  @include respond-to(xl)
    margin-bottom: 70px
</style>
