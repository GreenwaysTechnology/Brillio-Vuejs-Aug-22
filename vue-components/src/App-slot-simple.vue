<script setup>
import ChildSlot from './components/ChildSlot.vue';
import Greeter from './components/Greeter.vue';

</script>
<template>
    <!-- <ChildSlot/> -->
    <ChildSlot>
        <!-- HTML Element as prop -->
        <h2>Hello</h2>
        <h2>Hello</h2>
        <h2>Hello</h2>
        <h2>Hello</h2>
        <h2>Hello</h2>
    </ChildSlot>
    <ChildSlot>
        <!-- Component as prop -->
        <Greeter />
    </ChildSlot>
</template>