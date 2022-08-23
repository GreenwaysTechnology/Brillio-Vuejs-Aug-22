<!-- <script>
export default {
    props: ['message'],
    setup(props) {
        console.log(props)
        return {
            props
        }
    }
}
</script> -->
<script setup>
// const props = defineProps(['message'])
//default props
const props = defineProps({
    message: {
        default: 'default Message'
    }
})
</script>
<template>
    <h1>Child Compoent</h1>
    <h2>{{ props.message }}</h2>
</template>