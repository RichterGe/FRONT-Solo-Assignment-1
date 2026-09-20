<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import Counter from './components/Counter.vue'
import BaseCard from './components/BaseCard.vue';
import TodoApp from './components/TodoApp.vue';
</script>

<template>
  <div class="card-layout">
    <BaseCard>
      <template #title>
        Counter
      </template>
        <Counter />
      <template #card-body>
      </template>
    </BaseCard>
      <BaseCard>
      <template #title>
        ToDo App
      </template>
        <TodoApp />
      <template #card-body>
      </template>
  </BaseCard>

  </div>
</template>

<style>
  :root {
    --card-bg: #1e1e1e;
    --card-header: #ffffff;
    --card-actions: #171717;
    --card-body: #b0b0b0; 

    --app-background: #0a0a0a;
    --accent-color: #ff5722;
  }
  .card-layout {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    gap: 8px;
    padding: 8px;
    background-color: var(--app-background);
  }
</style>