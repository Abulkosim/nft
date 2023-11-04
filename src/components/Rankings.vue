<template>
  <div class="max-w-6xl mx-auto" v-motion-fade>
    <div class="container mx-auto px-7 py-16">
      <div class="flex flex-col gap-4 pb-12">
        <h2 class="text-3xl tracking-wide font-semibold md:text-4xl lg:text-5xl">
          Top Creators</h2>
        <p class="md:text-xl text-whitish mb-4">Check out top ranking NFT artists on the NFT Marketplace.</p>

      </div>

      <div class="flex flex-col gap-3 lg:gap-5" v-motion-slide-bottom>
        <div v-for="ranking in rankings"
          class="bg-gray px-3 md:px-5 pr-4 lg:pr-12 py-2 rounded-[20px] flex items-center justify-between shadow-md hover:bg-grayish cursor-pointer">
          <div class="basis-1/2 flex items-center gap-3 lg:gap-5">
            <div class="rounded-full flex items-center justify-center lg:bg-dark-gray w-7 h-7">
              <span>{{ ranking.id }}</span>
            </div>
            <div>
              <img :src="ranking.src" alt="Person" class="w-6 h-6 lg:w-14 lg:h-14">
            </div>
            <span class="md:text-xl">{{ ranking.name }}</span>
          </div>
          <span class="text-[#00AC4F] hidden md:inline">1.41%</span>
          <span class="text-whitish hidden lg:inline">602</span>
          <span class="text-whitish">12.4 ETH</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const rankings = ref([
  {
    id: 1,
    src: "https://i.ibb.co/Q8YWKLY/person1.png",
    name: "Keepitreal"
  },
  {
    id: 2,
    src: "https://i.ibb.co/kyXBxJQ/person2.png",
    name: "DigiLab"
  },
  {
    id: 3,
    src: "https://i.ibb.co/8chZHbw/person3.png",
    name: "GravityOne"
  },
  {
    id: 4,
    src: "https://i.ibb.co/1f6Pypm/person4.png",
    name: "Juanie"
  },
  {
    id: 5,
    src: "https://i.ibb.co/jVpJsgy/person5.png",
    name: "BlueWhale"
  },
  {
    id: 6,
    src: "https://i.ibb.co/j4dBFmq/person6.png",
    name: "MrFox"
  },
  {
    id: 7,
    src: "https://i.ibb.co/pj8TDKF/person7.png",
    name: "Shroomie"
  },
  {
    id: 8,
    src: "https://i.ibb.co/6ZV23GC/person8.png",
    name: "Robotica"
  },
  {
    id: 9,
    src: "https://i.ibb.co/nDzRNdZ/person9.png",
    name: "RustyRobot"
  },
  {
    id: 10,
    src: "https://i.ibb.co/G2kbY19/person10.png",
    name: "Animakid"
  },
  {
    id: 11,
    src: "https://i.ibb.co/C1kz0Hf/person11.png",
    name: "Dotgu"
  },
  {
    id: 12,
    src: "https://i.ibb.co/44DNzW9/person12.png",
    name: "Ghiblier"
  },
  {
    id: 13,
    src: "https://i.ibb.co/Q8YWKLY/person1.png",
    name: "Keepitreal"
  },
  {
    id: 14,
    src: "https://i.ibb.co/kyXBxJQ/person2.png",
    name: "DigiLab"
  },
  {
    id: 15,
    src: "https://i.ibb.co/8chZHbw/person3.png",
    name: "GravityOne"
  },
  {
    id: 16,
    src: "https://i.ibb.co/1f6Pypm/person4.png",
    name: "Juanie"
  },
  {
    id: 17,
    src: "https://i.ibb.co/jVpJsgy/person5.png",
    name: "BlueWhale"
  },
  {
    id: 18,
    src: "https://i.ibb.co/j4dBFmq/person6.png",
    name: "MrFox"
  },
  {
    id: 19,
    src: "https://i.ibb.co/pj8TDKF/person7.png",
    name: "Shroomie"
  },
  {
    id: 20,
    src: "https://i.ibb.co/6ZV23GC/person8.png",
    name: "Robotica"
  }
])
</script>