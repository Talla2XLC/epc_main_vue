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
        date: "Июль 2020",
        header: "Новинка! Станция быстрой зарядки EVBox Troniq 100",
        desc: `Доступна для заказа новая модель станции зарядки EVBox\xa0Troniq\xa0100, обеспечивающая быстрейшую зарядку электромобиля постоянным током мощностью 100кВт\\ч. Зарядка происходит буквально в\xa0считанные минуты! Более подробная информация доступна в\xa0каталоге продукции.`,
        img: "news3.png"
      },
      {
        date: "Июнь 2020",
        header: "Получен допуск СРО на особо опасные объекты",
        desc:
          "Приказом Федеральной службы по\xa0экологическому, технологическому и\xa0атомному надзору от\xa04\xa0марта\xa02019\xa0г. №86 утверждено расширение полномочий ООО\xa0“ЕРС” в\xa0части проведения работ по\xa0подготовке проектной документации, строительству, реконструкции, капитальному ремонту и\xa0сносу объектов капитального строительства на\xa0особо\xa0опасных, технически сложные и\xa0уникальных объектах.",
        img: "news2.png"
      },
      {
        date: "Февраль 2020",
        header: "Создан логистический центр",
        desc:
          "Логистический центр создан при\xa0непосредственном участии Nupi Industrie Italiane S.p.A., которые совместно с\xa0ООО\xa0“ЕРС” разработали уникальную ценовую политику, позволяющую российским заказчикам приобретать оборудование по\xa0ценам завода, сократив транспортное плечо и\xa0давая возможность приобретать весь спектр продукции со\xa0склада в\xa0г.Москва.",
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
