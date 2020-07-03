<template>
  <div class="about-mission">
    <h2 class="text-h2">Наша миссия</h2>
    <h3 class="text-h3">
      Тесное сотрудничество с клиентами является<br />
      основой нашей деятельности
    </h3>
    <p class="text-body2">
      Компании - участники нефтяного рынка РФ все чаще сталкиваются с уникальными<br />
      проблемами. Опираясь на корпоративную культуру, ресурсы, глубокое<br />
      понимание рабочих процессов и на опыт в разработке и внедрении инновационных<br />
      технических решений, ООО “ЕРС” всегда сможет предоставить своим заказчикам<br />
      экономически выгодные, технологические решения.
    </p>
  </div>
</template>

<script>
export default {
  name: "Mission"
};
</script>

<style scoped lang="sass">
.about-mission
  min-height: 595px
  background: url('../../assets/images/About/mission-road.png') no-repeat
  background-size: contain
  width: 100%
  display: flex
  flex-flow: column nowrap
  align-items: center
  padding: 100px 154px
  box-sizing: border-box
  >h2
    margin-bottom: 58px
  >h3
    text-align: center
    color: #940000
    margin-bottom: 50px
  >p
    display: block
    width: 1030px
    box-sizing: border-box
</style>
