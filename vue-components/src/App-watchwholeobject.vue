
<script setup>
import { reactive, ref, watch } from 'vue';

const counter = reactive({
    up: 0,
    down: 100
})
const x = ref(0);

const increment = () => counter.up++
const decrement = () => counter.down--


//watch  whole reactive object
//1st param is reactive object to be watched
//2nd param is reactive to be returned
//3rd param is only if there is different object
watch(counter, () => {
    console.log('watching...')
    return counter
}, (newValue, OldValue) => {
    //immutable 
    console.log(newValue, OldValue)
    return counter
}, { deep: true })


</script>
<template>
    <h1>Up : {{ counter.up }}</h1>
    <button @click="increment">+</button>
    <h1>Down : {{ counter.down }}</h1>
    <button @click="decrement">-</button>

    <button @click="x++">{{ x }}</button>

</template>
