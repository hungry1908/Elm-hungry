<!--
 * @Author: your name
 * @Date: 2019-11-08 16:08:49
 * @LastEditTime: 2019-11-15 03:33:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \app\src\pages\food.vue
 -->

<template>
   <div class="box">
       <div style="display:none" >{{food}}</div>
       <div v-bind:class="t">
           <ul>
               <p>
                <span>已选商品</span>
               <span @touchstart="qingkong(food)">
               <img src="../assets/img/la.png" alt=""> 清空
               </span>  
               </p>
               <li v-for="(foo,index) in  food"  :key="index">
                   <span class="name">{{foo.goodname}}</span>
                    <span class="xia">
                        <span class="pice">￥{{foo.price}}</span>
                        <span class="ico" @touchstart="reduceCount(index)"><img src="../assets/img/jia.png" alt=""></span>
                      
                        <span class="count">
                            <input class="count" type="button" v-model="foo.count" style="width:0.2rem;">
                        </span>
                        <span class="ico"  @touchstart="addCount(index)"><img src="../assets/img/add.png" alt=""></span>
                  </span>
               </li>
           </ul>
       </div>
       <div class="bottom" v-on:click="changecolor(t)">
           <div class="left">
           <img src="../assets/img/car01.png" alt="">
           <p>未选购商品</p>
           </div>
           
                <!-- <router-link  :to='"/CountPage/"+food'> -->
           <a class="zhun"  @click="tiao('food')">去结算</a>
           <!-- </router-link> -->
       </div>
   </div>
</template>
<script>
export default {
  name: 'foodcar',
   props:['food'],
  data () { 
    return { 
      t:"listt",
    }
  },
  components:{
  },
   methods:{
        changecolor(){
            this.t = this.t=="list"?"listt":"list";
        },
        addCount(index){
          console.log(index);
          this.food[index].count++;
      },
     reduceCount(index){
          if(this.food[index].count <= 1){
              this.food[index].count=1;
              return;
          }
          this.food[index].count--;
      },
     qingkong(food){
          this.food={}
          console.log(this.food)
      },
      tiao(mallCode){
        this.$router.push({
          path: '/CountPage',
          // name: 'mallList',
          query: {
            mallCode: this.food,
          }
        })
      }
}
}
</script>
<style scoped>
.box{
    width: 100%;
     background: #413e3e;
     
}
.list{
    background: #f1eeee;
     display:block ;
}
.listt{
    background: #f1eeee;
    display:none;
   
}
.list p{
    display: flex;
    height: .5rem;
    line-height: .5rem;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 10px;
}

.name{
    font-size: 18px;
}
.pice{
     font-size: 18px;
     color: red;
     box-sizing: border-box;
     padding: 0 10px;
}
.count{
    font-size: 18px;
}
.count input{
    border: none;
    background: #ffffff;
}
.ico{
    margin-top:10px;
}
.list li{
    display: flex;
    height: .5rem;
    line-height: .5rem;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 10px;
    background: #ffffff;
}
.list img{
    width: .2rem;
    height: .2rem;
}
.bottom{
   overflow: hidden;
   height: .5rem;
}
.left{
    width: 80%;
    float: left;
    height: .5rem;
    line-height: .5rem;
    display: flex;
    justify-content: space-around;
}
p{
    color: #a8a0a0;
    font-size: 16px;
}
img{
    width: .8rem;
    height: .6rem;
    margin-top:-20px;
}
.zhun{
  height: .5rem;
  line-height: .5rem;
  width: 20%;
  background: #a8a0a0;
  float:right;
  text-align: center;
  color: #f1eeee;
}
</style>
