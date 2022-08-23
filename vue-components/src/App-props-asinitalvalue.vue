<script setup>
import { ref } from 'vue';
import CounterProp from './components/CounterProp.vue';

const initalCounter = ref(10)
</script>

<template>
    <CounterProp :initalCounter="initalCounter"></CounterProp>
</template>