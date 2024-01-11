<template>
    <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
    <v-app-bar :elevation="10">
      <!-- <label for="menu-toggle"  class="cursor-pointer md:hidden block">
        <v-app-bar-nav-icon  @click="draw=!draw"></v-app-bar-nav-icon>
      </label> -->
        <v-app-bar-title>MatriMony</v-app-bar-title>
      <div class="text-4xl">
        <v-spacer></v-spacer>
        <v-btn  v-model=show @click="show=true" size="large" class="text-orange px-3"  color="white">Login </v-btn>
       
      </div>
      </v-app-bar>
      <div  class=" md:flex md:items-center md:w-auto w-full order-2 md:order-2"  id="menu">
    <!-- <v-navigation-drawer v-model="draw" >
      <v-divider></v-divider>
      
      <v-list-item link to="/" class="mdi mdi-playlist-edit text-3xl pr-5" title="Profiles"></v-list-item>
      <v-list-item link to="/about" class="mdi mdi-account-edit text-3xl " title="EditProfile"></v-list-item>
      <v-list-item link to="/todo" class="mdi mdi-account-edit text-3xl " title="Mailbox"></v-list-item>
      <v-list-item link to="/LayoutPage" class="mdi mdi-account-edit text-3xl " title="Chat"></v-list-item>
    </v-navigation-drawer> -->
  </div>
</div>
<v-main>
    <AuthPage/>
</v-main>
</template>