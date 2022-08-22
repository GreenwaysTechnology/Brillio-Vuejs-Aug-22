<script setup>
import { computed, ref } from 'vue';

const firstName = ref('Subramanian')
const lastName = ref('Murugan')

//computeed property to create fullName
const fullName = computed({
    //get
    get() {
        return `${firstName.value} ${lastName.value}`
    },
    //set
    set(newValue) {
        //we have to use destructuring syntax
        [firstName.value, lastName.value] = newValue.split(' ')
    }
})

</script>
<template>
    <h1>Full Name {{ fullName }}</h1>
</template>
<style>
</style>