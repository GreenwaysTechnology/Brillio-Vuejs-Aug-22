<script setup>
import { computed, reactive } from 'vue';

const products = reactive({
    id: 1,
    name: 'books',
    items: [
        "Vue in Action",
        "Vue Master Class"
    ]
})

//state mutation 
const update = () => products.items.push("Exploring Vue 3")

//computed method
const totalStock = computed(() => {
    console.log('computed is called')
    return products.items.length;
    //return 100
})

//regular/normal method
const totalStockMethod = () => {
    console.log('regular method is called')
    return products.items.length;
}


</script>
<template>
    <div>
        <p>Id : {{ products.id }} </p>
        <p>Name : {{ products.name }} </p>
        <!-- <p>Total Item : {{ products.items.length }} </p> -->
        <p>Total Items withComputed Property : {{ totalStock }} </p>
        <p>Total Item with Regular Method: {{ totalStockMethod() }} </p>

        <button @click="update">Add Item</button>
    </div>
</template>
<style>
</style>