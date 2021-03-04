<template>
  <div class="specialOffer-view">
    <h1
      class="specialOffer-view-header"
      :class="{
        'text-h1': $mq === 'xl' || $mq === 'l',
        'text-h2T': $mq === 'm',
        'text-h3': $mq === 's'
      }"
    >
      Прайс-лист
    </h1>
    <p
      class="specialOffer-view-desc"
      :class="{
        'text-body2': $mq === 'xl' || $mq === 'l',
        'text-body5': $mq === 'm',
        'text-body6': $mq === 's'
      }"
    >
      Эксклюзивные цены на запасные части Gilbarco&nbsp;Veeder-Root
      со&nbsp;склада в&nbsp;Москве от&nbsp;поставщика ПАО&nbsp;"ЛУКОЙЛ". Для
      оптовых клиентов мы предоставляем особые скидки.
    </p>
    <Table :table="gilbarcoProducts"/>
  </div>
</template>

<script>
import Table from "@/components/General/Table";
export default {
  name: "specialOffer",
  components: {
    Table
  },
  computed: {
    gilbarcoProducts() {
      return this.$store.state.gilbarco.priceList;
    }
  }
};
</script>

<style lang="sass" scoped>
.specialOffer-view
  padding: 100px
  display: flex
  flex-flow: column nowrap
  align-items: center
  text-align: center
  @include respond-to(s)
    padding: 98px 12px 50px
  @include respond-to(m)
    padding: 70px 40px
  @include respond-to(xl)
    padding: 100px 245px

.specialOffer-view-header
  margin-bottom: 18px
  @include respond-to(s)
    margin-bottom: 6px
  @include respond-to(m)
    margin-bottom: 12px

.specialOffer-view-desc
  max-width: 100%
  margin-bottom: 50px
  @include respond-to(s)
    margin-bottom: 14px
  @include respond-to(m)
    max-width: 453px
    margin-bottom: 22px
  @include respond-to(l)
    max-width: 820px
  @include respond-to(xl)
    max-width: 850px

</style>