<!--
 * @Description: 
 * @Author: losn
 * @Date: 2019-11-07 16:44:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-11-15 10:11:17
 -->

<template>
 <div class="box">
    <sure></sure>
    <coco></coco>
    <House></House>
    <Intro></Intro>
    <door :food="food"></door>
    <nagger></nagger>
 </div>
</template>

<script>
import    sure   from '../components/sure';
import    House   from '../components/House';
import    door   from '../components/door';
import    nagger   from '../components/nagger';
import    coco   from '../components/coco';
import    Intro   from '../components/Intro';

export default {
  name: 'HelloWorld',
  props:['food'],
  data () {
    return {
      
    }
  },
  components:{
    sure,House,door,nagger,coco,Intro
  },
  created(){
      this.getParams()
    },
  methods: {
    select_addr_parent: function() {
      console.log("(我是父组件)");
      // this.$push(/新页面)
    },
    getParams(){
        // 取到路由带过来的参数
        const routerParams = this.$route.query.mallCode
        // 将数据放在当前组件的数据内
        this.food = routerParams;
        console.log(routerParams)
      },
    
    
  }
}
</script>


<style scoped>
*{ 
    margin: 0;
    padding: 0;
}
.box{
  background-color: #42beff;
  overflow-x: hidden;
}
body{
  font-size: 14px;
  height: 100%;
}
</style>
