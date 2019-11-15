<!--
 * @Author: 熊小兜
 * @Date: 2019-11-11 09:25:52
 * @LastEditors: 熊小兜
 * @LastEditTime: 2019-11-14 21:11:56
 * @Description: 
 -->
<template>
    <div class="box">
         <div class="header">
           <img src="../assets/img/logo.png" class="image">
        </div>
        <div class="input-group">
            <input type="text" id="username" class="form-control" placeholder="电话号码" aria-describedby="basic-addon2">
        </div>
        <div class="input-group">
                <input type="text" class="form-control" placeholder="请输入密码" aria-describedby="basic-addon1">
        </div>
        <div class="input-group">
            <input type="text" id="userpass" class="form-control" placeholder="确认密码" aria-describedby="basic-addon1">
        </div>
        <div class="input-group">
            <p>新用户登录即自动注册，并表示已同意 
             《用户服务协议》和《隐私权政策》 </p>
            <input type="button" value="登录" class="DL"  @click="loginCheck">
        </div>
        <p class="reg">还没有注册的宝宝们，
			<router-link to="/Registerpage">请立即注册</router-link></p>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
     name: 'Login',
  	data () {
    	return {
		username:''
    	}
	  },
  methods:{
    loginCheck(){
        localStorage.setItem('username',this.username);
        Toast({
          message: '登录成功！',
          position: 'top',
          duration: 1000
        });
        setTimeout(()=>{
          let str = "/MinePage";
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
.DL{
	width: 2.5rem;
	height: 0.45rem;
	background: rgb(49, 144, 221);
	border-style: none;
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