<template>
  <div class="max-w-6xl mx-auto">
    <div class="container mx-auto px-7 py-10 lg:py-20">

      <div
        class="md:p-10 lg:p-14 flex flex-col md:flex-row items-center rounded-[20px] md:bg-gray gap-7 lg:gap-20 md:shadow-xl"
        v-motion-slide-visible-once-right>

        <div class="basis-1/2 rounded-[20px] shadow-xl">
          <img src="../assets/cosmos.png" alt="Cosmos" class="w-full rounded-[20px] opacity-95 hover:opacity-100">
        </div>
        <div class="basis-1/2 flex flex-col gap-3">
          <h3 class="text-2xl sm:text-3xl font-semibold lg:text-4xl">Join Our Weekly Digest</h3>
          <p class="text-lg md:text-xl">Get Exclusive Promotions & Updates Straight to Your Inbox.</p>

          <router-link to="/nft/signup"
            class="flex w-full md:w-56 items-center justify-center gap-2 py-4 px-5 mt-3 lg:mt-5 border border-purple rounded-[20px] hover:bg-darker-purple">
            <img src="../assets/email.svg" alt="email">
            <span>Subscribe</span>
          </router-link>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
</script>
