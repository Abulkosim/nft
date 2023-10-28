<template>
  <div class="bg-dark-gray text-white">
    <Header />
    <Intro />
    <Collection v-motion-slide-visible-once-bottom />
    <Creators v-motion-slide-visible-once-bottom />
    <Categories v-motion-slide-visible-once-bottom />
    <Works v-motion-slide-visible-once-bottom />
    <Subscription v-motion-slide-visible-once-bottom />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Intro from "./components/Intro.vue";
import Collection from "./components/Collection.vue";
import Creators from "./components/Creators.vue";
import Categories from "./components/Categories.vue";
import Works from "./components/Works.vue";
import Subscription from "./components/Subscription.vue";
</script>