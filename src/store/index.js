import Vue from 'vue'
import Vuex from 'vuex'
import raitings from './modules/raitings'
import photoEvent from './modules/photoEvent'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    raitings,
    photoEvent,
  },
});

store.dispatch("initRaitings");

export default store;
