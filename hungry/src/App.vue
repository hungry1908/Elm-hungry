<!--
 * @Author: 熊小兜
 * @Date: 2019-11-11 09:17:36
 * @LastEditors: 熊小兜
 * @LastEditTime: 2019-11-11 10:04:48
 * @Description: 
 -->
<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html{
  font-size: 26.67vw;
}
body{
  font-size:.15rem;
  height: 100%;
}
ul,li{
  list-style: none;
}
a{
  text-decoration: none;
  color:black;
  display: block;
}
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
