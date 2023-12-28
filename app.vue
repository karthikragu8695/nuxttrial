<template>
  <v-app>
    <!-- <NuxtWelcome /> -->
      <AuthPage v-if="show" />
      <NuxtPage v-else></NuxtPage >
  </v-app>
</template>


<script>
export default{
  data(){
    return {
      show:false
    }
    
  }
}

</script>
