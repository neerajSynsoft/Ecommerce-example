<script setup lang="ts">
import categories from '~/constants/categories'

const props = defineProps(['value'])

const catOptions1 = ref([{ text: 'Tanpa Kategori', id: 'Tanpa Kategori_' }])
const catOptions2 = ref<any>([])


const emit = defineEmits();

watch(() => props.value.category, (val) => {
    let findMainCat = categories.find(one => one.text == val)
    let payload = {...props.value}
    payload.category2 = "";
    if(findMainCat) catOptions2.value = findMainCat.sub
    emit('update:value', payload);
});

</script>

<template>
    <div class="mb-5">
        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            {{ $t("common.category") }}
        </label>
        <div class="flex gap-3">
            <USelectMenu 
            class="w-full"
            size="md"
            v-model="props.value.category" 
            :options="categories" 
            placeholder="Select category" 
            value-attribute="text"
            option-attribute="text" />
            <USelectMenu 
            class="w-full"
            size="md"
            v-if="catOptions2.length"
            v-model="props.value.category2" 
            :options="catOptions2" 
            placeholder="Select category" 
            value-attribute="text"
            option-attribute="text" />
        </div>
    </div>
</template>
