<template>
	<!-- 表单区域 -->
	<view class="wrapper">
		<u--text type="primary" text="注册手机号:"></u--text>
		<input class="siginp" v-on:blur="resname(user_name)" type="text" v-model="user_name" placeholder="请输入手机号码"
			maxlength="11" />
		<u--text type="primary" text="注册密码:"></u--text>
		<input class="siginp" @blur="respassword(password)" type="text" v-model="password" placeholder="请输入密码"
			maxlength="16" />
		<!-- 			<u-form-item prop="cpassword">
				<u-input v-model="form.cpassword" border="bottom" placeholder="请确认密码" />
			</u-form-item> -->
		<view class="m-3 button">
			<u-button @tap="finishreg()" shape="circle" text="立即注册" color="#03BB7A"></u-button>
		</view>
		<view class="d-flex m-3">
			<view class="forget-password">
				<text @click="changeform(0)">已有账号，前往登录</text>
			</view>
		</view>
		<view class="checkbox">
			<u-checkbox-group>
				<u-checkbox shape="circle" size="14">
				</u-checkbox>
				请勾选用户协议
			</u-checkbox-group>
		</view>
	</view>
</template>

<script>
	import {
		mapMutations
	} from 'vuex'
	export default {
		data() {
			return {
				user_name: "",
				password: "",
				tesname: "",
				tespassword: "",
				studytime: 0, //初始时间
				Headimg:"", //头像
				Nickname:"", //昵称
			}
		},
		methods: {
			...mapMutations(['changeform']),
			resname(val) { //用户名输入框失去焦点触发,根据需求使用正则判断
				var regPhone = (/^(13[0-9]|14[1579]|15[0-3,5-9]|16[6]|17[0123456789]|18[0-9]|19[89])\d{8}$/);
				//手机号码正则判断:各运营商开头前三位+八位,即11位的电话号码。
				if (!regPhone.test(val)) {
					// !表示:与regPhone(正则判断)不符
					this.tesname = 1 //标记判断结果,0——正确;1——错误;
					uni.showToast({
						title: '手机号格式错误',
						icon: 'none'
					});
					return;
				}
				if (regPhone.test(val)) {
					this.testname = 0
					uni.showToast({
						title: '手机号格式正确',
					});
					return;
				}
				console.log("用户忙", this.user_name);
			},
			respassword(val) { //密码输入框失去焦点触发,密码只要不为空就行
				if (val != "") {
					this.tespassword = 0 //标记判断结果,0——正确;1——错误;
					return;
				}
				if (val == "") {
					this.tespassword = 1
					uni.showToast({
						title: '密码不能为空',
						icon: 'none'
					});
					return;
				}
				console.log("密码", this.password);
			},
			finishreg() {
				if (this.testname == 0 && this.tespassword == 0) { //&&——与符号,表示前后两个条件都要符合才行。
					uniCloud.callFunction({
						name: "register",
						data: {
							"user_name": this.user_name,
							"password": this.password,
							"studytime": this.studytime,
							"Headimg": this.Headimg,
							"Nickname": this.Nickname
						}
					}).then(res => {
						console.log("对register函数发送请求成功", res)
						var status = res.result.status
						if (status == 0) {
							uni.showToast({
								title: '注册成功',
								icon: 'none',
							});
							
							setTimeout(()=>{
								uni.switchTab({
									url:"/pages/index/index"
								})
							},2000)
						} else {
							uni.showToast({
								title: '用户名重复',
								icon: 'none'
							});
						}
					})
				} else {
					uni.showToast({
						title: '错了,重来',
						icon: 'none'
					});
				}
			}
		},
	}
</script>

<style>
	.siginp{
		margin: 10px 0;
		height: 40px;
		padding: 0 10px;
		border-radius: 10px;
		border: 1px solid #ccc;
	}
	.wrapper {
		margin: 0 auto;
		margin-top: 150rpx;
		padding: 70rpx 70rpx 20rpx;
		width: 500rpx;
		border-radius: 30rpx;
		background: #fff;
		opacity: .8;
	}

	.d-flex {
		display: flex;
	}

	.m-3 {
		justify-content: space-between;
		font-size: 25rpx;
	}

	.forget-password {
		color: #F9BD69;
		margin-bottom: 60rpx;
	}

	.checkbox {
		font-size: 25rpx;
		color: #ccc;
	}
</style>