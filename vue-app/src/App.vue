<!-- Component Using options api pattern -->
<script>
import Greeter from './components/greeter/Greeter.vue';
import Users from './components/users/Users.vue';
//java script code will go inside literal object,which must be exported using export default
export default {
    components: { Greeter, Users }
}
</script>
<template>
  <div>
     <Greeter></Greeter>
     <Users></Users>
  </div>
</template>
<style>
</style>