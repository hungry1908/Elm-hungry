<!--
 * @Author: 熊小兜
 * @Date: 2019-11-11 20:43:04
 * @LastEditors: 熊小兜
 * @LastEditTime: 2019-11-13 08:48:46
 * @Description: 
 -->
<template>
<div class="box">
    <div class="header">
        优惠专区
    </div>
    <div class="center">
        <div class="bbox">
            <div class="tbox">限时秒杀</div>
            <div class="info">
                <p>夜宵9.9元起</p>
                <span>满减 折扣 会员卷</span>
            </div>
            <img class="img" src="../assets/img/timg(6).jpg" alt="">
        </div>
        <div class="bbox">
            <div class="tbox">优惠排行</div>
            <div class="info">
                <p>配送0元起</p>
                <span>满减 折扣 会员卷</span>
            </div>
            <img class="img" src="../assets/img/timg(7).jpg" alt="">
        </div>
    </div>

    <div class="center">
        <div class="chbox">
            <p>9元起吃</p>
            <span>周一特惠日</span>
            <img class="imgage" src="../assets/img/timg(1).jpg" alt="">
        </div>
        <div class="chbox">
            <p>大牌夜宵</p>
            <span>低至9.9元</span>
            <img class="imgage" src="../assets/img/timg(2).jpg" alt="">
        </div>
        <div class="chbox">
             <p>1元秒杀</p>
             <span>热销爆品</span>
             <img class="imgage" src="../assets/img/timg(3).jpg" alt="">
        </div>
        <div class="chbox">
            <p>新店半价</p>
            <span>配送0元起</span>
            <img class="imgage" src="../assets/img/timg(5).jpg" alt="">
        </div>
    </div>
</div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.box{
    width: 100%;
    height:3.5rem;
}
.center{
    display:flex;
    width: 100%;
    justify-content: space-around;
}
.bbox{
    width: 49%;
    position: relative;
}
.info{
    width: 90%;
    position: absolute;
    left: .1rem;
    bottom: .15rem;
    border-radius: 14px;
    background-color: white;
    opacity: .8;
}
.tbox{
    width: .8rem;
    height: .3rem;
    text-align: center;
    line-height: .3rem;
    border-radius: 0 0 .1rem .1rem;
    position: absolute;
    top: 0;
    left: 30%;
    background-color: rgb(248, 3, 3);
    opacity: 0.8;
}
.img{
    width: 100%;
    border-radius: 10px;
    height: 1.5rem;
}
.header{
    width: 1.5rem;
    height: 0.5rem;
    font-size: .3rem;
    text-align: center;
    line-height:0.5rem;
}
.center{
    width:100%;
    height:2rem;
}
.chbox{
    width: 24%;
    height: 1.5rem;
    float: left;
    margin: 0 auto;
    margin-left: 3px;
    border-radius:.1rem;
    background-color: rgb(222, 252, 250);
}
p{
    width: 100%;
    height: .3rem;
    font-size: .2rem;
    text-align: center;
    font-weight: bold;
    padding-top: 5px;
}
span{
    display: block;
    width: 100%;
    height: .2rem;
    font-size: .15rem;
    text-align:center;
    padding-bottom: 5px;
    color: rgb(105, 101, 101);
}
.imgage{
    width:.9rem;
    height:.9rem;
    border-radius:.2rem  ;
}
</style>