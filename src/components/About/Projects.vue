<template>
  <div class="about-project">
    <h2 class="text-h2">Наши проекты</h2>
    <projects-section>
      <template v-slot:year>2015</template>
      <template v-slot:text>
        Пятилетнее соглашение с ПАО “Лукойл”, целью которого является<br />
        поставка топливораздаточной техники, сопутствующего оборудования<br />
        и комплектующих во исполнение ПАО “Лукойл” Инвестиционной<br />
        Программы по развитию и совершенствованию сбытовой структуры<br />
        на территории РФ.
      </template>
    </projects-section>
    <projects-section>
      <template v-slot:year>2017</template>
      <template v-slot:text>
        Модернизация НБ Старая Купавна. В рамках данного проекта была<br />
        произведена поставка и ввод в эксплуатацию двух измерительных<br />
        комплексов Е3000 нижнего налива и двух измерительных комплексов<br />
        Е3000 комбинированного налива производства Emco Wheaton GmbH.
      </template>
    </projects-section>
    <projects-section>
      <template v-slot:year>2017</template>
      <template v-slot:text>
        Пилотный проект по внедрению на АЗС услуг по зарядке<br />
        электромобилей. В рамках данного проекта ООО “ЕРС” произвело<br />
        поставку и ввод в эксплуатацию пяти установок Lafon QC45<br />
        мощностью 50 кВт каждая впервые в РФ.
      </template>
    </projects-section>
    <projects-section>
      <template v-slot:year>2018</template>
      <template v-slot:text>
        Модернизация НБ Волгоградская. В рамках данного проекта была<br />
        произведена поставка и ввод в эксплуатацию семи измерительных<br />
        комплексов Е3000 нижнего налива производства Emco Wheaton GmbH.
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
  margin-bottom: 100px
  >h2
    margin-bottom: 60px
    align-self: center
</style>
