<!-- DOM attributes as prop -->
<script setup>
import MyButton from './components/MyButton.vue';
</script>
<template>
    <MyButton class="fancy-btn"></MyButton>
</template>
<style>
.fancy-btn {
    background-color: #4CAF50;
    /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}
</style>