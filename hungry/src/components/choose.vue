<!--
 * @Description: 
 * @Author: losn
 * @Date: 2019-11-09 15:34:46
 * @LastEditors: losn
 * @LastEditTime: 2019-11-13 17:54:08
 -->
<template>
    <div>
            <div class="choose">
                <span>红包/抵用券</span>
                <div class="range">
                        <img src="../assets/img/redbag.png" alt="">
                        <span>选择地址后使用红包</span>
                </div>
            </div> 
    </div>
</template>

<script>
// import axios from 'axios';

export default {
  name: 'intro',
//   data () {
//     return {
//         // "shop_list" : {},
//         restaurantName:"（西贝莜面）南窑头店"
//     }
//   },
//   created(){
//     axios("/resName") 
//     .then(res=>{
//         // console.log(res.data)
//         return res.data;
//     })
//     .then(data=>{
//           //console.log(data);
//         //   this.shop_list = data;
//           this.restaurantName = data[1].restaurantName;
//           //console.log(this.resName.restaurantName)
          
//     })
//     .catch(err=>{
//         console.log(err);
//     })
//   }
}
  

  

</script>

<style scoped>


.choose {
  height: .75rem;
  display: flex;
  justify-content: center;
  border-bottom: .5px solid #b1b1b1;
  align-items: center;
}
.choose :nth-child(1){
  font-size: .18rem;
  font-weight: 600;
  margin-left:.2rem;

}
img{
  margin: 0;
  padding: 0;
}
.range{
  width: 2rem;
  height: .4rem;
  background-color: #ff7110;
  border-radius: 10px;
  margin-left: .3rem;
  color: white;
  line-height: .45rem;
  align-items: center;
}
.choose img{
  width: .18rem;
  height: .18rem;
  margin-top: .1rem;
  display: inline-block;

}
.range span{
  display: inline-block;
  margin-left: .1rem;
  
}
 </style>






