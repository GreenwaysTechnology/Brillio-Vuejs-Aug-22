<script setup>
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from 'vue';

const count = ref(10)

const update = () => {
    count.value++
}

//Mount and Unmount
onBeforeMount(() => {
    console.log('Before Mount')
})
onMounted(() => {
    console.log('on Mounted')
    //timer : async task
    setTimeout(() => {
        count.value++
    }, 5000)
    //inital ajax calls

    //inital websocket calls
    
})
onUnmounted(() => {
    console.log('on Un Mounted')
})
onBeforeUnmount(() => {
    console.log('Before UnMount')
})

//update cycle
onBeforeUpdate(() => {
    console.log('Before Update')
})
onUpdated(() => {
    console.log('After Update')
})

</script>
<template>
    <h1>Life Cycle hooks {{ count }}</h1>
    <button @click="update">Update</button>
</template>