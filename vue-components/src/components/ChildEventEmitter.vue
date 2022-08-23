<script setup>
import { ref } from 'vue'
const emit = defineEmits(['onRequest', 'onCounter'])
const data = ref('Hello,I am from child')
const counter = ref(0)

//data can be emitted inside script via listener
const onSend = () => {
    //emit data
    emit('onRequest', data.value)
}

</script>
<template>
    <hr />
    <div>
        <h1>Child</h1>
        <button @click="onSend">Send To parent</button>
        <!-- Using inline event listener -->
        <button @click="$emit('onRequest', 'Hello!')">Send To parent</button>
        <button @click="$emit('onCounter', counter++)">+</button>

    </div>
</template>