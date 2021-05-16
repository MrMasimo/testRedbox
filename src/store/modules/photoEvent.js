import mutations from '../mutations';

const { PHOTOEVENT,  TOGGLEPHOTO  } = mutations;

const photoEventStore = {
  namespaced: true,
  state: {
    photo: null,
    isHasPhoto: false,
  },
  getters: {
    getPhotoEvent: ({ photo }) => photo,
    isHasPhoto: ({isHasPhoto}) => isHasPhoto,
  },
  mutations: {
    [PHOTOEVENT](state,value){
      state.photo = value;
    },
    [TOGGLEPHOTO](state, bool){
      state.isHasPhoto = bool;
    },
  },
  actions: {
    loadPhotoEvent({ commit}, file){
      let reader = new FileReader();
      if(file) {
        reader.onload = function (event) {
          commit("PHOTOEVENT", event.target.result);
          commit("TOGGLEPHOTO", true);
        }
        reader.readAsDataURL(file);
      }
    },
    removePhotoEvent({commit}){
      commit("PHOTOEVENT", null);
      commit("TOGGLEPHOTO", false);
    }
  },
};

export default photoEventStore;