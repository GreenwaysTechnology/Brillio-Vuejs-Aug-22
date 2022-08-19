<!-- Event listner in the options api -->
<script>
export default {
    methods: {
        //listener
        hello(event) {
            console.log(event)
            console.log('Hello')
            alert('Hello')
        },
        hai(event){
            console.log('hai')
        }
    }
}
</script>
<template>
    <button v-on:click="hello">SayHello</button>
    <button v-on:click="hai">SayHai</button>

</template>