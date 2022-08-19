<script setup>
import { ref } from 'vue'

const like = ref(0)
const dislike = ref(0)

const onlike = event => {
    like.value++
}
const ondislike = event => {
    dislike.value++
}
</script>
<template>
    <div>
        <h1>Counter App</h1>
        <h2>Likes : {{ like }} Dislikes : {{ dislike }}</h2>
        <button @click="onlike">Like</button>
        <button @click="ondislike">Dislike</button>
    </div>
</template>
<style>
</style>