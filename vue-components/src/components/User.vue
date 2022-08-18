<script setup>
//declare state variables
const userId = 1
const firstName = 'Subramanian'
const salary = 10000
const status = true
const address = {
    city: 'Coimbatore',
    state: 'Tamil Nadu'
}
const skills = ['Javascript', 'Vue', 'Angular', 'React', 'Java']

</script>
<template>
    <div>
        <h1>User Details</h1>
        <h3>Id : {{ userId }}</h3>
        <h3>Name : {{ firstName }}</h3>
        <h3>Salary : {{ salary }}</h3>
        <h3>Address : {{ address.city }} {{ address.state }}</h3>
        <h3>Skills {{ skills }}</h3>

    </div>
</template>
<style>
</style>