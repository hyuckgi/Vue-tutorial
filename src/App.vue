<template>
  <div id="app">
      <ul class="main_btn">
          <li><router-link to="/">Syntax</router-link></li>
          <li><router-link to="/compute">Compute</router-link></li>
          <li><router-link to="/class">ClassBinding</router-link></li>
          <li><router-link to="/style">StyleBinding</router-link></li>
          <li><router-link to="/condition">Condition</router-link></li>
          <li><router-link to="/listing">Listing</router-link></li>
      </ul>
      <router-view></router-view>
  </div>
</template>

<script>
import Syntax from './components/Syntax';
import Compute from './components/Compute';
import ClassBinding from './components/ClassBinding';
import StyleBinding from './components/StyleBinding';
import Condition from './components/Condition';
import Listing from './components/Listing';

export default {
  name: 'app',
  components: {
      Syntax, Compute, ClassBinding, StyleBinding, Condition, Listing
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
.main_btn:after{
    display:block;
    clear:both;
    content:"";
}
.main_btn li{
    list-style:none;
    float:left;
    width:50%;
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
