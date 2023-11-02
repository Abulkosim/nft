<template>
  <div class="bg-dark-gray text-white">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>