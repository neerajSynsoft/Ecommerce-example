<script lang="ts" setup>
import type { Product } from '@/types/product.interface';
definePageMeta({
  middleware: 'auth'
})

const { data: products } = await useFetch<[Product]>('api/product')

</script>

<template>
  <div class="bg-gray-900 py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-white mb-8">Introducing Our Latest Products</h2>

      <div v-if="products && products.length > 0" class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="product in products" :key="product._id" class="bg-white rounded-lg shadow-lg p-8">
          <div class="relative overflow-hidden group">
            <img class="object-cover w-full h-[250px] transition-transform transform group-hover:scale-110"
              :src="product.thumbnail || 'https://placekitten.com/300/200'" alt="Product" />
            <div class="absolute inset-0 bg-black opacity-40"></div>
            <div
              class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <NuxtLink :to="{ name: 'products-id', params: { id: product._id } }"
                class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                aria-current="page">
                <button class="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">
                  View Product
                </button>
              </NuxtLink>
            </div>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mt-4">{{ product.title }}</h3>
          <p class="text-gray-500 text-sm mt-2 line-clamp-2 min-h-[45px]">{{ product.description }}</p>
          <div class="flex items-center justify-between mt-4">
            <span class="text-gray-900 font-bold text-lg">${{ product.price }}</span>
            <button class="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Add to Cart</button>
          </div>
        </div>
      </div>

      <!-- Display a message if products.value is null or empty -->
      <div v-else class="text-white">No products available</div>
    </div>
  </div>
</template>