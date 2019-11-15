<!--
 * @Author: your name
 * @Date: 2019-11-06 17:44:53
 * @LastEditTime: 2019-11-14 21:23:54
 * @LastEditors: 熊小兜
 * @Description: In User Settings Edit
 * @FilePath: \zhiwuyishengf:\app\src\components\shoppinglist.vue
 -->

<template>
   <div class="header">
      <div class="left">
      <span>
        <router-link to="/Index">
        <img src="../assets/img/header02.png" alt="">
        </router-link>
      </span>
      <span class="title">美食</span>
     </div>
     <span class="right"><img src="../assets/img/header01.png" alt=""></span>
   </div>
</template>
<script>
export default {
  name: 'shoppinglist',
  data () {
    return {   
    }
  },
  components:{
  } 
}
</script>
<style scoped>
.header{
    background:#0099ff;
    width: 100%;
    height: 1.22rem;
    line-height: 1.22rem;
    box-sizing: border-box;
    padding:.1rem;
}
.left{
    display: flex;
    justify-content:space-between;
    align-items: center;
    font-size:.3rem;
    color:#fff;
    float: left;
}
.right{
  float: right;
}
img{
  width: .3rem;
  height: .3rem;
}
.title{
  margin-left: .3rem;
   font-size:.28rem;
}
</style>
