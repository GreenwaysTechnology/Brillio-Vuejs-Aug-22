<!-- Event listner in the compostion api with setup attribute -->
<script setup>
//es 6 arrow functions
const hello = event => console.log('hello')
const hai = event => console.log('hai')
const onMouseEnter = event => console.log('enter')
const onMouseLeave = event => console.log('exit')
const getData = (data,event) => {
    console.log(data,event)
}
</script>
<template>
    <button v-on:click="hello">SayHello</button>
    <button v-on:click="hai">SayHai</button>
    <button @click="hai">SayHai</button>
    <div>
        <h1 v-on="{ mouseenter: onMouseEnter, mouseleave: onMouseLeave }">Book Now</h1>
    </div>
    <button @click="getData('hello',$event)">Pass Data</button>
</template>