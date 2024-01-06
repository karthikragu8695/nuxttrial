<template>
  <v-app>
    <!-- <NuxtWelcome /> -->
    
      <NuxtLayout>
        <AuthPage/>
        <Nuxtpage/>
      </NuxtLayout>
  </v-app>
</template>



<script>
export default{
  computed:{
    loggedIn(){
      return false
    }
  }
}

</script>
