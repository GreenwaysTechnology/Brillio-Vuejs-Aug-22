<script setup>
import { computed, ref } from 'vue'
const toggle = ref(true)

const showOrHide = () => {
    toggle.value = !toggle.value
}

</script>
<template>
    <h1 v-show="toggle">Show</h1>
    <button @click="showOrHide">Toggle</button>
</template>