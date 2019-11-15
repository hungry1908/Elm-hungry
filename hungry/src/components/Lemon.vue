<!--
 * @Description: 
 * @Author: losn
 * @Date: 2019-11-09 15:34:46
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-11-15 10:52:04
 -->
<template>
  <div>
    <div class="ss">{{food}}</div>
    <div class="lemon"   v-for="(list,index) in food" :key="index"   >
        <div class="photo">
           <img  :src = list.photo  >
        </div>
        <div class="part">
                    <p>
                        {{list.goodname}}
                    </p>
                    <p>
                        {{list.price}}
                    </p>
        </div>

        <div class="count">
                   {{list.count}} 
        </div>
        <div class="money">
                    {{list.price}}
        </div>

        
    </div>       
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'lemon',
  props:['food'],
  data () {
    return {
      photoSrc:"../assets/img/hamburger.png",
      title:"蜜雪冰城",
      save_type:"常温",
      num:"X 1",
      price:"￥9",
      lists:{}
      
    }
  },
  created(){
    axios("/food_list") 
    .then(res=>{
        // console.log(res.data)
        return res.data;
    })
    .then(data=>{
          this.lists = data
          console.log(data[0].photoSrc);
          this.photoSrc = data[1].photoSrc;
          this.title = data[0].title;
          this.save_type = data[0].save_type;
          this.num = data[0].num;
          this.price = data[1].price;
          
    })
    .catch(err=>{
        console.log(err);
    })
  }
}
  

  
</script>

<style>
.door{
    width: 98%;
    height: 6rem;
    margin:0 auto;
    background-color: white;
    /* border-radius: 10px; */
}
.ss{
  display:none;
}

.lemon{
  display: flex;
  width: 100%;
  height: .9rem;
  text-indent: .2rem;
  border-bottom: .5px solid #b1b1b1; 
}
.count{
  margin-left: .2rem;
  margin-top:.21rem;
  line-height: .45rem;
  font-size: .15rem;
}
.photo{
  margin-top: 0.22rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: .2rem;
}
.photo img{
  width: .5rem;
  height: .5rem;
}
.part{
  width: 2rem;
  /* background-color: green; */
  display: flex;
  flex-direction: column;

}
.part :nth-child(1){
  height: .45rem;
  font-size:.2rem;
  line-height: .45rem;

}
.part :nth-child(2){
  height: .45rem;
  font-size:.1rem;
  line-height: .45rem;

}


.money{
  font-size: .2rem;
  line-height: .9rem;
}

 </style>






