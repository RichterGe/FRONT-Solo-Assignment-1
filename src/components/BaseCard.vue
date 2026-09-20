<!-- This has been AI-generated and is not my own work! -->
<template>
  <div class="base-card">
    <div class="card-header" v-if="$slots.title">
      <slot name="title"></slot>
    </div>
    <div class="card-body">
      <slot></slot> 
    </div>
    <div class="card-actions" v-if="$slots.actions">

    </div>

    <!-- Space for your challenge below! -->
  </div>
</template>

<style scoped>
.base-card {
  background-color: var(--card-bg); 
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5), 0 1px 3px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  max-width: 400px;
  margin: 16px;
  font-family: sans-serif;
  border: 1px solid #333333; 
}

.card-header {
  padding: 16px 16px 8px 16px;
  font-size: 1.25rem;
  font-weight: bold;
  color: var(--card-header);
}

.card-body {
  padding: 16px;
  color: var(--card-body); 
  line-height: 1.5;
}

.card-actions {
  padding: 8px;
  display: flex;
  justify-content: flex-end;
  background-color: var(--card-actions);
  border-top: 1px solid #333333;
}
</style>