<template>
  <div class="bg-dark-gray text-white">
    <Header />
    <Intro />
    <Collection />
    <Creators />
    <Categories />
  </div>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
import Intro from "./components/Intro.vue";
import Collection from "./components/Collection.vue";
import Creators from "./components/Creators.vue";
import Categories from "./components/Categories.vue";
</script>