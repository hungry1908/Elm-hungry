<!--
 * @Descripttion: "首页"
 * @version: v1.0.0
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 熊小兜
 * @LastEditTime: 2019-11-11 16:05:58
 -->
<template>
  <div class="box">
      <Back class="backBox"></Back>
      <Shopdetail :id="id"></Shopdetail>
      
  </div>
</template>
<script>
import Back from '../components/Back';
import Shopdetail from '../components/Shopdetail';

export default {
  name: 'ShopdetailPage',
  props:['id'],
  data () {
    return {
      
    }
  },
  components:{
      Back,Shopdetail
  },
  beforeRouteEnter (to, from, next) {
      console.log("ShopdetailPage组件守卫了");
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
