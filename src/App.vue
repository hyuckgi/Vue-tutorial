<template>
  <div id="app">
      <ul class="main_btn">
          <li><router-link to="/">Syntax</router-link></li>
          <li><router-link to="/compute">Compute</router-link></li>
          <li><router-link to="/class">Class</router-link></li>
      </ul>
      <router-view></router-view>
  </div>
</template>

<script>
import Syntax from './components/Syntax';
import Compute from './components/Compute';
import ClassBinding from './components/ClassBinding';

export default {
  name: 'app',
  components: {
      Syntax, Compute, ClassBinding
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
.main_btn{
    padding:0;
    margin:0;
}
.main_btn li{
    list-style:none;
}
.main_btn li a{
    display:block;
    color:#333;
    line-height:30px;
    text-decoration:none;
    background:pink;
    cursor:pointer;
}
.main_btn li a:hover, .main_btn li a:active, .main_btn li a:visited{
    color:#333;
}



</style>
