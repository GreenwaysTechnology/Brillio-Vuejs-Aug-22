
<script setup>

const onSubmit = event => {
   //logic 
   
}

</script>
<template>
    <div>
        <form @submit.prevent="onSubmit">
            <button @click="onSubmit">Submit</button>
        </form>
    </div>
</template>