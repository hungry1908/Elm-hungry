<!--
 * @Description: 
 * @Author: losn
 * @Date: 2019-11-09 15:34:46
 * @LastEditors: losn
 * @LastEditTime: 2019-11-13 10:40:44
 -->

<template>
  <div>
          <div id="coco" class="bag" @click="select_addr">
                <span class="bagSpan">选择收货地址</span>
                <!-- <mt-picker :slots="slots" @change="onValuesChange"></mt-picker> -->
                <img class="popo" src="../assets/photo/jtyou.png" alt />
          </div>   
  </div>
</template>

<script>
// Vue.component(DatetimePicker.name, DatetimePicker);//error
// import { Picker } from 'mint-ui';
// Vue.component(Picker.name, Picker);
export default {
  name: "coco",
  data() {
    return {
      
    };
  },
  methods: {
      select_addr: function() {
          console.log("???????我是不是算兄弟组件额");
          this.$emit('select_addr_parent');
          //this.$parent.select_addr_parent();
          //console.log(this.$refs.borther)
          //this.$refs.borther[0].select_addr_parent()
          console.log("======")
      }
  },
  created(){
    // fetch('/api/canju_type')
    //   .then(res=>{
    //     return res.json();
    //   })
    //   .then(data=>{
    //     let arr = [];
    //     for(let i=0;i<2;i++){
    //       arr.push(data[i][i])
    //     }
    //     this.slots[0].values = arr
    //     //  this.imgs = data;
    //  })
    //  .catch(err=>{
    //    console.log(err);
    //  })
  }
};
</script>

<style>

#coco {
  /*  //bag          */
  font-size: 0.25rem;
  color: #00a6ff;
  text-indent: 0.25rem;
  width:98%;
  background-color: White;
  height: 0.8rem;
  margin-left: 1%;
}

.bagSpan{
  display: inline-block;
  margin-top: 0.2rem;
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


.photo {
  /*  ----->  second        */
  width: 0.25rem;
  height: 0.25rem;
  float: right;
  margin-top: 0.1rem;
}

.photo{
  /*  ----->         */
  display: inline-block;
  width: 0.25rem;
  height: 0.25rem;
  margin-top: 0rem;
}


</style>






