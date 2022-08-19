<script setup>
const imageUrl = "/src/assets/logo.svg"
const isEnabled = true
</script>
<template>
    <h1>Bind Directives</h1>
    <div>
        <h2>Static Image</h2>
        <img src="./assets/logo.svg" height="100" width="100" />
    </div>
    <div>
        <h2>Dynamic Image using v-bind Directive</h2>
        <img v-bind:src="imageUrl" height="100" width="100" />
    </div>
    <div>
        <h2>Dynamic Image using v-bind Directive-short cut</h2>
        <img :src="imageUrl" height="100" width="100" />
    </div>
    <button :disabled="isEnabled">Show</button>
</template>
<style>
</style>