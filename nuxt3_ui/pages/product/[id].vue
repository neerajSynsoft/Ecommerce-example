<script lang="ts" setup>
import type { Product } from '@/types/product.interface';
definePageMeta({
  middleware: 'auth'
})
const route = useRoute()
const active = useState('active', () => "description")
const { data: product } = await useFetch<Product>(`../api/product/${route.params.id}`)

</script>


<template>
  <section class="py-3 sm:py-5">
    <div class="container mx-auto px-4">

      <div v-if="product"
        class="lg:col-gap-12 xl:col-gap-16 mt-4 grid grid-cols-1 gap-12 lg:mt-6 lg:grid-cols-5 lg:gap-16">
        <div class="lg:col-span-3 lg:row-end-1">
          <div class="lg:flex lg:items-start">
            <div class="lg:order-2 lg:ml-5">
              <div class="max-w-xl overflow-hidden rounded-lg">
                <img class="h-full w-full max-w-full object-cover" :src="product.thumbnail" alt="" />
              </div>
            </div>
            <div class="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
              <div v-for="(image, index) in product?.images?.slice(0, 3)" :key="image + index"
                class="flex flex-row items-start lg:flex-col">
                <button type="button"
                  class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center">
                  <img class="h-full w-full object-cover" :src="image" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-2 lg:row-span-2 lg:row-end-2">
          <h1 class="sm: text-2xl font-bold text-gray-900 sm:text-3xl">{{ product.title }}</h1>

          <div class="flex items-center">
            <div class="Stars" :style="`--rating: ${product.rating}`"
              aria-label="Rating of this product is {{ product.rating }} out of 5."></div>
            <p class="ml-2 text-sm font-medium text-gray-500">{{ product.reviews }} Reviews</p>
            <button type="button"
              class="ml-auto text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-xs p-2.5 text-center inline-flex items-center">
              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                viewBox="0 0 18 18">
                <path
                  d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z" />
              </svg>
              <span class="sr-only">Icon description</span>
            </button>
          </div>

          <template v-if="product && product?.variant" v-for="(options, key) in product.variant" :key="key">
            <h2 class="mt-4 text-base text-gray-900">{{ key }}</h2>
            <div class="mt-[4px] flex select-none flex-wrap items-center gap-1">
              <label v-for="option in options" :key="option" class="">
                <input type="radio" name="type" :value="option" class="peer sr-only" />
                <p
                  class="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-4 py-1 font-bold">
                  {{ option }}</p>
              </label>
            </div>
          </template>

          <div
            class="mt-6 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
            <div class="flex items-end">
              <h1 class="text-3xl font-bold">${{ product.price }}</h1>
              <span class="text-base"></span>
            </div>

            <button type="button"
              class="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" class="shrink-0 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              Add to cart
            </button>
          </div>

          <ul class="mt-4 space-y-2">
            <li class="flex items-center text-left text-sm font-medium text-gray-600">
              <svg class="mr-2 block h-5 w-5 align-middle text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  class=""></path>
              </svg>
              Free shipping worldwide
            </li>

            <li class="flex items-center text-left text-sm font-medium text-gray-600">
              <svg class="mr-2 block h-5 w-5 align-middle text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" class="">
                </path>
              </svg>
              Cancel Anytime
            </li>
          </ul>
        </div>

        <div class="lg:col-span-3">
          <div class="border-b border-gray-300">
            <nav class="flex gap-4">
              <button @click="active = 'description'" title=""
                :class="active == 'description' ? 'border-gray-900 text-gray-900 hover:border-gray-400 hover:text-gray-800' : 'border-transparent text-gray-600'"
                class="border-b-2  py-4 text-sm font-medium  "> Description </button>

              <button @click="active = 'reviews'" title=""
                :class="active == 'reviews' ? 'border-gray-900 text-gray-900 hover:border-gray-400 hover:text-gray-800' : 'border-transparent text-gray-600'"
                class="inline-flex items-center border-b-2  py-4 text-sm font-medium ">
                Reviews
                <span class="ml-2 block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100">
                  {{ product.reviews }}</span>
              </button>
            </nav>
          </div>

          <div v-if="active == 'description'" class="mt-8 flow-root sm:mt-12">
            <h1 class="text-3xl font-bold">Delivered To Your Door</h1>
            <p class="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusantium nesciunt fuga.</p>
            <h1 class="mt-8 text-3xl font-bold">From the Fine Farms of Brazil</h1>
            <p class="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam enim facere.</p>
            <p class="mt-4">Amet consectetur adipisicing elit. Optio numquam enim facere. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Dolore rerum nostrum eius facere, ad neque.</p>
          </div>

          <!-- Container for the Testimonials -->
          <div v-else-if="active == 'reviews'" class="grid gap-6 text-center md:grid-cols-2 lg:gap-12 mt-4">
            <!-- First Testimonial -->
            <div class="mb-12 md:mb-0">
              <div class="mb-6 flex justify-center">
                <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg" class="w-32 rounded-full shadow-lg" />
              </div>
              <h5 class="mb-4 text-xl font-semibold">Maria Smantha</h5>
              <h6 class="mb-4 font-semibold text-primary">
                Web Developer
              </h6>
              <p class="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block h-7 w-7 pr-2"
                  viewBox="0 0 24 24">
                  <path
                    d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                </svg>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
                id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
              </p>
            </div>
            <!-- Second Testimonial -->
            <div class="mb-12 md:mb-0">
              <div class="mb-6 flex justify-center">
                <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg" class="w-32 rounded-full shadow-lg" />
              </div>
              <h5 class="mb-4 text-xl font-semibold">Lisa Cudrow</h5>
              <h6 class="mb-4 font-semibold text-primary">
                Graphic Designer
              </h6>
              <p class="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block h-7 w-7 pr-2"
                  viewBox="0 0 24 24">
                  <path
                    d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                </svg>
                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                suscipit laboriosam, nisi ut aliquid commodi.
              </p>
              <div class="Stars" :style="`--rating: ${product.rating}`"
                aria-label="Rating of this product is {{ product.rating }} out of 5."></div>
            </div>
            <!-- Fourth Testimonial -->
            <div class="mb-0">
              <div class="mb-6 flex justify-center">
                <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg" class="w-32 rounded-full shadow-lg" />
              </div>
              <h5 class="mb-4 text-xl font-semibold">John Smith</h5>
              <h6 class="mb-4 font-semibold text-primary">
                Marketing Specialist
              </h6>
              <p class="mb-4 text-neutral-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block h-7 w-7 pr-2"
                  viewBox="0 0 24 24">
                  <path
                    d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                </svg>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti.
              </p>
              <div class="Stars" :style="`--rating: ${product.rating}`"
                aria-label="Rating of this product is {{ product.rating }} out of 5."></div>
            </div>
            <!-- Fourth Testimonial -->
            <div class="mb-0">
              <div class="mb-6 flex justify-center">
                <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg" class="w-32 rounded-full shadow-lg" />
              </div>
              <h5 class="mb-4 text-xl font-semibold">John Smith</h5>
              <h6 class="mb-4 font-semibold text-primary">
                Marketing Specialist
              </h6>
              <p class="mb-4 text-neutral-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block h-7 w-7 pr-2"
                  viewBox="0 0 24 24">
                  <path
                    d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                </svg>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti.
              </p>
              <div class="Stars" :style="`--rating: ${product.rating}`"
                aria-label="Rating of this product is {{ product.rating }} out of 5."></div>
            </div>
            <!-- Fourth Testimonial -->
            <div class="mb-0">
              <div class="mb-6 flex justify-center">
                <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg" class="w-32 rounded-full shadow-lg" />
              </div>
              <h5 class="mb-4 text-xl font-semibold">John Smith</h5>
              <h6 class="mb-4 font-semibold text-primary">
                Marketing Specialist
              </h6>
              <p class="mb-4 text-neutral-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block h-7 w-7 pr-2"
                  viewBox="0 0 24 24">
                  <path
                    d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                </svg>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti.
              </p>
              <div class="Stars" :style="`--rating: ${product.rating}`"
                aria-label="Rating of this product is {{ product.rating }} out of 5."></div>
            </div>
          </div>

        </div>
      </div>
      <div v-else class="lg:col-gap-12 xl:col-gap-16 mt-4 grid grid-cols-1 gap-12 lg:mt-6 lg:grid-cols-5 lg:gap-16">
        <div class="lg:col-span-2 lg:row-span-2 lg:row-end-2">
          <h1 class="sm: text-2xl font-bold text-gray-900 sm:text-3xl">Product Description Not Avaliable</h1>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.Stars {
  --star-size: 1.5rem;
  --star-color: #c9c1c1;
  --star-background: #fc0;
  --percent: calc(var(--rating) / 5 * 100%);

  display: inline-block;
  font-size: var(--star-size);
  font-family: Times;
  line-height: 1;

  &::before {
    content: '★★★★★';
    letter-spacing: 3px;
    background: linear-gradient(90deg, var(--star-background) var(--percent), var(--star-color) var(--percent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>

