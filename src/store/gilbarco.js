import gilbarcoPrice from "@/assets/excel/gilbarcoPriceList.xls";

export default {
  state: {
    priceList: gilbarcoPrice[0].data
  },
  mutations: {
    SET_GILBARCO_PRODUCTS(state, products) {
      state.priceList = products;
    }
  },
  actions: {
    updateGilbarcoProducts(context, products) {
      context.commit("SET_PRODUCTS", products);
    }
  }
}