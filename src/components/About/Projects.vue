<template>
  <div class="about-project">
    <h2
      :class="{
        'text-h2': $mq === 'xl' || $mq === 'l',
        'text-h2T': $mq === 'm'
      }"
    >
      Наши проекты
    </h2>
    <projects-section>
      <template v-slot:year>2015</template>
      <template v-slot:text>
        Пятилетнее соглашение с ПАО “Лукойл”, целью которого является поставка
        топливораздаточной техники, сопутствующего оборудования
        и&nbsp;комплектующих во&nbsp;исполнение ПАО “Лукойл” Инвестиционной
        Программы по развитию и&nbsp;совершенствованию сбытовой структуры
        на&nbsp;территории РФ.
      </template>
    </projects-section>
    <projects-section>
      <template v-slot:year>2017</template>
      <template v-slot:text>
        Модернизация НБ Старая Купавна. В рамках данного проекта была
        произведена поставка и ввод в&nbsp;эксплуатацию двух измерительных
        комплексов Е3000 нижнего налива и двух измерительных комплексов Е3000
        комбинированного налива производства Emco Wheaton GmbH.
      </template>
    </projects-section>
    <projects-section>
      <template v-slot:year>2017</template>
      <template v-slot:text>
        Пилотный проект по внедрению на АЗС услуг по&nbsp;зарядке
        электромобилей. В рамках данного проекта ООО “ЕРС” произвело поставку и
        ввод в&nbsp;эксплуатацию пяти установок Lafon QC45 мощностью 50 кВт
        каждая впервые в РФ.
      </template>
    </projects-section>
    <projects-section>
      <template v-slot:year>2018</template>
      <template v-slot:text>
        Модернизация НБ Волгоградская. В рамках данного проекта была произведена
        поставка и ввод в&nbsp;эксплуатацию семи измерительных комплексов Е3000
        нижнего налива производства Emco Wheaton GmbH.
      </template>
    </projects-section>
  </div>
</template>

<script>
import projectsSection from "./projectsSection";

export default {
  name: "Projects",
  components: {
    projectsSection
  }
};
</script>

<style scoped lang="sass">
.about-project
  display: flex
  flex-flow: column nowrap
  margin-bottom: 70px
  @include respond-to(xs)
  @include respond-to(s)
  @include respond-to(m)
    margin-bottom: 40px
  @include respond-to(l)
    margin-bottom: 70px
  @include respond-to(xl)
    margin-bottom: 70px
  >h2
    margin-bottom: 60px
    align-self: center
    @include respond-to(xs)
    @include respond-to(s)
    @include respond-to(m)
      margin-bottom: 30px
    @include respond-to(l)
      margin-bottom: 60px
    @include respond-to(xl)
      margin-bottom: 60px
</style>
