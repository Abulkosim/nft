<template>
  <div class="max-w-6xl mx-auto">
    <div class="container px-7 mx-auto py-10 lg:py-20">
      <h3 class="text-3xl font-semibold lg:text-4xl mb-12">Browse Categories</h3>

      <div class="grid grid-cols-2 gap-5 lg:grid-cols-4" v-motion-slide-visible-once-right>
        <div v-for="category in categories"
          class="bg-gray rounded-[20px] cursor-pointer shadow-xl hover:bg-grayish transition duration-300 ease-in-out">

          <div class="relative overflow-hidden bg-cover bg-no-repeat rounded-t-[20px]">
            <img :src="category.src" :alt="category.name"
              class="rounded-t-[20px] w-full transition duration-500 ease-in-out hover:scale-105">
          </div>

          <div class="p-4 pl-5">
            <span class="text-xl lg:text-2xl">{{ category.name }}</span>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { ref } from 'vue'
const categories = ref([
  {
    src: "https://i.ibb.co/NLg5PfN/category1.png",
    name: "Art"
  },
  {
    src: "https://i.ibb.co/3WWQkxC/category2.png",
    name: "Collectibles"
  },
  {
    src: "https://i.ibb.co/Yy4zXBq/category3.png",
    name: "Music"
  },
  {
    src: "https://i.ibb.co/NYZZrP1/category4.png",
    name: "Photography"
  },
  {
    src: "https://i.ibb.co/P69cCZ0/category5.png",
    name: "Video"
  },
  {
    src: "https://i.ibb.co/6bxj1ZR/category6.png",
    name: "Utility"
  },
  {
    src: "https://i.ibb.co/wSvcJVH/category7.png",
    name: "Sport"
  },
  {
    src: "https://i.ibb.co/ZLzsRcf/category8.png",
    name: "Visual Worlds"
  }
])

</script>
