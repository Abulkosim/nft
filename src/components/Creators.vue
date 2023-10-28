<template>
  <div class="max-w-6xl mx-auto">
    <div class="container px-7 mx-auto py-10 lg:py-20">

      <div class="mb-14 flex flex-col md:flex-row md:items-center justify-between">
        <div>
          <h3 class="text-3xl font-semibold lg:text-4xl mb-3">Top Creators</h3>
          <p class="lg:text-xl">Checkout Top Rated Creators on the NFT Marketplace</p>
        </div>
        <a href="#"
          class="hidden md:flex w-56 items-center justify-center gap-2 py-4 px-5 border border-purple rounded-[20px] hover:bg-darker-purple">
          <img src="../assets/rocket.svg" alt="rocket">
          <span>View Rankings</span>
        </a>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-4" v-motion-slide-visible-once-left>
        <div v-for="creator in creators"
          class="relative flex md:flex-col gap-5 items-center bg-gray p-3 md:p-5 rounded-[20px] cursor-pointer shadow-xl hover:bg-grayish transition duration-300 ease-in-out">

          <div
            class="absolute flex items-center justify-center top-4 left-4 rounded-full bg-dark-gray w-7 h-7 text-whitish">
            {{ creator.id }}</div>

          <img :src="creator.src" :alt="creator.name" class="shadow-lg rounded-full">
          <div class="flex flex-col md:items-center gap-1">
            <span class="text-2xl">{{ creator.name }}</span>
            <p><span class="text-[#858584]">Total Sales:</span> 34.53 ETH</p>
          </div>
        </div>
      </div>

      <a href="#"
        class="flex w-full md:w-56 md:hidden items-center justify-center gap-2 py-4 my-10 px-5 border border-purple rounded-[20px] hover:bg-darker-purple">
        <img src="../assets/rocket.svg" alt="rocket">
        <span>View Rankings</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const creators = ref([
  {
    id: 1,
    src: "https://i.ibb.co/Q8YWKLY/person1.png",
    name: "Keepitreal"
  },
  {
    id: 2,
    src: "https://i.ibb.co/kyXBxJQ/person2.png",
    name: "DigiLab"
  },
  {
    id: 3,
    src: "https://i.ibb.co/8chZHbw/person3.png",
    name: "GravityOne"
  },
  {
    id: 4,
    src: "https://i.ibb.co/1f6Pypm/person4.png",
    name: "Juanie"
  },
  {
    id: 5,
    src: "https://i.ibb.co/jVpJsgy/person5.png",
    name: "BlueWhale"
  },
  {
    id: 6,
    src: "https://i.ibb.co/j4dBFmq/person6.png",
    name: "MrFox"
  },
  {
    id: 7,
    src: "https://i.ibb.co/pj8TDKF/person7.png",
    name: "Shroomie"
  },
  {
    id: 8,
    src: "https://i.ibb.co/6ZV23GC/person8.png",
    name: "Robotica"
  },
  {
    id: 9,
    src: "https://i.ibb.co/nDzRNdZ/person9.png",
    name: "RustyRobot"
  },
  {
    id: 10,
    src: "https://i.ibb.co/G2kbY19/person10.png",
    name: "Animakid"
  },
  {
    id: 11,
    src: "https://i.ibb.co/C1kz0Hf/person11.png",
    name: "Dotgu"
  },
  {
    id: 12,
    src: "https://i.ibb.co/44DNzW9/person12.png",
    name: "Ghiblier"
  }
])

</script>
