<script setup>
import { inject } from 'vue';

const props = defineProps(['counter'])
const name = inject('name')
const like = inject('like')
const company = inject('company')

</script>
<template>
    <h1>Props {{ props.counter }} Inject {{name}} {{like}}</h1>
    <h1>App level data {{company}}</h1>
</template>