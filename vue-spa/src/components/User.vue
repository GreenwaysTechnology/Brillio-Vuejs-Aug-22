<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>
<template>
    <h1>User</h1>
    <h1>{{ $route.params.name }} {{$route.path}} {{$route.fullPath}}</h1>
    <nav>
        <RouterLink to="/user/ram/profile">Profile</RouterLink> |
        <RouterLink to="/user/ram/posts">Posts</RouterLink>
    </nav>
    <!-- Nested View -->
    <RouterView></RouterView>
</template>