<!--
 * @Descripttion: "轮播图"
 * @version: v1.0.0
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 熊小兜
 * @LastEditTime: 2019-11-15 10:52:54
 -->
<template>

    <div class="hotBox">   
        <div class="top">
            {{type}}
        </div>   
        <div class="bottom">
            <ul>
                <li v-for="(shop,index) in shops" :key="index">
                    <img :src="shop.head" alt="">
                    <span>{{shop.shopname}}</span>
                </li>
            </ul>
        </div> 
    </div>  
</template>

<script>

export default {
  name: 'get',
  props:['type'],
  data () {
    return {
        shops:[
        ],
        obj:{
            '到店自取':'get'
        }
    }
  },
  created() {
      fetch('/api/ziqu')
      .then(res=>{
        return res.json();
      })
      .then(data=>{
          let funcName = this.obj[this.type];
          this.shops = data;
        //   console.log(this.shops);
     })
     .catch(err=>{
       console.log(err);
     })
  },
  methods:{
       get(data){
          let arr = [];
          for(let i in data){
              if(data[i].isGet){
                  arr.push(data[i]);
              }
          }
          return arr;
      }
  }
}
</script>
<style scoped>
.hotBox{
  margin: 0 auto;
  width:95%;
}
.top{
    width: 30%;
    height: .4rem;
    font-size: 0.2rem;
    line-height: .4rem;
    text-align: center;
}
.bottom{
    width: 100%;
    height: 1.5rem;
}

ul{
    display: flex;
    width: 100%;
    height: 1.5rem;
    overflow-x: auto;
}

li{
    width:10rem;
     height: 1.4rem;
    margin:0 3px;
    justify-content: space-around;
    border: 1px solid gray;
}
img{
  
    height: 70%;
}
span{
    display: block;
    width: 100%;
    text-align: center;
    padding-bottom: 10px;
}

</style>
