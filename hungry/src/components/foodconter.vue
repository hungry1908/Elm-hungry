<!--
 * @Author: your name
 * @Date: 2019-11-07 15:48:56
 * @LastEditTime: 2019-11-15 10:55:49
 * @LastEditors: 熊小兜
 * @Description: In User Settings Edit
 * @FilePath: \app\src\components\banner.vue
 -->
<template>
<div class="da">
   <div class="box">
     <div class="menu">
		 <ul>
			 <li> 干板 </li>
			 <li> 周磊 </li>
			 <li> 米饭 </li>
		 </ul>
    </div>
    <div class="list" >
		<p class="xuan">热销</p> 
		<ul>
		<li  v-for="(food,index) in  foods"  :key="index">
        <img :src="food.photo" alt="">
        <div class="title">
          <p class="name">{{food.goodname}}</p>
		  <p class="shou">{{food.row}}</p>
          <p class="shou">月售3000</p>
          <p class="xia"><span class="pice">￥{{food.price}}</span><span v-on:click="changecolor(food)"><img src="../assets/img/add.png" alt=""></span></p>
        </div>
		</li>
		</ul>
    </div>
   </div>
    <foodcar :food="carfood"></foodcar>
      </div>
</template>
<script>
import foodcar from './foodcar';
export default {
  name: 'foodconter',
  props:['shopsid'],
  data () {
    return {  
      foods:[],
      carfood:[],
    }
  },
  components:{
    foodcar
  },
  created() {
    console.log("id"+this.shopsid)
      fetch('/api/goodsall')//jsonsever
      .then(res=>{
        return res.json();
      })
      .then(data=>{
        let ddd=data[this.shopsid];//jsonsever
        this.foods = ddd;

        console.log(this.foods)
     })
     .catch(err=>{
       console.log(err);
     })
  },
   methods:{
        changecolor(food){
          console.log(food);
          let lingshi=food;
            this.carfood.push(lingshi);
            lingshi={};
        }
    }
}
</script>
<style scoped>
.box{
	width: 100%;
	box-sizing:border-box;
	margin-top: 10px;
	background: #f0eeee;
	overflow: hidden;
}
.da{
  width: 100%;
}
.menu{
	width: 25%;
	float: left;
}
.menu li {
  font-size: 16px;
  margin: 10px 0;
}
.list{
	width: 75%;
	float: right;
	background: #fff;
}
ul{
    width: 100%;
}
 .list li{
    width:100%;
    margin-right: .2rem;
    flex-shrink: 0;
	display: flex;
	justify-content:center;
	margin-top: 10px;
}
.name{
 color:#666666;
 font-size: .15rem;
}
.shou{
  color:#b9b4b4;
 font-size: 14px;
}
.xuan{
	font-size: 20px;
	padding-left:10px;
}
.pice{
   color:#f01919;
 font-size: 16px;
}
.list img{
width: 35%;
height: .6rem;
padding-right: 10px;
}
.xia{
 display: flex;
 justify-content: space-between
}
.xia img{
width: .2rem;
height: .2rem;
}

</style>
