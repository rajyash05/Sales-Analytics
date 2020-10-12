import Vue from 'vue';
import Vuex from 'vuex';

/* ----------  Modules  ---------- */
import sales from './modules/sales/sales';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    sales,
  },
  strict: true,
});
