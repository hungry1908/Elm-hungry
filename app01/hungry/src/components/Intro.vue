<!--
 * @Description: 
 * @Author: losn
 * @Date: 2019-11-09 15:34:46
 * @LastEditors: losn
 * @LastEditTime: 2019-11-13 11:25:07
 -->
<template>
    <div>
        <!--
          <div class="intro" v-for="(info,index) in shop_list" :key="index" >
                {{info.restaurantName}}
          </div>
          
        -->
        <div class="intro">{{restaurantName}}</div>
    </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'intro',
  data () {
    return {
        // "shop_list" : {},
        restaurantName:"（西贝莜面）南窑头店"
    }
  },
  created(){
    axios("/resName") 
    .then(res=>{
        // console.log(res.data)
        return res.data;
    })
    .then(data=>{
          //console.log(data);
        //   this.shop_list = data;
          this.restaurantName = data[1].restaurantName;
          //console.log(this.resName.restaurantName)
          
    })
    .catch(err=>{
        console.log(err);
    })
  }
}
  

  

</script>

<style>

.intro{
    width: 98%;
    margin:0 auto;
    height: .5rem;
    background-color: white;
    font-size: .2rem;
    line-height: .5rem;
    text-indent: .2rem;
    border-bottom: .5px solid #b1b1b1;
}

 </style>






