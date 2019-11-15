<!--
 * @Author: your name
 * @Date: 2019-11-07 15:48:56
 * @LastEditTime: 2019-11-15 10:59:21
 * @LastEditors: 熊小兜
 * @Description: In User Settings Edit
 * @FilePath: \app\src\components\banner.vue
 -->
<template>
<div>
 <div class="box" v-for="(food,index) in  home"  :key="index">
     <router-link  :to='"/food/"+food.id'  class="bian">
     <div class="boximg">
       <img :src="food.head" alt="">
       </div>
     <div class="boxtext">
       <ul>
         <li class="name">{{food.shopname}}</li>
         <li class="song">
             <span><img src="../assets/img/star.png" alt="" class="star"><span>{{food.grode}}</span><span>月售{{food.success}}</span></span>
              <span><img src="../assets/img/re_fengniao_delivery.png" alt="" class="niao"></span>
           </li>
           <li class="song">
             <span>起送￥{{food.startpic}}&nbsp;配送￥{{food.delivery}}</span>
             <span>30分钟2.6千米</span>
         </li>
         <li class="sspa">
           <span class="title">你有5元红包未使用</span> 
           </li>
         <li class="sspa">
           <span class="piao">满30减5</span>
           <span class="piao">满50减15</span>
         </li>
       </ul>
     </div>
      </router-link>
   </div>
</div>
</template>
<script>
export default {
  name: 'shoppinghome',
   props:['shopsid'],
  data () {
    return {
      home:[
        
      ]   
    }
  },
  components:{
  },
   created() {
      fetch('/api/indexallshops')
      .then(res=>{
        return res.json();
      })
      .then(data=>{
           this.home = data;
           console.log(data);
     })
     .catch(err=>{
       console.log(err);
     })
  }
}
</script>
<style scoped>
.box{
  width:100%;
  height: 1.7rem;
  
  margin-top: .1rem;
}
.box>.bian{
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
}
.boximg{
  width: 30%;
  height: 1.5rem; 
  line-height: 1.5rem;
  padding-top: 25px;
  padding-left: 5px;
  box-sizing: border-box;
}
 img{
  width: 1rem;
  height: 1rem;
}
.name{
  font-size: .20rem;
  font-weight: bolder;
  color: black;
}
.boxtext{
  width: 60%;
}
.song{
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  color:rgb(153, 150, 150);
  font-size: .15rem;
  margin-top: 10px;
}
.title{
  color:#ff6600;
  background:#ffcc99;
  padding:0 8px;
}
.sspa{
  margin-top: 10px;
}
.niao{
  width: 60px;;
  height: 100%;
}
.star{
  width: 20px;
  height:20px;
}
.piao{
  border: 1px solid #ffcccc;
  margin-right: 10px;
  color:#ff6666;
  padding: 0 10px;
}

</style>
