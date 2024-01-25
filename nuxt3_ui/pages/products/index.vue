<script lang="ts" setup>
definePageMeta({
  middleware: 'auth'
})

const range = ref({ start: new Date(2020, 0, 6), end: new Date() })

const date = ref(new Date())


</script>

<template>
  <UContainer class="py-7 px-5">
    <div class="flex gap-5 justify-between xl:flex-row flex-col">
      <h2 class="text-2xl font-bold leading-7 text-gray-900 dark:text-white sm:truncate sm:text-3xl sm:tracking-tight">
        {{ $t('menu.products') }}</h2>
      <div class="flex gap-5 flex-wrap">
        <div>
          <LazyDatePicker v-model:range="range" :isRange="true" />
        </div>
        <div>
          <NuxtLink to="products/new">
            <UButton icon="i-heroicons-plus-circle-solid" :label="$t('menu.createProduct')"/>
          </NuxtLink>
        </div>
      </div>
    </div>
  </UContainer>
</template>