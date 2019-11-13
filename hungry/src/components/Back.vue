<!--
 * @Author: 熊小兜
 * @Date: 2019-11-07 00:23:30
 * @LastEditors: 熊小兜
 * @LastEditTime: 2019-11-08 00:49:35
 * @Description:"轮播图"
 -->
<template>
    <div class="back">
        <img src="../assets/img/sy_sdk_left.png" @click="back()">
    </div>  
</template>
<script>
export default {
    name:"Back",
    data(){
        return {
           
        }
    },
    methods:{
        back(){
            this.$router.go(-1);
        }
    }
}
// v-model="model" @input="handleInput($event)"
// maxlength="11" :reg="/^1([0-9]{0,10})?$/" pattern="[0-9]*"
//   handleInput(e){
		// 	this.mobile = e.target.value.replace(/[^\d]/g, '')
		//   },
		//   send(){
		// 	  const self =this;
		// 	  if(!(/^1[35789]\d{9}$/.test(self.mobile))){
		// 		  this.$dialog("电话号码格式错误！");
		// 	  }else(this.mobile.length ===11){
		// 		 this.$dialog("电话号码正确")
		// 	  }
		//   },
</script>
<style scoped>
.back{
    width: 95%;
    height: .3rem;
    margin: 0 auto;
}
img{
    width: .3rem;
    height: .3rem;
    margin-top: 14px
}
</style>