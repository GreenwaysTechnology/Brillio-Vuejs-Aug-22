<script setup>
import { RouterLink } from 'vue-router';
import { reactive } from 'vue';

const PRODUCTS = [
    { id: 1, name: 'a1' },
    { id: 2, name: 'a2' },
    { id: 3, name: 'a3' },
    { id: 4, name: 'a4' },
    { id: 5, name: 'a5' },
    { id: 6, name: 'b6' },
    { id: 7, name: 'a90' },
    { id: 8, name: 'b45' },
    { id: 9, name: 'a23' },
    { id: 10, name: 'b12' }
]
const products = reactive(PRODUCTS)


</script>
<template>
    <div>
        <h1>Product View</h1>
        <ul>
            <li v-for="product of products">
                <span>
                    <RouterLink :to="'/product/' + product.id">{{ product.name }}</RouterLink>
                </span>
            </li>

        </ul>
    </div>
</template>
