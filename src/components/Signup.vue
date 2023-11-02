<template>
  <div class="max-w-6xl mx-auto">
    <div class="container mx-auto px-7 flex flex-col lg:flex-row items-center gap-8 lg:gap-16 py-16">
      <div class="lg:basis-1/2 shadow-xl rounded-[20px] sm:mx-8 lg:mx-0 lg:w-full" v-motion-slide-left>
        <img src="../assets/signup.png" alt="Signup" class="rounded-[20px]">
      </div>

      <div class="gap-4 lg:basis-1/2 flex flex-col items-center text-center lg:items-start lg:text-start lg:gap-6"
        v-motion-slide-right>
        <h2 class="text-[28px] leading-[39.2px] tracking-wide font-semibold md:text-4xl lg:text-5xl sm:tracking-wider">
          Create Account</h2>
        <p class="md:text-xl text-whitish max-w-lg">Welcome! Enter Your Details and Start Creating, Collecting and Selling
          NFTs.
        </p>
        <form class="flex flex-col gap-4">
          <div class="input-container">
            <input type="text" placeholder="Username">
            <img src="../assets/username.svg" alt="Username">
          </div>
          <div class="input-container">
            <input type="email" placeholder="Email Address">
            <img src="../assets/input_email.svg" alt="Email">
          </div>
          <div class="input-container">
            <input type="password" placeholder="Password">
            <img src="../assets/password.svg" alt="Password">
          </div>
          <div class="input-container">
            <input type="password" placeholder="Confirm Password">
            <img src="../assets/password.svg" alt="Password">
          </div>
          <a href="#" class="w-80 rounded-[20px] py-4 px-5 bg-purple hover:bg-darker-purple text-center">
            <span>Create Account</span>
          </a>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.input-container {
  @apply bg-white relative w-80 rounded-[20px] placeholder:text-dark-gray
}

.input-container input {
  @apply border-none outline-none rounded-[20px] w-full h-full text-dark-gray pr-6 px-5 py-4 focus:outline-2 focus:outline-purple
}

.input-container img {
  @apply absolute top-3.5 right-4
}
</style>