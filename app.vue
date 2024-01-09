<template>
  <v-app>
     <AuthPage v-if="!loggedIn"></AuthPage>
     <NuxtLayout v-else></NuxtLayout>
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
