import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      Loginprofile:[]
    };
  },
  getters:{
    loadedprofile(){
      return state.loadedprofile
    }
  },
  mutations: {
    SET_PROFILE (state,payload){
      state.Loginprofile=payload
    }
  },
  actions:{
    // profileDetails({commit}){
    //   firebase.database().ref('profiles').on('value',(snapshot)=>{
    //     let profiles=[]
    //     let data=snapshot.val()
    //     for(let i in data)
    //     {
    //       profiles.push({
    //         iid:i,
    //         ...data[i]
    //       })
    //     }
    //     commit('PROFILE_DETAILS',profiles)
    //   })
    // }
  }
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);
  // Install the store instance as a plugin
});