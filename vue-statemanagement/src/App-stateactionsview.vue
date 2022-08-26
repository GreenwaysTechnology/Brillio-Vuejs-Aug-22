
<script setup>
import { ref } from 'vue';
//state - reactive state
const counter = ref(0)
//actions
const onIncrement = () => counter.value++

</script>
<template>
    <!-- View -->
    <div>
        <h1>Counter {{ counter }}</h1>
        <!-- User interacts  -->
        <button @click="onIncrement">+</button>
    </div>
</template>
<style scoped>
</style>