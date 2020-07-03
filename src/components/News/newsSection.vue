<template>
  <div class="news-section">
    <div class="news-section-content">
      <span class="text-body2">{{ date }}</span>
      <h2 class="text-h2 red">{{ header }}</h2>
      <p class="text-body3">{{ desc }}</p>
    </div>
    <div class="news-section-imgDiv">
      <img
        v-if="img"
        :src="require(`@/assets/images/News/${img}`)"
        class="news-section-img"
        :alt="'news' + ind + '_pic'"
      />
      <div class="news-section-img-filer" />
    </div>
  </div>
</template>

<script>
export default {
  name: "newsSection",
  props: ["date", "header", "desc", "img", "ind"]
};
</script>

<style scoped lang="sass">
.news-section
  display: flex
  flex-flow: row nowrap
  justify-content: space-between
  align-items: stretch
  background: #FFFFFF
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.2)
  padding: 60px 105px
  box-sizing: border-box
  margin-bottom: 40px
  &:last-of-type
    margin-bottom: 0
  &-content
    display: flex
    flex-flow: column nowrap
    align-items: flex-start
    >span
      margin-bottom: 10px
    >h2
      margin-bottom: 30px
    >p
      max-width: 610px
  &-imgDiv
    min-width: 400px
    display: flex
    flex-flow: row nowrap
    justify-content: center
    align-items: center
    position: relative
  &-img
    object-fit: cover
    height: 100%
    max-width: 400px
    position: relative
    z-index: 0
    &-filer
      width: 100%
      height: 100%
      z-index: 5
      position: absolute
      background: linear-gradient(313.97deg, #F0EFEF -29.28%, rgba(240, 239, 239, 0) 61.41%)
</style>
