<script setup>
const props = defineProps(['name'])
</script>
<template>
 <h1>Customer Name : {{props.name}}</h1>
</template>