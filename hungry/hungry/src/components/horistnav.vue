<!--
 * @Author: your name
 * @Date: 2019-11-07 15:48:56
 * @LastEditTime: 2019-11-15 10:58:00
 * @LastEditors: 熊小兜
 * @Description: In User Settings Edit
 * @FilePath: \app\src\components\banner.vue
 -->
<template>
<div>
   <ul id="box">
       <!-- <li v-for="(item,index) in types" :key="index" @click="changetype(item.name,isComplete)" v-bind:class="{dian:isComplete}">{{item.name}}</li> -->
       <li v-for="(item,index) in types" :key="index" @click="changetype(item.name,index)" v-bind:class="{dian:isCompletes[index]}">{{item.name}}</li>
     </ul>
     <horistcar :typename="currtype"></horistcar>
     </div>
</template>
<script>
import horistcar from './horistcar';
export default {
  name: 'horistnav',
  
  data () {
 
    return {   
      types:[
      ],
       currtype:"",
       isCompletes:[
           true,false,false,false
       ]
    }
    
  },
  components:{
    horistcar
  } ,
   created() {
      fetch('/api/types')
      .then(res=>{
        return res.json();
      })
      .then(data=>{
          this.types = data;
          this.currtype = this.types[0].name;
     })
     .catch(err=>{
       console.log(err);
     })
  },
  methods:{
     changetype(typename,i){
          console.log(typename);
          this.currtype = typename;
          // this.isComplete=true;
          for(let index in this.isCompletes){
            this.isCompletes[index]  = false;
          }
          this.isCompletes[i] =  true;
      }
  }
}
</script>
<style scoped>
div{
     width: 100%;
     
   }
   ul{
     width: 100%;
     display:flex;
     justify-content:space-around;
     padding: 3%;
     box-sizing: border-box;
     background: #0099ff;
   }
   li{
     border-radius: .05rem;
     width: 23%;
     line-height: .4rem;
     height: .4rem;
     text-align: center;
     font-size: .15rem;
     color:#fff;
   }
   .dian{
     border-radius: .05rem;
     width: 23%;
     line-height: .4rem;
     height: .4rem;
     text-align: center;
     font-size: .15rem;
     color:#fff;
     background:url(../assets/img/di2.png) no-repeat;
     background-position: bottom;
   }
</style>

