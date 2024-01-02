<template>
  <v-app>
    <!-- <NuxtWelcome /> -->
    <AuthPage v-if="loggedIn" />
    <HomePage></HomePage>
      <NuxtLayout>
        <NuxtPage />
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
