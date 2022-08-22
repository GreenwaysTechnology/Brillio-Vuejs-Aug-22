<script setup>
import { reactive } from 'vue';
import todos from './mock-data/todos-mock'

const TODOS = reactive(todos)
</script>
<template>
    <template v-for=" todo in todos">
        <h1>Todo Id {{ todo.id }}</h1>
        <p>Status {{ todo.completed ? 'Completed' : 'Not Completed' }}</p>
    </template>

</template>