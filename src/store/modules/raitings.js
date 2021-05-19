import axios from '@/plugins/axios';
import mutations from '../mutations';

const { RAITINGS} = mutations;

const raitingsStore = {
  namespaced: true,
  state: {
    raitings: {},
  },
  getters: {
    getRaitings: ({raitings}) =>  raitings,
  }, 
  mutations: {
    [RAITINGS](state,value){
      state.raitings = value;
    },
  },
  actions: {
    initRaitings: {
      handler({ dispatch }) {
        dispatch("fetchRaitings")
      },
      root: true,
    },
    async fetchRaitings({commit}){
      try {
      const response = await axios.get();
      commit("RAITINGS", response.data.result);}
      catch(error){
        alert(error);
      }
    }
  },
};

export default raitingsStore;