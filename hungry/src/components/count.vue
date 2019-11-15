<!--
 * @Description: 
 * @Author: losn
 * @Date: 2019-11-09 15:34:46
 * @LastEditors: losn
 * @LastEditTime: 2019-11-13 14:30:34
 -->
<template>
    <div>
            <div class="count ">
                <div class="countWords"> 优惠说明？ </div>
                <div class="moneySmall">小计   
                        <span class="money">￥27.5</span>   
                </div> 
            </div>
    </div>
</template>

<script>
// import axios from 'axios';

export default {
  name: 'count',
  data(){
      return{
          
      }
  }
  
}
  

  

</script>

<style scoped>

.count{
    width: 100%;
    height: .9rem;
    font-size: .1rem;
    line-height: .9rem;
    display: flex;
    /* background-color: red; */
    justify-content: center;
    align-items: center;
}
.countWords{
    font-size: .15rem;
    color:rgb(163, 159, 159);

}
.moneySmall{
  margin-left: 1.3rem; 
  font-size: .2rem;
}
.money{
    font-size: .23rem;
    color: black;
    font-weight: 600;
}
 </style>






