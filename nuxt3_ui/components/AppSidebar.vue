<script setup lang="ts">
import { ref } from 'vue';
import { menuItems } from '~/constants/menu';
const props = defineProps(['sidebarExpanded']);

const menus = ref(menuItems);
const updateMenu = (data: any) => {
  menus.value.map((item: any) => {
    if (item.id === data.id && item.hasOwnProperty('isMenuCollapsed')) {
      item.isMenuCollapsed = !item.isMenuCollapsed;
    }
    else if (item.isMenuCollapsed){
      item.isMenuCollapsed = false
    }
  });
};

</script>
<template>
  <div class="user-box text-center">
  </div>
  <div class="sidebar-menu">
    <!-- Render menu items -->
    <ul class="list-unstyled menuitem-active" id="side-menu">
      <SidebarItem v-for="item in menus" :item="item" :updateMenu="updateMenu" :sidebarExpanded="props.sidebarExpanded" />
    </ul>
  </div>
  <div class="clearfix">
  </div>
</template>
