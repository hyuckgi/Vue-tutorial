<template>
  <div id="app">
    <Syntax msg="hello vue world"></Syntax>
    <!-- <router-view></router-view> -->

  </div>
</template>

<script>
import Syntax from './components/Syntax';

export default {
  name: 'app',
  components: {
      Syntax
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
