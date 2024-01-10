<template>
  <v-app>
     <NuxtLayout >
          <NuxtPage/>
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
