<template>
  <v-app>
    <!-- <NuxtWelcome /> -->
    
      <AuthPage v-if="loggedIn" />
      <NuxtPage v-else></NuxtPage>
  </v-app>
</template>

<script>
export default{
  computed:{
    // loggedIn(){
    //   return this.$store.getters.isLoggedIn
    // }
  }
}

</script>
