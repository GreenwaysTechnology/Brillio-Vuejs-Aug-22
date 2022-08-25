<script setup>

import { defineAsyncComponent, Suspense } from 'vue';

const HelloWorld = defineAsyncComponent(() => import('./components/HelloWorld.vue'))

</script>
<template>
     <Suspense>
        <HelloWorld/>
        <!-- This is fallback component when component takes more time to load -->
        <template #fallback>
            <h1>Loading...</h1>
        </template>
    </Suspense>
</template>