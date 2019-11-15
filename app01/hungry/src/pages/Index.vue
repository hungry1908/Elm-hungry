<!--
 * @Author: 熊小兜
 * @Date: 2019-11-07 00:23:30
 * @LastEditors: 熊小兜
 * @LastEditTime: 2019-11-13 21:52:59
 * @Description: 
 -->
<template>
    <div class="box">
        <Search style="position:fixed;z-index:2;"></Search>
    <div class="center">
        <Banner></Banner>
        <Nav></Nav>
        <Discount></Discount>
        <Hot type="专享午餐"></Hot>
        <get type="到店自取"></get>
        <Bans></Bans>
         <Classify ></Classify>
    </div>
        <Footer style="position:fixed;z-index:2;bottom:0px;"></Footer>
     </div>
</template>
<script>
import Search from '../components/Search';
import Banner from '../components/Banner';
import Nav from '../components/Nav';
import Discount from '../components/Discount';
import Hot from '../components/Hot';
import get from '../components/get';
import Bans from '../components/Bans';
import Classify from '../components/Classify';
import Footer from '../components/Footer';
export default {
    name:"",
    props:['id'],
    data(){
        return {

        }
    },
    components:{
        Search,Banner,Nav,Discount,Hot,get,Bans,Classify,Footer
    }
}
</script>
<style scoped>
.box{
    display: flex;
    flex-direction: column;
}
.center{
    flex: 1;
    overflow-y: auto;
    margin-top: .5rem;
}
</style>