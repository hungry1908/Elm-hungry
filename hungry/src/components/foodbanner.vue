<!--
 * @Author: your name
 * @Date: 2019-11-07 15:48:56
 * @LastEditTime: 2019-11-12 10:18:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \app\src\components\banner.vue
 -->
<template>
   <div>
       <img src="../assets/img/foodbanner.png" alt="">
   </div>
</template>
<script>
export default {
  name: 'banner',
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
    width:100%;
    height: 1.5rem;
    margin: .2rem auto;
    text-align: center;
}
img{
    width: 90%;
    height: 100%;
}

</style>
