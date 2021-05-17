import mutations from '../mutations';

const { INFOEVENT,  TOGGLEEVENT  } = mutations;

const infoEventStore = {
  namespaced: true,
  state: {
    event: null,
    isHasEvent: false,
  },
  getters: {
    getInfoEvent: ({ event }) => event,
    isHasEvent: ({isHasEvent}) => isHasEvent,
  },
  mutations: {
    [INFOEVENT](state,value){
      state.event = value;
    },
    [TOGGLEEVENT](state, bool){
      state.isHasEvent = bool;
    },
  },
  actions: {
    createEvent({ commit}, event = {}){

      commit("INFOEVENT", event);
      commit("TOGGLEEVENT", true);
      
    },
    removeEvent({commit}){
      commit("INFOEVENT", null);
      commit("TOGGLEEVENT", false);
    }
  },
};

export default infoEventStore;