<script setup>
import ChildSlotDefault from "./components/ChildSlotDefault.vue";

</script>
<template>
    <ChildSlotDefault>
        <h1>Hello</h1>
    </ChildSlotDefault>
    <!-- No children -->
    <ChildSlotDefault/>
</template>