<!--
 * @Author: your name
 * @Date: 2019-11-07 15:48:56
 * @LastEditTime: 2019-11-07 21:12:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \app\src\components\banner.vue
 -->
<template>
   <div>
     <ul>
       <li>双11热卖</li>
       <li>津贴联盟</li>
       <li>满减优惠</li>
       <li>品质联盟</li>
     </ul>
   </div>
</template>
<script>
export default {
  name: 'navlast',
  data () {
    return {   
    }
  },
  components:{
  } 
}
</script>
<style scoped>
   div{
     width: 100%;
     height: .5rem;
   }
   ul{
     width: 100%;
     display:flex;
     justify-content:space-around;
     padding: 3%;
     box-sizing: border-box;
   }
   li{
     background:#f0ebe6;
     border-radius: .05rem;
     width: 23%;
     line-height: .4rem;
     height: .4rem;
     text-align: center;
     font-size: .12rem;
   }

</style>
