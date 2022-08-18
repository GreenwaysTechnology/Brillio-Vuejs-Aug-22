<!-- This synatx is common for both options api and composition api using imperative pattern -->
<script>
import Logo from './components/Logo.vue'
import StatusBar from './components/StatusBar.vue' //Global Component
export default {
  // components: { Logo } // Component Registration - Local compoent
}
</script>
<template>
   <Logo></Logo>
   <StatusBar></StatusBar>
</template>
<style>
</style>