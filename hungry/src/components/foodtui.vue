<!--
 * @Author: your name
 * @Date: 2019-11-07 15:48:56
 * @LastEditTime: 2019-11-15 10:56:15
 * @LastEditors: 熊小兜
 * @Description: In User Settings Edit
 * @FilePath: \app\src\components\banner.vue
 -->
<template>
   <div class="box">
    <p class="title">商家推荐</p>
    <ul>
      <li  v-for="(food,index) in  foods" :key="index">
        <img :src="food.photo" alt="">
        <div>
          <p class="name">{{food.goodname}}</p>
          <p class="shou">月售3000</p>
          <p class="xia"><span class="pice">￥{{food.price}}</span><span><img src="../assets/img/add.png" alt=""></span></p>
        </div>
      </li>

    </ul>
   </div>
</template>
<script>
export default {
  name: 'foodtui',
  props:['shopsid'],
  data () {
    return { 
      foods:[
        
      ]  
    }
  },
  components:{
  } ,
   created() {
    console.log(this.id)
      //fetch('/api/goods/all/'+this.foods)
      fetch('/api/goodsall')//jsonsever
      .then(res=>{
        return res.json();
      })
      .then(data=>{
           
        let ddd=data[this.shopsid];//jsonsever
        this.foods = ddd;
        console.log(foods)
            
     })
     .catch(err=>{
       console.log(err);
     })
  }
}
</script>
<style scoped>
.box{
  width: 100%;
  box-sizing:border-box;
  padding: 0px 20px
}
.title{
  font-size: 25px;
  font-weight: 700;
}
ul{
    width: 100%;
    overflow:auto;
    display: flex;
    flex-wrap: nowrap;
}
li{
    width:2rem;
    margin-right: .2rem;
    flex-shrink: 0;
}
.name{
 color:#666666;
 font-size: .2rem;
}
.shou{
  color:#b9b4b4;
 font-size: 16px;
}
.pice{
   color:#f01919;
 font-size: 24px;
}
li img{
width: 100%;
}
.xia{
 display: flex;
 justify-content: space-between
}
.xia img{
  padding-top: 2px;
  width: .2rem;
  height: .2rem;
}
</style>
