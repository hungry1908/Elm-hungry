<!--
 * @Description: 
 * @Author: losn
 * @Date: 2019-11-09 15:34:46
 * @LastEditors: losn
 * @LastEditTime: 2019-11-13 23:48:50
 -->

<template>
  <div>
    <div class="house">
          <div class="food_delivery">
            <span class="sendQuick">立即送出</span>
            <img class="photo" src="../assets/photo/jtyou.png" alt />
            <span class="smallSpan" v-on:click="openPicker">约{{pickerValue}}送达</span>
          </div>

        <mt-datetime-picker
            ref="picker"
            type="time"
            v-model="pickerValue">
        </mt-datetime-picker>
            
    </div>
  </div>
</template>

<script>
// Vue.component(DatetimePicker.name, DatetimePicker);//error
// import { Picker } from 'mint-ui';
// Vue.component(Picker.name, Picker);
export default {
  name: "house",
  //props:['select_addr'],
  data() {
    return {
      pickerValue: "12:00",
        slots: [
          {
            flex: 1,
            values: ['ALIPAY', 'WEPAY'],
            className: 'slot1',
            textAlign: 'center'
          }
        ],
        pay_type:1,
        canju_type:0,
        select_type:1,
        isShow:false
    };
  },
  methods: {
    openPicker() {
      this.$refs.picker.open();
    },
    select_pay_type: function() {
      alert("选择支付类型");
      this.select_type = "1"
      this.isShow = !this.isShow;//为啥要写this.
    },
    select_time: function() {
      alert("选择送达时间");
    },
    select_addr_parent: function() {
      console.log("晕了，原来是没有写内容（我是子组件）");
      // this.$push(/新页面)
    },
    onValuesChange(picker, values) {
      // value = values[0];
      switch (values[0]){
        case 1: //支付宝
            this.pay_type = "alipay"
            break;
        case 2:
            this.canju_type = values[0]
            break;
        default:
            this.pay_type = values[0]
      }
      console.log(values)
    }
  },
  created(){
    fetch('/api/canju_type')
      .then(res=>{
        return res.json();
      })
      .then(data=>{
        let arr = [];
        for(let i=0;i<2;i++){
          arr.push(data[i][i])
        }
        this.slots[0].values = arr
        //  this.imgs = data;
     })
     .catch(err=>{
       console.log(err);
     })
  }
};
</script>

<style>
.house {
  width: 98%;
  margin: 0 auto;
  height: 1.4rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border-radius: 10px; */
}
#coco {
  /*  //bag          */
  font-size: 0.25rem;
  color: #00a6ff;
  text-indent: 0.25rem;
}
.food_delivery span {
  display: inline-block;
  margin-top: 0.2rem;
}
.bagSpan{
  display: inline-block;
  margin-top: 0.2rem;
}
#div3{
  height: 0.85rem;
}
.photo {
  margin-top: 0.2rem;
}
.popo{
  /*  ----->  first        */
  width: 0.25rem;
  height: 0.25rem;
  float: right;
  margin-top: 0.25rem;
}
.sendQuick{
  /*  立即送出和送达    */
  display: inline-block;
  font-size: 0.15rem;
  color: black;
  margin-top: 0.05rem;
  line-height: 0.3rem;
}

.photo {
  /*  ----->  second        */
  width: 0.25rem;
  height: 0.25rem;
  float: right;
  margin-top: 0.1rem;
}
.sendQuick{
  /*  立即送出        */
  float: left;
  font-size: 0.2rem;
  margin-left: 0.15rem;
}
.photo{
  /*  ----->         */
  display: inline-block;
  width: 0.25rem;
  height: 0.25rem;
  float: right;
  margin-top: 0rem;
}
.smallSpan{
  float: right;
  color: #00a6ff;
  font-size: 0.2rem;
  font-weight: 400;
}

.pop_windows {
  z-index: 999;
  position: absolute;
  background-color: teal;
  width: 100%;
  top: 2px;
}
</style>






