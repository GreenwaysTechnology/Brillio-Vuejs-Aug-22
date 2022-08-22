<script setup>
import { reactive } from 'vue';

const persons = [
    {
        id: 1,
        name: 'A',
        friends: [
            {
                name: 'F1'
            },
            {
                name: 'F2'
            },
            {
                name: 'F3'
            }
        ]
    },
    {
        id: 2,
        name: 'A1',
        friends: [
            {
                name: 'B1'
            },
            {
                name: 'B2'
            },
            {
                name: 'B3'
            }
        ]
    },
    {
        id: 3,
        name: 'A2',
        friends: [
            {
                name: 'C1'
            },
            {
                name: 'C2'
            },
            {
                name: 'C3'
            }
        ]
    }
]
const list = reactive(persons)
</script>
<template>
    <ul>
        <li v-for="person in list">
            <span>{{ person.id }} {{ person.name }}</span>
            <ul>
                <li v-for="friend of person.friends">
                    <span>{{ friend.name }}</span>
                </li>
            </ul>
        </li>
    </ul>


</template>