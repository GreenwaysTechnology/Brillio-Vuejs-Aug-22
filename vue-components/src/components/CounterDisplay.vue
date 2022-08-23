<script setup>
const props = defineProps(['counter'])
</script>
<template>
    <h2>Counter Display</h2>
    <h3>Counter : {{ props.counter }}</h3>
</template>