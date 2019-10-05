import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productNavVisible: false,
    mainMenuVisible: false,
    selectedPage: ""
  },
  getters: {
    productSelected(state) {
      if (
        state.selectedPage === "nupi" ||
        state.selectedPage === "scully" ||
        state.selectedPage === "emco" ||
        state.selectedPage === "rotork" ||
        state.selectedPage === "progauge") {
        return true
      } else {
        return false
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
    }
  },
  actions: {
    showMainMenu(context) {
      context.commit("SET_MAIN_MENU_VISIBILITY", true);
    },

    hideMainMenu(context) {
      if (this.state.selectedPage != "products") {
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
    }
  }
});
