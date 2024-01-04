<script setup lang="ts">

const isOpen = ref(false);

const hasItems = (item: any) => item.subItems && item.subItems.length > 0;

const toggleMenu = () => {
    isOpen.value = !isOpen.value;
};
const props = defineProps(['item']);
const { item } = props;
</script>

<template>
    <li>
        <a v-if="hasItems(item)" @click="toggleMenu" class="flex align-middle px=[8px] py-[10px] relative font-[5000] text-[15px] w-full">
            <UAvatar :src="item.src" alt="Avatar" class="mr-[12px]"/>
            {{ item.label }}
        </a>

        <nuxt-link v-else :to="item.to" class="flex align-middle px=[8px] py-[10px] relative font-[5000] text-[15px] w-full">
            <UAvatar v-if="item.src" :src="item.src" alt="Avatar" class="mr-[12px]"/>
            {{ item.label }}
        </nuxt-link>

        <!-- Render submenus -->
        <ul v-if="hasItems(item) && isOpen" class="submenu">
            <SidebarItem v-for="subItem in item.subItems" :key="subItem.id" :item="subItem" />
        </ul>
    </li>
</template>
  
<style scoped>
.sidebar-item {
    /* Add styling for sidebar items */
}

.submenu {
    /* Add styling for submenus */
}
</style>
  