import mutations from '../mutations';

const  {DATEEVENT, TOGGLEDATE} = mutations;

const dateEventStore = {
  namespaced: true,
  state: {
    date: {},
    isHasDate: false,
  },
  getters: {
    getDateEvent: ({date}) =>  date,
    isHasDate: ({isHasDate}) => isHasDate,
  },
  mutations: {
    [DATEEVENT](state, value) {
      state.date = value;
    },
    [TOGGLEDATE](state, bool) {
      state.isHasDate = bool;
    }
  },
  actions:{
    addDateEvent({ getters, commit}, date = {}){
      const {getDateEvent} = getters;
      const lastDate = JSON.parse(JSON.stringify(getDateEvent));
      let id = Math.round(Math.random()*1000000);

      let result = Object.keys(date).reduce((acc,item) => {
        acc[item] = date[item];
        return acc;
      },{"id": id});    
      lastDate[id] = result;
      
      commit("DATEEVENT", lastDate);
      commit("TOGGLEDATE" , true);
    },

    removeDateEvent({getters, commit}, id){
      const {getDateEvent} = getters;
      const lastDate = JSON.parse(JSON.stringify(getDateEvent));
      delete lastDate[id];
      commit("DATEEVENT", lastDate);
      if (!Object.keys(getDateEvent).length)
        commit("TOGGLEDATE" , false);
    },
  }

};

export default dateEventStore;