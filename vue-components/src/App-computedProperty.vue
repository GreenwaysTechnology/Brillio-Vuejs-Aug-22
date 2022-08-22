<script setup>
// import { computed } from '@vue/reactivity';
import { reactive, computed } from 'vue';

const product = reactive({
    id: 1,
    name: 'Books',
    items: [
        //'Java', 'Javascript', 'Angular', 'Vue', 'React'
    ]
})

const stockInfo = computed(() => {
    return product.items.length > 0 ? "InStock" : "OutofStock"
})


</script>
<template>
    <p>Product Id : {{ product.id }}</p>
    <p>Product Name : {{ product.name }}</p>
    <!-- <p>Product Status : {{ product.items.length > 0 ? "InStock" : "OutofStock"}}</p> -->
    <p>Product Status : {{ stockInfo }}</p>
</template>