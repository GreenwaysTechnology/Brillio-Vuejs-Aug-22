<!-- State Mutation using options api pattern -->
<script>
export default {
    data() {
        return {
            //state variable
            count: 0 // inital state
        }
    },
    methods: {
        increment() {
            //refer the state via this
            this.count++ // state mutation
        }
    }
}
</script>
<template>
    <div>
        <h1>Counter App</h1>
        <h2>Value : {{ count }}</h2>
        <button @click="increment">+</button>
    </div>
</template>
<style>
</style>