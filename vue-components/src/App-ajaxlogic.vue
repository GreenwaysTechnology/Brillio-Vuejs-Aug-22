<script setup>
import { ref, onMounted } from 'vue'
//state variables
const data = ref(null)
const error = ref(null)

////function api
function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(todos => {
            data.value = todos
            console.log(data.value)
        })
        .catch(err => {
            error.value = err
        })
}

onMounted(() => {
    //call fetch api
    fetchData();
})
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