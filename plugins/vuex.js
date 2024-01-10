import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      Loginprofile:[],
      profiles: [
        { id: 1, name: 'mukesh', age: "20Yrs",height:"5'2",profession: 'Doctor', rasi: 'Thulam',},
        { id: 2, name: 'mathan', age: "21Yrs",height:"5'2",profession: 'Developer',rasi: 'meth',},
      ]
    };
  },
  getters:{
    loadedprofile(){
      return state.loadedprofile
    },
    profiles(){
      return state.profiles
    }
  },
  mutations: {
    SET_PROFILES (state,payload){
      state.profiles=payload
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