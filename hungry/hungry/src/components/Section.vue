<!--
 * @Author: losn
 * @Date: 2019-11-06 19:49:51
 * @LastEditTime: 2019-11-14 21:14:23
 * @LastEditors: 熊小兜
 * @Description: In User Settings Edit
 * @FilePath: \day13e:\myhungry\src\components\Mypage.vue
 -->
<template>
  <div class="section">
     <div class="leftBox">
        <h2>{{msg}}</h2>
        <h3>{{warning}}</h3>
         <div class="dateBox">
          <img class="dataPhoto" src="../assets/img/data.png" alt="">
         
          <span class="bigSpan">签到领 <span class="smallSpan"> 20</span>元红包</span> 
         </div>
     </div>
     <div class="rightBox">
          <router-link to="/Loginpage">
         <img class="hungryPhoto" src="../assets/img/hunger.png" alt=""> </router-link>
     </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Section',
  data () {
    return {
    msg:"E3F51GS5",
    warning:"工作再忙也要记得吃饭饭奥~"
    }
  },
  created(){
    // let info = localStorage.getItem('username')  
    // if (info.length == 0){
    //   this.$router.push({path:"/Login"});
    // }
    // console.log(info.username)
    axios("/user_info") 
    .then(res=>{
        // console.log(res.data)
        return res.data;
    })
    .then(data=>{
        // console.log(data);
          this.msg = data.username
          console.log(this.user_info.username)
          
    })
    .catch(err=>{
        console.log(err);
    })
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.section{
      width: 100%;
      height: 2rem;
      /* background-color: pink; */
      display:flex;
  }
.leftBox{
    width: 70%;
    height: 2rem;
    /* background-color: green; */

}
.leftBox h2{
    color:black;
    font-size: .35rem;
    margin-top: .2rem;
    text-indent: .5rem;
    font-weight: 600;
}
.leftBox h3{
    color: #9d9d9d;
    font-size:14px;
    margin-top: .3rem;
    text-indent: .5rem;
}
.dateBox{
    width: 2rem;
    height: .45rem;
    line-height: .45rem;
    border-radius:20px;
    border:1px solid gray;
    margin-top: .3rem;
    align-items: center;
    margin-left: .3rem;
    font-size: 14px;
    position: relative;
}
.dataPhoto{
  width: .25rem;
  height: .25rem;
  display: inline-block;
  position: absolute;
  top: .1rem;
  left: .1rem;
}
.bigSpan{
  font-size: 14px;
  color: black;
  line-height: .45rem;
  display: inline-block;
  height: .45rem;
  text-indent: .5rem;
}
.rightBox{
  width: 30%;
  height: 2rem;
}
.hungryPhoto{
    width:.9rem;
    height:.9rem;
    margin-top: .3rem;

}
</style>
