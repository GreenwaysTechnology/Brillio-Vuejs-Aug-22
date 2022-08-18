<!-- composition api pattern using setup function -->
<script>
export default {
    setup() {
        //declare state variable
        const message = 'Hello'

        //return state object
        // return {
        //     message: message
        // }
        return {
            message
        }
    }
}
</script>
<template>
    <h1>{{ message }}</h1>
</template>
<style>
</style>