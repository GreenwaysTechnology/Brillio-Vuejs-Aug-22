<script setup>
import { ref } from 'vue';

const value = ref('hello')
//custom directive :
const vFocus = {
    mounted: (element) => {
        console.log(element)
        //dom manipulation
        element.focus()
    }
}

</script>
<template>
    <input v-focus v-model="value" />
</template>