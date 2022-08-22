<script setup>
import { shallowReactive } from 'vue';
//to make object reactive
const comments = shallowReactive({
    like: 0,
    dislike: 0,
    recommend: {
        rating: {
            value: 90
        }
    }
})
console.log(comments)

const onlike = event => {
    comments.like++
}
const rating = event => {
    comments.recommend.rating.value++
}
</script>
<template>
    <div>
        <h1>Counter App</h1>
        <h2>Likes : {{ comments.like }} Dislikes : {{ comments.dislike }}
            Rating : {{ comments.recommend.rating.value }}</h2>
        <button @click="onlike">Like</button>
        <button @click="rating">Rating</button>

    </div>
</template>
<style>
</style>