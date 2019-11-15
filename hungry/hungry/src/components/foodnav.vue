<!--
 * @Author: your name
 * @Date: 2019-11-07 15:48:56
 * @LastEditTime: 2019-11-14 15:32:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \app\src\components\banner.vue
 -->
<template>
   <div>
     <span v-for="(ti,index) in tit" :key="index" @touchstart="changecolor(index)"  v-bind:class="{list:isCompletes[index]}">{{ti}}</span>
     <hr>
   </div>
</template>
<script>
export default {
  name: '',
  data () {
    return { 
       tit:[
         "点餐",
         "评价",
         "商家"
       ] ,
        isCompletes:[
           true,false,false
       ] 
    }
  },
  components:{
  },
  methods:{
        changecolor(index){
            for(let index in this.isCompletes){
            this.isCompletes[index]  = false;
          }
          this.isCompletes[index] =  true;
          console.log(index)
        }
    } 
}
</script>
<style scoped>
div{
   margin: 20px 30px;
  text-align: center;
}
span{
  font-size: .2rem;
  margin-left: 20px;
}
.list{
  font-size: .2rem;
  margin-left: 20px;
  background:url(../assets/img/di3.png) no-repeat;
  background-position:0 24px;
}
</style>
