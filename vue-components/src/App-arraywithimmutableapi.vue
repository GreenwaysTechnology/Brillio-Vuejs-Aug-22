<!-- Array immutable api  -->


<script setup>
import { ref } from 'vue';
import TODOS from './mock-data/todos-mock';

const todos = ref(TODOS)

//immutable logic : filter,map,reduce, you can use even spread operator/object.assign
const filter = () => todos.value = todos.value.filter(todo => todo.completed)

</script>
<template>
    <button @click="filter">filter</button>
    <h1>Total Items : {{todos.length}}</h1>
    <ul>
        <li v-for="todo in todos">
            {{ todo }}
        </li>
    </ul>

</template>