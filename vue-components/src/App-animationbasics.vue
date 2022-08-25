
<script setup>
import { ref } from 'vue';

const show = ref(true)

</script>
<template>
    <button @click="show = !show">Toggle</button>
    <Transition name="fade">
        <p v-if="show">
            Hey , How are you?
        </p>
    </Transition>
</template>
<style>
/* Transition styles */
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>