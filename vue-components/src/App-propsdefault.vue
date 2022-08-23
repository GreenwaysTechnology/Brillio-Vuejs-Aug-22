<script setup>
import { ref } from 'vue';
import PropValidation from './components/PropValidation.vue';

const name = ref('Subramanian')
const age = ref(18)
const status = ref(false)

</script>
<template>
    <PropValidation :name="name" :age="age" :status="status"></PropValidation>
    <PropValidation :age="age" :status="status"></PropValidation>
    <PropValidation :age="age" status></PropValidation>

</template>