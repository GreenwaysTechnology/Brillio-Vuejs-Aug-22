
<script setup>
import { ref, watch } from 'vue'
const x = ref(0)
const y = ref(0)
const z = ref(0)

watch([x, y, z], ([newX, newY, newZ]) => {
    console.log(` X value is ${newX}`)
    console.log(` Y value is ${newY}`)
    console.log(` Z value is ${newZ}`)
    

})

</script>
<template>
    <h1>Watchers</h1>
    <button @click="x++">X</button>
    <button @click="y++">Y</button>
    <button @click="z++">Z</button>

</template>