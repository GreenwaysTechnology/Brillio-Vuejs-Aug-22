<!-- Array Mutation -->
<script setup>
import { reactive } from 'vue';

const todos = reactive([])

const addItem = () => {
    //array mutation - add element into array
    todos.push({
        id: Math.random(),
        text: 'do this '
    })
}
</script>
<template>
    <ul>
        <li v-for="todo in todos" :key="todo.id">
            {{ todo }}
        </li>
    </ul>
    <button @click="addItem">Add New Item</button>
</template>