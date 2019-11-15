<!--
 * @Descripttion: "轮播图"
 * @version: v1.0.0
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 熊小兜
 * @LastEditTime: 2019-11-15 11:00:17
 -->
<template>
 <div class="box">   
        <div style="display:none" >{{typename}}</div>
         <ul>
            <li v-for="(shop,index) in shops" :key="index" >
                <div class="imgBox">
                    <img :src="shop.head" alt="">
                </div>
                <div class="infoBox">
                    <ul>
                        <li class="Name">{{shop.shopname}}</li>
                        <li>月销：{{shop.buycount}}</li>
                        <li>价格：￥{{shop.price}}元</li>
                        <li class="eval">评价：{{shop.evaluate}}</li>
                        <li>距离：{{shop.distance}}</li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>  
</template>

<script>
import axios from 'axios';

export default {
  name: 'Tshops',
  props:['typename'],
  data () {
    return {
        allShops:[],
        shops:[]
    }
  },
  created() {
     //从后端获取数据     
     axios.get('/allshops')
     .then(res=>{ 
         this.allShops = res.data;//内部数据，由于没有渲染在组件里，所以，没有触发组件更新
         this.shops = this.getBooksByType(this.allShops);//内部数据，由于渲染到了页面，所以，触发了组件更新
     })
     .catch(err=>{
         console.log(err);
     });
  },
  beforeUpdate(){
    //   console.log("数据更新了------------：");
      this.shops = this.getBooksByType(this.allShops);
  },
  methods:{
     getBooksByType(data){//根据类型获取数据
         let arr=[];
         for(let i in data){
             if(data[i].type==this.typename){
                 arr.push(data[i]);
             }
         }
         return arr;
     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
  margin: 0 auto;
  width:95%;
}

.box>ul{
    width: 100%;
}

.box>ul>li{
    margin-top:.1rem;
    width: 100%;
    display: flex;
}

.imgBox{
    width:40%;
    height: 1.5rem;
}

.infoBox{
    width: 60%;
    padding-left:10px;
    border-bottom: 1px solid gray;
}
img{
    width: 100%;
    height: 100%;
    border-radius: .05rem;
}
.Name{
    font-size: 0.24rem;
}
.eval{
    color: red;
}
</style>