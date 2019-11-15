<!--
 * @Author: your name
 * @Date: 2019-11-07 15:48:56
 * @LastEditTime: 2019-11-15 10:55:56
 * @LastEditors: 熊小兜
 * @Description: In User Settings Edit
 * @FilePath: \app\src\components\banner.vue
 -->
<template>
   <div>
     <ul>
       <li class="name">{{shopp.shopname}}</li>
       <li class="ping"><span>评价{{shopp.grade}}</span><span>月售{{shopp.success}}</span><span>蜂鸟快送约23分钟</span></li>
       <li class="zhe"><span>5折折扣卷</span><span>购买</span></li>
       <li class="jian">
         <div><span>满15减3</span><span>满20减5</span></div>
         <div>
           <i>2个优惠</i>
         </div>
         </li>
     </ul>
   </div>
</template>
<script>
export default {
  name: '',
  props:['shopsid'],
  data () {
    return {
      shopp:{
        
      }  
    }
  },
  components:{
  } ,
  created() {
    console.log(this.shopsid)
      fetch('/api/shopsoneshopsid/'+this.shopsid)//jsonsever
      .then(res=>{
        return res.json();
      })
      .then(data=>{
           this.shopp = data;
           console.log(this.shopp)
     })
     .catch(err=>{
       console.log(err);

     })
  }
}
</script>
<style scoped>
ul{
  width: 100%;
  margin:0 auto;
}
li{
  text-align: center;
  margin: 10px 0;
}
.name{
  font-size: .28rem;
  font-weight: 600;
}

.ping span{
  color: #999;
  font-size: 18px;
  padding:0 10px;
}
.zhe span{
  height: .4rem;
  background: #ff6600;
  color:#fff;
  font-size: .25rem;
  padding:0 10px;
}
.jian{
  display: flex;
  justify-content: space-around;
}
.jian span{
  border: 1px solid #ffcccc;
  margin-right: 10px;
  color:#ff6666;
  padding: 0 10px;
}
</style>
