<template>
  <div class="max-w-6xl mx-auto">
    <div
      class="container px-7 mx-auto flex items-center flex-col py-10 lg:flex-row lg:py-20 lg:justify-between gap-8 lg:gap-10">
      <div class="w-full gap-3 lg:basis-1/2 flex flex-col lg:gap-6">
        <h2
          class="text-[28px] leading-[39.2px] tracking-wide font-semibold sm:text-4xl md:text-5xl lg:text-[67px] lg:leading-[73.7px] sm:tracking-wider">
          Discover Digital Art &
          Collect NFTs</h2>
        <p class="md:text-xl text-whitish">NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from
          more than
          20k NFT artists.</p>
        <Indicator class="hidden lg:flex" />

      </div>

      <div class="lg:basis-1/2 rounded-[20px] cursor-pointer shadow-xl">
        <div class="relative overflow-hidden bg-cover bg-no-repeat rounded-t-[20px]">
          <img src="../assets/space.png" alt="Space" class="w-full transition duration-700 ease-in-out hover:scale-105">
        </div>
        <div class="flex flex-col gap-3 bg-gray p-4 rounded-b-[20px]">
          <span class="text-xl">Space Walking</span>
          <div class="flex items-center gap-2">
            <img src="../assets/profile.png" alt="Profile">
            <span>Animakid</span>
          </div>
        </div>
      </div>
      <Indicator class="flex lg:hidden" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { PhList } from "@phosphor-icons/vue";
import Indicator from "./Indicator.vue";
</script>