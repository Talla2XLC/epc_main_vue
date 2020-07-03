<template>
  <div class="news">
    <h1 class="text-h1">Новости нашей компании</h1>
    <div class="news-list">

    </div>
  </div>
</template>

<script>
export default {
  name: "News"
};
</script>

<style scoped lang="sass">
.news
  display: flex
  flex-flow: column nowrap
  align-items: center
  padding: 100px 50px
  box-sizing: border-box
  &-list
    width: 100%
    display: flex
    flex-flow: column nowrap
    align-items: stretch
    padding: 60px 50px
    box-sizing: border-box
    background: linear-gradient(112.3deg, #F0EFEF 11.28%, rgba(240, 239, 239, 0) 112.64%), url('../assets/images/News/news-list.png') no-repeat right bottom
    background-size: cover
</style>
