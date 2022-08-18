<script setup>
const name = 'Subramanian'
</script>
<template>
    <div>
        <h1>Interpolation using mustace Notation</h1>
        <h1>Your Name : {{ name }}</h1>
        <h1>InterPolation using directive-innerText</h1>
        <!-- <h1 v-text="name"></h1> -->
        <h1 v-text="`Your Name is ${name}`"></h1>
        <h1>InterPolation using directive-innerHTML</h1>
        <h1 v-html="` Your Name is ${name}`"></h1>

    </div>
</template>
<style>
</style>