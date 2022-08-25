<script setup>
import { useRouter, useRoute } from 'vue-router';

const router = useRouter()
console.log(router)

const goToPage = () => {
    //redirect to About Page
    router.push({ path: 'about' })
}
</script>
<template>
    <button @click="goToPage">Go to HelloWorld</button>
    <button @click="$router.back">Back</button>

</template>
