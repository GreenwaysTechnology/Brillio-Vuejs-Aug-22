<!-- State Mutation using compostion with setup  attribute  -->
<script setup>
import { ref } from 'vue'
//reactivity state
let count = ref(0)
console.log('inital count', count)
const increment = event => {
    count.value++
}
</script>
<template>
    <div>
        <h1>Counter App</h1>
        <h2>Value : {{ count }}</h2>
        <button @click="increment">+</button>
    </div>
</template>
<style>
</style>