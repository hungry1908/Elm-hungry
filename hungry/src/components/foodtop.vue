<!--
 * @Author: your name
 * @Date: 2019-11-08 16:08:49
 * @LastEditTime: 2019-11-14 21:33:43
 * @LastEditors: 熊小兜
 * @Description: In User Settings Edit
 * @FilePath: \app\src\pages\food.vue
 -->

<template>
   <div class="otherTop">
    <ul>
        <li class="left">
          <img src="../assets/img/foodback.png" alt="" @click="callback()">
        </li>
        <li class="midd"><img src="../assets/img/search.png" alt=""><span>输入商品</span></li>
        <li class="right"><img src="../assets/img/ping.png" alt=""></li>
    </ul>
    </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {   
    }
  },
  components:{
  },
  methods:{
    callback(){
      this.$router.go(-1);
    }
   
  }
}
</script>
<style scoped>
.otherTop {
    width: 100%;
    height: 50px;
    padding: 0 10px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    overflow: hidden;
    background-color: #FFF;
}
ul{
    width: 100%;
    display:flex;
    justify-content: space-between;
    height: .68rem;
    line-height: .68rem;
    padding:10px;
}
li{
   height: .35rem;
   line-height: .35rem;
}
.midd{
  width: 70%;
  background: #ccc;
  margin:0 auto;
  text-align: center;
  border-radius: 30px; 
  font-size: .15rem;
}
img{
  width: .25rem;
  height:.25rem;
}
</style>
