<script setup lang="ts">
    import type {Todo} from "./types.ts";
    import TodoItem from './TodoItem.vue';

    defineProps<{
        todos: Todo[];
    }>();

    const emit = defineEmits<{
        toggleDone: [id: number]
        delete: [id: number]
    }>();

</script>

<template>
    <ul>
        <TodoItem v-for="element in todos" :key="element.id" :todo="element" 
            @toggle-done="(id) => emit('toggleDone', id)"
            @delete="(id) => emit('delete', id)"            
        />
    </ul>
</template>