import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedPage: "",
    news: [
      {
        date: "июль 2020",
        header: "Новинка! Станция быстрой зарядки EVBox Troniq 100",
        desc: `Доступна для заказа новая модель станции зарядки EVBox\xa0Troniq\xa0100, обеспечивающая быстрейшую зарядку электромобиля постоянным током мощностью 100кВт\\ч. Зарядка происходит буквально в считанные минуты! Более подробная информация доступна в\xa0каталоге продукции.`,
        img: "news3.png"
      },
      {
        date: "июнь 2020",
        header: "Получен допуск СРО на особо опасные объекты",
        desc:
          "Приказом Федеральной службы по экологическому, технологическому и\xa0атомному надзору от 4 марта 2019 г. №86 утверждено расширение полномочий ООО “ЕРС” в части проведения работ по подготовке проектной документации, строительству, реконструкции, капитальному ремонту и\xa0сносу объектов капитального строительства на особо опасных, технически сложные и уникальных объектах.",
        img: "news2.png"
      },
      {
        date: "февраль 2020",
        header: "Создан логистический центр",
        desc:
          "Логистический центр создан при непосредственном участии Nupi Industrie Italiane S.p.A., которые совместно с\xa0ООО\xa0“ЕРС” разработали уникальную ценовую политику, позволяющую российским заказчикам приобретать оборудование по ценам завода, сократив транспортное плечо и давая возможность приобретать весь спектр продукции со склада в г.Москва.",
        img: "news1.png"
      }
    ],
    catalog: [
      {
        name: "Emco",
        fullName: "Оборудование слива-налива Emco Wheaton",
        items: [
          {
            name: "E3000",
            desc: "Измерительный комплекс E3000"
          },
          {
            name: "LoadingBottom",
            desc: "Устройства нижнего налива E2701 и E2852"
          },
          {
            name: "LoadingTop",
            desc: "Устройство верхнего налива E2630"
          },
          {
            name: "Unloading",
            desc: "Устройство слива нижнего E2704"
          },
          {
            name: "Marine",
            desc: "Морские стендеры B0030"
          }
        ]
      },
      {
        name: "Scully",
        fullName: "Устройства контроля налива Scully",
        items: [
          {
            name: "ST-35C",
            desc: "Монитор перелива ST-35C"
          },
          {
            name: "ST-47C",
            desc: "Устройство заземления ST-47C"
          },
          {
            name: "Intellitrol",
            desc: "Терминал контроля налива Intellitrol 2"
          }
        ]
      },
      {
        name: "Nupi",
        fullName: "Пластиковый трубопровод Nupi",
        items: [
          {
            name: "SingleWall",
            desc: "Одностенный трубопровод для АЗС"
          },
          {
            name: "DoubleWall",
            desc: "Двустенный трубопровод для АЗС"
          },
          {
            name: "LPG",
            desc: "Трубопровод для транспортировки газа"
          }
        ]
      },
      {
        name: "Rotork",
        fullName: "Интеллектуальные приводы Rotork",
        items: [
          {
            name: "IQT",
            desc: "Четвертьоборотный привод IQT"
          },
          {
            name: "IQTM",
            desc: "Регулирующий четвертьоборотный привод IQTM"
          },
          {
            name: "IQTF",
            desc: "Полнооборотный привод IQTF"
          }
        ]
      },
      {
        name: "EVBox",
        fullName: "Станции зарядки электромобилей EVBox",
        items: [
          {
            name: "Elvi",
            desc: "Станция зарядки для дома Elvi"
          },
          {
            name: "BusinessLine",
            desc: "Станция зарядки для бизнеса BusinessLine"
          },
          {
            name: "Iqon",
            desc: "Станция зарядки для бизнеса Iqon"
          },
          {
            name: "PublicLine",
            desc: "Станция зарядки для города PublicLine"
          },
          {
            name: "Troniq",
            desc: "Станция быстрой зарядки Troniq DC"
          }
        ]
      }
    ]
  },
  getters: {},
  mutations: {
    SELECT_PAGE(state, page) {
      state.selectedPage = page;
    }
  },
  actions: {
    selectPage(context, page) {
      context.commit("SELECT_PAGE", page);
    }
  }
});
