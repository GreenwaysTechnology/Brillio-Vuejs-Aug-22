<script setup>
import { ref } from "vue";
import ChildPropMutation from "./ChildPropMutation.vue";

const name = ref('Subramanian')
</script>
<template>
<ChildPropMutation :name="name"></ChildPropMutation>
</template>