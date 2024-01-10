<template>
    <div>
        <AuthPage/>
    </div>
</template>


<script setup lang="ts">
definePageMeta({
  layout: 'custom',
  middleware:["login"]
})
</script>