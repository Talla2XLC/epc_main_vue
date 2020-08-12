<template>
  <transition name="modal">
    <div
      class="modal-mask"
      @click.self="closeModal"
    >
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-close-cross" @click="closeModal" />
          <div
            class="modal-header"
            :class="{
              'text-h2': $mq === 'xl' || $mq === 'l',
              'text-h3': $mq === 'm',
              'text-h4': $mq === 's'
            }"
            v-html="product.fullName"
          />
          <div class="modal-body">
            <div class="modal-body-content">
              <span
                :class="{
                  'text-h3': $mq === 'xl' || $mq === 'l',
                  'text-h4': $mq === 'm',
                  'text-h5': $mq === 's'
                }"
              >
                Описание:
              </span>
              <p
                class="modal-body-content-desc"
                :class="{
                  'text-body3': $mq === 'xl' || $mq === 'l',
                  'text-body5': $mq === 'm',
                  'text-body6': $mq === 's'
                }"
                v-html="product.desc"
              />
              <span
                :class="{
                  'text-h3': $mq === 'xl' || $mq === 'l',
                  'text-h4': $mq === 'm',
                  'text-h5': $mq === 's'
                }"
              >
                Технические характеристики:
              </span>
              <table
                class="modal-body-content-paramsTable"
                v-if="this.$mq !== 's'"
              >
                <tr v-for="(param, index) in product.params" :key="index">
                  <td
                    class="modal-body-content-paramsTable-left"
                    :class="{
                      'text-caption': $mq === 'xl' || $mq === 'l',
                      'text-caption2': $mq === 'm' || $mq === 's'
                    }"
                  >
                    {{ index }}
                  </td>
                  <td
                    class="modal-body-content-paramsTable-right"
                    :class="{
                      'text-body3': $mq === 'xl' || $mq === 'l',
                      'text-body5': $mq === 'm',
                      'text-body6': $mq === 's'
                    }"
                    v-html="param"
                  />
                </tr>
              </table>

              <div class="modal-body-content-paramsTable-mobile" v-else>
                <div
                  v-for="(param, index) in product.params"
                  :key="index"
                  class="modal-body-content-paramsTable-mobile-item"
                >
                  <span
                    class="modal-body-content-paramsTable-left"
                    :class="{
                      'text-caption': $mq === 'xl' || $mq === 'l',
                      'text-caption2': $mq === 'm' || $mq === 's'
                    }"
                  >
                    {{ index }}
                  </span>
                  <span
                    class="modal-body-content-paramsTable-right"
                    :class="{
                      'text-body3': $mq === 'xl' || $mq === 'l',
                      'text-body5': $mq === 'm',
                      'text-body6': $mq === 's'
                    }"
                    v-html="param"
                  />
                </div>
              </div>
            </div>
            <div class="modal-body-imgDiv">
              <img
                :src="
                  require(`@/assets/images/Catalog/${producer}/${product.name.toLowerCase()}.jpg`)
                "
                class="modal-body-img"
                :alt="product.name + '_image'"
              />
            </div>
          </div>

          <div class="modal-footer">
            <slot name="footer"> </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ProductModal",
  props: ["closeModal", "product", "producer"],
  computed: {},
  methods: {}
};
</script>

<style scoped lang="sass">
.modal-mask
  position: absolute
  z-index: 10
  top: 0
  left: 0
  width: 100%
  height: 100%
  background-color: rgba(0, 0, 0, 0.5)
  transition: opacity 0.3s ease
  &:hover
    cursor: pointer

.modal-wrapper
  position: relative
  width: 100%
  cursor: default

.modal-container
  box-sizing: border-box
  position: relative
  width: 100%
  padding: 100px
  background-color: #fff
  border-radius: 2px
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33)
  transition: all 0.3s ease
  display: flex
  flex-flow: column nowrap
  justify-content: center
  align-items: center
  @include respond-to(s)
    padding: 50px 12px
    margin-top: 48px
  @include respond-to(m)
    padding: 70px 40px
  @include respond-to(l)
    padding: 100px
  @include respond-to(xl)
    padding: 100px

.modal-close-cross
  position: absolute
  width: 48px
  height: 48px
  cursor: pointer
  top: 0
  right: 0
  @include respond-to(s)
    width: 24px
    height: 24px
  @include respond-to(m)
    width: 48px
    height: 48px
  @include respond-to(l)
    width: 48px
    height: 48px
  @include respond-to(xl)
    width: 48px
    height: 48px
  &:after
    content: ""
    position: absolute
    width: 4px
    height: 30px
    background: #000000
    transform: rotate(-45deg)
    top: 20%
    right: 45%
    @include respond-to(s)
      width: 2px
      height: 15px
    @include respond-to(m)
      width: 4px
      height: 30px
    @include respond-to(l)
      width: 4px
      height: 30px
    @include respond-to(xl)
      width: 4px
      height: 30px
  &:before
    content: ""
    position: absolute
    width: 4px
    height: 30px
    background: #000000
    transform: rotate(-135deg)
    top: 20%
    right: 45%
    @include respond-to(s)
      width: 2px
      height: 15px
    @include respond-to(m)
      width: 4px
      height: 30px
    @include respond-to(l)
      width: 4px
      height: 30px
    @include respond-to(xl)
      width: 4px
      height: 30px
  &:hover:after, &:hover:before
    background: #4F4F51
    box-shadow: none
  &:active:after, &:active:before
    background: #4F4F51
    box-shadow: inset 4px 4px 4px rgba(0, 0, 0, 0.25)
  &:focus
    outline: none

.modal-header
  margin-bottom: 60px
  @include respond-to(s)
    text-align: center
    margin-bottom: 20px
  @include respond-to(m)
    margin-bottom: 30px
  @include respond-to(l)
    margin-bottom: 60px
  @include respond-to(xl)
    margin-bottom: 60px

.modal-body
  display: flex
  flex-flow: row nowrap
  justify-content: space-between
  width: 100%
  @include respond-to(s)
    flex-flow: column nowrap
  @include respond-to(m)
    flex-flow: column nowrap
  @include respond-to(l)
    flex-flow: row nowrap
  @include respond-to(xl)
    flex-flow: row nowrap
  &-content
    display: flex
    flex-flow: column nowrap
    max-width: 50%
    @include respond-to(s)
      max-width: 100%
    @include respond-to(m)
      max-width: 100%
    @include respond-to(l)
      max-width: 50%
    @include respond-to(xl)
      max-width: 50%
    >span
      margin-bottom: 30px
      @include respond-to(s)
        margin-bottom: 8px
      @include respond-to(m)
        margin-bottom: 14px
      @include respond-to(l)
        margin-bottom: 30px
      @include respond-to(xl)
        margin-bottom: 30px
    &-desc
      margin-bottom: 40px
      width: 610px
      max-width: 100%
      @include respond-to(s)
        margin-bottom: 10px
      @include respond-to(m)
        margin-bottom: 20px
        width: 688px
      @include respond-to(l)
        margin-bottom: 40px
        width: 610px
      @include respond-to(xl)
        margin-bottom: 40px
        width: 850px
    &-paramsTable
      >tr
        height: 32px
        @include respond-to(xs)
        @include respond-to(s)
        @include respond-to(m)
          height: 22px
        @include respond-to(l)
          height: 32px
        @include respond-to(xl)
          height: 32px
      &-left
        width: 295px
        @include respond-to(xs)
        @include respond-to(s)
        @include respond-to(m)
          width: 216px
        @include respond-to(l)
          width: 295px
        @include respond-to(xl)
          width: 295px
      &-right
        width: 295px
        @include respond-to(xs)
        @include respond-to(s)
        @include respond-to(m)
          width: 452px
        @include respond-to(l)
          width: 295px
        @include respond-to(xl)
          width: 415px
      &-mobile
        &-item
          display: flex
          flex-flow: column nowrap
          &:not(:last-of-type)
            margin-bottom: 2px
  &-imgDiv
    display: flex
    flex-flow: column nowrap
    align-items: flex-end
    max-width: 50%
    @include respond-to(xs)
    @include respond-to(s)
      max-width: 100%
      align-items: center
      margin-top: 10px
    @include respond-to(m)
      max-width: 100%
      align-items: center
      margin-top: 14px
    @include respond-to(l)
      max-width: 50%
      align-items: flex-end
    @include respond-to(xl)
      max-width: 50%
      align-items: flex-end
  &-img
    @include respond-to(s)
      width: 100%
    @include respond-to(m)
      width: 452px
    @include respond-to(l)
      width: 504px
    @include respond-to(xl)
      width: 705px

.modal-enter
  opacity: 0

.modal-leave-active
  opacity: 0

.modal-enter .modal-container,
.modal-leave-active .modal-container
  -webkit-transform: scale(1.1)
  transform: scale(1.1)
</style>
