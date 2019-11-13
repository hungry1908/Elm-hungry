<!--
 * @Descripttion: "轮播图"
 * @version: v1.0.0
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 熊小兜
 * @LastEditTime: 2019-11-11 20:39:45
 -->
<template>

    <div class="footerBox">   
         <ul>
            <li>
            <i class="el-icon-eleme"></i>
            首页
          </li>
             <li>
               <i class="el-icon-s-shop"></i>
               <router-link to="/Loginpage">登录</router-link></li>
             <li>
               <i class="el-icon-shopping-cart-full"></i>
               订单</li>
             <li>
               <i class="el-icon-s-custom"></i>
               我的</li>
         </ul>
    </div>  
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
       
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
  color:rgb(31, 169, 233);
  display: block;
  height: .3rem;
  margin-top: 5px;
}
</style>