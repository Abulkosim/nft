<template>
  <div class="max-w-6xl mx-auto">
    <div class="container px-7 mx-auto py-10 lg:py-20">
      <div class="mb-14">
        <h3 class="text-3xl font-semibold lg:text-4xl mb-3">Trending Collection</h3>
        <p class="lg:text-xl">Checkout Our Weekly Updated Trending Collection.</p>
      </div>

      <div class="flex items-center justify-center md:justify-between gap-4">

        <div class="flex flex-col gap-4" v-motion-slide-visible-once-left>
          <div class="img">
            <img src="../assets/animal1.png" alt="Animal">
          </div>

          <div class="imgs">
            <img src="../assets/animal2.png" alt="Animal">
            <img src="../assets/animal3.png" alt="Animal">
            <img src="../assets/number.png" alt="Number">
          </div>

          <div>
            <span class="text-xl">DSGN Animals</span>
            <div class="profile">
              <img src="../assets/fox.png" alt="Fox">
              <span>MrFox</span>
            </div>
          </div>
        </div>

        <div class="hidden md:flex flex-col gap-4" v-motion-slide-visible-once-bottom>
          <div class="img">
            <img src="../assets/mushrooms1.png" alt="mushrooms">
          </div>

          <div class="imgs">
            <img src="../assets/mushrooms2.png" alt="mushrooms">
            <img src="../assets/mushrooms3.png" alt="mushrooms">
            <img src="../assets/number.png" alt="Number">
          </div>

          <div>
            <span class="text-xl">Magic Mushrooms</span>
            <div class="profile">
              <img src="../assets/shroomie.png" alt="Shroomie">
              <span>Shroomie</span>
            </div>
          </div>
        </div>

        <div class="hidden lg:flex flex-col gap-4" v-motion-slide-visible-once-right>
          <div class="img">
            <img src="../assets/robot1.png" alt="robot">
          </div>

          <div class="imgs">
            <img src="../assets/robot2.png" alt="robot">
            <img src="../assets/robot3.png" alt="robot">
            <img src="../assets/number.png" alt="Number">
          </div>

          <div>
            <span class="text-xl">Disco Machines</span>
            <div class="profile">
              <img src="../assets/avatar.png" alt="Avatar">
              <span>BeKind2Robots</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
img {
  cursor: pointer;
}

.img {
  @apply relative overflow-hidden bg-cover bg-no-repeat rounded-[20px] shadow-xl
}

.img img {
  @apply w-full transition duration-500 ease-in-out hover:scale-105 rounded-[20px]
}

.imgs {
  @apply flex items-center justify-between
}

.imgs img {
  @apply shadow-xl rounded-[20px] hover:opacity-90
}

.profile {
  @apply flex items-center gap-2 mt-1
}
</style>