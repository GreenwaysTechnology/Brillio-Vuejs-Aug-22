<!-- State Mutation using compostion with setup  attribute  -->
<script setup>
import { ref } from 'vue'

let count = ref(0)
const increment = event => {
    count.value++
}
const decrement = event => {
    count.value--
}
</script>
<template>
    <div>
        <h1>Counter App</h1>
        <h2>Value : {{ count }}</h2>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>

    </div>
</template>
<style>
</style>