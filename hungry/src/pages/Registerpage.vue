<!--
 * @Descripttion: "首页"
 * @version: v1.0.0
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 熊小兜
 * @LastEditTime: 2019-11-11 11:39:44
 -->
<template>
  <div class="box">
      <Register></Register>
  </div>
</template>

<script>
import Register from '../components/Register';

export default {
  name: 'Registerpage',
  data () {
    return {
      
    }
  },
  components:{
     Register
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
