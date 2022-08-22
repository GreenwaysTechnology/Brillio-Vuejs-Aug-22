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

const totalStock = computed(() => {
    return products.items.length;
})

</script>
<template>
    <div>
        <p>Id : {{ products.id }} </p>
        <p>Name : {{ products.name }} </p>
        <!-- <p>Total Item : {{ products.items.length }} </p> -->
        <p>Total Item : {{ totalStock }} </p>

        <button @click="update">Add Item</button>
    </div>
</template>
<style>
</style>