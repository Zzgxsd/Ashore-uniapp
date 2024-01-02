<template>
	<view class="myAccount">
		<view class="top">
			<view class="Mine">我的余额 (元)</view>
			<view class="account">{{ money }}</view>
			<button class="ljcz">立即充值</button>
		</view>
		<view class="list">
			<view class="item">
				<view class="left">
					<image src="../../../../static/me/shichang.png" mode=""></image>
					<view class="text">收益</view>
					<span>{{ money }}元</span>
				</view>
				<button class="tx">提现</button>
			</view>
			<view class="item" v-for="(item, index) in list" :key="index">
				<view class="left">
					<image src="../../../../static/me/shichang.png" alt="" />
					<view class="text">{{ item.text }}</view>
				</view>
				<view class="right">></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "App",
		data() {
			return {
				money: "100.00",
				list: [{
						url: "",
						text: "收益详情",
					},
					{
						url: "",
						text: "充值记录",
					},
				],
			};
		},
	};
</script>

<style>
	.myAccount {
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	.top {
		width: 100%;
		height: 200px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #03BB7A;
	}

	.Mine {
		color: #fff;
		font-size: small;
		letter-spacing: 0.2rem;
	}

	.account {
		color: aliceblue;
		font-size: 45px;
		font-weight: 500;
		margin-bottom: 10px;
	}

	.ljcz {
		width: 110px;
		height: 30px;
		background-color: rgba(255, 255, 255, 0);
		color: aliceblue;
		letter-spacing: 0.2rem;
		border: 1px solid rgb(176, 175, 175);
		outline: none;
		border-radius: 20px;
		font-weight: lighter;
		font-size: 12px;
		line-height: 30px;
	}

	.list {
		width: 100%;
		margin-top: 15px;
		padding-bottom: 20px;
		background: #fdfdfd;
	}

	.item {
		width: 90%;
		margin: 0 auto;
		padding: 10px 0 10px 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 2px solid #ededed;
	}

	.tx {
		width: 60px;
		height: 20px;
		line-height: 20px;
		background: rgba(255, 255, 255, 0);
		border: 1px solid red;
		border-radius: 5px;
		color: red;
		font-size: 12px;
		/* font-weight: lighter; */
	}

	.left {
		font-weight: 500;
		display: flex;
	}

	image {
		width: 20px;
		height: 20px;
		margin-right: 8px;
		/* background: #000; */
	}

	span {
		margin-left: 20px;
		color: #c1c1c1;
	}

	.right {
		color: #c1c1c1;
	}
</style>