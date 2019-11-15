<template>
  <div class="nagger">
    <ul>
      <li class="user_remark" @click="input_remark">
        <span>订单备注</span>
        <img src="../assets/img/right.png">
        <p>{{input_remark_tip}}</p>
      </li>

      <li class="user_remark">
        <span>餐具份数</span>
        <img src="../assets/img/right.png">
        <p>口味偏好</p>
      </li>

      <li class="user_remark coco">
        <span>发票信息</span>
        <!-- <p>该店不支持线上排票，请电话联系商户</p> -->
      </li>

      <li class="phone_number_safe">
        <span>号码保护❓</span>
        <mt-switch class="mtswitch" v-model="value"> </mt-switch>
        <!-- <img src="../assets/img/right.png"> -->
        <p>选择「号码保护」后，将对商家、起手隐藏您的真实手机号</p>
      </li>
    </ul>

    <div class="unbackground"></div>

    <div class="submit_order">
      <span>¥{{total_price}}</span>
      <span @click="query_order">确认支付</span>
    </div>
  </div>
</template>


<script>
    import axios from 'axios';
    import { Switch } from 'mint-ui';
    export default {
        name: 'banner',
        props:['price'],
        data () {
            return {
                value:true,
                'remark':"",  //保留值
                'total_price':27.5,
                'input_remark_tip': "口味、偏好"
            }
        },methods:{
            query_order:function () {
                alert("服务器出现错误，后端出现了问题");
            },
            input_remark: function () {
                this.remark = '不要香菜';
                this.input_remark_tip = "不要拉面，大碗.."
                //输入后截取字符
                alert("别提交了吧，给前端一个偷懒的机会吧～");
            }
        }

    }
</script>

<style scoped>
  .nagger{
    border-top: 1px solid #b1b1b1;
    width: 98%;
    margin:0 auto;
    /* margin-top: .5rem; */
    background: #FFFFFF;
    overflow: hidden;
  }
  .nagger ul{
    width: 98%;
    margin:0 auto;
    margin-top: 1rem;
  }
  .user_remark {
    width:100%;
    height: .8rem;
    margin-left: .2rem;
    border-bottom: 1px solid #b1b1b1;

  }

  .phone_number_safe {
    width:100%;
    min-height: 1rem;
    margin-left: .2rem;
    position:relative;
    /*height: .8rem;*/
    /* border-bottom: 1px solid #b1b1b1; */
  }
    .mtswitch{
        position: absolute;
        left: 2.7rem;
        top: .2rem;
    }
  .user_remark span, .phone_number_safe span{
    display: inline-block;
    font-size: .2rem;
    float: left;
    margin-top: .25rem;
  }

  .user_remark img, .phone_number_safe img{
    float: right;
    width: .25rem;
    height: .25rem;
    margin-top: .23rem;
    margin-right: .25rem;
  }

  .user_remark p {
    float: right;
    display: inline-block;
    margin-top: .29rem;
    color: #9c9c9c;
  }

  .coco p{
    margin-top: .31rem;
    margin-right: .3rem;
  }

  .phone_number_safe p{
    width: 100%;
    float: left;
    /*margin-left: .2rem;*/
    color: #9c9c9c;
    margin-top: .2rem;
  }

  .submit_order{
    width: 100%;
    height: 0.6rem;
    background: #333233;
  }

  .unbackground {
    width: 100%;
    height: 0.8rem;
    background: #f7f7f7;
  }

  .submit_order span:nth-of-type(1){
    padding-left: .2rem;
    color: #ffffff;
    font-size: 0.3rem;
    line-height: 0.6rem;
    float: left;
  }

  .submit_order span:nth-of-type(2){
    width: 1.6rem;
    height: 0.6rem;
    display: block;
    background: #00D35E;
    color: #ffffff;
    font-size: 0.2rem;
    line-height: 0.6rem;
    float: right;
    text-align: center;
  }

</style>
