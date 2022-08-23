<script setup>
const props = defineProps({
    name: String
})
//update props :not possible because props are read only
props.name ='foo'
</script>
<template>
<h2>{{props.name}}</h2>
</template>