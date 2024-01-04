<script setup lang="ts">
import { menuItems } from '~/constants/menu'
</script>

<template>
  <div class="max-w-screen-2xl">
    <AppHeader />
    <div class="w-full">
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-3 bg-gray-200 p-4 max-h-screen">
          <AppSidebar :menuItems="menuItems"/>
        </div>
        <div class="col-span-9 bg-gray-300 p-4 max-h-screen overflow-scroll">
          <slot />
        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>