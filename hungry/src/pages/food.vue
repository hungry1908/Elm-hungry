<!--
 * @Author: your name
 * @Date: 2019-11-08 16:08:49
 * @LastEditTime: 2019-11-14 17:02:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \app\src\pages\food.vue
 -->

<template>
<div>
   <foodtop></foodtop>
    <foodheader :shopsid="shopsid"></foodheader>
   <foodnav ></foodnav>
   <foodbanner></foodbanner>
   <foodtui :shopsid="shopsid"></foodtui>
   <foodconter :shopsid="shopsid"></foodconter>    
</div>
</template>
<script>
import foodtop from '../components/foodtop';
import foodheader from '../components/foodheader';
import foodnav from '../components/foodnav';
import foodbanner from '../components/foodbanner';
import foodtui from '../components/foodtui';
import foodconter from '../components/foodconter';
export default {
  name: 'food',
   props:['shopsid'],
  data () {
    return {   
    }
  },
  components:{
    foodtop,foodheader,foodnav,foodbanner,foodtui,foodconter
  } 
}
</script>
<style scoped>
.top{
   position: fixed;
  left: 0px;
  top: 0px;
  z-index: 10;
}
.midd{
  margin-top:50px;
}
.footer{
  position: fixed;
  left: 0px;
  bottom: 0px;
  z-index: 10;
}
</style>
