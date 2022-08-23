<script setup>
import { ref } from 'vue';
import CounterDisplay from './CounterDisplay.vue';
//state
const counter = ref(0)
const increment = () => {
    counter.value++
}
</script>
<template>
    <h2>Counter</h2>
    <CounterDisplay :counter="counter"></CounterDisplay>
    <button @click="increment">+</button>
</template>