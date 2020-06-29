<template>
  <div class="nupi-banner" ref="nupiBanner">
    <div class="nupi-banner-contentArea">
      <banner-content :showFeedbackForm="showForm" v-if="!formCreating" />
      <feedbackForm :closeFeedbackForm="closeForm" v-if="formCreating" />
      <showArrow @click.native="showBanner" v-if="bannerClosed" />
    </div>
  </div>
</template>

<script>
import feedbackForm from "./Banner/feedbackForm";
import bannerContent from "./Banner/bannerContent";
import showArrow from "./Banner/showArrow";

export default {
  name: "nupi-banner",
  data() {
    return {
      formCreating: false,
      bannerClosed: true
    };
  },
  mounted() {
    this.showBanner();
  },
  methods: {
    showForm() {
      this.formCreating = true;
    },

    closeForm() {
      this.formCreating = false;
    },

    showBanner() {
      this.$refs.nupiBanner.classList.remove("move-out");
      this.$refs.nupiBanner.classList.add("move-in");
      document.addEventListener("click", this.closeBanner);
      this.bannerClosed = false;
    },

    closeBanner(e) {
      if (!e.target || e.target.className.includes("nupi-banner")) {
        return null;
      } else {
        this.$refs.nupiBanner.classList.remove("move-in");
        this.$refs.nupiBanner.classList.add("move-out");
        document.removeEventListener("click", this.closeBanner);
        this.bannerClosed = true;
      }
    }
  },
  components: {
    feedbackForm,
    bannerContent,
    showArrow
  }
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
  &-contentArea
    max-width: 505px
    width: 505px
    max-height: 620px
    height: 80%
    margin-top: 30px

@media (max-height: 950px)
  .nupi-banner-contentArea
    margin-top: 70px

@media (max-height: 850px)
  .nupi-banner-contentArea
    margin-top: 60px

@media (max-height: 750px)
  .nupi-banner
    clip-path: polygon(29% 0, 100% 0, 100% 100%, 0 100%)
    &-contentArea
      margin-top: 50px

.move-in
  animation: move-in 1.5s ease-in
  right: 0

.move-out
  animation: move-out 1.5s ease-in
  right: -58%
  @include respond-to(xs)

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
