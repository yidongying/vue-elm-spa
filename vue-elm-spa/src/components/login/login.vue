<template> 
<div class="box login-register"> 
	<div class="login-wrap" v-show="showLogin"> 
		<h3>Welcome back !</h3> <p v-show="showTishi">{{tishi}}</p> 
		<input type="text" placeholder="请输入用户名" v-model="loginconfig.username"> 
		<input type="password" placeholder="请输入密码" v-model="loginconfig.password"> 
		<button v-on:click="login" class="btn-login">登录</button> 
		<span v-on:click="ToRegister" class="togglebtn">没有账号？马上注册</span> 
	</div> 
	<div class="register-wrap" v-show="showRegister"> 
		<h3>welcome metting!</h3> <p v-show="showTishi">{{tishi}}</p> 
		<input type="text" placeholder="请输入用户名" v-model="registerconfig.newUsername" @blur="inputBlur('newUsername')"> 
		<input type="password" placeholder="请输入密码" v-model="registerconfig.newPassword" @blur="inputBlur('newPassword')"> 
		<input type="password" placeholder="请确认密码" v-model="registerconfig.againPassword" @blur="inputBlur('againPassword')"> 
		<label class="agreement"><input type="checkbox" :checked="checked" />同意<a>《饿了么用户服务协议》</a></label>
		<button v-on:click="register" class="btn-login" :disabled ='beDisabled'>注册</button> <span v-on:click="ToLogin" class="togglebtn">已有账号？马上登录</span> 
	</div> 
</div>
</template>
<script>
	import axios from "axios"
    export default{
        data(){
            return{
				loginconfig:{
					 username: '',
               		 password: '',
				},
				serUserInfo:[],
				registerconfig:{
					newUsername:'',
					newPassword:'',
					againPassword: '',
				},
				beDisabled:true,
                showLogin: true,
                showRegister: false,
                showTishi: false,
                tishi: '',
				checked:true
            }
        },
		created(){
			/*console.log(this.serUserInfo);*/
			 axios.get("static/data.json").then((res=>{
                    this.serUserInfo=res.data.userList;
             }))
		},
		 methods:{
			ToRegister(){
				this.showRegister=true;
				this.showLogin=false;
			},
			ToLogin(){
				this.showRegister=false;
				this.showLogin=true;
			},
			 login(){
				if(this.loginconfig.username == "" || this.loginconfig.password == ""){
					alert("请输入用户名或密码");
				}else{
					
					this.serUserInfo.map((item,index)=>{
						console.log(item[index]);
						if(item.username==this.loginconfig.username){
							if(item.password==this.loginconfig.password){
								alert('登录成功');
								if(window.localStorage){//将数据存储在本地
									localStorage.setItem('user',this.loginconfig.username);
									localStorage.setItem('password',this.loginconfig.password);
								}
								this.registerconfig='';
								setTimeout(function(){
									this.$router.push('/orders')
								}.bind(this),1000)
								return;
							}else{
								alert( "密码不正确");
								this.loginconfig.password="";
								return;	
							}
						}else{
							alert("该用户不存在");
							this.loginconfig='';
						}
					});
				}
			},
			register(){
				if(this.registerconfig.newUsername == "" || this.registerconfig.newPassword == ""
				||this.registerconfig.againPassword==""){
					alert("请输入信息");
				}else{
					for(var i=0;i<this.serUserInfo.length;i++){
						if(this.registerconfig.newUsername==this.serUserInfo[i].username){
							alert("该用户已注册");
							this.registerconfig='';
							return;
						}else{
							alert("注册成功");
							this.showLogin=true;
							this.showRegister=false;
							this.serUserInfo.push(this.registerconfig);
							return;
						}
					}	
				}
			},
			inputBlur(errmsg){
				var patten = /^[a-zA-Z]\w{4,15}$/ig;
				var patrn=/^(\w){6,20}$/;
				if(errmsg=="newUsername"){
					if(this.registerconfig.newUsername==''){
						this.tishi='用户名不能为空';
						this.showTishi = true;
					}else if(!patten.test(this.registerconfig.newUsername)){
							this.tishi='用户名必须为4-15位字母、数字、下划线';
							this.newUsername="";
							return false;
						}else{
							this.showTishi = false;	
							this.beDisabled=false;
						}
				}else if(errmsg=="newPassword"){
					if(this.registerconfig.newPassword==""){
						this.tishi='密码不能为空';
						this.showTishi = true;
					}else if(!patrn.test(this.registerconfig.newPassword)){
							this.tishi='密码必须由6-20位字母、数字、下划线组成';
							this.showTishi = true;
						  }else{
							 this.showTishi=false; 
							 this.beDisabled=false;
						  }
				}else if(errmsg="againPassword"){
					if(this.registerconfig.newPassword!=this.registerconfig.againPassword){
						this.tishi='两次密码不一致';
						this.showTishi = true;
					}else{
						this.showTishifalse;
						this.beDisabled=false;
					}
				}else{
					this.tishi = "注册成功，开始使用吧！"
					this.showTishi = true;
					this.beDisabled=false;
				}
			},
		}
    }
</script>
<style > 
	.login-register{height:14rem;width:8.2rem;display: table-cell; vertical-align: middle; text-align: center;
	background:url(../../assets/images/login_bg.jpg);background-position:60% 50%;background-size:100% 100%;opacity:0.8}
	.login-wrap{text-align:center;} 
	h3{font-size:0.6rem;color:#b5865a;}
	input{display:block; width:60%; height:0.7rem;margin:0.2rem auto ;
		 outline:none; border:1px solid #888; padding:10px; background-color:rgba(255,255,255,.8);
		box-sizing:border-box;font-size:0.3rem;border-radius:0.3rem;text-indent:0.1rem;
	} 
	p{color:red;font-size:0.3rem;} 
	button.btn-login{display:block;margin:0 auto; padding:0.1rem 0.5rem;
		border:none; background-color:#f3bc00;border-radius:20px; color:#fff; font-size:0.36rem; margin-bottom:0.2rem;
	} 
	label.agreement{display:flex;width:65%;margin:0 auto;align-items:center;font-size:0.3rem;}
	label.agreement>input{text-indent:0.01rem;border:1px solid #0ff;width:0.46rem;height:0.46rem;margin-right:-0rem;}
	label.agreement>a{color:#00f;text-decoration:underline;}
	span.togglebtn{cursor:pointer;font-size:0.4rem;text-decoration: underline; color:#f6f4f5;text-decoration-color:#e0d1b4;}
	span:hover{color:#41b883;} 
</style>