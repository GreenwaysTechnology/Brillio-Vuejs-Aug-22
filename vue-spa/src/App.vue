<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/about">About</RouterLink> |
        <RouterLink to="/greet">Greeter</RouterLink>|
        <RouterLink to="/user/ram">User</RouterLink> |
        <RouterLink to="/list">List</RouterLink> |
        <RouterLink :to="{ name: 'product' }">Product</RouterLink> |
        
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
