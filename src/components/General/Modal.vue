<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header"></slot>
          </div>

          <div class="modal-body">
            <slot name="body"></slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button class="email-closeBtn" @click.prevent="closeModal">
                <span class="email-closeBtn-mark" />
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  props: ["closeModal"]
};
</script>

<style scoped lang="sass">
.modal-mask
  position: fixed
  z-index: 10
  top: 0
  left: 0
  width: 100%
  height: 100%
  background-color: rgba(0, 0, 0, 0.5)
  display: table
  transition: opacity 0.3s ease

.modal-wrapper
  display: table-cell
  vertical-align: middle

.modal-container
  box-sizing: border-box
  width: 505px
  min-height: 572px
  margin: 0 auto
  padding: 33px 47px 0
  background-color: #fff
  border-radius: 2px
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33)
  transition: all 0.3s ease
  display: flex
  flex-flow: column nowrap
  justify-content: center
  align-items: center
  @include respond-to(s)
    width: 100%
    min-height: 320px
    padding: 0 12px

.modal-header h3
  margin-top: 0
  color: #42b983

.modal-body
  text-align: center
  margin: 20px 0 70px

.modal-default-button
  float: right

.modal-enter
  opacity: 0

.modal-leave-active
  opacity: 0

.modal-enter .modal-container,
.modal-leave-active .modal-container
  -webkit-transform: scale(1.1)
  transform: scale(1.1)
</style>
