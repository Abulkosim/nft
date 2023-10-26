<template>
  <div class="h-14 container px-4 mx-auto flex justify-between items-center lg:h-24 select-none">
    <div class="flex items-center gap-2 cursor-pointer">
      <img src="../assets/icon.svg" alt="NFT" class="w-6 h-6 lg:w-8 lg:h-8">
      <h1 class="text-xl font-semibold lg:text-2xl tracking-widest">NFT Marketplace</h1>
    </div>
    <div class="flex items-center">
      <div class="tracking-wide hidden lg:flex lg:items-center lg:gap-1.5">
        <a href="#" class="p-4 hover:opacity-90">
          <span>Marketplace</span>
        </a>
        <a href="#" class="p-4 hover:opacity-90">
          <span>Rankings</span>
        </a>
        <a href="#" class="p-4 hover:opacity-90">
          <span>Connect a wallet</span>
        </a>
        <a href="#" class="flex items-center gap-2 p-4 bg-purple rounded-[20px] hover:bg-darker-purple">
          <img src="../assets/user.svg" alt="user">
          <span>Sign Up</span>
        </a>
      </div>
      <div class="cursor-pointer lg:hidden">
        <PhList :size="24" weight="bold" />
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { PhList } from "@phosphor-icons/vue";

</script>