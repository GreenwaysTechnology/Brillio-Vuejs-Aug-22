<script setup>
import { reactive, ref, watch } from 'vue';

const counter = reactive({
    up: 0,
    down: 100
})
const increment = () => counter.up++
const decrement = () => counter.down--


//watch object particular property
watch(() => counter.up, count => {
    console.log(`Counter Inside Watch ${count}`)
    if (count > 10) {
        alert(' Volum is High')
    }
})

</script>
<template>
    <h1>Up : {{ counter.up }}</h1>
    <button @click="increment">+</button>
    <h1>Down : {{ counter.down }}</h1>
    <button @click="decrement">-</button>
</template>