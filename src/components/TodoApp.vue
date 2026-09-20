<script setup lang="ts">
    import { ref, computed } from 'vue';
    import TodoList from './TodoList.vue';
    import type {Todo} from "./types.ts";
    import { FilterType } from './types.ts';

    const todos = ref<Todo[]>([]);
    const currentFilter = ref(FilterType.All);
    const newItemName = ref('');
    let nextId = 0;

    const filteredTodos = computed(() => {
        if (currentFilter.value === FilterType.Open) {
            return todos.value.filter(todo => todo.done === false);
        } else if (currentFilter.value === FilterType.Done) {
            return todos.value.filter(todo => todo.done === true);
        }
        // Default fallback: return the entire original array
        return todos.value; 
    });

    function addItem(name: string): void {
        if( name == ''){
            return;
        }
        todos.value.push( {
            id: nextId++,
            name: name,
            done: false
        });
    }
    function toggleDone(id: number): void {
        const item = todos.value.find(todo => todo.id === id);
        if(item) {
            item.done = !item.done;
        }
    }
    function deleteItem(id: number): void {
        todos.value = todos.value.filter(todo => todo.id !== id);
    }
    function setFilter(type: FilterType): void {
        currentFilter.value = type;
    }

    addItem('Finish Solo Assignment 1')

</script>

<template>
    <!-- The buttons could also be in a separate component but I am lazy and it's late-->
    <p>
        Filters: 
        <button @click="setFilter(FilterType.All)">all</button>
        <button @click="setFilter(FilterType.Open)">open</button>
        <button @click="setFilter(FilterType.Done)">done</button>
    </p>
    <p>
        Add new item: 
        <input type="text" v-model="newItemName">
        <button @click="addItem(newItemName)">add</button>
    </p>
    <TodoList :todos= "filteredTodos" @toggle-done="toggleDone" @delete="deleteItem"/>
</template>