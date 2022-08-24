<script setup>
import Child2 from './Child2.vue';

const props = defineProps(['counter'])

</script>
<template>
  <Child2 :counter="props.counter" ></Child2>
</template>