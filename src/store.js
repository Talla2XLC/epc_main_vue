import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productNavVisible: false,
    mainMenuVisible: false,
    selectedPage: "",
    productNavImg: "",
    nupi: "https://www.nupiindustrieitaliane.com/en/index.html",
    scully: "https://www.scully.com",
    emco: "https://www.gardnerdenver.com/ru-ru/emcowheaton",
    rotork: "https://www.rotork.com/en",
    progauge: "http://tokheim.com/products-solutions/progauge/"
  },
  getters: {
    productSelected(state) {
      if (
        state.selectedPage === "nupi" ||
        state.selectedPage === "scully" ||
        state.selectedPage === "emco" ||
        state.selectedPage === "rotork" ||
        state.selectedPage === "progauge"
      ) {
        return true;
      } else {
        return false;
      }
    }
  },
  mutations: {
    SET_MAIN_MENU_VISIBILITY(state, status) {
      state.mainMenuVisible = status;
    },
    SET_PRODUCT_NAV_VISIBILITY(state, status) {
      state.productNavVisible = status;
    },
    SELECT_PAGE(state, page) {
      state.selectedPage = page;
    },
    SET_PRODUCT_NAV_IMG(state, product) {
      state.productNavImg = product;
    }
  },
  actions: {
    showMainMenu(context) {
      context.commit("SET_MAIN_MENU_VISIBILITY", true);
    },

    hideMainMenu(context) {
      if (!this.state.productNavVisible) {
        context.commit("SET_MAIN_MENU_VISIBILITY", false);
      }
    },

    showProductNav(context) {
      context.commit("SET_PRODUCT_NAV_VISIBILITY", true);
    },

    hideProductNav(context) {
      if (this.state.selectedPage != "products") {
        context.commit("SET_PRODUCT_NAV_VISIBILITY", false);
      }
    },

    selectPage(context, page) {
      context.commit("SELECT_PAGE", page);
      if (this.state.selectedPage != "products") {
        context.commit("SET_PRODUCT_NAV_VISIBILITY", false);
      }
    },

    setProductNavImg(context, product) {
      context.commit("SET_PRODUCT_NAV_IMG", product);
    },
    hideProductNavImg(context) {
      context.commit("SET_PRODUCT_NAV_IMG", "");
    }
  }
});
