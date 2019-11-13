<!--
 * @Descripttion: "首页"
 * @version: v1.0.0
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 熊小兜
 * @LastEditTime: 2019-11-12 11:01:14
 -->
<template>
  <div class="box">
      <Login></Login>
  </div>
</template>

<script>
import Login from '../components/Login';

export default {
  name: 'Loginpage',
  data () {
    return {
      
    }
  },
  components:{
     Login
  }
}
</script>

<style scoped>
.box{
  display: flex;
  flex-direction: column;
  height: 100%;  
}



</style>
