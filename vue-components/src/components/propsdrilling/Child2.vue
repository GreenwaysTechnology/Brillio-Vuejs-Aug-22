<script setup>
import Child3 from './Child3.vue';
const props = defineProps(['counter'])

</script>
<template>
  <Child3 :counter="props.counter" ></Child3>
</template>