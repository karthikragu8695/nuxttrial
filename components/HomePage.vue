<template>
  <v-card  class=" px-3 py-5 ">
    <div v-for="profile in profiles" :key="profile.id" class="flex  ">
      <v-row>
        <v-col class="text-center">
          <v-avatar  color="grey" size="150" rounded="0">
              <v-img cover src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
          </v-avatar>
        </v-col>
        <v-col class="text-left ">
            <div class="my-10">
              <h2>{{ profile.name }}</h2>
              <h2> <p>Count: {{ $store.state.count }}</p></h2>
            <div class="flex mt-2">
              <h2>{{ profile.age }}</h2>
              <h2 class="ml-2"  >{{ profile.height }}</h2>
            </div>
            <v-row class="mt-2">
              <v-btn class="mr-2"  @click="dialog = true">Show</v-btn>
              <v-btn >Don't Show</v-btn>
            </v-row>
            </div>
          </v-col>
      </v-row>
    
    
  </div>
  <v-row justify="center">
    <v-dialog v-model="dialog" fullscreen :scrim="false" transition="slide-x-reverse-transition">
      <v-card>
        <v-toolbar
          dark
          color="primary">
          <span class="mdi mdi-chevron-left text-h4 rounded-2xl ml-2" @click="dialog = false" ></span>
          <v-toolbar-title>All Matches</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              variant="text"
              @click="dialog = false">
              Save
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-list
          lines="two"
          subheader>
          <v-col class="text-center">
            <v-avatar  color="grey" size="150" rounded="0">
                <v-img cover src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg" ></v-img>
            </v-avatar>
          </v-col>
        </v-list>
        <v-list
          lines="two"
          subheader class=" mx-auto">
          <v-list  v-model="name" class="font-bold text-center  text-h4" >L.mathan</v-list>
          <div class="flex mt-10">
            <div>
              <span class="mdi mdi-account-circle text-h5"></span>
            </div>
            <div>
              <h2 class="ml-5 mt-1">21 Yrs, 4'6 "</h2>
            </div>
          </div>
          <div class="flex">
            <div>
              <span class="mdi mdi-account-box-minus-outline text-h5"></span>
            </div>
            <div>
              <h2 class="ml-5 mt-1">No caste</h2>
            </div>
          </div>
          <div class="flex">
            <div>
              <span class="mdi mdi-toolbox-outline text-h5"></span>
            </div>
            <div>
              <h2 class="ml-5 mt-1">Diploma, Banking Professional</h2>
            </div>
          </div>
          <div class="flex">
            <div>
              <span class="mdi mdi-map-marker-outline text-h5"></span>
            </div>
            <div>
              <h2 class="ml-5 mt-1">Coimbathore</h2>
            </div>
          </div>
        
        </v-list>
      </v-card>
    </v-dialog>
  </v-row>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
        profiles: [
        { id: 1, name: 'mukesh', age: "20Yrs",height:"5'2",profession: 'Doctor', rasi: 'Thulam',},
        { id: 2, name: 'mathan', age: "21Yrs",height:"5'2",profession: 'Developer',rasi: 'meth',},
      ]
      }
      
    },
    computed:{
      // add(){
      //   return this.$store.getters.
      // }
  }
}

</script>