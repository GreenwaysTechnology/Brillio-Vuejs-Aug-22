<script setup>
const props = defineProps({
    name: {
        type: String,
        default: 'default Name',
        required: true
    },
    age: {
        type: Number,
        default: 1
    },
    status: {
        type: Boolean
    }
})
</script>
<template>
<h1>Property validation</h1>
    <div>
        <p>Name {{ props.name }} Age : {{ props.age }} status :{{props.status ? "ok" :"Not ok"}}</p>
    </div>
</template>