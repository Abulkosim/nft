<template>
  <div class="thisis flex flex-col gap-10 lg:gap-6 w-full items-center lg:items-start">
    <router-link to="/nft/signup"
      class="w-full flex items-center justify-center gap-2 py-4 px-5 bg-purple rounded-[20px] hover:bg-darker-purple min-[520px]:w-56">
      <img src="../assets/rocket.svg" alt="rocket">
      <span>Get Started</span>
    </router-link>

    <div class="flex items-center gap-12 py-2">
      <div class="flex flex-col">
        <span class="text-2xl font-semibold">240k+</span>
        <span>Total Sale</span>
      </div>
      <div class="flex flex-col">
        <span class="text-2xl font-semibold">100k+</span>
        <span>Auctions</span>
      </div>
      <div class="flex flex-col">
        <span class="text-2xl font-semibold">240k+</span>
        <span>Artists</span>
      </div>
    </div>
  </div>
</template>
<script setup></script>