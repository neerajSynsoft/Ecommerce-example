<script setup lang="ts">

const props = defineProps(['menuItems']);
const { menuItems } = props;
</script>
<template>
  <div class="sidebar">
    <!-- Render menu items -->
    <ul>
      <SidebarItem v-for="item in menuItems" :key="item.id" :item="item" />
    </ul>
  </div>
</template>
