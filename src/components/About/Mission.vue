<template>
  <div class="about-mission">
    <h2
      :class="{
        'text-h2': $mq === 'xl' || $mq === 'l',
        'text-h2T': $mq === 'm',
        'text-h4': $mq === 's'
      }"
    >
      Наша миссия
    </h2>
    <h3
      :class="{
        'text-h3': $mq === 'xl' || $mq === 'l' || $mq === 'm',
        'text-h5': $mq === 's'
      }"
    >
      Тесное сотрудничество с&nbsp;клиентами является основой нашей деятельности
    </h3>
    <p
      class="text-body2"
      :class="{
        'text-body2': $mq === 'xl' || $mq === 'l',
        'text-body4': $mq === 'm',
        'text-body6': $mq === 's'
      }"
    >
      Компании - участники нефтяного рынка РФ все чаще сталкиваются
      с&nbsp;уникальными проблемами. Опираясь на&nbsp;корпоративную культуру,
      ресурсы, глубокое понимание рабочих процессов и на опыт в разработке и
      внедрении инновационных технических&nbsp;решений, ООО&nbsp;“ЕРС” всегда
      сможет предоставить своим заказчикам экономически выгодные,
      технологические решения.
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
  background: url('../../assets/images/About/mission-road.png') no-repeat center top / cover
  width: 100%
  display: flex
  flex-flow: column nowrap
  align-items: center
  padding: 100px 154px
  box-sizing: border-box
  @include respond-to(s)
    min-height: 417px
    padding: 50px 12px
  @include respond-to(m)
    min-height: 448px
    padding: 70px 20px
  @include respond-to(l)
    padding: 100px 154px
  @include respond-to(xl)
    padding: 100px 145px
  >h2
    margin-bottom: 58px
    @include respond-to(s)
      margin-bottom: 20px
    @include respond-to(m)
      margin-bottom: 30px
    @include respond-to(l)
      margin-bottom: 58px
    @include respond-to(xl)
      margin-bottom: 58px
  >h3
    text-align: center
    color: #940000
    margin-bottom: 49px
    width: 610px
    @include respond-to(s)
      margin-bottom: 7px
      width: 296px
    @include respond-to(m)
      margin-bottom: 23px
      width: 520px
    @include respond-to(l)
      margin-bottom: 49px
      width: 610px
    @include respond-to(xl)
      margin-bottom: 49px
      width: 559px
  >p
    display: block
    width: 1030px
    box-sizing: border-box
    @include respond-to(s)
      width: 296px
    @include respond-to(m)
      width: 687px
    @include respond-to(l)
      width: 1030px
    @include respond-to(xl)
      width: 1139px
</style>
