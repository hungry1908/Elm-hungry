<!--
 * @Author: your name
 * @Date: 2019-11-06 20:13:36
 * @LastEditTime: 2019-11-15 11:26:21
 * @LastEditors: 熊小兜
 * @Description: In User Settings Edit
 * @FilePath: \zhiwuyishengf:\app\src\pages\shopping.vue
 -->

<template>
  <div class="box">
     <hirsttoop></hirsttoop>
     <horistnav></horistnav>
     <Footer style="position:fixed;z-index:2;bottom:0px;"></Footer>
  </div>
</template>

<script>
import hirsttoop from '../components/hirsttoop';
import horistnav from '../components/horistnav';
import horistcar from '../components/horistcar';
import Footer from '../components/Footer';



export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  },
  components:{
      hirsttoop,horistnav,horistcar,Footer
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
