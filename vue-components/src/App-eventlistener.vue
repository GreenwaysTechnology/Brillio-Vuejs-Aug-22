<script setup>
import { ref } from 'vue';
const name = ref("defaultName")
//listner
function getInput(event) {
    //read value from the text
    //  console.log(event.target.value)
    name.value = event.target.value
}
</script>
<template>
    <div>
        <h2>{{ name }}</h2>
        <input @input="getInput" :value="name" />
    </div>
</template>