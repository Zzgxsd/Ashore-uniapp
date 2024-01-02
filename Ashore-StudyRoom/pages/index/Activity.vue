<template>
	<view class="body">
		<image class='background' src="../../static/youhui.png" mode="aspectFill"></image>
		<button class="but">立即邀请</button>
		<view class="myReward">
			<view class="head">
				<p>我的奖励</p>
			</view>
			<view class="mid">
				<view class="midbox">
					<p class="num">0张</p>
					<p class="tex">获得奖券</p>
				</view>
				<view class="midbox">
					<p class="num">0人</p>
					<p class="tex">已邀请</p>
				</view>
				<view class="midbox">
					<p class="num">0￥</p>
					<p class="tex">已省金额</p>
				</view>
			</view>
		</view>
		<view class="mode">
			<view class="head">
				<p>参与方式</p>
			</view>
			<view class="mid">
				<u-steps current="0">
					<u-steps-item title="邀请好友"></u-steps-item>
					<u-steps-item title="好友下单"></u-steps-item>
					<u-steps-item title="领取优惠"></u-steps-item>
				</u-steps>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.body {
		height: 100%;

		.background {
			width: 100%;
			height: 100%;
			position: fixed;
			background-size: 100% 100%;
			z-index: -1;
		}

		.but {
			width: 80%;
			position: absolute;
			top: 45%;
			left: 10%;
			background-color: #FE1123;
			border-radius: 10px;
			color: #fff;
		}

		.myReward {
			width: 80%;
			position: absolute;
			top: 55%;
			left: 10%;
			background-color: #fff;
			border-radius: 10px;

			.head {
				border-bottom: 1px solid #ccc;
				padding: 10px 20px;

				p {
					font-size: 14px;
					font-weight: bold;
				}
			}

			.mid {
				display: flex;
				justify-content: space-around;
				padding: 20px 0;

				.midbox {
					text-align: center;

					.num {
						color: #FF6303;
						font-weight: bold;
					}

					.tex {
						font-size: 14px;
					}
				}
			}
		}

		.mode {
			width: 80%;
			position: absolute;
			top: 74%;
			left: 10%;
			background-color: #fff;
			border-radius: 10px;

			.head {
				border-bottom: 1px solid #ccc;
				padding: 10px 20px;

				p {
					font-size: 14px;
					font-weight: bold;
				}
			}

			.mid {
				padding: 20px;
			}
		}
	}
</style>