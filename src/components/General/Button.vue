<template>
  <button
    class="general-btn"
    :class="[
      type + '-btn',
      color + '-btn',
      inactive ? color + '-inactive-btn' : ''
    ]"
  >
    <slot>{{ type === "submit" ? "Отправить" : "" }}</slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: ["type", "color", "inactive"]
};
</script>

<style scoped lang="sass">
.general-btn
  border-radius: 4px
  border: none
  height: 50px
  align-self: stretch
  cursor: pointer
  &:focus
    outline: none

.callback-btn
  box-shadow: 0 0 20px #EE001E
  &:hover
    box-shadow: 0 0 20px #EC001D
  &:active
    box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.15)

.red-btn
  background: #4F4F51
  color: #FFFFFF
  &:hover
    background: radial-gradient(70.49% 4739.6% at 50% 64%, #4F4F51 17.15%, #636365 60.95%, #838283 89.76%, #DAD7D7 100%)
  &:active
    background: radial-gradient(70.49% 4739.6% at 50% 64%, #4F4F51 17.15%, #636365 60.95%, #838283 89.76%, #DAD7D7 100%)
    box-shadow: inset 4px 4px 4px rgba(0, 0, 0, 0.25)
.red-inactive-btn, .red-inactive-btn:hover, .red-inactive-btn:active
  background: #940000
  color: #FFFFFF

.grey-btn
  background: #4F4F51
  color: #FFFFFF
  &:hover
    background: radial-gradient(70.49% 4739.6% at 50% 64%, #4F4F51 17.15%, #636365 60.95%, #838283 89.76%, #DAD7D7 100%)
  &:active
    background: radial-gradient(70.49% 4739.6% at 50% 64%, #4F4F51 17.15%, #636365 60.95%, #838283 89.76%, #DAD7D7 100%)
    box-shadow: inset 4px 4px 4px rgba(0, 0, 0, 0.25)
.grey-inactive-btn, .grey-inactive-btn:hover, .grey-inactive-btn:active
  background: #F0EFEF
  color: #DAD7D7

.white-btn
  background: #F0EFEF
  color: #000000
  &:hover
    background: #FFFFFF
  &:active
    background: #FFFFFF
</style>
