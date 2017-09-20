<template>
    <div class="box login-register">
        <div class="register-wrap" v-show="showRegister"> 
            <h3>注册</h3> <p v-show="showTishi">{{tishi}}</p> 
            <input type="text" placeholder="请输入用户名" v-model="newUsername"> 
            <input type="password" placeholder="请输入密码" v-model="newPassword"> 
            <button v-on:click="register">注册</button> <span v-on:click="ToLogin">已有账号？马上登录</span> 
        </div> 
    </div>
</template>
<style lang="css" scoped>
    .login-register{height:14rem;width:8.2rem;display: table-cell; vertical-align: middle; text-align: center;
	background:url(../../assets/images/login_bg.jpg);background-position:60% 50%;background-size:100% 100%;opacity:0.8}
	.register-wrap{text-align:center;} 
	h3{font-size:0.6rem;color:#b5865a;}
	input{display:block; width:60%; height:0.7rem;margin:0.2rem auto ;
		 outline:none; border:1px solid #888; padding:10px; background-color:rgba(255,255,255,.8);
		box-sizing:border-box;font-size:0.3rem;border-radius:0.3rem;text-indent:0.1rem;
	} 
	p{color:red;} 
	button.btn-login{display:block;margin:0 auto; padding:0.1rem 0.5rem;
		border:none; background-color:#f3bc00;border-radius:20px; color:#fff; font-size:0.36rem; margin-bottom:0.2rem;
	} 
	span.togglebtn{cursor:pointer;font-size:0.4rem;text-decoration: underline; color:#f6f4f5;text-decoration-color:#e0d1b4;}
	span:hover{color:#41b883;} 
</style>