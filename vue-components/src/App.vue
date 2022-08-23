<script setup>
import ScopeSlot from './components/ScopeSlot.vue'
</script>
<template>
    <h1>Vue Application</h1>
    <hr />
    <!--Scoped Slots : Sending data from the child to Parent  -->
    <ScopeSlot v-slot="slotProps">
        {{ slotProps.message }}
    </ScopeSlot>
</template>