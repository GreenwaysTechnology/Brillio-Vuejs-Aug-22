<!-- State Mutation using compostion with setup  function  -->
<script>
import { ref } from 'vue'

export default {
    setup() {
        //non reactivity state
        //let count = 0
        //reactivity state
        let count = ref(0)
        console.log('inital count', count)
        const increment = event => {
            count.value++
            console.log('incremented count ', count.value)
        }

        return {
            count, increment
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