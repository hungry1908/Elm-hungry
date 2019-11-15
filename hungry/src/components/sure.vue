<!--
 * @Description: 
 * @Author: losn
 * @Date: 2019-11-09 15:34:46
 * @LastEditors: losn
 * @LastEditTime: 2019-11-13 09:09:37
 -->

<template>
 <div class="sure">
     <!-- <router-link to="/MinePage"> -->
        <img src="../assets/photo/jtzuo.png" alt="" @click="back()">
    <!-- </router-link> -->
        <span>确认订单</span>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  methods:{
      back(){
          this.$router.go(-1);
      }
  }
}
</script>

<style>
 .sure{
    width: 100%;
    height: .9rem;
    /* background-color: pink; */
}
.sure img{
    width:.35rem;
    height: .35rem;
    float: left;
    margin-top: .2rem;
    margin-left: .2rem;
}
.sure {
    font-size: .25rem;
    text-indent: 0rem;
}
.sure span{
    
    display: inline-block;
    margin-top: .2rem; 
   
    /*这块让代码非常不好控制。。 */
}
*{
    margin:0;
    padding: 0;
}
</style>






