<template>
  <div>
    <Intro />
    <Collection v-motion-slide-visible-once-bottom />
    <Creators v-motion-slide-visible-once-bottom />
    <Categories v-motion-slide-visible-once-bottom />
    <Discover v-motion-slide-visible-once-bottom />
    <Auction v-motion-slide-visible-once-bottom />
    <Works v-motion-slide-visible-once-bottom />
    <Subscription v-motion-slide-visible-once-bottom />
  </div>
</template>
<script setup>
import Intro from "../components/Intro.vue";
import Collection from "../components/Collection.vue";
import Creators from "../components/Creators.vue";
import Categories from "../components/Categories.vue";
import Discover from "../components/Discover.vue";
import Works from "../components/Works.vue";
import Subscription from "../components/Subscription.vue";
import Auction from "../components/Auction.vue";
</script>