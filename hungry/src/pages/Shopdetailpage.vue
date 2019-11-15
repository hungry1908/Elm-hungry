<!--
 * @Descripttion: "首页"
 * @version: v1.0.0
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 熊小兜
 * @LastEditTime: 2019-11-14 17:43:19
 -->
<template>
  <div class="box">
      <div class="box">
          <Search style="position:fixed;z-index:2;"></Search>
            <div class="center">
              <Bans></Bans>
              <Classify ></Classify>
            </div>
          <Footer style="position:fixed;z-index:2;bottom:0px;"></Footer>
      </div>
  </div>
</template>
<script>
import Search from '../components/Search';
import Bans from '../components/Bans';
import Classify from '../components/Classify';
import Footer from '../components/Footer';

export default {
  name: 'ShopdetailPage',
  props:['id'],
  data () {
    return {
      
    }
  },
  components:{
      Search,Bans,Classify,Footer
  },
  beforeRouteEnter (to, from, next) {
      // console.log("ShopdetailPage组件守卫了");
      next();
  }
}
</script>

<style scoped>
.box{
  display: flex;
  flex-direction: column;
  height: 100%;  
}

.backBox{
    position: fixed;
    top:0;
    z-index: 1;
    background: #fff;
}



</style>
