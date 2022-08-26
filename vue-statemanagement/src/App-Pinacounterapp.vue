<script setup>
//how to use store
import counterStore from './stores/counter.js';
const counter = counterStore()
</script>
<template>
    <div>
        <h1>Pinia State Management App</h1>
        <h2>Counter {{counter.count}} Double Counter {{counter.doubleIt}}</h2>
        <button @click="counter.increment">+</button>
    </div>
</template>
<style>
</style>