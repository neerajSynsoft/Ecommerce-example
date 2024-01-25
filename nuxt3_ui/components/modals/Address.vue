<script lang="ts" setup>
import { onMounted } from 'vue';

const isOpen = ref(false)
const address = ref(false)
const detailedAddress = ref(false)
const detailedReturnAddress = ref(false)
const differentReturnAddress = ref(false)

onMounted(() => {
  if(!address.value) isOpen.value = true
})

</script>
<template>
  <UModal v-model="isOpen" :ui="{ width: 'md:max-w-3xl' }">
    <!-- Modal content -->
    <div class="relative bg-white dark:bg-gray-800 p-6">
      <div class="flex items-center justify-between px-2">
        <h3 class="text-[24px] font-[600] text-gray-900 dark:text-white">
          Pickup Address
        </h3>
        <button type="button" @click="isOpen = false"
          class="text-gray-400 dark:text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
          data-modal-hide="default-modal">
          <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
      </div>
      <p class="text-sm sleading-relaxed text-gray-500  px-2">
        Create your first pickup address. Don't worry, you can add more later
      </p>
      <div class="grid grid-cols-2 gap-3 py-4 border-t border-b my-4">
        <UFormGroup class="col-span-2" label="Seller or Store Name" name="email">
          <UInput />
        </UFormGroup>
        <UFormGroup class="col-span-1" label="Pickup PIC Name" name="email">
          <UInput />
        </UFormGroup>
        <UFormGroup class="col-span-1" label="Pickup PIC Phone" name="email">
          <UInput />
        </UFormGroup>
        <div class="col-span-2">
          <UFormGroup label="Pickup Address" name="email">
            <UInput />
          </UFormGroup>
        </div>
        <div class="col-span-2">
          <div class="flex justify-between font-medium text-gray-700 text-sm">
            <span class="">Province / City / District / Subdistrict / Zip
            </span>
            <UCheckbox v-model="detailedAddress" label="Show detailed destination" />
          </div>
          <span class="block font-medium text-gray-500 text-xs pb-2">Type the name of the City / District (at least 4
            letters)
          </span>
          <UInput />
        </div>
        <template v-if="detailedAddress">
          <UFormGroup class="col-span-1" label="Pickup City" name="email">
            <UInput />
          </UFormGroup>
          <UFormGroup class="col-span-1" label="Pickup District" name="email">
            <UInput />
          </UFormGroup>
          <UFormGroup class="col-span-1" label="Pickup Region" name="email">
            <UInput />
          </UFormGroup>
          <UFormGroup class="col-span-1" label="Postcode" name="email">
            <UInput />
          </UFormGroup>
        </template>
        <UCheckbox class="col-span-2" v-model="differentReturnAddress" label="My return adderss is different"/>
        <template v-if="differentReturnAddress">
          <UFormGroup class="col-span-1" label="Return PIC Name" name="email">
            <UInput />
          </UFormGroup>
          <UFormGroup class="col-span-1" label="Return PIC Phone" name="email">
            <UInput />
          </UFormGroup>
          <UFormGroup class="col-span-2" label="Return Address" name="email">
            <UInput />
          </UFormGroup>
          <div class="col-span-2">
            <div class="flex justify-between font-medium text-gray-700 text-sm">
              <span class="">Province / City / District / Subdistrict / Zip
              </span>
              <UCheckbox v-model="detailedReturnAddress" label="Show detailed destination" />
            </div>
            <span class="block font-medium text-gray-500 text-xs pb-2">Type the name of the City / District (at least 4
              letters)
            </span>
            <UInput />
          </div>
          <template v-if="detailedReturnAddress">
            <UFormGroup class="col-span-1" label="Pickup City" name="email">
              <UInput />
            </UFormGroup>
            <UFormGroup class="col-span-1" label="Pickup District" name="email">
              <UInput />
            </UFormGroup>
            <UFormGroup class="col-span-1" label="Pickup Region" name="email">
              <UInput />
            </UFormGroup>
            <UFormGroup class="col-span-1" label="Postcode" name="email">
              <UInput />
            </UFormGroup>
          </template>
        </template>
      </div>
      <div class="flex justify-end px-4 py-2">
        <button @click="isOpen = false"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Save
          Address</button>
      </div>
    </div>
  </UModal>
</template>