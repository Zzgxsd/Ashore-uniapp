<template>
	<view class="body">
		<u-notice-bar :text="text1" mode="closable"></u-notice-bar>
		<p class="ts">提示：在店门扫码机出示二维码即可解锁店门以及座位电源</p>
		<view class="ma">
			<view class="sys">
				<u-icon name="scan" color="#fff" size="32" @click="scanCode"></u-icon>
				<img class="ewm" src="../../../static/saoma/ewm.png" alt="">
				<view class="sx"><img src="../../../static/saoma/sx.png" alt="">
					<p>刷新二维码</p>
				</view>
			</view>
		</view>
		<view class="dz">
			<p>中山市科技路58号</p><u-icon name="map-fill" color="#fff"></u-icon>
		</view>
		<view class="yh">
			<view class="yhhd">
				<p>优惠活动!</p><u-icon name="play-right-fill" color="#fff"></u-icon>
			</view>
			<view class="yhlb">
				<u-swiper :list="list1"></u-swiper>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		methods
	} from '../../../uni_modules/uview-ui/libs/mixin/mixin';
	export default {
		data() {
			return {
				text1: 'Ashore自习室一周年,福利多多！',
				itemList: [{
					head: "满20减10",
					body: "邀请一个新用户即可获取20减10优惠券",
					open: true,
				}, {
					head: "满10减2",
					body: "邀请三个老用户助力即可获取10减2优惠券",
					open: false,
				}, {
					head: "半价券",
					body: "邀请三个新用户助力即可获取半价券",
					open: false,
				}],
				itemStyle: {
					color: '#fff'
				},
				list1: [
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
				]
			}
		},
		methods:{
			scanCode() {
				// 允许从相机和相册扫码
				uni.scanCode({
					scanType: ["qrCode"],
					success: (res) => {
						console.log(res);
						if (res.result) {
							const val = res.result;
						} else {
							console.log('请重新扫描');
							return false;
						}
					},
					fail: (res) => {
						console.log('未识别到二维码');
					}
				})
			},
		}
	}
</script>

<style>
	.body {
		min-height: 100vh;
		width: 100vw;
		background-color: #03BB7A;
	}

	.ts {
		padding: 20px 0;
		color: white;
		font-size: 12px;
		text-align: center;
	}

	.ma {
		margin: 0 auto;
		border-radius: 50%;
		width: 500rpx;
		height: 500rpx;
		background-color: white;
	}

	.sys {
		margin-top: 20px;
	}

	.sys .ewm {
		width: 140px;
		height: 140px;
		display: flex;
		margin: 10px auto;
		justify-content: center;
		align-items: center;
		padding-bottom: 20px;
		border-bottom: 2px solid #F9BD69;
	}

	.sx {
		display: flex;
		height: 18px;
		width: 100%;
		line-height: 20px;
		color: #F9BD69;
		justify-content: center;
	}

	.sx img {
		width: 18px;
		height: 18px;
	}

	.sx p {
		font-size: 14px;
		height: 18px;
		line-height: 18px;
	}

	.dz {
		font-size: 20px;
		font-weight: bold;
		color: #fff;
		display: flex;
		margin: 0 auto;
		padding: 20px 0;
		width: 80vw;
		justify-content: center;
		border-bottom: 1px solid #ccc;
	}

	.yhhd {
		color: #fff;
		font-size: 18px;
		font-weight: bold;
		display: flex;
		margin: 0 auto;
		justify-content: center;
		padding: 20px 0;
	}

	.yhhd p {
		margin-right: 10px;
	}

	.yhlb {
		padding: 0 65rpx;
	}
</style>