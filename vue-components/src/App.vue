<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
    <div>
        <!-- Menu Bar -->
        <nav>
            <RouterLink to="/">Home</RouterLink> | 
            <RouterLink to="/hello">Hello</RouterLink>
        </nav>
        <!-- Place Holder to display view based on route change -->
        <RouterView></RouterView>
    </div>
</template>
<style>
</style>