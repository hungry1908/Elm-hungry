<!--
 * @Description: 
 * @Author: losn
 * @Date: 2019-11-09 10:54:11
 * @LastEditors: losn
 * @LastEditTime: 2019-11-12 21:31:21
 -->

<template>

<div class="feets">
    <div><img src="../assets/img/footerHungry.png" alt=""><p>外卖</p></div>
    <div><img src="../assets/img/drink.png" alt=""><p>超市</p></div>

    <div>
        <router-link to="/CountPage">
        <img src="../assets/img/mypage.png" alt="">
        </router-link>
        <p>订单</p>
    </div>

    <div><img src="../assets/img/blueMy.png" alt=""><p>我的</p></div>
</div>

</template>
<script>
export default {
    name:"feets",
    data(){
        return {

        }
    }
}
</script>
<style scoped>
.feets{
    width: 100%;
    height: .8rem;
    /* background-color: pink; */
    display: flex;
    justify-content: space-around;
}
.feets div{
    width: 25%;
    height: .8rem;
    /* background-color: green; */
}
img{
    width: .35rem;
    height: .35rem;
    margin-top: .2rem;
    margin-left: .2rem;
}
p{
    font-size: .14rem;
    margin-left: .22rem;
    line-height: .2rem;
}
</style>
