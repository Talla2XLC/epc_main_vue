import Vue from "vue";
import Vuex from "vuex";
import catalog from "./modules/catalog";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    catalog: catalog
  },
  state: {
    selectedPage: "",
    bannerClosed: true,
    news: [
      {
        date: "июль 2020",
        header: "Новинка! Станция быстрой зарядки EVBox Troniq 100",
        desc: `Доступна для заказа новая модель станции зарядки EVBox\xa0Troniq\xa0100, обеспечивающая быстрейшую зарядку электромобиля постоянным током мощностью 100кВт\\ч. Зарядка происходит буквально в\xa0считанные минуты! Более подробная информация доступна в\xa0каталоге продукции.`,
        img: "news3.png"
      },
      {
        date: "июнь 2020",
        header: "Получен допуск СРО на особо опасные объекты",
        desc:
          "Приказом Федеральной службы по экологическому, технологическому и\xa0атомному надзору от 4 марта 2019 г. №86 утверждено расширение полномочий ООО\xa0“ЕРС” в части проведения работ по подготовке проектной документации, строительству, реконструкции, капитальному ремонту и\xa0сносу объектов капитального строительства на особо\xa0опасных, технически сложные и уникальных объектах.",
        img: "news2.png"
      },
      {
        date: "февраль 2020",
        header: "Создан логистический центр",
        desc:
          "Логистический центр создан при непосредственном участии Nupi Industrie Italiane S.p.A., которые совместно с\xa0ООО\xa0“ЕРС” разработали уникальную ценовую политику, позволяющую российским заказчикам приобретать оборудование по ценам завода, сократив транспортное плечо и давая возможность приобретать весь спектр продукции со\xa0склада в г.Москва.",
        img: "news1.png"
      }
    ]
  },
  getters: {},
  mutations: {
    SELECT_PAGE(state, page) {
      state.selectedPage = page;
    },
    CLOSE_BANNER(state, status) {
      state.bannerClosed = status;
    }
  },
  actions: {
    selectPage(context, page) {
      context.commit("SELECT_PAGE", page);
    },
    showBanner(context) {
      context.commit("CLOSE_BANNER", false);
    },
    closeBanner(context) {
      context.commit("CLOSE_BANNER", true);
    }
  }
});
