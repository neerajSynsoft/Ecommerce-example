<script setup lang="ts">
useHead({
  title: `Mengantar App`,
})
const sidebarExpanded = ref(true);

const toggleSidebar = ()=>{
  sidebarExpanded.value = !sidebarExpanded.value
}

</script>

<template>
  <div class="max-w-screen-2xl bg-[#f2f4f8] dark:bg-gray-800 m-auto">
     <!-- #f2f4f8  #6c757d -->
    <AppHeader :toggleSidebar="toggleSidebar" :sidebarExpanded="sidebarExpanded" />
    <div :class="`max-h-[calc(100vh-130px)] overflow-y-scroll z-20 overflow-x-visible fixed ${sidebarExpanded ? 'w-[300px]' : 'w-[70px]'} top-16 bg-transparent`">
      <AppSidebar :sidebarExpanded="sidebarExpanded"/>
    </div>
    <div :class="`relative ${sidebarExpanded ? 'ml-[300px]' : 'ml-[70px]'} pt-[70px] min-h-screen`">
          <slot />
    </div>
    <AppFooter />
  </div>
</template>