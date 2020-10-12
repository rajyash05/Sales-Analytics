/* eslint-disable */

// state for sales data
const state = {
  salesData: null,
};

// getters
const getters = {
  // getter to get the sales data
  getSalesData: (state, payload) => {
    return state.salesData;
  },
};

// mutataions to change / update sales data in store
const mutations = {
  setSalesData(store, sessionObjPayload) {
    localStorage.setItem('sessionData', JSON.stringify(sessionObjPayload));
    store.salesData = sessionObjPayload;
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