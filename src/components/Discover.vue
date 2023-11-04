<template>
  <div class="max-w-6xl mx-auto">
    <div class="container px-7 mx-auto py-10 lg:py-20">

      <div class="mb-14 flex flex-col md:flex-row md:items-center justify-between">
        <div>
          <h3 class="text-3xl font-semibold lg:text-4xl mb-3">Discover More NFTs</h3>
          <p class="lg:text-xl">Explore New Trending NFTs</p>
        </div>
        <router-link to="/nft/marketplace"
          class="hidden md:flex w-56 items-center justify-center gap-2 py-4 px-5 border border-purple rounded-[20px] hover:bg-darker-purple">
          <PhEye size="20" />
          <span>See All</span>
        </router-link>
      </div>

      <div class="grid grid-cols-1 min-[540px]:grid-cols-2 lg:grid-cols-4 gap-5" v-motion-slide-visible-once-left>
        <div v-for="nft in nfts"
          class="container flex flex-col bg-gray rounded-[20px] cursor-pointer shadow-xl hover:bg-grayish transition duration-300 ease-in-out">
          <div class="relative overflow-hidden bg-cover bg-no-repeat rounded-t-[20px]">
            <img :src="nft.src" :alt="nft.name" class="w-full transition duration-500 ease-in-out hover:scale-105">
          </div>

          <div class="flex flex-col p-5 gap-1">
            <span class="text-2xl">{{ nft.name }}</span>
            <div class="flex items-center gap-3 mb-5">
              <img :src="nft.author" :alt="nft.authorName">
              <span>{{ nft.authorName }}</span>
            </div>
            <p><span class="text-[#858584]">Highest Bid:</span> 0.33 wETH</p>
          </div>
        </div>
      </div>

      <a href="#"
        class="flex w-full md:w-56 md:hidden items-center justify-center gap-2 py-4 my-10 px-5 border border-purple rounded-[20px] hover:bg-darker-purple">
        <PhEye size="20" />
        <span>See All</span>
      </a>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { PhEye } from "@phosphor-icons/vue";

const nfts = ref([
  {
    src: "https://i.ibb.co/xftH15D/discover1.png",
    name: "Distant Galaxy",
    author: "https://i.ibb.co/Ns23VgB/discover4.png",
    authorName: "MoonDancer"
  },
  {
    src: "https://i.ibb.co/1RrthkC/discover2.png",
    name: "Life On Edena",
    author: "https://i.ibb.co/qnVjSzS/discover5.png",
    authorName: "NebulaKid"
  },
  {
    src: "https://i.ibb.co/QDJQY2w/discover3.png",
    name: "AstroFiction",
    author: "https://i.ibb.co/dj0XHrZ/discover6.png",
    authorName: "Spaceone"
  },
  {
    src: "https://i.ibb.co/xftH15D/discover1.png",
    name: "Space",
    author: "https://i.ibb.co/Ns23VgB/discover4.png",
    authorName: "BlueWhale"
  },
])
</script>
