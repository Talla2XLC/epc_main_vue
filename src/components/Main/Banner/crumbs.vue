<template>
  <div class="banner-crumbs-wrapper">
    <div
      v-for="index in crumbsQty"
      :key="index"
      class="banner-crumb"
      :class="{ 'banner-crumb-active': index - 1 === currentCrumbId }"
      @click="emitCrumbPressed(index - 1)"
    />
  </div>
</template>

<script>
export default {
  name: "crumbs",
  props: ["crumbsQty", "currentCrumbId"],
  methods: {
    emitCrumbPressed(crumbID) {
      console.log("Emit crumb pressed", crumbID);
      this.$emit("crumbPressed", crumbID);
    }
  }
};
</script>

<style lang="sass" scoped>
.banner-crumbs-wrapper
  position: absolute
  bottom: 28px
  display: flex
  flex-flow: row nowrap
  @include respond-to(s)
    bottom: 10px

.banner-crumb
  width: 12px
  height: 12px
  background: #4F4F51
  border-radius: 50%
  margin-right: 12px
  cursor: pointer
  @include respond-to(s)
    width: 8px
    height: 8px
  &-active
    background: #DAD7D7
  &:last-of-type
    margin-right: 0

@media (max-height: 750px)
  .banner-crumbs-wrapper
    bottom: 10px
</style>
