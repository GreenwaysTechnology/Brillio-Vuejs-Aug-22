<!-- State mutation after object destructuring -->

<script setup>
import { reactive,toRefs } from 'vue';

// const location = reactive({
//     lat: 10.5,
//     lng: 90.5
// })

// const location = reactive({
//     lat: 10.5,
//     lng: 90.5
// })
// let { lat, lng } = toRefs(location)
let { lat, lng }  = toRefs(reactive({
    lat: 10.5,
    lng: 90.5
}))

const updateLocation = () => {
    // location.lat = 22.78
    lat.value = 22.78
}
</script>
<template>
    <div>
        <!--  <p>Lat {{ location.lat }}</p>
        <p>Lng {{ location.lng }}</p> -->
        <p>Lat {{ lat }}</p>
        <p>Lng {{ lng }}</p>
        <button @click="updateLocation">Update Location</button>
    </div>
</template>
<style>
</style>