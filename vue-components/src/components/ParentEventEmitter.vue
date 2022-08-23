<script setup>
import { ref } from 'vue';
import ChildEventEmitter from './ChildEventEmitter.vue';

const message = ref('')
const counter = ref(0)

//listener , which listens for child component
const getData = data => {
    console.log(data)
    //update
    message.value = data
}
const getCounter = data => {
    counter.value = data;
}

</script>

<template>
    <h1>Parent Compoent</h1>
    <h2>Data From Child {{ message }} {{ counter }}</h2>
    <!-- attach child compoent listener -->
    <ChildEventEmitter @on-request="getData" @on-counter="getCounter">
    </ChildEventEmitter>
</template>