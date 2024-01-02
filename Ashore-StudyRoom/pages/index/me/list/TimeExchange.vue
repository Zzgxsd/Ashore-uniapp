<template>
	<view class="exchange">
		<view class="top">
			<view class="picture">
				<u-avatar :text="TXimg" size="50" fontSize="18" randomBgColor></u-avatar>
				<view class="level">{{ level }}</view>
			</view>
			<view class="user">
				<span>{{ name }}</span>
				<view class="register">
					<view class="left"></view>
					<view class="text">* 注册用户 *</view>
					<view class="right"></view>
				</view>
				<view class="integral">
					<span>积分:{{ integral }}</span><span>成长值{{ val }}</span>
				</view>
			</view>
			<view class="how"><button class="rhsj">如何升级？</button></view>
		</view>
		<view class="center">
			<view class="line"></view>
			<view class="item" v-for="(item, index) in this.center" :key="index">
				<image src="../../../../static/me/shichang.png" mode=""></image>
				<view class="text">
					<span class="text">{{ item.text }}</span>
				</view>
			</view>
		</view>
		<view class="bottom">
			<view class="title">积分兑换抵用卷</view>
			<view class="card" v-for="(item, index) in 4" :key="index">
				<view class="left">全场优惠卷</view>
				<view class="center">
					<span class="normal">积分兑换30元抵用卷</span>
					<span class="small">满31减30元</span>
					<span class="smaller">使用期限：2020/12/12-1010/12/12</span>
				</view>
				<!-- <view class="line"></view> -->
				<view class="right">
					<span>600积分</span>
					<button class="ljdh">立即兑换</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "App",
		data() {
			return {
				level: 0,
				name: "",
				integral: 0,
				val: 0,
				TXimg:"",
				user_name: wx.getStorageSync('namekey'),
				center: [{
						icon: "",
						text: "积分明细",
						isShow: false,
					},
					{
						icon: "",
						text: "签到规则",
						isShow: true,
					},
				],
			};
		},
		onLoad(e) {
			this.name = e.Nickname;
			if (e.Nickname != "") {
				this.TXimg = e.Nickname.slice(0, 1)
				console.log("Nickname", this.TXimg);
			} else {
				this.TXimg = e.user_name.slice(0, 3)
				console.log("UserId", this.TXimg);
			}
		}
	};
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	html {
		background-color: #f9f9f9;
	}

	.exchange {
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	.exchange>.top {
		width: 100%;
		height: 125px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #03BB7A;
	}

	.top>.picture {
		width: 60px;
		height: 60px;
		position: relative;
		margin-right: 28px;
	}

	.top>.picture>image {
		width: 50px;
		height: 50px;
		background: white;
		border-radius: 50%;
	}

	.picture>.level {
		width: 16px;
		height: 16px;
		color: white;
		font-size: smaller;
		text-align: center;
		line-height: 15px;
		border-radius: 50%;
		background: #c7a966;
		position: absolute;
		bottom: 5px;
		right: 8px;
	}

	.top>.user {
		color: #faf9f8;
	}

	.top>.user>.register {
		width: 140px;
		height: 20px;
		display: flex;
		margin: 5px 0 5px 0;
	}

	.top>.user>.register>.text {
		width: 80px;
		height: 20px;
		font-size: small;
		overflow: hidden;
		background: #c7a966;
		text-align: center;
		z-index: 9;
	}

	.top>.user>.register>.left {
		width: 10px;
		height: 10px;
		background: #c7a966;
		box-sizing: border-box;
		border: 10px solid;
		border-color: transparent transparent transparent #03BB7A;
		margin-right: -10px;
	}

	.top>.user>.register>.right {
		width: 10px;
		height: 10px;
		background: #c7a966;
		box-sizing: border-box;
		border: 10px solid;
		border-color: transparent #03BB7A transparent transparent;
		margin-left: -10px;
	}

	.top>.user>.integral {
		width: 120px;
		letter-spacing: 0.1rem;
		display: flex;
		justify-content: space-between;
		font-size: smaller;
		color: white;
		font-weight: lighter;
	}

	.top>.how {
		height: 100%;
		display: flex;
		padding-top: 20px;
		flex-direction: column;
		justify-content: start;
	}

	.rhsj {
		width: 75px;
		line-height: 22px;
		font-size: 11px;
		border-radius: 10px;
		height: 22px;
		background: #ffffff;
		color: #b68354;
		border: 0;
		outline: none;
		padding-left: 6px;
	}

	.center {
		width: 100%;
		display: flex;
		position: relative;
		background: #ffffff;
		/* background: #000; */
	}

	.center>.line {
		width: 1.5px;
		height: 60px;
		position: absolute;
		left: 50%;
		top: 10px;
		background: #eaeaea;
		margin: 0 auto;
	}

	.center>.item {
		width: 50%;
		height: 80px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.center>.item>.text {
		display: flex;
		flex-direction: column;
		/* font-size: small; */
	}

	.center>.item>image {
		width: 35px;
		height: 35px;
		margin-right: 5px;
		border-radius: 50%;
		background: #fff;
	}

	/* .text > .isShow {
  font-size: smaller;
} */
	.exchange>.bottom {
		width: 95%;
		margin: 10px auto;
	}

	.bottom>.title {
		margin-left: 10px;
		margin-bottom: 5px;
	}

	.bottom>.card {
		display: flex;
		margin-top: 10px;
	}

	.card>.left {
		width: 28px;
		height: 90px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #f9f9f9;
		font-size: small;
		writing-mode: vertical-rl;
		box-sizing: border-box;
		background: linear-gradient(135deg, transparent 4px, #ceb08b 0) top left,
			linear-gradient(-135deg, transparent 4px, #ceb08b 0) top right,
			linear-gradient(-45deg, transparent 4px, #ceb08b 0) bottom right,
			linear-gradient(45deg, transparent 4px, #ceb08b 0) bottom left;
		background-size: 50% 50%;
		background-repeat: no-repeat;
	}

	.card>.center {
		width: 65%;
		height: 90px;
		display: flex;
		flex-direction: column;
		padding-left: 15px;
		/* align-items: center; */
		justify-content: center;
		color: #121111;
		background: linear-gradient(135deg, transparent 4px, #efefef 0) top left,
			linear-gradient(-135deg, transparent 4px, #efefef 0) top right,
			linear-gradient(-45deg, transparent 4px, #efefef 0) bottom right,
			linear-gradient(45deg, transparent 4px, #efefef 0) bottom left;
		background-size: 50% 50%;
		background-repeat: no-repeat;
		box-sizing: border-box;
	}

	.card>.center>.normal {
		margin: 0 0 10px 0;
	}

	.card>.center>.small {
		font-size: smaller;
	}

	.card>.center>.smaller {
		font-size: x-small;
		color: #808080;
		margin-top: 2px;
	}

	.card>.right {
		width: 25%;
		height: 90px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		font-size: smaller;
		box-sizing: border-box;
		background: linear-gradient(135deg, transparent 4px, #e8e8e8 0) top left,
			linear-gradient(-135deg, transparent 4px, #e8e8e8 0) top right,
			linear-gradient(-45deg, transparent 4px, #e8e8e8 0) bottom right,
			linear-gradient(45deg, transparent 4px, #e8e8e8 0) bottom left;
		background-size: 50% 50%;
		background-repeat: no-repeat;
	}

	.ljdh {
		width: 70px;
		height: 25px;
		font-size: 10px;
		line-height: 25px;
		border: 0;
		border-radius: 5px;
		outline: none;
		background: #c3ad7e;
		color: #f8f8f8;
	}
</style>