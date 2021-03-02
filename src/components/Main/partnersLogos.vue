<template>
  <div class="partners">
    <router-link
      v-for="partner in partners"
      :key="partner.name.toLowerCase()"
      :to="{ name: `partners`, params: { product: partner.name } }"
      class="partner_logo-link"
    >
      <img
        v-if="partner.logoType !== 'SVG'"
        :class="['partner_logo-img', `${partner.name.toLowerCase()}-logo`]"
        :src="getImgSrc(partner)"
        :alt="`${partner.name.toLowerCase()}_partner_logo`"
        height="40"
        width="150"
      />
      <component v-else :is="getImgSrc(partner)" />
    </router-link>

<!--    <router-link-->
<!--      :to="{ name: `partners`, params: { product: 'Scully' } }"-->
<!--      class="partner_logo-link"-->
<!--    >-->
<!--      <img-->
<!--        class="partner_logo-img scully-logo"-->
<!--        src="@/assets/partners_logo/scully_logo.png"-->
<!--        alt="partner_logo"-->
<!--        height="40"-->
<!--        width="150"-->
<!--      />-->
<!--    </router-link>-->
<!--    <router-link-->
<!--      :to="{ name: `partners`, params: { product: 'Emco' } }"-->
<!--      class="partner_logo-link"-->
<!--    >-->
<!--      <img-->
<!--        class="partner_logo-img emco-logo"-->
<!--        src="@/assets/partners_logo/emco_logo.png"-->
<!--        alt="partner_logo"-->
<!--        height="40"-->
<!--        width="162"-->
<!--      />-->
<!--    </router-link>-->
<!--    <router-link-->
<!--      :to="{ name: `partners`, params: { product: 'Nupi' } }"-->
<!--      class="partner_logo-link"-->
<!--    >-->
<!--      <img-->
<!--        class="partner_logo-img nupi-logo"-->
<!--        src="@/assets/partners_logo/nupi_logo.png"-->
<!--        alt="partner_logo"-->
<!--        height="50"-->
<!--        width="50"-->
<!--      />-->
<!--    </router-link>-->
<!--    <router-link-->
<!--      :to="{ name: `partners`, params: { product: 'Rotork' } }"-->
<!--      class="partner_logo-link"-->
<!--    >-->
<!--      <img-->
<!--        class="partner_logo-img rotork-logo"-->
<!--        src="@/assets/partners_logo/rotork_logo.png"-->
<!--        alt="partner_logo"-->
<!--        height="40"-->
<!--        width="136"-->
<!--      />-->
<!--    </router-link>-->
<!--    <router-link-->
<!--      :to="{ name: `partners`, params: { product: 'EVBox' } }"-->
<!--      class="partner_logo-link"-->
<!--    >-->
<!--      <img-->
<!--        class="partner_logo-img evbox-logo"-->
<!--        src="@/assets/partners_logo/evbox_logo.png"-->
<!--        alt="partner_logo"-->
<!--        height="46"-->
<!--        width="134"-->
<!--      />-->
<!--    </router-link>-->
  </div>
</template>

<script>
export default {
  name: "partners",
  computed: {
    partners() {
      return this.$store.state.partners;
    }
  },
  methods: {
    getImgSrc(partner) {
      return require(`@/assets/partners_logo/${partner.name.toLowerCase()}_logo.${partner.logoType.toLowerCase()}`);
    }
  }
};
</script>

<style lang="sass">
.partners
  display: -webkit-flex
  display: -moz-flex
  display: -ms-flex
  display: -o-flex
  display: flex
  flex-flow: row nowrap
  justify-content: space-between
  padding: 0 225px
  background: #dad7d7
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25)
  position: sticky
  bottom: 40px
  z-index: 8
  @include respond-to(s)
    padding: 0 12px
  @include respond-to(m)
    padding: 0 40px
  @include respond-to(l)
    padding: 0 205px
  @include respond-to(xl)
    padding: 0 245px

.partner_logo
  &-img
    object-fit: contain
    cursor: pointer
    transition: transform 200ms ease-in
    &:hover
      filter: none
      transform: scale(1.1)
      >g
        fill: #323439
  &-link
    display: flex
    flex-flow: row nowrap
    align-items: center
    justify-content: center
    height: 80px
    width: 190px
    @include respond-to(s)
      height: 48px !important
      width: auto
    @include respond-to(m)
      width: 120px
    @include respond-to(l)
      width: 190px
    @include respond-to(xl)
      width: 270px
    &:not(:last-of-type)
      @include respond-to(s)
        margin-right: 20px

.scully-logo
  filter: saturate(0)
  width: 150px
  height: 40px
  @include respond-to(s)
    width: 98px
    height: 24px
  @include respond-to(m)
    width: 98px
    height: 26px
  @include respond-to(l)
    width: 150px
    height: 40px
  @include respond-to(xl)
    width: 150px
    height: 40px

.emco-logo
  filter: saturate(0) opacity(50%)
  width: 162px
  height: 40px
  @include respond-to(s)
    width: 100px
    height: 24px
  @include respond-to(m)
    width: 100px
    height: 24px
  @include respond-to(l)
    width: 162px
    height: 40px
  @include respond-to(xl)
    width: 162px
    height: 40px

.nupi-logo
  filter: saturate(0) opacity(60%)
  width: 50px
  height: 50px
  @include respond-to(s)
    width: 24px
    height: 24px
  @include respond-to(m)
    width: 34px
    height: 34px
  @include respond-to(l)
    width: 50px
    height: 50px
  @include respond-to(xl)
    width: 50px
    height: 50px

.rotork-logo
  filter: saturate(0) contrast(40%)
  width: 136px
  height: 40px
  @include respond-to(s)
    width: 80px
    height: 24px
  @include respond-to(m)
    width: 80px
    height: 24px
  @include respond-to(l)
    width: 136px
    height: 40px
  @include respond-to(xl)
    width: 136px
    height: 40px

.evbox-logo
  filter: saturate(0) contrast(0) brightness(0.9)
  width: 134px
  height: 46px
  @include respond-to(s)
    width: 70px
    height: 24px
  @include respond-to(m)
    width: 88px
    height: 30px
  @include respond-to(l)
    width: 134px
    height: 46px
  @include respond-to(xl)
    width: 134px
    height: 46px

@media (max-height: 950px)
  .partners
    bottom: 40px
  .partner_logo-link
    height: 64px
</style>
