<script setup lang="ts">
const { data } = await useFetch('/api/count')
console.log('data====',data);
</script>

<template>
  Page visits: 
</template>