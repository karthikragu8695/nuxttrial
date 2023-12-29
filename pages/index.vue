<template>
    <v-app-bar :elevation="10" color="green">
        <v-app-bar-nav-icon @click="draw=!draw"></v-app-bar-nav-icon>
        <v-app-bar-title> MatriMony </v-app-bar-title>
      <!-- <v-row align="center" justify="center" class="md-hidden">
        <v-col cols="auto">
          <v-btn size="lx-small " class="px-5 py-2">  <v-icon>mdi-home-outline</v-icon>Home</v-btn>
        </v-col>
        <v-col cols="auto">
           <v-btn size="lx-small " class="px-5 py-2"> <v-icon>mdi-store-outline</v-icon>Store</v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn size="lx-small " class="px-5 py-2"><v-icon size="large" icon="mdi-email">
          </v-icon>cart</v-btn>
        </v-col>
      </v-row> -->
      <div class="text-4xl">
        <v-btn  color="white" ><span class="mdi mdi-message-text-fast-outline"></span></v-btn>
        <v-btn  color="white" @click="logout"><span class="mdi mdi-account-circle"></span></v-btn>
      </div>
      </v-app-bar>
    <v-navigation-drawer v-model="draw">
      <v-divider></v-divider>
      <v-list-item link to="/LayoutPage" title="Home"></v-list-item>
      <v-list-item link to="/about" title="About"></v-list-item>
    </v-navigation-drawer>
    <v-main>
    </v-main>
</template>
<script>


export default {

  data: () => ({
    //
    draw:false
  }),
  methods:{
    logout(){
      firebase.auth().signOut()
    },

  }
}
</script>