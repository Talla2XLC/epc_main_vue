<template>
  <div class="nupi-banner" ref="nupiBanner">
    <span
      >Официальный склад<br />
      компании Nupi Industrie Italiane S.p.A.<br />
      в Российской Федерации и странах СНГ.
    </span>
    <img class="nupi-img" src="~@/assets/partners_logo/nupi_logo.png" />
    <p>
      Специальные цены и скидки<br />
      для торговых и строительных компаний!
    </p>
    <p class="main-txt">
      Узнайте выгодное для Вас предложение<br />
      по телефону +7 (499) 125-44-55,<br />
      e-mail:
      <a href="mailto:kirill.terekhov@epc.com.ru" class="email"
        >kirill.terekhov@epc.com.ru</a
      >
    </p>
    <p class="minor-txt">
      Розничный прайс-лист
    </p>
    <div class="arrow-8" ref="arrows" @click="switchPosition" />
  </div>
</template>

<script>
export default {
  name: "nupi-banner",
  data() {
    return {};
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
@import "@/sass/_media.sass"

.nupi-banner
  width: 55%
  height: 100%
  display: -webkit-flex
  display: -moz-flex
  display: -ms-flex
  display: -o-flex
  display: flex
  flex-flow: column nowrap
  flex-grow: 1
  align-items: center
  justify-content: space-between
  background: linear-gradient(179.96deg, rgba(255, 255, 255, 0) 46.47%, rgba(0, 0, 0, 0.46) 82.52%), linear-gradient(107deg, #A1000C 59.06%, #AA000E 70.61%, #BE0013 80.16%, #D90019 87.62%, #EE001E 91.98%)
  padding: 1rem 0.5rem
  box-sizing: border-box
  position: absolute
  transition: 200ms ease-in
  clip-path: polygon(15% 0, 100% 0, 100% 100%, 0 100%)
  color: #DAD7D7
  font-size: 14px
  font-family: Ubuntu
  text-align: center
  line-height: 1.5rem
  animation: move-in-init 5s ease-in
  padding: 0.5% 0
  right: 0
  @include respond-to(xs)
    width: 100%
    height: 60%
    bottom: 0
    font-size: 10px
    line-height: 1rem
    animation: move-in-init-xs 5s ease-in
  @include respond-to(s)
    font-size: 12px
    line-height: 1rem
    padding-top: 7%
  @include respond-to(m)
    font-size: 14px
    line-height: 1.5rem
    padding-top: 5%
  @include respond-to(l)
    font-size: 18px
    line-height: 1.7rem
    padding-top: 2%
  @include respond-to(xl)
    font-size: 22px
    line-height: 2.5rem
    padding-top: 7%
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

.main-txt
  text-shadow: 0px 0px 10px #EE001E
  color: white
  @include respond-to(xs)
  @include respond-to(s)
  @include respond-to(m)
  @include respond-to(l)
    font-size: 22px
    line-height: 2rem
  @include respond-to(xl)
    font-size: 24px
    line-height: 2rem

.minor-txt
  font-size: 18px

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

.nupi-img
  @include respond-to(xs)
    margin: 0.5rem auto
    max-width: 15%
  @include respond-to(s)
    margin: 0.5rem auto
  @include respond-to(m)
  @include respond-to(l)
    margin: 0.5rem auto
    max-width: 23%
  @include respond-to(xl)
    max-width: 30%
    margin: 1rem auto

.download-link
  margin-left: 1rem

.email
  color: white
  &:hover
    color: #DAD7D7

.download-svg
  fill: grey
  position: relative
  top: 5px
  &:hover
    fill: white

.move-in
  animation: move-in 1.5s ease-in
  right: 0

.move-out
  animation: move-out 1.5s ease-in
  right: -50%
  @include respond-to(xs)
    right: -85%

.rotate
  transform: rotate(90deg) translateX(-1.1rem)

@keyframes move-in-init
  0%
    right: -50%
  50%
    right: -50%
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
    right: -50%
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
    right: -50%

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
