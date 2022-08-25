<script setup>
import { onMounted, reactive, ref } from 'vue';

const isActive = ref(true)
const sytleobj = reactive({ active: isActive, text: isActive })

//inline style
const activecolor = ref('red')
const fontSize = ref(30)

const toggle = () => {
    isActive.value = !isActive.value
    console.log(isActive.value)
}
const update = () => {
    activecolor.value = 'yellow'
    fontSize.value = 50
}
</script>
<template>
    <!-- <div @click="toggle" :class="{ active: isActive ,text:isActive }">
        <h1>Hello</h1>
    </div> -->
    <div @click="toggle" :class="sytleobj">
        <h1>Hello</h1>
    </div>
    <div :style="{ color: activecolor, fontSize: fontSize + 'px' }">
        <h1>Hai</h1>
    </div>
    <button @click="update">Update Style </button>
</template>
<style scoped>
.active {
    background-color: aqua;
}

.text {
    font-size: small
}
</style>