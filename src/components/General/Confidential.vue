<template>
  <transition name="modal">
    <div class="modal-mask" @click.self="closeModal">
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
          >
            Политика конфиденциальности
          </div>

          <div class="modal-body">
            <div class="modal-body-section">
              <p
                class="modal-body-content-desc"
                :class="{
                  'text-body3': $mq === 'xl' || $mq === 'l',
                  'text-body5': $mq === 'm',
                  'text-body6': $mq === 's'
                }"
              >
                Настоящая Политика конфиденциальности (далее — Политика)
                распространяется на отношения<br />
                ООО “ЕРС” (далее — Оператор Сервиса) и физических лиц,
                являющихся Пользователями сервиса<br />
                ООО “ЕРС” (далее – «Сервис»), при совершении Пользователями
                операций с использованием Сервиса. Политика действует в
                отношении всей информации, которую Оператор Сервиса может
                Сервиса может получить о&nbsp;Пользователе во&nbsp;время
                использования им Сервиса.<br />
                Термины, используемые в настоящей Политике, употребляются в
                значении, которое они имеют в&nbsp;Пользовательском соглашении
                (оферте) об использовании сервиса ООО “ЕРС” (далее - Оферта).<br />
                Использование Сервиса означает безоговорочное принятие
                Пользователем всех условий Оферты без каких-либо изъятий или
                условиях присоединения и безоговорочное согласие Пользователя с
                настоящей Политикой и&nbsp;указанными в&nbsp;ней условиями
                обработки обработки информации; в&nbsp;случае несогласия
                с&nbsp;этими условиями Пользователь не должен использовать
                Сервис.
              </p>
            </div>
            <div class="modal-body-section">
              <span
                :class="{
                  'text-h4': $mq === 'xl' || $mq === 'l',
                  'text-h5': $mq === 'm' || $mq === 's'
                }"
              >
                1. Информация Пользователя, которую получает и&nbsp;обрабатывает
                Оператор Сервиса
              </span>
              <p
                class="modal-body-content-desc"
                :class="{
                  'text-body3': $mq === 'xl' || $mq === 'l',
                  'text-body5': $mq === 'm',
                  'text-body6': $mq === 's'
                }"
              >
                1.1. В рамках настоящей Политики под&nbsp;информацией
                Пользователя понимаются: 1.1.1. Персональная информация, которую
                Пользователь предоставляет о&nbsp;себе самостоятельно
                при&nbsp;регистрации (создании учетной записи Сервиса) или
                в&nbsp;процессе использования Сервиса, включая персональные
                данные пользователя. 1.1.2. Данные, которые автоматически
                передаются Оператору Сервиса в процессе использования Сервиса
                с&nbsp;помощью установленного на устройстве Пользователя
                программного обеспечения, в&nbsp;том&nbsp;числе, но&nbsp;не
                ограничиваясь: IP&#8209;адрес и&nbsp;другие сведения
                об&nbsp;устройстве, с&nbsp;которого осуществляется доступ,
                информация из cookie, информация о&nbsp;браузере Пользователя
                (или&nbsp;иной программе, с&nbsp;помощью которой осуществляется
                доступ к&nbsp;Сервису), время доступа, адрес запрашиваемой
                страницы.
              </p>
              <p
                class="modal-body-content-desc"
                :class="{
                  'text-body3': $mq === 'xl' || $mq === 'l',
                  'text-body5': $mq === 'm',
                  'text-body6': $mq === 's'
                }"
              >
                1.2. За исключением случаев Идентификации Пользователей по
                основаниям и&nbsp;в&nbsp;порядке, предусмотренным Офертой
                и&nbsp;действующим законодательством РФ, Оператор Сервиса
                не&nbsp;проверяет достоверность информации, предоставляемой
                Пользователем, при&nbsp;этом Оператор Сервиса исходит
                из&nbsp;того, что&nbsp;Пользователь предоставляет достоверную и
                достаточную информацию и&nbsp;поддерживает эту&nbsp;информацию
                в&nbsp;актуальном состоянии. В&nbsp;случае если&nbsp;будет
                установлено, что&nbsp;пользователь предоставил информацию, не
                соответствующую действительности, Оператор Сервиса вправе в
                любой момент приостановить либо прекратить доступ Пользователя
                к&nbsp;Сервису. Пользователь согласен с&nbsp;тем, что
                в&nbsp;случае предоставления недостоверных данных о&nbsp;себе,
                претензии Пользователя в адрес Оператора Сервиса, относящиеся
                к&nbsp;предоставлению Сервиса, не&nbsp;будут иметь юридической
                силы.
              </p>
            </div>
            <div class="modal-body-section">
              <span
                :class="{
                  'text-h4': $mq === 'xl' || $mq === 'l',
                  'text-h5': $mq === 'm' || $mq === 's'
                }"
              >
                2. Цели сбора и обработки персональной информации Пользователей
              </span>
              <p
                class="modal-body-content-desc"
                :class="{
                  'text-body3': $mq === 'xl' || $mq === 'l',
                  'text-body5': $mq === 'm',
                  'text-body6': $mq === 's'
                }"
              >
                2.1. Оператор Сервиса собирает и хранит только ту персональную
                информацию, которая необходима для&nbsp;предоставления Сервиса и
                оказания услуг в соответствии с Офертой.
              </p>
              <p
                class="modal-body-content-desc"
                :class="{
                  'text-body3': $mq === 'xl' || $mq === 'l',
                  'text-body5': $mq === 'm',
                  'text-body6': $mq === 's'
                }"
              >
                2.2. Персональную информацию Пользователя Оператор Сервиса может
                использовать в следующих целях:<br />
                2.2.1. Идентификация Пользователя;<br />
                2.2.2.Повышение безопасности использования Сервиса;<br />
                2.2.3. Связь с&nbsp;Пользователем, в&nbsp;том&nbsp;числе
                направление уведомлений, запросов и&nbsp;информации, касающихся
                использования Сервиса, оказания услуг, а&nbsp;также обработка
                запросов и&nbsp;заявок от&nbsp;Пользователя;<br />
                2.2.4. Улучшение качества Сервиса, удобства его использования,
                разработка новых услуг;<br />
                2.2.5. Получения уведомлений Клиента об оплате денежных средств
                и/или&nbsp;возврата остатка денежных средств.
              </p>
            </div>
            <div class="modal-body-section">
              <span
                :class="{
                  'text-h4': $mq === 'xl' || $mq === 'l',
                  'text-h5': $mq === 'm' || $mq === 's'
                }"
              >
                3. Условия обработки персональной информации Пользователя
                и&nbsp;её передачи третьим&nbsp;лицам
              </span>
              <p
                class="modal-body-content-desc"
                :class="{
                  'text-body3': $mq === 'xl' || $mq === 'l',
                  'text-body5': $mq === 'm',
                  'text-body6': $mq === 's'
                }"
              >
                3.1. Оператор сервиса хранит информацию Пользователей
                в&nbsp;соответствии с требованиями применимого законодательства,
                настоящей политики и&nbsp;внутренними нормативными документами
                Оператора Сервиса.
              </p>
              <p
                class="modal-body-content-desc"
                :class="{
                  'text-body3': $mq === 'xl' || $mq === 'l',
                  'text-body5': $mq === 'm',
                  'text-body6': $mq === 's'
                }"
              >
                3.2. Оператор Сервиса обеспечивает конфиденциальность информации
                Пользователя.
              </p>
              <p
                class="modal-body-content-desc"
                :class="{
                  'text-body3': $mq === 'xl' || $mq === 'l',
                  'text-body5': $mq === 'm',
                  'text-body6': $mq === 's'
                }"
              >
                3.3. Оператор Сервиса вправе передать персональную информацию
                Пользователя третьим лицам в&nbsp;следующих&nbsp;случаях:<br />
                3.3.1. Пользователь выразил свое согласие на&nbsp;такие
                действия;<br />
                3.3.2. Передача необходима для&nbsp;исполнения распоряжения
                Пользователя;<br />
                3.3.3. Передача предусмотрена российским или иным применимым
                законодательством в&nbsp;рамках
                установленной&nbsp;законодательством процедуры;<br />
                3.3.4. В целях обеспечения возможности защиты прав
                и&nbsp;законных интересов Оператора Сервиса или третьих лиц в
                случаях, когда у&nbsp; Оператора Сервиса имеются достаточные
                основания полагать, что&nbsp; Пользователь нарушает условия
                Оферты и/или&nbsp;требования применимого законодательства.<br />
                3.3.5. Стратегическим партнерам, которые работают
                с&nbsp;Сервисом для&nbsp; предоставления продуктов и&nbsp;услуг,
                или&nbsp;тем из&nbsp;них, которые&nbsp; помогают Сервису
                реализовывать продукты и&nbsp;услуги потребителям. Мы
                предоставляем третьим лицам минимальный объем персональных
                данных, необходимый только для&nbsp;оказания требуемой услуги.
              </p>
              <p
                class="modal-body-content-desc"
                :class="{
                  'text-body3': $mq === 'xl' || $mq === 'l',
                  'text-body5': $mq === 'm',
                  'text-body6': $mq === 's'
                }"
              >
                3.4. При обработке персональных данных Пользователей Оператор
                Сервиса руководствуется законодательством Российской Федерации.
              </p>
            </div>
            <div class="modal-body-section">
              <span
                :class="{
                  'text-h4': $mq === 'xl' || $mq === 'l',
                  'text-h5': $mq === 'm' || $mq === 's'
                }"
              >
                4. Меры, применяемые для защиты персональной информации
                Пользователей
              </span>
              <p
                class="modal-body-content-desc"
                :class="{
                  'text-body3': $mq === 'xl' || $mq === 'l',
                  'text-body5': $mq === 'm',
                  'text-body6': $mq === 's'
                }"
              >
                4.1. Оператор Сервиса принимает необходимые и достаточные
                организационные и технические меры для защиты персональной
                информации Пользователя от неправомерного или случайного
                доступа, уничтожения, изменения, блокирования, копирования,
                распространения, а также от иных неправомерных действий с ней
                третьих лиц.
              </p>
            </div>
            <div class="modal-body-section">
              <span
                :class="{
                  'text-h4': $mq === 'xl' || $mq === 'l',
                  'text-h5': $mq === 'm' || $mq === 's'
                }"
              >
                5. Изменение Политики конфиденциальности. Применимое
                законодательство
              </span>
              <p
                class="modal-body-content-desc"
                :class="{
                  'text-body3': $mq === 'xl' || $mq === 'l',
                  'text-body5': $mq === 'm',
                  'text-body6': $mq === 's'
                }"
              >
                5.1. Оператор Сервиса имеет право вносить изменения в настоящую
                Политику конфиденциальности. Новая редакция Политики вступает в
                силу с момента ее размещения, если иное не предусмотрено новой
                редакцией Политики. Действующая редакция всегда находится на
                сайте Сервиса.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Confidential",
  props: ["closeModal"]
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
  padding: 100px 205px
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
  @include respond-to(m)
    padding: 70px 40px
  @include respond-to(l)
    padding: 100px 205px
  @include respond-to(xl)
    padding: 100px 390px

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
    background: #F0EFEF
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
    background: #F0EFEF
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
    margin-bottom: 20px
  @include respond-to(m)
    margin-bottom: 30px
  @include respond-to(l)
    margin-bottom: 60px
  @include respond-to(xl)
    margin-bottom: 60px

.modal-body-section:not(:last-of-type)
  margin-bottom: 30px
  @include respond-to(s)
    margin-bottom: 14px
  @include respond-to(m)
    margin-bottom: 20px
  @include respond-to(l)
    margin-bottom: 30px
  @include respond-to(xl)
    margin-bottom: 30px
  >span
    display: block
    margin-bottom: 20px
    width: 715px
    @include respond-to(s)
      margin-bottom: 10px
      width: 296px
    @include respond-to(m)
      margin-bottom: 14px
      width: 688px
    @include respond-to(l)
      margin-bottom: 20px
      width: 715px
    @include respond-to(xl)
      margin-bottom: 20px
      width: 705px
  >p
    &:not(:last-of-type)
      margin-bottom: 14px
      @include respond-to(s)
        margin-bottom: 6px
      @include respond-to(m)
        margin-bottom: 10px
      @include respond-to(l)
        margin-bottom: 14px
      @include respond-to(xl)
        margin-bottom: 14px
</style>
