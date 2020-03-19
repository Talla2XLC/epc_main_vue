<template>
  <div class="nupi-banner" ref="nupiBanner">
    <span>Официальный склад<br>
    компании Nupi Industrie Italiane S.p.A.<br>
    в Российской Федерации и странах СНГ. </span>
    <img class="nupi-img" src="~@/assets/partners_logo/nupi_logo.png">
    <p> 
    Специальные цены,<br>
    предложения и скидки<br>
    для торговых и строительных компаний!</p>
    <p>
    Чтобы получить персональную скидку, звоните по телефону:<br>
    +7(499)125-44-55</p>
    <div class="arrow-8" ref="arrows" @click="switchPosition" />
  </div>
</template>

<script>

export default {
  name: "nupi-banner",
  methods: {
    switchPosition() {
      this.$refs.nupiBanner.classList.toggle("move-out");
      this.$refs.arrows.classList.toggle("rotate");
    }
  },
  components: {
  }
};
</script>

<style lang="sass">

.nupi-banner
  width: 50%
  height: 100%
  display: -webkit-flex
  display: -moz-flex
  display: -ms-flex
  display: -o-flex
  display: flex
  flex-flow: column nowrap
  flex-grow: 1
  align-items: center
  justify-content: space-around
  background: linear-gradient(179.95deg, rgba(255, 255, 255, 0) 62.59%, rgba(0, 0, 0, 0.46) 99.95%), linear-gradient(107deg, #A1000C 59.06%, #AA000E 70.61%, #BE0013 80.16%, #D90019 87.62%, #EE001E 91.98%)
  padding: 1rem 0.5rem
  box-sizing: border-box
  position: absolute
  transition: 200ms ease-in
  clip-path: polygon(20% 0, 100% 0, 100% 100%, 0 100%)
  color: white
  font-size: 24px
  font-family: Ubuntu
  text-align: center
  line-height: 2.5rem
  animation: move-in 2s ease-out
  padding: 6% 0
  >span
  >p
.arrow-8
  position: absolute
  width: 2rem
  height: 2rem
  margin: 0
  bottom: 1rem
  left: 3rem
  transform: rotate(-90deg)
  cursor: pointer

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
  max-width: 30%

@keyframes move-in
    0%
        right: -45%
    100%
        right: 0

.move-out
  animation: move-out 2s ease-out
  right: -45%

.rotate
  transform: rotate(90deg) translateX(-1.1rem)  

@keyframes move-out
    0%
        right: 0
    100%
        right: -45%

@media (min-width: 900px)

@media (min-width: 1850px)
</style>
