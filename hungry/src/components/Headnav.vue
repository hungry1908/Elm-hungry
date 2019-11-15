<!--
 * @Author: 熊小兜
 * @Date: 2019-11-07 00:23:30
 * @LastEditors: 熊小兜
 * @LastEditTime: 2019-11-12 20:13:15
 * @Description:"轮播图"
 -->
<template>
  <div class="nav">
    <ul>
        <li>
          <img src="../assets/img/a3.jpg" alt />
           <span>新鲜水果</span>
        </li>
       
        <li>
          <img src="../assets/img/a4.jpg" alt />
             <span>时令蔬菜</span>
        </li>
     
      <li>
        <img src="../assets/img/a5.jpg" alt />
        <span>肉蛋家禽</span>
      </li>
      <li>
        <img src="../assets/img/a6.jpg" alt />
        <span>冷藏冷冻</span>
      </li>
      <li>
        <img src="../assets/img/a7.jpg" alt />
        <span>牛奶酸奶</span>
      </li>
      <li>
        <img src="../assets/img/a8.jpg" alt />
        <span>水饮冲调</span>
      </li>
      <li>
        <img src="../assets/img/a9.jpg" alt />
        <span>中外名酒</span>
      </li>
      <li>
        <img src="../assets/img/a10.jpg" alt />
        <span>粮油副食</span>
      </li>
      <li>
        <img src="../assets/img/a11.jpg" alt />
        <span>家具清洁</span>
      </li>
      <li>
        <img src="../assets/img/a12.jpg" alt />
        <span>日用百货</span>
      </li>
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
  width: 100%;
  height: 2rem;
  margin-top: 1.5rem;
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
  width: 0.5rem;
  height: 0.5rem;
  margin: 0.01rem 0.1rem;
  background-color:  rgb(45, 168, 224);
  border-radius: 50%;
  text-align: center;
}
img {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
}
span{
    display: block;
    width: 0.6rem;
    height: 0.35rem;;
    text-align: center;
    line-height: 0.35rem;
}
</style>