<!--
 * @Descripttion: "轮播图"
 * @version: v1.0.0
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 熊小兜
 * @LastEditTime: 2019-11-14 21:13:03
 -->
<template>

    <div class="footerBox">   
         <ul>
            <li>
              <div :class="{'red':footerCls[0]}" @touchstart="changeCls(0)">
                  <i class="el-icon-eleme" ></i>
                  <router-link to="/Index">
                  首页</router-link>
              </div>
            </li>
            <li>
                <div :class="{'red':footerCls[1]}" @touchstart="changeCls(1)">
                  <i class="el-icon-s-shop"></i>
                  <router-link to="/page">超市</router-link>
                </div>
            </li>
            <li>
                <div :class="{'red':footerCls[2]}" @touchstart="changeCls(2)">
                    <i class="el-icon-shopping-cart-full"></i>
                      <router-link to="/horist">
                      订单</router-link>
                </div>
            </li>
            <li>
                 <div :class="{'red':footerCls[3]}" @touchstart="changeCls(3)">
                    <i class="el-icon-s-custom"></i>
                    <router-link to="/MinePage">我的</router-link>
                 </div>
            </li>
         </ul>
    </div>  
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return { 
      key:'0'    
    }
  },
  computed:{
    footerCls(){
      return this.$store.state.footerCls;
    }
  },
  methods:{
    changeCls(index){
      //提交mutations
      this.$store.commit('changeFooterCls',index);
    }
  }
}
</script>
<style scoped>
.footerBox{
    width: 100%;
    height: .65rem;
    margin: 0 auto;
    background-color: rgb(219, 221, 223);
    border-radius: 5px;
}
ul{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
}
li{ 
    text-align: center;
}
i{
  font-size: .3rem;
  display: block;
  height: .3rem;
  margin-top: 5px;
}
.red i{
  color:rgb(31, 169, 233);
}
</style>