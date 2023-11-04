<template>
  <div class="bg-gray">
    <div class="max-w-6xl mx-auto" v-motion-slide-bottom>
      <div class="px-7 py-10 container mx-auto select-none">

        <div class="flex flex-col lg:flex-row gap-4 lg:gap-8">
          <div class="basis-2/5 flex flex-col gap-5 p-3">
            <div class="flex items-center gap-2 cursor-pointer mb-1">
              <img src="../assets/icon.svg" alt="NFT" class="w-6 h-6 lg:w-8 lg:h-8">
              <router-link to="/nft">
                <h1 class="text-2xl tracking-widest">NFT Marketplace</h1>
              </router-link>
            </div>
            <p>NFT marketplace UI created with Anima for Figma.</p>
            <p>Join our community</p>
            <div class="media flex items-center gap-3">
              <img src="../assets/discord.svg" alt="discord">
              <img src="../assets/youtube.svg" alt="youtube">
              <img src="../assets/twitter.svg" alt="twitter">
              <img src="../assets/instagram.svg" alt="instagram">
            </div>
          </div>

          <div class="basis-1/5 flex flex-col gap-5 p-3">
            <div class="cursor-pointer mb-1">
              <h1 class="text-2xl tracking-widest">Explore</h1>
            </div>
            <router-link to="/nft/marketplace" class="hover:opacity-90">
              <span>Marketplace</span>
            </router-link>
            <router-link to="/nft/rankings" class="hover:opacity-90">
              <span>Rankings</span>
            </router-link>
            <router-link to="/nft/wallet" class="hover:opacity-90">
              <span>Connect a wallet</span>
            </router-link>
          </div>

          <div class="basis-2/5 flex flex-col gap-5 p-3">
            <div class="cursor-pointer mb-1">
              <h1 class="text-2xl tracking-widest">Join Our Weekly Digest</h1>
            </div>
            <p>Get exclusive promotions & updates straight to your inbox.</p>
            <router-link to="/nft/signup"
              class="flex w-full md:w-56 items-center justify-center gap-2 py-4 px-5 bg-purple rounded-[20px] hover:bg-darker-purple">
              <img src="../assets/email.svg" alt="email">
              <span>Subscribe</span>
            </router-link>
          </div>
        </div>

        <div>
          <div class="h-[1px] bg-[#858584] my-6"></div>
          <p class="text-center">&copy; NFT Market, 2023</p>
        </div>
      </div>


    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
p,
a {
  @apply text-whitish
}

.media img {
  @apply hover:translate-y-[-5px] transition duration-300 ease-in-out
}
</style>