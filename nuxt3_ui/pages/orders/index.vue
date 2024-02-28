<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})
useHead({
  title: `Orders | Mengantar App`,
})
</script>

<template>
  <UContainer class="py-7 px-5">
    <div class="flex gap-5 justify-between xl:flex-row flex-col">
      <h2 class="text-2xl font-bold leading-7 text-gray-900 dark:text-white sm:truncate sm:text-3xl sm:tracking-tight">{{$t('menu.Orders')}}</h2>
      <div class="flex gap-5 flex-wrap">
        
      </div>
    </div>
    </UContainer>
</template>