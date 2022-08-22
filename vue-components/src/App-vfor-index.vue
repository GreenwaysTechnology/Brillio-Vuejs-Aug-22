<script setup>
import { reactive } from 'vue';
import TODOS from './mock-data/todos-mock'

const todos = reactive(TODOS)


</script>
<template>
<div>
    <h1>Todo List</h1>
    <ul>
        <li v-for="(todo,index) in todos">
            <span>{{index}} {{todo.title}}</span>
        </li>
    </ul>
</div>

</template>
<style>
</style>