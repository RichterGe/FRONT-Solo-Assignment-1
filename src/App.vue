<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import Counter from './components/Counter.vue'
import BaseCard from './components/BaseCard.vue';
</script>

<template>
  <BaseCard>
    <template #title>
      Counter
    </template>
      <Counter />
    <template #card-body>
    </template>
  </BaseCard>
</template>

<style>
  :root {
    --card-bg: #1e1e1e;
    --card-header: #ffffff;
    --card-actions: #171717;
    --card-body: #b0b0b0; 

    /* --app-background: #0a0a0a;
    --accent-color: #ff5722; */
  }
</style>