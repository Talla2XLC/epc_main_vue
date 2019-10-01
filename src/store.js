import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		productNavVisible: false,
		mainMenuVisible: false,
		selectedPage: 'main',
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
	},
	actions: {
		showMainMenu(context) {
			context.commit('SET_MAIN_MENU_VISIBILITY', true);
		},

		hideMainMenu(context) {
			context.commit('SET_MAIN_MENU_VISIBILITY', false);
		},

		showProductNav(context) {
			context.commit('SET_PRODUCT_NAV_VISIBILITY', true);
		},

		hideProductNav(context) {
			context.commit('SET_PRODUCT_NAV_VISIBILITY', false);
		},

		selectPage(context, page) {
			context.commit('SELECT_PAGE', page);
		},
	}
});
