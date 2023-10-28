<template>
  <div class="hidden lg:block max-w-6xl mx-auto">
    <div class="container px-7 mx-auto py-10 lg:py-20">
      <div
        class="flex flex-col-reverse lg:flex-row items-center p-12 gap-16 justify-center lg:bg-gray rounded-[20px] lg:shadow-xl"
        v-motion-slide-visible-once-right>
        <div class="flex flex-col gap-5">
          <h3 class="text-3xl font-semibold lg:text-5xl">Magic Mushrooms</h3>
          <p class="text-lg md:text-xl">Auction ends in 10:20:14</p>

          <div class="flex items-center gap-4 bg-dark-gray py-2 px-4 rounded-[20px] w-fit shadow-lg">
            <img src="../assets/shroomie.png" alt="shroomie">
            <span>Shroomie</span>
          </div>
          <a href="#"
            class="flex w-56 items-center justify-center gap-2 py-4 px-5 bg-purple rounded-[20px] hover:bg-darker-purple">
            <PhEye size="20" />
            <span>See NFT</span>
          </a>
        </div>
        <div class="rounded-[20px] shadow-2xl">
          <img src="../assets/mushrooms1.png" alt="Mushroom" class="w-full rounded-[20px]">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PhEye } from "@phosphor-icons/vue";

</script>

