<template>
  <!-- <v-card class="mx-auto flex" max-width="425">
    <v-list lines="two" >
      <v-list-subheader>Today</v-list-subheader>
      
      <v-list-item v-for="profile in profiles" :key="profile.id" prepend-avatar="https://cdn.vuetifyjs.com/images/lists/1.jpg">
        <template v-slot:subtitle  >
          <div class="flex">
            <span class="font-weight-bold">{{ profile.name }}</span><br>
            <span class="font-weight-bold">{{ profile.age }}</span>
            <span class="font-weight-bold">{{ profile.profession }}</span>
            <span class="font-weight-bold">{{ profile.rasi }}</span><br>
            <v-btn class="bg-red ">Show Details</v-btn>
          </div>
        </template>
          
      </v-list-item>
    
    </v-list>
  </v-card> -->

  <v-card  class="justify-center items-center px-3 py-5 ">
    <div v-for="profile in profiles" :key="profile.id" class="flex justify-center items-center">
    <v-avatar class="" color="grey" size="150" rounded="0">
        <v-img cover src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
    </v-avatar>
    <v-spacer></v-spacer>
    <div class="my-10">
      <h2 class="ml-8"  >{{ profile.name }}</h2>
      <div class="flex mt-2">
      <h2 class="ml-8"  >{{ profile.age }}</h2>
      <h2 class="ml-2"  >{{ profile.height }}</h2>
    </div>
      <v-btn class="ml-6 mt-5" @click="dialog = true">Show</v-btn>
      <v-btn class="ml-6 mt-5">Don't Show</v-btn>
    </div>
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
          <v-list class="text-center">
            <v-avatar  color="grey" size="150" rounded="0">
                <v-img cover src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg" ></v-img>
            </v-avatar>
          </v-list>
          <!-- <v-list-item title="Content filtering" subtitle="Set the content filtering level to restrict apps that can be downloaded"></v-list-item> -->
          <!-- <v-list-item title="Password" subtitle="Require password for purchase or use password to restrict purchase"></v-list-item> -->
        </v-list>
        <v-divider></v-divider>
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

<script setup>
definePageMeta({
  layout: 'default'
})
</script>

<script>
  export default {
    data () {
      return {
        dialog: false,
        profiles: [
          {
            
            id: 1,
            name: 'Karthik',
            age: "20Yrs",
            height:"5'2",
            profession: 'Doctor',
            rasi: 'Thulam',
          },
          {
            id: 2,
            name: 'mathan',
            age: "21Yrs",
            height:"5'2",
            profession: 'Developer',
            rasi: 'meth',
          },
        ]
      }
    },
  }

</script>