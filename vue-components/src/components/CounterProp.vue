<script setup>
import { ref } from 'vue';
const props = defineProps(['initalCounter'])
//prop as state : just read prop not update
const counter = ref(props.initalCounter)
</script>
<template>
    <h1>Counter State {{ counter }}</h1>
    <h1>Counter Props {{ props.initalCounter }}</h1>
    <button @click="counter++">+</button>
</template>