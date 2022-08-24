<script setup>
import { provide, ref } from 'vue'
import Child1 from './components/propsdrilling/Child1.vue';
const counter = ref(10)
//provide value
provide('name', 'Subramanian')
provide('like', ref(100))
</script>
<template>
    <Child1 :counter="counter"></Child1>
</template>