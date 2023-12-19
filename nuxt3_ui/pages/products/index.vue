<script setup>
// type Product = {
//     _id: string;
//     title: string;
//     description: string;
//     price: number;
//     discountPercentage: number;
//     rating: number;
//     stock: number;
//     category: string;
//     brand: string;
//     thumbnail: string;
//     images: string[];
//     __v: number;
//   };

const { data: products } = await useFetch('http://localhost:8080/api/products')
console.log('data====',products);
</script>
<!-- {
    "_id": "65800df2f3fee4c8664428ce",
    "title": "iPhone 9",
    "description": "An apple mobile which is nothing like apple",
    "price": 549,
    "discountPercentage": 12.96,
    "rating": 4.69,
    "stock": 94,
    "category": "smartphones",
    "brand": "Apple",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "images": [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "__v": 0
  } -->

<template>
  <div class="bg-gray-900 py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-white mb-8">Introducing Our Latest Products</h2>
      
      <!-- Check if products.value is not null and has items before rendering -->
      <div v-if="products  && products.length > 0" class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Iterate through each product in products -->
        <div v-for="product in products" :key="product._id" class="bg-white rounded-lg shadow-lg p-8">
            <div class="relative overflow-hidden">
                <!-- Use the product's thumbnail or a placeholder image -->
                <img class="object-cover w-full h-full" :src="product.thumbnail || 'https://placekitten.com/300/200'" alt="Product">
                <div class="absolute inset-0 bg-black opacity-40"></div>
                <div class="absolute inset-0 flex items-center justify-center">
                  <NuxtLink :to="{ name: 'products-id', params: { id: product._id } }"
                class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"><button class="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">View Product</button></NuxtLink>
                </div>
                
              </div>
              <h3 class="text-xl font-bold text-gray-900 mt-4">{{ product.title }}</h3>
              <p class="text-gray-500 text-sm mt-2">{{ product.description }}</p>
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