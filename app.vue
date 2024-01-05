<template>
  <v-app>
    <!-- <NuxtWelcome /> -->
    <!-- <auth-page v-if="!loggedIn"></auth-page> -->
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
