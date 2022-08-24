<script setup>
import { ref } from 'vue';
const toggle = ref(true)
const truthyValue = 'You are good'
const falsyValue = 'You are bad'
</script>
<template>
    <div>
        <input type="checkbox" :true-value="truthyValue" :false-value="falsyValue" checked v-model="toggle" />
        <label for="Toggle">Toggle</label>
    </div>
    <div>
        <!-- {{toggle }} -->
        <!-- {{ toggle ? "You are Good" : "You are Bad" }} -->
         {{toggle}}
    </div>
</template>
