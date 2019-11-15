<!--
 * @Author: losn
 * @Date: 2019-11-06 19:49:51
 * @LastEditTime: 2019-11-08 18:04:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day13e:\myhungry\src\components\Mypage.vue
 -->
<template>
  <div class="section02">
      <div class="part">
        <img class="kingPhoto" src="../assets/img/superKing.png" alt="">
        <span class="words">超级会员</span>
        <div class="words02"> 开通后，每月领超过<span class="red">20</span>     元红包</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Section02',
  data () {
    return {
    
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.section02{
    width:100%;
    height:1.2rem;
    /* background-color: pink; */
    display: flex;
    justify-content: center;
    align-items: center;
}
.part{
    width: 94%;
    height: .6rem;
    display: flex;
    background-color: #faf0d5;
    border-radius: 20px;
    position: relative;
}
.kingPhoto{
    width: .4rem;
    height: .4rem;
    align-items: center;
    margin-left: .1rem;
    margin-top:.1rem;
}
.words{
  display: inline-block;
  font-size: 18px;
  line-height: .3rem;
  position:absolute;
  top:.2rem;
  left:.6rem;
}
.words02{
     position: absolute;
     top:.18rem;
     left: 1.5rem;
     font-size: 14px;
}
.red{
  color:red;
  font-size: .22rem;
}


</style>
