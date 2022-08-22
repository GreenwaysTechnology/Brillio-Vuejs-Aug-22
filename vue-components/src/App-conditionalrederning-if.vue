<script setup>
import { computed, ref } from 'vue'

const name = ref('admin')

const isAdmin = computed(() => name.value === 'admin')

</script>
<template>
    <div>
        <!-- <h1 v-if="name === 'admin'">You are Admin</h1>
        <h1 v-else>You are guest</h1> -->
        <h1 v-if="isAdmin">You are Admin</h1>
        <h1 v-else>You are guest</h1>
    </div>
</template>