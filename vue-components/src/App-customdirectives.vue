<script setup>
import { ref } from 'vue'
const color = ref('green')
</script>
<template>
    <h1 v-highlight.value="color">HighLight</h1>
    <!-- directive:arg.modifier -->
    <h1 v-highlight:foo.bar="color">HighLight</h1>

    <p v-demo>this is demo directive -simple</p>
    <p v-demo:foo>this is demo directive-arg</p>
    <p v-demo:foo.bar>this is demo directive-modifier</p>
    <p v-demo:foo.bar="color">this is demo directive</p>
    <p v-demo:foo.bar="{ color: 'green', label: 'Greetings' }">this is demo 
    
    directive</p>
    <p v-demo:value="color">this is demo directive-arg</p>
    <p v-demo="color">this is demo directive-arg</p>

</template>