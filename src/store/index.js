import Vue from 'vue'
import Vuex from 'vuex'
import raitings from './modules/raitings'
import photoEvent from './modules/photoEvent'
import dateEvent from './modules/dateEvent'
import infoEvent from './modules/infoEvent'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    raitings,
    photoEvent,
    dateEvent,
    infoEvent,
  },
});

store.dispatch("initRaitings");

export default store;
