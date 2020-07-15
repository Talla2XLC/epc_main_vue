<template>
  <div class="news-section">
    <div class="news-section-content">
      <span
        :class="{
          'text-body2': $mq === 'xl' || $mq === 'l',
          'text-body3': $mq === 'm'
        }"
        >{{ date }}</span
      >
      <h2
        class="red"
        :class="{
          'text-h2': $mq === 'xl' || $mq === 'l',
          'text-h3': $mq === 'm'
        }"
      >
        {{ header }}
      </h2>
      <p
        :class="{
          'text-body3': $mq === 'xl' || $mq === 'l',
          'text-body5': $mq === 'm'
        }"
      >
        {{ desc }}
      </p>
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
  @include respond-to(xs)
  @include respond-to(s)
  @include respond-to(m)
    padding: 40px 20px
  @include respond-to(l)
    padding: 60px 105px
  @include respond-to(xl)
    padding: 60px 145px
  &:last-of-type
    margin-bottom: 0
  &-content
    display: flex
    flex-flow: column nowrap
    align-items: flex-start
    >span
      margin-bottom: 10px
      @include respond-to(xs)
      @include respond-to(s)
      @include respond-to(m)
        margin-bottom: 4px
      @include respond-to(l)
        margin-bottom: 10px
      @include respond-to(xl)
        margin-bottom: 10px
    >h2
      margin-bottom: 30px
      @include respond-to(xs)
      @include respond-to(s)
      @include respond-to(m)
        margin-bottom: 14px
        max-width: 450px
      @include respond-to(l)
        margin-bottom: 30px
        max-width: 610px
      @include respond-to(xl)
        margin-bottom: 30px
        max-width: 705px
    >p
      max-width: 610px
      @include respond-to(xs)
      @include respond-to(s)
      @include respond-to(m)
        max-width: 450px
      @include respond-to(l)
        max-width: 610px
      @include respond-to(xl)
        max-width: 705px
  &-imgDiv
    min-width: 400px
    display: flex
    flex-flow: row nowrap
    justify-content: center
    align-items: center
    position: relative
    @include respond-to(xs)
    @include respond-to(s)
    @include respond-to(m)
      min-width: 216px
    @include respond-to(l)
      min-width: 400px
    @include respond-to(xl)
      min-width: 415px
  &-img
    object-fit: cover
    position: absolute
    z-index: 0
    height: 100%
    max-width: 100%
    &-filer
      width: 100%
      height: 100%
      z-index: 5
      position: absolute
      background: linear-gradient(313.97deg, #F0EFEF -29.28%, rgba(240, 239, 239, 0) 61.41%)
</style>
