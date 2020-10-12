/* eslint-disable */

// state for sales data
const state = {
  salesData: null,
};

// getters
const getters = {
  // getter to get the sales data
  getSalesData: (state) => {
    return state.salesData;
  },
};

// mutataions to change / update sales data in store
const mutations = {
  setSalesData(state, salesObjPayload) {
    state.salesData = salesObjPayload;
  },
};

// actions on the mutations
const actions = {
  setSalesData: (context, payload) => {
    context.commit('setSalesData', payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
