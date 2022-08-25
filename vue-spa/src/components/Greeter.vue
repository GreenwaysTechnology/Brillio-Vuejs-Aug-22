
<script setup>
import { watch,ref } from 'vue';
import { useRoute } from 'vue-router';
//Composable api to read params,query
const route = useRoute()
console.log(route)

</script>
<template>
     {{JSON.stringify(route)}}
    <h1>{{ route.params.message }}</h1>
    <!-- Directly you can access route information inside template -->
    <h1>{{ $route.params.message }}</h1>

</template>