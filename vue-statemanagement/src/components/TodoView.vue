<script setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { todosStore } from '../stores/todos'

const TodosStore = todosStore();
//storeToRef will convert nested destructured properties  of store 

//Destructure state related : state,computedProperty
const { todoslist } = storeToRefs(TodosStore)

//Destructure functions
//actions destructure
const { getTodos } = TodosStore

onMounted(() => {
    getTodos()
})

</script>
<template>
    <h1>Todo App with Pina</h1>
    <div v-for="todo in todoslist">
        <h2>{{ todo.id }} {{ todo.title }}</h2>
    </div>
</template>