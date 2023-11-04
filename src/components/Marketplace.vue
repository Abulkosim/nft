<template>
  <div class="max-w-6xl mx-auto" v-motion-fade>
    <div class="container mx-auto px-7 py-16">
      <div class="flex flex-col gap-4 pb-12">
        <h2 class="text-3xl tracking-wide font-semibold md:text-4xl lg:text-5xl">
          Browse Marketplace</h2>
        <p class="md:text-xl text-whitish mb-4 lg:mb-8">Browse through more than 50k NFTs on the NFT Marketplace.</p>
        <div class="w-full relative rounded-[20px] border-2 border-grayish">
          <input type="text"
            class="bg-dark-gray outline-none border-none w-full h-full rounded-[20px] p-4 text-whitish text-lg pr-12"
            placeholder="Search Your Favorite NFTS">
          <img src="../assets/search.svg" alt="Search" class="absolute top-3.5 right-3.5">
        </div>
      </div>

      <div class="grid grid-cols-1 min-[540px]:grid-cols-2 lg:grid-cols-3 gap-5" v-motion-slide-bottom>
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

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
  {
    src: "https://i.ibb.co/svPHr5R/discover5.png",
    name: "Happy Robot",
    author: "https://i.ibb.co/dj0XHrZ/discover6.png",
    authorName: "Spaceone"
  },
  {
    src: "https://i.ibb.co/28jXBJY/discover6.png",
    name: "Blossom Girl",
    author: "https://i.ibb.co/qnVjSzS/discover5.png",
    authorName: "NebulaKid"
  },
])
</script>
