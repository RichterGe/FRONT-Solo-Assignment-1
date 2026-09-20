<script setup>
import { ref } from 'vue'
import { computed } from 'vue'

const count = ref(0)
const doubled = computed(() => count.value*2)
// const doubled = ref(2)

function increment () {
    count.value++;
}

function decrement () {
    count.value--;
}

const incrementThatIsSomehowBetter = () => {
    count++;
}

</script>

<template>
     <h1>Test num {{ count }}, double: {{ doubled }}</h1>
     <p>
        <button @click="increment()">Up</button>
        <button @click="decrement()">Down</button>
    </p>
</template>
