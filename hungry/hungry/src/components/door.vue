<!--
 * @Description: 
 * @Author: losn
 * @Date: 2019-11-09 15:34:46
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-11-15 02:26:25
 -->
<template>
  <div class="door">

          <div class="pup">
            您的主食点了吗？
          </div>
          <!-- <div class="lemon">
                <div class="photo">
                    <img src="../assets/img/hamburger.png" alt="">
                </div>
                <div class="part">
                          <p>
                              柠檬冰红茶
                          </p>
                          <p>
                              -常温
                          </p>
                </div>

                <div class="count">
                            X 1
                </div>
                <div class="money">
                              ￥9
                </div>

              
          </div> -->
          <!-- 留下一个 为什么呢？因为里面的数据元素即使有十个也是完全相同的 -->
          <Lemon :food="food"></Lemon>  <!--- ....你老师看了想哭我更想，拆组件太麻烦了奥， --->
          <!-- <div class="lemon">
                <div class="photo">
                    <img src="../assets/img/hamburger.png" alt="">
                </div>
                <div class="part">
                          <p>
                              柠檬冰红茶
                          </p>
                          <p>
                              -常温
                          </p>
                </div>

                <div class="count">
                            X 1
                </div>
                <div class="money">
                              ￥9
                </div>

              
          </div> -->
          <div class="send">
              <div class="sd1">配送费</div>
              <div class="sd2">蜂鸟专送</div>
              <div class="sd3">￥3.1</div>
              <div class="sd4">￥1.5</div>
          </div>



          <choose>  </choose>
          <!-- <div class="choose">
            <span>红包/抵用券</span>
            <div class="range">
              <img src="../assets/img/redbag.png" alt="">
              <span>选择地址后使用红包</span>
            </div>
          </div>  -->

          <count>  </count>

          <!-- <div class="count ">
              <div> 优惠说明？ </div>
              <div>小计   
                    <span>￥27.5</span>   
              </div> 
          </div> -->

          <div class="part01">
            <img src="../assets/img/supervip.png" alt="">
          </div>
          <div class="part02">
                <div class="partLeft">
                        <p>成为超级会员本单减5元</p>
                        <p>会员日加送28元</p>
                </div>
                <div class="partRight">
                    <span >￥15</span>
                    <span>￥6</span>
                    <img class="mai" src="../assets/img/mai.png" alt="">
                </div>        
          </div>
          <div class="ontime">
                <div class="onTop">
                      <span>准时达PLUS</span>&nbsp;&nbsp;配送增值服务<br>
                      &nbsp;&nbsp;超时10分钟赔付2.75元红包，<br>&nbsp;&nbsp;超时15分钟赔付
                      6.88元红包
                </div>
                <div class="rightTop">
                      ￥0.13
                </div>
          </div>
          <div class="space">

          </div>
         
  </div>
</template>

<script>
import    Lemon   from '../components/Lemon';
import    choose   from '../components/choose';
import    count   from '../components/count';

export default {
  name: 'door',
  props:['food'],
  data () {
    return {
      
    }
  },
  components:{
    Lemon,count,choose
  }
}
</script >

<style scoped>
.door{
    width: 98%;
    height: 7rem;
    margin:0 auto;
    background-color: white;
    /* border-radius: 10px; */
}
.space{
  height:.1rem;
  width: 100%;
  background-color: white;
  margin:0 auto;
}
.pup{
  width: 100%;
  height: .7rem;
  color:#ff5139;
  font-size: .2rem;
  line-height: .7rem;
  text-indent: .2rem;
  border-bottom: .5px solid #b1b1b1;
}
.lemon{
  display: flex;
  width: 100%;
  height: .9rem;
  text-indent: .2rem;
  border-bottom: .5px solid #b1b1b1;
  
}
.photo{
  margin-top: 0.22rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: .2rem;
}
.photo img{
  width: .5rem;
  height: .5rem;
}
.part{
  width: 2rem;
  /* background-color: green; */
  display: flex;
  flex-direction: column;

}
.part :nth-child(1){
  height: .45rem;
  font-size:.2rem;
  line-height: .45rem;

}
.part :nth-child(2){
  height: .45rem;
  font-size:.1rem;
  line-height: .45rem;

}


.money{
  font-size: .1rem;
  line-height: .9rem;
}
.send{
  width: 100%;
  height: .6rem;
  display: flex;
  align-items: center;

}
.sd1{
  width: .6rem;
  height: .25rem;
  background-color: #2196ff;
  margin-left: .2rem;
  color: white;
  line-height: .25rem;
  justify-content: center;
  text-indent: .1rem;

}
.sd2{
  width: 1rem;
  font-size: .18rem;
  margin-left: .2rem;
}
.sd3{
  width: .3rem;
  margin-left: .5rem;
  text-decoration:line-through;
}
.sd4{
  margin-left: .4rem;
}


img{
  margin: 0;
  padding: 0;
}
.range{
  width: 2rem;
  height: .4rem;
  background-color: #ff7110;
  border-radius: 10px;
  margin-left: .3rem;
  color: white;
  line-height: .45rem;
  align-items: center;
}

.range span{
  display: inline-block;
  margin-left: .1rem;
  
}

.part01 img{
  width: 1rem;
  height: .3rem;
  margin-left: .2rem;
}
.part02{
  height: .7rem;
  background-color: white;

}
.partLeft{
  float:left;
  width: 2rem;
  font-size: .15rem;
  text-indent: .2rem;
  line-height: .35rem;
}
.partLeft :nth-child(2){
  font-size: .13rem;
  text-indent: .4rem;
  line-height: .35rem;

}
.partRight{
  float:right;
  width: 1.5rem;
  position: relative;
  /* background-color: red; */
  height: .7rem;
}
.partRight :nth-child(1){
    display: inline-block;
    text-decoration: line-through;
    margin-top: .45rem;
    text-indent: 0.3rem;


}
.partRight :nth-child(2){
  display: inline-block;
  text-indent: 1rem;
  font-size: .2rem;
  text-indent: 0.3rem;
  font-weight: 600;
}
.mai{
  width: .9rem;
  height: .3rem;
  position: absolute;
  top:0;
  left:0.5rem;
}
.ontime{
  height: 1.3rem;
  font-size: .15rem;
  /* text-indent: .2rem; */
  display: flex;
  color:#8f8d8f;
  background-color: white;
}
.onTop{
  align-items: center;
  line-height: .3rem;
}
.onTop span{
  display: inline-block;
  color: #2196ff;
  margin-left:.2rem;
  font-size:.18rem;
  margin-top: .1rem;
}
.rightTop{
  font-size: .2rem;
  line-height: 1.3rem;
  color: black;
  font-weight: 500;
  text-indent: .4rem;
  margin-left: .4rem;
}
 </style>






