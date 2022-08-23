<script setup>
import { ref } from 'vue';
const message = ref('Hello ,  How are you')
</script>
<template>
    <div>
        <!-- Send data to the parent compoent -->
        <slot :message="message"></slot>
    </div>
</template>