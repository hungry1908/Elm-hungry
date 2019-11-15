<!--
 * @Author: 熊小兜
 * @Date: 2019-11-11 09:25:52
 * @LastEditors: 熊小兜
 * @LastEditTime: 2019-11-13 17:41:39
 * @Description: 
 -->
<template>
    <div>
        <div class="header">
           <img src="../assets/img/logo.png" class="image">
        </div>
        <div class="input-group">
            <input type="text" class="form-control" placeholder="电话号码"
			
			>
			
        </div>
        <div class="input-group">
            <input type="text" class="form-control" placeholder="密码" aria-describedby="basic-addon1">
        </div>
        <div class="input-group">
            <input type="text" class="form-control" placeholder="确认密码" aria-describedby="basic-addon1">
        </div>
        <div class="input-group">
            <input type="button" value="注册" class="ZC"  @click="registerCheck" >
        </div>
        <p class="reg">  <router-link to="/Loginpage">已有账号请登录</router-link></p>
    </div>
</template>
<script>
import { Toast } from 'mint-ui'; 
export default {
     name: 'Register',
  	data () {
    	return {
        username:''
    	}
	  }
	  ,
	  methods: {
		  
		   registerCheck(){
				localStorage.setItem('username',this.username);
				Toast({
				message: '注册成功！',
				position: 'top',
				duration: 1000
				});
				setTimeout(()=>{
				let str = "/LoginPage";
				this.$router.push({path:str});
				},1100);          
			}
 	 }
}
</script>
<style scoped>
.box{
	width: 4rem;
	height: 4.5rem;
}
.header{
	width: 100%;
	height:1rem;	
	padding-top: 0.3rem;
	margin-bottom: 0.3rem;
}
.image{
	width: 2rem;
	height: 0.7rem;
	margin: 0 0.75rem;	
}
.input-group{
	width: 3rem;
	margin-left: .45rem;
	margin-top: 0.2rem;
}
.form-control{
	outline: none;
	width: 2.5rem;
	height: 0.3rem;
	border-radius: 5px;
}
.control{
	margin-top: 10px;
	outline: none;
	width: 1.5rem;
	height: 0.3rem;
	border-radius: 5px;
}
.ZC{
	width: 2.5rem;
	height: 0.45rem;
	background: rgb(49, 144, 221);
	border: none;
	border-radius: 0.15rem;	
	margin-top: 0.2rem;	
	color: white;
	font-size:0.2rem;
}
.reg{
	margin-top: .2rem;
	margin-left: .25rem;
}
</style>