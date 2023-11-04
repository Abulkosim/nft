<template>
  <div class="h-14 container px-7 mx-auto flex justify-between items-center lg:h-24 select-none" v-motion-fade>
    <router-link to="/nft" class="flex items-center gap-2 cursor-pointer">
      <img src="../assets/icon.svg" alt="NFT" class="w-6 h-6 lg:w-8 lg:h-8">
      <h1 class="text-xl font-semibold lg:text-2xl tracking-widest">NFT Marketplace</h1>
    </router-link>

    <div class="flex items-center">
      <div class="tracking-wide hidden lg:flex lg:items-center lg:gap-1.5">
        <router-link to="/nft/marketplace" class="p-4 hover:opacity-90">
          <span>Marketplace</span>
        </router-link>
        <router-link to="/nft/rankings" class="p-4 hover:opacity-90">
          <span>Rankings</span>
        </router-link>
        <router-link to="/nft/wallet" class="p-4 hover:opacity-90">
          <span>Connect a wallet</span>
        </router-link>
        <router-link to="/nft/signup"
          class="flex items-center gap-2 py-4 px-5 bg-purple rounded-[20px] hover:bg-darker-purple">
          <img src="../assets/user.svg" alt="user">
          <span>Sign Up</span>
        </router-link>
      </div>
      <div class="cursor-pointer lg:hidden">
        <PhList :size="24" weight="bold" @click="dropdown = !dropdown" />
      </div>
    </div>
  </div>
  <div v-if="dropdown" class="max-w-6xl mx-auto lg:hidden">
    <div class="menu container mx-auto bg-gray tracking-wide flex flex-col shadow-lg">
      <router-link to="/nft/marketplace">
        <span>Marketplace</span>
      </router-link>
      <router-link to="/nft/rankings">
        <span>Rankings</span>
      </router-link>
      <router-link to="/nft/wallet">
        <span>Connect a wallet</span>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PhList } from "@phosphor-icons/vue";
import { ref } from 'vue'

const dropdown = ref(false)
</script>

<style>
.menu a {
  @apply p-4 hover:bg-grayish w-full transition duration-300 ease-in-out
}
</style>