<script setup>
import { ref } from 'vue';
const name = ref("defaultName")

</script>
<template>
    <div>
        <h2>{{ name }}</h2>
        <input @input="event => name = event.target.value" :value="name" />
    </div>
</template>