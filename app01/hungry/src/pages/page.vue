<!--
 * @Descripttion: "首页"
 * @version: v1.0.0
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 熊小兜
 * @LastEditTime: 2019-11-13 11:00:54
 -->
<template>
  <div class="box">
      <Head style="position:fixed;z-index:2;"></Head>
      <div class="center">
          <Headnav></Headnav>
          <Headhot></Headhot>
          <Headlist></Headlist>
      </div>
      <Footer  style="position:fixed;z-index:2;bottom:0px;"></Footer>
  </div>
</template>

<script>
import Head from '../components/Head';
import Headnav from '../components/Headnav';
import Headhot from '../components/Headhot';
import Headlist from '../components/Headlist';
import Footer from '../components/Footer';

export default {
  name: 'page',
  data () {
    return {
      
    }
  },
  components:{
     Head,Headnav,Headhot,Footer,Headlist
  }
}
</script>

<style scoped>
.box{
  display: flex;
  flex-direction: column;
  height: 100%;  
}
.center{
    flex: 1;
    overflow-y: auto;
    /* margin-top: .6rem; */
}


</style>
