<template>
  <div class="max-w-6xl mx-auto">
    <div class="container mx-auto px-7 flex flex-col lg:flex-row items-center gap-8 lg:gap-16 py-16">
      <div class="lg:basis-1/2 shadow-xl rounded-[20px] sm:mx-8 lg:mx-0 lg:w-full" v-motion-slide-left>
        <img src="../assets/wallet.png" alt="Wallet" class="rounded-[20px]">
      </div>

      <div class="gap-4 lg:basis-1/2 flex flex-col items-center text-center lg:items-start lg:text-start lg:gap-6"
        v-motion-slide-right>
        <h2 class="text-[28px] leading-[39.2px] tracking-wide font-semibold md:text-4xl lg:text-5xl sm:tracking-wider">
          Connect Wallet</h2>
        <p class="md:text-xl text-whitish max-w-lg">Choose a wallet you want to connect. <br> There are several wallet
          providers.</p>
        <div class="flex flex-col gap-4">
          <div
            class="rounded-[20px] bg-gray flex gap-5 items-center px-10 py-4 cursor-pointer shadow-lg hover:bg-grayish transition duration-500 ease-in-out">
            <img src="../assets/wallet1.svg" alt="Wallet">
            <span class="text-xl">Metamask</span>
          </div>
          <div
            class="rounded-[20px] bg-gray flex gap-5 items-center px-10 py-4 cursor-pointer shadow-lg hover:bg-grayish transition duration-500 ease-in-out">
            <img src="../assets/wallet2.svg" alt="Wallet">
            <span class="text-xl">Wallet Connect</span>
          </div>
          <div
            class="rounded-[20px] bg-gray flex gap-5 items-center px-10 py-4 cursor-pointer shadow-lg hover:bg-grayish transition duration-500 ease-in-out">
            <img src="../assets/wallet3.svg" alt="Wallet">
            <span class="text-xl">Coinbase</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
