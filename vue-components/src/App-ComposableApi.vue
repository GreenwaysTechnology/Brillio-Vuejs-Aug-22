<!-- Mouse Tracking -->
<script setup>
import { useMouse } from './composables/mouse.js'
const { x, y } = useMouse()
</script>
<template>
    <h1>X : {{ x }} Y: {{ y }}</h1>
</template>