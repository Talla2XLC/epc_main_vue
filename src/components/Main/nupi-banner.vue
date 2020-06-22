<template>
  <div class="nupi-banner" ref="nupiBanner">
    <div class="nupi-banner-content">
      <span class="nupi-banner-content-top text-h3">
        Официальный склад компании Nupi<br />
        Industrie Italiane S.p.A. в Российской<br />
        Федерации и странах СНГ.
      </span>
      <img class="nupi-img" src="~@/assets/partners_logo/nupi_logo.png" />
      <div class="nupi-banner-content-bottom">
        <span class="text-h3">
          Мы всегда готовы предложить выгодные цены и скидки для Вашей компаний!
        </span>
        <button class="callback-btn">
          Перезвоните мне!
        </button>
      </div>
    </div>
    <div class="arrow-8" ref="arrows" @click="switchPosition" />
  </div>
</template>

<script>
export default {
  name: "nupi-banner",
  data() {
    return {
      isFormEdit: false
    };
  },
  methods: {
    switchPosition() {
      if (this.$refs.nupiBanner.classList.contains("move-out")) {
        this.$refs.nupiBanner.classList.add("move-in");
      } else {
        this.$refs.nupiBanner.classList.remove("move-in");
      }
      this.$refs.nupiBanner.classList.toggle("move-out");
      this.$refs.arrows.classList.remove("hide");
      this.$refs.arrows.classList.toggle("rotate");
    }
  },
  components: {}
};
</script>

<style lang="sass">
.nupi-banner
  width: 65%
  height: 100%
  background: linear-gradient(180.27deg, #EC001D -32.99%, #940000 60.02%), #940000
  padding: 0 100px
  box-sizing: border-box
  position: absolute
  transition: 200ms ease-in
  clip-path: polygon(30% 0, 100% 0, 100% 100%, 0 100%)
  animation: move-in-init 5s ease-in
  right: 0
  display: flex
  flex-flow: column nowrap
  align-items: flex-end
  justify-content: center
  @include respond-to(xs)
  @include respond-to(s)
  @include respond-to(m)
  @include respond-to(l)
  @include respond-to(xl)
  &-content
    width: 505px
    display: flex
    flex-flow: column nowrap
    align-items: center
    justify-content: center
    position: relative
    color: #DAD7D7
    text-align: center
    &-top
      position: absolute
      top: -160px
    &-bottom
      display: flex
      flex-flow: column nowrap
      position: absolute
      bottom: -260px

.nupi-img
  width: 124.95px
  height: 123px
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.15)
  position: relative
  @include respond-to(xs)
  @include respond-to(s)
  @include respond-to(m)
  @include respond-to(l)
  @include respond-to(xl)

.callback-btn
  background: #F0EFEF
  box-shadow: 0 0 20px #EE001E
  border-radius: 4px
  border: none
  align-self: stretch
  margin-top: 40px
  cursor: pointer
  &:focus
    outline: none

.arrow-8
  position: absolute
  width: 2rem
  height: 2rem
  margin: 0
  bottom: 1rem
  left: 3rem
  transform: rotate(-90deg)
  cursor: pointer
  animation: appear 5s linear

.arrow-8:before
  content: ''
  position: absolute
  box-sizing: border-box
  width: 100%
  height: 100%
  border-left: 0.5rem solid white
  border-bottom: 0.5rem solid white
  transform: translate(13px, 52px) rotate(-45deg)
  animation: arrow-8 3s linear infinite

.arrow-8:after
  content: ''
  position: absolute
  box-sizing: border-box
  width: 100%
  height: 100%
  border-left: 0.5rem solid white
  border-bottom: 0.5rem solid white
  transform: translate(26px, 0px) rotate(-45deg)
  animation: arrow-8 3s linear infinite -1.5s

@media (max-height: 950px)
  .nupi-banner-content
    &-bottom
      bottom: -220px

  .callback-btn
    margin-top: 30px

@media (max-height: 850px)
  .nupi-banner-content
    &-bottom
      bottom: -200px

  .callback-btn
    margin-top: 20px

@keyframes arrow-8
    0%
        opacity: 0
        transform: translate(-6px, -26px) rotate(-45deg)
    10%, 90%
        opacity: 0
    50%
        opacity: 1
        border-left: 0.5rem solid white
        border-bottom: 0.5rem solid white
        transform: translate(-6px, 0px) rotate(-45deg)
    100%
        opacity: 0
        transform: translate(-6px, 26px) rotate(-45deg)

.move-in
  animation: move-in 1.5s ease-in
  right: 0

.move-out
  animation: move-out 1.5s ease-in
  right: -58%
  @include respond-to(xs)

.rotate
  transform: rotate(90deg) translateX(-1.1rem)

@keyframes move-in-init
  0%
    right: -58%
  50%
    right: -58%
  100%
    right: 0

@keyframes move-in-init-xs
  0%
    right: -85%
  50%
    right: -85%
  100%
    right: 0

@keyframes move-in
  0%
    right: -58%
  100%
    right: 0

@keyframes move-in-xs
  0%
    right: -85%
  100%
    right: 0

@keyframes move-out
  0%
    right: 0
  100%
    right: -58%

@keyframes move-out-xs
  0%
    right: 0
  100%
    right: -85%

@keyframes appear
  0%
    visibility: hidden
  90%
    visibility: hidden
    opacity: 0
  100%
    visibility: visible
    opacity: 1
</style>
