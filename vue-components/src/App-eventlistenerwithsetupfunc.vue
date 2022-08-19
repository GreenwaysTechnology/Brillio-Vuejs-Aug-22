<!-- Event listner in the compostion api with setup function -->
<script>
export default {
    setup() {

        //es 5 function style
        // function hello(event) {
        //     console.log('hello')
        // }

        // function hai(event) {
        //     console.log('hai')
        // }

        //es 6 arrow functions
        const hello = event => console.log('hello')
        const hai = event => console.log('hai')

        return {
            //hello:hello, hai:hai
            //es 6 destructured syntax
            hello, hai
        }
    }
}
</script>
<template>
    <button v-on:click="hello">SayHello</button>
    <button v-on:click="hai">SayHai</button>

</template>