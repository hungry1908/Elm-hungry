<template>
    <div>
      <div class="box">
        <div class="header">
            <router-link to="/MinePage">
          <img src="../assets/img/jtzuo.png">
            </router-link>
          <span class="header_title">设置</span>
        </div>

        <div class="setting_list">
          <ul>
            <li>
              <p>账户安全</p>
              <img src="../assets/img/right.png">
              <span>开启小额面密支付？</span>
            </li>

            <li>
              <p>账户安全</p>
              <img src="../assets/img/right.png">
            </li>

            <li>
              <p>通用</p>
              <img src="../assets/img/right.png">
            </li>
            <router-link to="/Rate">
            <li >
              <p>欢迎评分</p>
              <img src="../assets/img/right.png">
            </li>
            </router-link>
            <li>
              <p>关于饿了么</p>
              <img src="../assets/img/right.png">
            </li>

            <li>
              <p>隐私</p>
              <img src="../assets/img/right.png">
            </li>

            <li>
              <p>意见反馈</p>
              <img src="../assets/img/right.png">
            </li>
          </ul>
        </div>

        <div class="login_out">
          <span>退出登录</span>
        </div>

      </div>
    </div>

</template>

<script>
    export default {
        name: "Setting",
        components: {

        }
    }
    /*

    * */
</script>

<style scoped>
    .box {
      width: 100%;
      background: #ffffff;
    }
    .header {
      margin: 0 auto;
      width: 90%;
      height: .7rem;
      /*background: #42beff;*/
    }
    .header img{
      float: left;
      height: .35rem;
      display: block;
      padding-top: 0.15rem;
    }
    .header_title{
      width: 10%;
      display: block;
      line-height: 0.7rem;
      margin: 0 auto;
    }

  .setting_list {
    margin: 0 auto;
    width: 90%;
  }

  .setting_list ul li{
    margin-top: 0.3rem;
    height: .45rem;
    /*border-bottom: 0.5px solid #9c9c9c;*/
    border-bottom: .5px solid #b1b1b1;
  }
  .setting_list ul li p{
    display: inline-block;
  }
  .setting_list ul li span{
    float: right;
    color: #9c9c9c;
  }

    .setting_list ul li img{
      float: right;
      width: .2rem;
    }

  .login_out{
    margin: 0 auto;
    width: 90%;
    height: .7rem;
    border-bottom: .5px solid #b1b1b1;
  }
  .login_out span{
    width: 20%;
    line-height: .7rem;
    margin: 0 auto;
    font-size: 0.16rem;
    display: block;
    color: #f34219;
  }
</style>
