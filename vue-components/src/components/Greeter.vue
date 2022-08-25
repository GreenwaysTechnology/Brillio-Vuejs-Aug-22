<!-- composition api pattern using setup function -->
<script setup>
//declare state variable
const message = 'Hello'
const name = 'Subramanian'
function sayHai() {
    return 'Hai'
}
</script>
<template>
    <h1 class="header">{{ message }} {{ name }}</h1>
    <h1>{{sayHai()}}</h1>
</template>
<style>
</style>