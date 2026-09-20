<script setup lang="ts">
    import type {Todo} from "./types.ts";

    defineProps<{
        todo: Todo;
    }>();

    const emit = defineEmits<{
        toggleDone: [id: number]
        delete: [id: number]
    }>();

</script>

<template>
    <li>
        {{todo.name}} 
        <button @click="emit('delete', todo.id)">🗑️</button>
        <input type="checkbox" :checked="todo.done" @change="emit('toggleDone', todo.id)"/>
    </li>
</template>