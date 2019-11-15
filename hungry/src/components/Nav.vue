<!--
 * @Author: 熊小兜
 * @Date: 2019-11-07 00:23:30
 * @LastEditors: 熊小兜
 * @LastEditTime: 2019-11-14 21:20:09
 * @Description:"轮播图"
 -->
<template>
  <div class="nav">
    <ul>
      <router-link to="shopping">
        <li>
          <img src="../assets/img/timg1.jpg" alt />
           <span>美食</span>
        </li>
      </router-link>
       <router-link to="shopping">
        <li>
          <img src="../assets/img/timg2.jpg" alt />
             <span>便利</span>
        </li>
      </router-link>
      <router-link to="shopping">
      <li>
        <img src="../assets/img/timg3.jpg" alt />
        <span>水果</span>
      </li>
      </router-link>
      <router-link to="shopping">
      <li>
        <img src="../assets/img/timg4.jpg" alt />
        <span>跑腿</span>
      </li>
      </router-link>
      <router-link to="shopping">
      <li>
        <img src="../assets/img/timg5.jpg" alt />
        <span>饮品</span>
      </li>
      </router-link>
      <router-link to="shopping">
      <li>
        <img src="../assets/img/timg9.jpg" alt />
        <span>签到</span>
      </li>
      </router-link>
      <router-link to="shopping">
      <li>
        <img src="../assets/img/timg7.jpg" alt />
        <span>药店</span>
      </li>
      </router-link>
      <router-link to="shopping">
      <li>
        <img src="../assets/img/timg8.jpg" alt />
        <span>惠吃</span>
      </li>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Nav",
  data() {
    return {};
  }
};
</script>
<style scoped>
.nav {
  display: flex;
  margin: 0 auto;
  width: 95%;
  height: 2rem;
}
ul {
  display: flex;
  width: 100%;
  justify-content: space-around;
  flex-wrap: wrap;
  overflow-x: auto;
  margin-top:5px;
}
li {
  /* width: 0.6rem; */
  height: 0.6rem;
  margin: 0.01rem 0.1rem;
  background-color:  rgb(45, 168, 224);
  border-radius: 50%;
  text-align: center;
}
img {
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
}
span{
    display: block;
    height: 0.3rem;;
    text-align: center;
    line-height: 0.3rem;
}
</style>