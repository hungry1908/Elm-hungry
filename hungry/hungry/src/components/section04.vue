<!--
 * @Author: losn
 * @Date: 2019-11-06 19:49:51
 * @LastEditTime: 2019-11-09 10:53:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day13e:\myhungry\src\components\Mypage.vue
 -->
<template>
<div class="section04" >
                    <div class="part">
                        <img src="../assets/img/heart.png" alt="">
                        <p>我的收藏</p>
                        <img class="jtyou"  src="../assets/photo/jtyou.png" alt="">
                    </div>
                    <div class="part">
                        <img src="../assets/img/myserver.png" alt="">
                        <p>我的客服</p>
                        <img class="jtyou"  src="../assets/photo/jtyou.png" alt="">
                    </div>
                    <div class="part">
                        <img src="../assets/img/gift.png" alt="">
                        <p>推荐有奖</p>
                        <img class="jtyou"  src="../assets/photo/jtyou.png" alt="">
                    </div>
                    <div class="part">
                        <img src="../assets/img/bag.png" alt="">
                        <p>商务合作</p>
                        <img class="jtyou"  src="../assets/photo/jtyou.png" alt="">
                    </div>

</div>
</template>

<script>
export default {
  name: 'section03',
  data () {
    return {
    
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.section04{
width: 100%;
height: 4rem;
}
.section04 .part{
    width: 100%;
    height: 1rem;
    display: flex;
    /* background-color: pink; */
}
.part :nth-child(1){
    width: .35rem;
    height: .35rem;
    margin-top: .3rem;
    margin-left: .2rem;
}
.part :nth-child(2){
    font-size: .2rem;
    margin-left: .2rem;
    
}
p{
    height: .4rem;
    line-height: 1rem;
}

.jtyou{
    width: .35rem;
    height: .35rem;
    margin-top: .3rem;
    margin-left: 1.6rem;
} 
</style>
