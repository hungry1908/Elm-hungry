<!--
 * @Author: your name
 * @Date: 2019-11-06 20:13:36
 * @LastEditTime: 2019-11-14 18:36:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zhiwuyishengf:\app\src\pages\shopping.vue
 -->

<template>
  <div class="box">
      <shoppinglist></shoppinglist>
      <shoppingheader></shoppingheader>
      <banner01></banner01>
       <zong></zong>
      <navlast></navlast>
      <shoppinghome></shoppinghome>
     
  </div>
</template>

<script>
import shoppinglist from '../components/shoppinglist';
import shoppingheader from '../components/shoppingheader';
import banner01 from '../components/banner01';
import navlast from '../components/navlast';
import zong from '../components/zong';
import shoppinghome from '../components/shoppinghome';




export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  },
  components:{
       shoppinglist,shoppingheader,banner01,navlast,zong,shoppinghome
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
