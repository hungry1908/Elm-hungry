<!--
 * @Author: 熊小兜
 * @Date: 2019-11-12 11:24:05
 * @LastEditors: 熊小兜
 * @LastEditTime: 2019-11-12 20:12:24
 * @Description: 
 -->
<template>
    <div class="box">
        <div class="one">
            <img class="tone" src="../assets/img/a2.jpg" alt="">
            <img class="tone" src="../assets/img/a1.jpg" alt="">
        </div>
        <div class="two">
             <input type="text" :placeholder="tetil">
             <img class="searchimg" src="../assets/img/search.png" alt="">
        </div>
        <div class="hot">
            <ul>
                <li class="thot">热搜:</li>
                <li>巧克力</li>
                <li>泡面</li>
                <li>辣条</li>
                <li>水饺</li>
                <li>奶粉</li>
                <li>鸡蛋</li>
                <li>卫生纸</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:"Head",
    data(){
        return {
            tetil:"搜索店内4856件好物"
        }
    }
}
</script>
<style  scoped>
.one{
    display: flex;
    width: 100%;
    height: .6rem;
    border-bottom: 1px solid gray;
    justify-content: space-between;
    background-color: white;
}
.tone{
    width: 40%;
    height:100%;
    border-radius:.3rem; 
}
.two{
    position: relative;
    width: 100%;
    height: .5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background-color: rgb(106, 192, 246);
}
.searchimg{
    position: absolute;
    left: 10px;
    top: .1rem;
    width: .3rem;
    height: .3rem;

}
input{
    width: 80%;
    height: .3rem;
    border-radius: 10px;
    margin-left: 0.3rem;
    padding-left: 0.1rem;
    outline: 0;
    font-size: 0.1rem;
}
.hot{
    width: 100%;
    height:.3rem;
    
}
.hot ul{
    width: 100%;
    display: flex;
    background-color: rgb(106, 192, 246);
}
.hot li{
    height:.25rem;
    width: 15%;
    font-size:14px;
    text-align: center;
    line-height: .25rem;
    border-radius: 10px;
    background-color: rgb(64, 177, 248);
    justify-content: space-around;
}
.hot .thot{
    background-color:  rgb(106, 192, 246);
    border-style: none;
}
</style>