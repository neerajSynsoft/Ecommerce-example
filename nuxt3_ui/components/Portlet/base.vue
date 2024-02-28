<script setup lang="ts">

const props = defineProps(["data"])

const toggleShow = ref(false)

const checkToShow = (data:any) => {
      //if(this.$store.state.authfack.user && this.$store.state.authfack.user.formPermissions && !this.$store.state.authfack.user.formPermissions[data.key]){
        // return false;
      // }
      return true;
    }

// const emit = defineEmits();

// watch(() => props.value.category, (val) => {
//     let findMainCat = categories.find(one => one.text == val)
//     if(findMainCat) catOptions2.value = findMainCat.sub
//     emit('update:value.category2', '');
// });

</script>


<template>
  <div class="bg-primary-700 rounded-md text-white p-3 my-3">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-3">
      <div v-for='(portlet, index) in props.data' :key="portlet.key"  :class="`col-span-1 flex items-center px-2 ${ index+1 <  props.data.length && 'lg:border-r lg:border-gray-400'} ${index >= 1 && !toggleShow && 'hidden lg:flex' }`">
          <img class="mr-2" :src="`/_nuxt/${portlet.img}`" />
          <div>
            <div class="text-xs font-medium">{{ portlet.title }}</div>
            <div class="text-lg font-medium">{{ portlet.value }}</div>
          </div>
      </div>
    </div>
      <div class="lg:hidden mt-3 text-red" @click="toggleShow = !toggleShow">
        <UButton color="primary-700" variant="outline" block>{{ toggleShow == false ? 'Show Details' : 'Show Less'}}
          <UIcon name="i-heroicons-chevron-down"/>
        </UButton>
      </div>
  </div>
</template>
