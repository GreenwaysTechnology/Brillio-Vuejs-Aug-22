<script setup>
import { ref } from 'vue';
import counterStore from './store/counterstore.js';
</script>
<template>
    <!-- View -->
    <div>
        <h1>Counter {{ counterStore.state.counterStore }}</h1>
        <!-- User interacts  -->
        <button @click="counterStore.actions.onIncrement">+</button>
    </div>
</template>
<style scoped>
</style>