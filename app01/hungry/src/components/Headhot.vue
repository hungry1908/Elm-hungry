<!--
 * @Author: 熊小兜
 * @Date: 2019-11-12 17:23:11
 * @LastEditors: 熊小兜
 * @LastEditTime: 2019-11-13 11:09:39
 * @Description: 
 -->
<template>
    <div class="box">
        <div class="BOX">
            <div class="lbox">
                <div class="top">
                    <p> 满额促销</p>
                    <span>满减优惠</span>
                    <img class="img" src="../assets/img/b2.jpg" alt="">
                    <span class="red">满20减10</span>
                </div>
            </div>
            <div class="rbox">
                <div class="top box1">
                    <img class="img1" src="../assets/img/c1.jpg" alt="">
                    <img class="imgs" src="../assets/img/a10.jpg" alt="">
                    <span class="red">满10减5</span>
                </div>
            </div>
            <div class="lbox">
                <div class="top">
                <p>超值特检</p>
                    <span>好货不贵</span>
                    <img  class="img" src="../assets/img/b1.jpg" alt="">
                    <span class="red">特0.99元</span>
                </div>
            </div>
             <div class="rbox">
                <div class="top">
                    <img class="img1" src="../assets/img/c1.jpg" alt="">
                    <img class="imgs" src="../assets/img/a11.jpg" alt="">
                    <span class="red">满10减5</span>
                </div>
             </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style  scoped>
.box{
    width: 100%;
    height: 2rem;
    margin-top: 15px;
}
.BOX{
    display: flex;
    width: 100%;
    height:2rem;
    background-color: rgb(238, 238, 238);
}
.lbox{
    width: 25%;
    height:1.7rem;
}
.top p{
    font-size:.2rem;
    color: red;
    padding-left: .05rem;
    padding-top: .05rem;
}
.top span{
    font-size:.15rem;
    padding-left: .05rem;
    text-align: center;
}
.top .red{
    background-color: red;
    border-radius:10px;
    margin-left:.05rem;
    color: white;

}
.img{
    width: 95%;
    height: .8rem;
}
.rbox{
    width: 25%;
    height:1.7rem;
   
}
 .box1{
    border-right:1px solid rgb(93, 92, 92); 
    margin-right: 5px;
}
.imgs{
    width: 95%;
    height: .8rem;
    margin-top:.23rem;
}
.img1{
    width: .2rem;
    height: .2rem;
    float: right;
    margin-right: 10px;
    margin-top: 10px;
}
</style>