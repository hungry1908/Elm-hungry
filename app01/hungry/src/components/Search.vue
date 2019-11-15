<!--
 * @Author: 熊小兜
 * @Date: 2019-11-07 00:23:30
 * @LastEditors: 熊小兜
 * @LastEditTime: 2019-11-11 20:21:48
 * @Description:"搜索"
 -->
<template>
    <div class="box">
        <input type="text" :placeholder="tetil">
        <img class="searchimg" src="../assets/img/search.png" alt="">
    </div>
</template>
<script>
export default {
    name:"Search",
    data(){
        return {
            tetil:"请输入店名或美食名"
        }
    }
    
}
</script>
<style scoped>
.box{
    position: relative;
    width: 100%;
    height: .5rem;
    background-color: rgb(37, 157, 238);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
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
    outline: 0;     /*掉input的外边框*/
    font-size: 0.1rem;
}
</style>