<!--
 * @Author: your name
 * @Date: 2019-11-07 15:48:56
 * @LastEditTime: 2019-11-07 21:11:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \app\src\components\banner.vue
 -->
<template>
   <div class="box">
     <div class="left">
       <span class="l" id="l1" >综合排序<img src="../assets/img/zong.png" alt=""></span>
       <span class="l">距离</span>
       <span class="l" >销售</span>
       </div>
       <div class="right">
       <span class="r">筛选<img src="../assets/img/saixuan.png" alt=""></span>
      </div>
   </div>
</template>
<script>
export default {
  name: 'zong',
  data () {
    return {   
    }
  },
  components:{
  } 
}
</script>
<style scoped>
.box{
  width: 100%;
  height: .5rem;
  display: flex;
 justify-content:space-between;
 flex-direction: row; 
 font-size: .15rem;
 padding: 2%;
 box-sizing: border-box;
}
.left{
  width: 2rem;
 display: flex;
 justify-content: space-between;
 flex-direction: row; 
 
}
.right{
 width: 1rem;
 width:.5rem;
 display: flex;
 justify-content: space-between;
 flex-direction: row;
}
.zong{
 display: flex;
 
}
#l1{
  width:.8rem;
  color:#0099ff;
}
.l{
  width:.35rem;
  height: .5rem;
  line-height: .4rem;
}
.r{
  width:100%;
  height: .5rem;
  line-height: .4rem;
}
img{
  width: .18rem;
  height: .18rem;
   line-height: .2rem;
}
</style>
