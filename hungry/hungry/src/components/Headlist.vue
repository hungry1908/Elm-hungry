<!--
 * @Author: 熊小兜
 * @Date: 2019-11-12 19:13:43
 * @LastEditors: 熊小兜
 * @LastEditTime: 2019-11-15 10:08:45
 * @Description: 
 -->
<template>
    <div class="box">
        <div class="top">
            猜你喜欢
        </div>
        <div class="center">
            <div class="boxl" v-for="(headlist,index) in headlists" :key="index"  >
                <img  class="imgs" :src="headlist.src" alt="">
                <p>{{headlist.name}}</p>
                <div class="mon">
                    <span>￥{{headlist.price}}</span>
                    <img class="img" src="../assets/img/d1.jpg" alt="">
                </div>
            </div>
        </div>
         <!-- <div class="center">
            <div class="boxl" v-for="(headlist,index) in headlists" :key="index"  >
                <img  class="imgs" :src="headlist.src" alt="">
                <p>{{headlist.name}}</p>
                <div class="mon">
                    <span>￥{{headlist.price}}</span>
                </div>
            </div>
        </div> -->
    </div> 
</template>
<script>

export default {
    name:"Headlist",
     data(){
        return {
          headlists:[]
        }
    },
    created(){
        fetch('/api/headlist')
        .then(res=>{
            return res.json();
        })
        .then(data=>{
             this.headlists = data;
        })
        .catch(err=>{
            console.log(err);
        })
    }
}
</script>
<style scoped>
.top{
    width: 35%;
    height: .5rem;
    font-size: .3rem;
    text-align: center;
    line-height: .5rem;
}
.center{
    display: flex;
    width: 100%;
    margin-bottom: 1rem;
    flex-wrap: wrap;
}
.boxl{
    width: 50%;
    height: 3rem;
    margin: 0 auto;
}
.boxl p{
    width: 100%;
    height: .5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: .25rem;
    text-align: center;
    line-height: .5rem;
}
.imgs{
    width: 100%;
    height: 2rem;
}
.mon{
    width: 100%;
    height: .4rem;
    line-height: .4rem;
}
.mon span{
    font-size: .25rem;
    color: red;
}
.img{
    float: right;
    width: .3rem;
    height: .3rem;
    border-radius: 50%;
    margin-top: .05rem;
    margin-right: .1rem;
}
</style>