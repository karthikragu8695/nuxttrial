<template>
  <!-- <body class="bg-white text-gray-600 work-sans  leading-normal text-base tracking-normal">

  
  <nav id="header" class="w-full z-30 top-0 py-1 sticky  ">
        <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">

            <label for="menu-toggle"  class="cursor-pointer md:hidden block">
              <button class="menu-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#menu"> <svg class="fill-current text-gray-900"  @click="draw=!draw" xmlns="http://www.w3.org/2000/svg"  width="20" height="20" viewBox="0 0 20 20">
                    <title>menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </button> 
            </label>
            <input class="hidden" type="checkbox" id="menu-toggle" />

            <div class="order-1 md:order-1">
                <a class="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 " href="#"> -->
                    <!-- <img src="" class=" mr-2 bg-transparent border border-black  rounded-2xl"  width="40" height="30"> -->
                    <!-- <h2 class="text-2xl italic">Matrimony</h2>
                </a>
            </div>

            <div  class=" md:flex md:items-center md:w-auto w-full order-2 md:order-2"  id="menu">
                <navigation v-model="draw">
                    <ul   class="md:flex items-center justify-between text-base text-black text-gray-700 pt-4 md:pt-0">
                        <li><span class="mdi mdi-home-outline text-h5"></span><a class="inline-block no-underline hover:text-green-500 hover:underline py-2 px-4" href="AuthPage">Home</a></li>
                        <li><span class="mdi mdi-account-group text-h5"></span><a class="inline-block no-underline hover:text-green-500 hover:underline py-2 px-4" href="#about">Matches</a></li>
                        <li><span class="mdi mdi-email-edit text-h5"></span><a class="inline-block no-underline hover:text-green-500 hover:underline py-2 px-4" href="#gallery">Mailbox</a></li>
                        <li><span class="mdi mdi-forum-minus-outline text-h5"></span><a class="inline-block no-underline hover:text-green-500 hover:underline py-2 px-4" href="#service">Chat</a></li>
                        <li><span class="mdi mdi-magnify text-h5" ></span><a class="inline-block no-underline hover:text-green-500 hover:underline py-2 px-4" href="#contact">Search</a></li>
                    </ul>
                </navigation>
            </div>

            <div class="order-3 md:order-3 flex items-center" id="nav-content">
              <span class="mdi mdi-account-circle text-h4"></span>
            </div>
        </div>
    </nav> -->
    <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
    <v-app-bar :elevation="10">
      <label for="menu-toggle"  class="cursor-pointer md:hidden block">
        <v-app-bar-nav-icon  @click="draw=!draw"></v-app-bar-nav-icon>
      </label>
      
        <v-app-bar-title> MatriMony </v-app-bar-title>
       
     
      <div class="text-4xl">
        <v-btn  color="white" ><span class="mdi mdi-bell text-3xl"></span></v-btn>
        <v-btn  color="white" @click="logout"><span class="mdi mdi-account-circle text-3xl"></span></v-btn>
      </div>
      </v-app-bar>
      <div  class=" md:flex md:items-center md:w-auto w-full order-2 md:order-2"  id="menu">
    <v-navigation-drawer v-model="draw" >
      <v-divider></v-divider>
      <v-list-item link to="/" class="mdi mdi-playlist-edit text-3xl pr-5" title="Home"></v-list-item>
      <v-list-item link to="/LayoutPage" class="mdi mdi-account-edit text-3xl " title="Matches"></v-list-item>
      <v-list-item link to="/LayoutPage" class="mdi mdi-account-edit text-3xl " title="Mailbox"></v-list-item>
      <v-list-item link to="/LayoutPage" class="mdi mdi-account-edit text-3xl " title="Chat"></v-list-item>
    </v-navigation-drawer>
  </div>
</div>
    <v-main>
      <NuxtPage/>
    </v-main>
  <!-- </body> -->
</template>
<script>						
							

export default {

  data: () => ({
    //
    draw:false
  }),
  methods:{
    

  }
}
</script>