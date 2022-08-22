<script setup>
import { ref } from 'vue';
const start = ref(1)
</script>
<template>
    <ul>
        <li v-for="start in 100">
            <span>{{ start }}</span>
        </li>
    </ul>

</template>
<style>
</style>