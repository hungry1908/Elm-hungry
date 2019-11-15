<!--
 * @Author: your name
 * @Date: 2019-11-06 17:44:53
 * @LastEditTime: 2019-11-07 17:11:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zhiwuyishengf:\app\src\components\shoppinglist.vue
 -->

<template>
 <nav>
     <ul>
         <li> 全部</li>
         <li> 粉面粥类 </li>
         <li> 简餐便当 </li>
         <li> 汉堡套餐</li>
         <li> 粉面粥类 </li>
         <li> 粉面粥类 </li>
         <li> 粉面粥类 </li>
         <li> 粉面粥类 </li>
         <li> 粉面粥类 </li>
         <li> 粉面粥类 </li>
         <li> 粉面粥类 </li>
     </ul>
     <div class="tubiao">
       <img src="../assets/img/down.png" alt="">
     </div>
 </nav>
</template>

<script>
export default {
  name: 'ShoppinglistHeader',
  data () {
    return {   
    }
  },
  components:{
    
  }
  
}
</script>
<style scoped>
nav{
    width:100%;
    background:#0099ff;
    height:.5rem;
    display: flex;
}
ul{
    width: 90%;
    overflow:auto;
    display: flex;
    flex-wrap: nowrap;
}
li{
    width:.65rem;
    font-size: .15rem;
    height: .5rem;
    line-height: .5rem;
    color:#fff;
    margin-right: .2rem;
    flex-shrink: 0;
    text-align: center;
}
.tubiao{
    width:10%;
    line-height: .7rem;
    height: .5rem;
    background: url(../assets/img/ce.png) no-repeat;
    background-position-x:-.21rem;
    padding-left:2%;
}
img{
    width:.25rem;
    height: .25rem;
}
</style>
