<!-- Mouse Tracking -->
<script setup>
import { onMounted, onUnmounted, ref } from 'vue';


const x = ref(0)
const y = ref(0)

const update = event => {
    x.value = event.pageX
    y.value = event.pageY
}
//Life cycle api 
onMounted(() => {
    //register mouse move listener
    window.addEventListener('mousemove', update)
})
onUnmounted(() => {
    window.removeEventListener('mousemove', update)
})

</script>
<template>
<h1>X : {{x}} Y: {{y}}</h1>
</template>