<script setup>

//without object destrucing
// function display(employee) {
//     console.log(`Id ${employee.id}`)
//     console.log(`Name ${employee.name}`)
//     console.log(`City ${employee.address.city}`)
// }
//with object destructruing
//Destructrue means extracting object properties from the object
function display(employee) {
    const { id, name, address: { city } } = employee
    console.log(`Id ${id}`)
    console.log(`Name ${name}`)
    console.log(`City ${city}`)
}
display({
    id: 1,
    name: 'subramanian',
    address: {
        city: 'Coimbatore'
    }
})

</script>
<template>

</template>