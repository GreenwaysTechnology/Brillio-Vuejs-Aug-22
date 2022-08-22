<script setup>
import { reactive } from 'vue';

// const employee = reactive({
//     id: 1,
//     name: 'subramanian',
//     address: {
//         city: 'Coimbatore'
//     }
// })
const { id, name, address: { city } } = reactive({
    id: 1,
    name: 'subramanian',
    address: {
        city: 'Coimbatore'
    }
})
</script>
<template>
    <div>
        <p>Id : {{ id }}</p>
        <p>Name : {{ name }}</p>
        <p>City : {{ city }}</p>


    </div>
</template>