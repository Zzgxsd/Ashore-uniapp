<template>
	<view class="body">
		<view class="box">
			<view class="headImg">
				<text>头像</text>
				<view class="Img">
					<u-avatar :text="TXimg" size="50" fontSize="24" randomBgColor></u-avatar>
				</view>
			</view>
			<u-cell-group>
				<u-cell size="large" title="注册时间" :value="$u.timeFormat(UserDetail.posttime, 'yyyy年 mm月dd日')"></u-cell>
				<u-cell size="large" title="昵称" :value="UserDetail.Nickname" @click="open" isLink></u-cell>
				<u-cell size="large" title="用户名" :value="namekey" isLink></u-cell>
			</u-cell-group>
		</view>

		<view class="box">
			<u-cell-group>
				<u-cell size="large" title="更多信息" isLink></u-cell>
			</u-cell-group>
		</view>

		<view class="box">
			<u-cell-group>
				<u-cell size="large" title="小程序版本" @click="getSystemInfo" isLink></u-cell>
			</u-cell-group>
		</view>

		<u-popup :show="show" mode="center" @close="close" @open="open">
			<view class="popup">
				<!-- <input type="请输入昵称" v-model="changeNN" placeholder="输入昵称不超过8个字"> -->
				<u--input placeholder="输入昵称不超过8个字" border="surround" v-model="changeNN"></u--input>
				<button type="primary" @click="changeNickname">修改昵称</button>
			</view>
		</u-popup>
		<button @click="LogOut">退出登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				changeNN: "",
				UserId: uni.getStorageSync('namekey') || 纯路人,
				show: false,
				namekey: wx.getStorageSync('namekey') || 纯路人,
				UserDetail: {},
				TXimg: "",
			}
		},
		methods: {
			//获取版本
			getSystemInfo(){
				uni.getSystemInfo({
				    success: function (res) {
					    console.log('版本',res)
						uni.showToast({
							title:res.version+"版本"
						})
					}
				});
			},
			LogOut() {
				uni.removeStorageSync('namekey')
				uni.reLaunch({
					url: '/pages/Login/index'
				});
			},
			changeNickname() {
				uniCloud.callFunction({
					name: "changeNickname",
					data: {
						changeNN: this.changeNN,
						UserId: this.UserId
					}
				}).then(res => {
					uni.showToast({
						title: "修改成功"
					})
					uni.reLaunch({
						url: "/pages/index/me/me"
					})
					console.log(res);
				})
			},
			open() {
				// console.log('open');
				this.show = true
			},
			close() {
				this.show = false
				// console.log('close');
			},
			getDetail() {
				let namekey = this.namekey
				uniCloud.callFunction({
					name: "getUserRow",
					data: {
						namekey
					}
				}).then(res => {
					// console.log(res.result.data[0]);
					this.UserDetail = res.result.data[0]
					console.log(this.UserDetail);
					// wx.setStorageSync("Nickname",this.UserDetail.Nickname)
					if (this.UserDetail.Nickname != "") {
						this.TXimg = this.UserDetail.Nickname.slice(0, 1)
						console.log("Nickname", this.TXimg);
					} else {
						this.TXimg = this.UserDetail.user_name.slice(0, 3)
						console.log("UserId", this.TXimg);
					}
				})
			}
		},
		onLoad() {
			this.getDetail()
		}
	}
</script>

<style lang="scss" scoped>
	.box {
		margin-bottom: 20rpx;
		.headImg{
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 10rpx 25rpx;
		}
	}

	.popup {
		padding: 20rpx;
		height: 13vh;
		width: 80vw;

		button {
			margin-top: 10rpx;
		}
	}
</style>