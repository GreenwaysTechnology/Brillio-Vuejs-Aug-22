<script setup>
import { useFetch } from './composables/fetch.js'
const { data, error } = useFetch('https://jsonplaceholder.typicode.com/todos')
</script>
<template>
    <div>
        <h1>Todo app</h1>
        <div v-if="error">Opps! Error Encountered : {{ error.message }}</div>
        <div v-else-if="data">
            <div v-for="todo of data">
                <p>{{ todo.title }}</p>
            </div>
        </div>
        <div v-else>
            <h1>Loading...</h1>
        </div>
    </div>
</template>