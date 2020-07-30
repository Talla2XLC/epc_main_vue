<template>
  <div class="news">
    <h1
      :class="{
        'text-h1': $mq === 'xl' || $mq === 'l',
        'text-h2T': $mq === 'm',
        'text-h4': $mq === 's'
      }"
    >
      Новости нашей компании
    </h1>
    <div class="news-list">
      <NewsSection
        v-for="(item, index) in news"
        :key="index"
        :ind="index"
        :date="item.date"
        :header="item.header"
        :desc="item.desc"
        :img="item.img"
      />
    </div>
  </div>
</template>

<script>
import NewsSection from "../components/News/newsSection";
export default {
  name: "News",
  computed: {
    news() {
      return this.$store.state.news;
    }
  },
  components: {
    NewsSection
  }
};
</script>

<style scoped lang="sass">
.news
  display: flex
  flex-flow: column nowrap
  align-items: center
  padding: 100px 50px
  box-sizing: border-box
  @include respond-to(s)
    padding: 98px 0 50px
  @include respond-to(m)
    padding: 70px 0
  @include respond-to(l)
    padding: 100px 50px
  @include respond-to(xl)
    padding: 100px 100px
  >h1
    margin-bottom: 60px
    @include respond-to(s)
      margin-bottom: 20px
    @include respond-to(m)
      margin-bottom: 30px
    @include respond-to(l)
      margin-bottom: 60px
    @include respond-to(xl)
      margin-bottom: 60px
  &-list
    width: 100%
    display: flex
    flex-flow: column nowrap
    align-items: stretch
    padding: 60px 50px
    box-sizing: border-box
    background: linear-gradient(112.3deg, #F0EFEF 11.28%, rgba(240, 239, 239, 0) 112.64%), top / cover no-repeat url('../assets/images/News/news-list.png')
    @include respond-to(s)
      padding: 20px 0
    @include respond-to(m)
      padding: 30px 20px
    @include respond-to(l)
      padding: 60px 50px
    @include respond-to(xl)
      padding: 60px 145px
</style>
