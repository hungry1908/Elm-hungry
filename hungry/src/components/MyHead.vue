<!--
 * @Author: losn
 * @Date: 2019-11-06 19:49:51
 * @LastEditTime: 2019-11-11 17:14:10
 * @LastEditors: losn
 * @Description: In User Settings Edit
 * @FilePath: \day13e:\myhungry\src\components\Mypage.vue
 -->
<template>
  <div class="head">
    <router-link to="/SettingPage">
      <img class="photo_settings" src="../assets/img/settings.png" alt="">
    </router-link>
      <img class="photo_ralling" src="../assets/img/ralling.png" alt="">

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.head{
    width:100%;
    height:.6rem;
    /* background-color: pink; */
}
.photo_settings{
        width: .3rem;
        height: .3rem;
        float: right;
        margin-top:.3rem;
        margin-right: .2rem;
}
.photo_ralling{
        width: .3rem;
        height: .3rem;
        float: right;
        margin-top:.3rem;
        margin-right: .1rem;
}

</style>




