<!--
 * @Author: your name
 * @Date: 2019-11-07 15:48:56
 * @LastEditTime: 2019-11-15 10:57:48
 * @LastEditors: 熊小兜
 * @Description: In User Settings Edit
 * @FilePath: \app\src\components\banner.vue
 -->
<template>
   <div>
     <div style="display:none" >{{typename}}</div>
     <div class="box">
      <ul class="car" v-for="(car,index) in  cars"  :key="index"> 
       <li class="top">
         <span>{{car.name}}</span>
         <span class="wan">{{car.ifxia}}</span>
         </li>
         <li class="middern">
           <img :src="car.img" alt="">
           <div class="nav">
            <p class="xia">{{car.time}}</p>
            <p>总价：￥{{car.pice}}
             </p>
           </div>
         </li>
         <li class="footer">再来一单</li>
     </ul>
     </div> 
   </div>
</template>
<script>
export default {
  name: '',
  props:['typename'],
  data () {
    return {  
       cars:[

       ],
       allcars:[
         
       ] 
    }
  },
   created() {
      fetch('/api/hosrtiy')
      .then(res=>{
        return res.json();
      })
      .then(data=>{
           this.allcars = data;
           console.log(data);
           this.cars = this.getBooksByType(this.allcars);
     })
     .catch(err=>{
       console.log(err);
     })
  },
  beforeUpdate(){
      console.log("数据更新了------------：");
      this.cars = this.getBooksByType(this.allcars);
  },
  components:{
  },
   methods:{
     getBooksByType(data){//根据类型获取数据
         let arr=[];
         for(let i in data){
             if(data[i].ifwan==this.typename){
                 arr.push(data[i]);
             }
         }
         return arr;
     }
  } 
}
</script>
<style scoped>
.box{
  width:100%;
  background: rgba(241, 238, 238, 0.897);
}
.car{
  margin:0 10px 10px 10px;
  height: 1.6rem;
  box-sizing: border-box;
  background: #fff;
   border-radius: 10px;
   padding:4px;
}
.top{
  font-size: .20rem;
  font-weight: bolder;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
.middern{
  display: flex;
  flex-direction: row;
  margin:8px;
}
.top .wan{
  color:rgb(153, 150, 150);
  font-size: .16rem;
}
img{
  width: .7rem;
  height: .7rem;
  border-radius: 10px;
}
.nav{
  color:rgb(153, 150, 150);
  font-size: .16rem;
  margin-top: 10px;
  margin-left:10px;
}
.xia{
  margin-bottom: 2px;
}
.footer{
  font-size: .16rem;
  float:right;
  border-radius: 5px;
  border:1px solid rgb(153, 150, 150);
  color:rgb(153, 150, 150);
  box-sizing: border-box;
  padding: 5px;
  text-align: center;
}
</style>
