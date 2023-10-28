<template>
  <div class="max-w-6xl mx-auto">
    <div class="container px-7 mx-auto py-10 lg:py-20">

      <div class="mb-12 flex flex-col md:flex-row md:items-center justify-between">
        <div>
          <h3 class="text-3xl font-semibold lg:text-4xl mb-3">How It Works</h3>
          <p class="lg:text-xl">Find Out How To Get Started</p>
        </div>

      </div>
      <div v-motion-slide-visible-once-left class="flex flex-col lg:flex-row items-center gap-4 lg:gap-7 justify-between">
        <div v-for="work in works"
          class="basis-1/3 flex flex-row lg:flex-col gap-2 items-center bg-gray p-4 lg:p-7 shadow-lg rounded-[20px] cursor-pointer hover:bg-grayish">
          <div>
            <img :src="work.src" alt="work.name">
          </div>
          <div class="lg:text-center">
            <span class="text-xl md:text-2xl">{{ work.name }}</span>
            <p class="mt-3 text-whitish">{{ work.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const works = ref([
  {
    src: "https://i.ibb.co/X76sgj6/works1.png",
    name: "Setup Your Wallet",
    content: "Set up your wallet of choice. Connect by clicking the wallet icon in the top right corner."
  },
  {
    src: "https://i.ibb.co/zsNbDBp/works2.png",
    name: "Create Collection",
    content: "Upload your work and setup your collection. Add a description, social links and floor price."
  },
  {
    src: "https://i.ibb.co/3MrRfm9/works3.png",
    name: "Start Earning",
    content: "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others."
  },
])
</script>
