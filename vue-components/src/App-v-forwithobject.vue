<script setup>
import { reactive } from 'vue';

const movie = reactive({
    title: 'The Matrix',
    langague: ['English', 'Spanish', 'Hindi', 'Tamil', 'Telgu'],
    hours: '2 hrs 5 mins'
})

</script>
<template>
    <ul>
        <li v-for="tmpMovie in movie">
            <span>{{tmpMovie}}</span>
        </li>
    </ul>

</template>