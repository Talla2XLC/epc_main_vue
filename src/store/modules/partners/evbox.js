export default {
  state: () => ({
    name: "EVBox",
    fullName: "EVBox B. V.",
    logoType: "png",
    partnerDescription:
      "EVBox B.V. (Нидерланды) – европейский производитель зарядных систем для электромобилей. " +
      "На протяжении последних 10 лет является признанным лидером по производству и внедрению электрозарядных систем в Европе. " +
      "В настоящее время в Европе установлено более 150 000 электрозарядных станций производства EVBox B.V. <br>" +
      "С 2018 года EVBox является эксклюзивным партнером ООО «ЕРС», в рамках проекта epc.electro, " +
      "осуществляя траншевые поставки электрозарядных станций для развития сети на территории Российской Федерации. <br>" +
      "С 2020 года совместно с ООО «ЕРС», EVBox B.V. является официальным поставщиком АО «МОСЭНЕРГОСБЫТ». <br>" +
      "В 2021 году анонсировано первое публично размещение акций EVBox B.V. на Нью-Йоркской Фондовой Бирже.",
    positionInLogoArr: 3,
    styles: {
      xl: {
        imagePosition: {
          top: 0,
          right: 0
        }
      },
      l: {
        imagePosition: {
          top: 0,
          right: 0
        }
      },
      m: {
        imagePosition: {
          top: 0,
          right: 0
        }
      },
      s: {
        imagePosition: {
          top: 0,
          right: 0
        },
        imageSrc: require(`@/assets/images/Partners/evbox/evbox_r2.png`)
      }
    },
    products: [
      {
        name: "Elvi",
        fullName: "Станция зарядки для дома Elvi",
        desc:
          "Зарядная станция ELVI для домашнего использования. Простое и&nbsp;удобное решение для владельцев электромобилей.<br />Преимущества:<br />-Оснащены смарт счетчиком утвержденного типа<br />-Подключение WiFi + GSM<br />-Стильный дизайн<br />-Модульная конструкция",
        params: {
          "Тип зарядки": "переменный ток",
          "Мощность (кВт)": "3,7<br />7,4<br />11<br />22",
          "Тип подключения": "кабель Type1<br />кабель Type2<br />разъем Type2",
          Исполнение: "одностороннее"
        }
      },
      {
        name: "BusinessLine",
        fullName: "Станция зарядки для бизнеса BusinessLine",
        desc:
          "EVBox BusinessLIne&nbsp;&mdash; зарядная станция для коммерческого использования на&nbsp;закрытых, охраняемых териториях.<br />Преимущества:<br />-Оснащены смарт счетчиком утвержденного типа<br />-Возможность организации управляемой сети из&nbsp;20ти ЭЗС<br />-Стильный дизайн<br />-Выносной модем",
        params: {
          "Тип зарядки": "переменный ток",
          "Мощность (кВт)": "3,7<br />7,4<br />11<br />22",
          "Тип подключения":
            "кабель Type1<br />кабель Type2<br />разъем Type2<br />Schuko",
          Исполнение: "двухстороннее<br />одностороннее"
        }
      },
      {
        name: "Iqon",
        fullName: "Станция зарядки для бизнеса Iqon",
        desc:
          "EVBox IQON&nbsp;&mdash; новое поколение зарядных станций для коммерческого использования. Прочный корпус и&nbsp;стильный дизайн позволяет устанавливать ее&nbsp;на&nbsp;любых териториях.<br />Преимущества:<br />-Оснащены смарт счетчиком утвержденного типа<br />-Антивандальное исполнение<br />-Стильный дизайн<br />-Готовое решение для муниципальных парковок",
        params: {
          "Тип зарядки": "переменный ток",
          "Мощность (кВт)": "до 22",
          "Тип подключения": "кабель Type1<br />кабель Type2",
          Исполнение: "двухстороннее<br />одностороннее",
          Дисплей: "8&Prime; тачскрин"
        }
      },
      {
        name: "PublicLine",
        fullName: "Станция зарядки для города PublicLine",
        desc:
          "EVBox PublicLIne&nbsp;&mdash; зарядная станция для коммерческого использования. Прочный корпус позволяет устанавливать ее&nbsp;на&nbsp;улице, вне охраняемых територий.<br />Преимущества:<br />-Оснащены смарт счетчиком утвержденного типа<br />-Антивандальное исполнение<br />-Стильный дизайн<br />-Готовое решение для муниципальных парковок",
        params: {
          "Тип зарядки": "переменный ток",
          "Мощность (кВт)": "11<br />22",
          "Тип подключения": "разъём Type2",
          Исполнение: "двухстороннее",
          "Дополнительное оборудование": "смарт счетчик утвержденного типа"
        }
      },
      {
        name: "Troniq",
        fullName: "Станция быстрой зарядки Troniq DC",
        desc:
          "EVBox Troniq 50&nbsp;и&nbsp;Troniq 100&nbsp;&mdash; это быстрая зарядная станция для коммерческого использования. Данное решение отлично подходит для организации зарядной придорожной инфраструктуры.<br />Преимущества:<br />-Антивандальное исполнение<br />-Оснащены смарт счетчиком утвержденного типа<br />-Стильный дизайн<br />-Готовое решение для АЗС",
        params: {
          "Тип зарядки": "постоянный ток<br />переменный ток",
          "Мощность (кВт)": "50<br />100",
          "Тип подключения": "кабель CSS<br />кабель CHaDeMo<br />кабель Type2",
          Исполнение: "двухстороннее<br />одностороннее",
          "Дополнительное оборудование": "смарт счетчик утвержденного типа"
        }
      }
    ]
  })
};
