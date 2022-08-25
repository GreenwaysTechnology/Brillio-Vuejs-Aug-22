<script setup>
import { onMounted, ref } from 'vue';
import Greeter from './components/Greeter.vue';

const myinput = ref(null)
const greeter = ref(null)

onMounted(() => {
    console.log(myinput)
    myinput.value.focus()
    console.log(greeter.value)
})
</script>
<template>
    <input ref="myinput" value="test" />
    <Greeter ref="greeter" />
</template>