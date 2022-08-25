<script setup>
import { defineAsyncComponent } from 'vue';
import Greeter from './components/Greeter.vue';
import ErrorComponent from './components/ErrorComponent.vue'

//load component
// const GreeterAsync = defineAsyncComponent(() => import('./components/Greeter.vue'))
const GreeterAsync = defineAsyncComponent({
    loader: () => import('./components/Greeter.vue'),
    loadingComponent: Greeter,
    errorComponent: ErrorComponent,
    delay: 5000,
    timeout: 10000
})
</script>
<template>
    <GreeterAsync />
</template>
<style>
</style>