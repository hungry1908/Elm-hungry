<!--
 * @Descripttion: "轮播图"
 * @version: v1.0.0
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 熊小兜
 * @LastEditTime: 2019-11-15 10:54:56
 -->
<template>
    <div class="box">
         <div class="classBox">
             <ul>
                 <li v-for="(item,index) in types" :key="index" @click="changetype(item.name)" >{{item.name}}</li>
             </ul>
         </div>
         <div class="contentBox">
             <Tshops :typename="currtype"></Tshops>
         </div>
    </div>  
</template>

<script>
import Tshops from './Tshops';
import axios from 'axios';

export default {
  name: 'Classify',
  data () {
    return {
       types:[],
       currtype:""
    }
  },
  components:{
      Tshops
  },
  created(){
    axios.get('/type')
    .then((response)=> {
        
        this.types = response.data;
        this.currtype = this.types[0].name;//把拿到的类型的第一个赋给当前类型。
    })
    .catch(function (error) {
        console.log(error);
    });
  },
  methods:{
      changetype(typename){
          this.currtype = typename;
      }
  }
}
</script>

<style scoped>
.box{
    width: 95%;
    margin: 0 auto;
}
.classBox{
    width: 100%; 
    font-size: .25rem;   
}

.classBox ul{
    display: flex;
    width: 100%;
    height: .4rem;
    overflow-x: auto;/*横向滚动*/
}

.classBox ul li{
    width:1rem;
    border:1px solid white;
    flex-shrink: 0; /**/
    text-align: center;
    line-height: .4rem;
}

.contentBox{
    width: 100%;
    min-height:6rem;
    background-color: rgb(245, 248, 248);
}

</style>
