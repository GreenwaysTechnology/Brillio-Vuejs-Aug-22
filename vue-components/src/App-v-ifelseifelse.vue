<!-- if, else..if with template -->

<script setup>
import { ref } from 'vue';
const response = ref('ok')


</script>
<template>
    <template v-if="response === 'ok'">
        <h1>OK Title</h1>
        <p>OK Paragraph 1</p>
        <p>OK Paragraph 2</p>
    </template>
    <template v-else-if="response === 'something'">
        <h1>Something Title</h1>
        <p>Something Paragraph 1</p>
        <p>Something Paragraph 2</p>
    </template>
    <template v-else>
        <h1>else Title</h1>
        <p>else Paragraph 1</p>
        <p>else Paragraph 2</p>
    </template>
</template>