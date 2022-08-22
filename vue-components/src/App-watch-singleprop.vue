<!-- Watchers : Special function which watches the state mutation and do some side effects -->
<script setup>
import { ref, watch } from 'vue'
const x = ref(0)

watch(x, (newX) => {
    console.log(` X value is ${newX}`)
})

</script>
<template>
    <h1>Watchers</h1>
    <button @click="x++">+</button>
</template>