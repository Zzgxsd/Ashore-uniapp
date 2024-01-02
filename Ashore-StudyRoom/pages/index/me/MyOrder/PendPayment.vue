<template>
	<view>
		<view class="body">
			<view v-if="listOrder.length == 0" class="">
				<u-empty text="无订单" mode="car">
				</u-empty>
			</view>
			<view class="PayMid" v-for="(item,index) in listOrder" :key="index">
				<view class="PayMidList">
					<view class="Inftitle">
						<p class="StoreName">{{item.Name}}</p>
						<p class="WaitPay">等待确认</p>
					</view>
					<view class="content">
						<img src="../../../../static/jiaoshi.jpg" alt="">
						<view class="conText">
							<view class="">
								<text class="StoreAddress" style="white-space:pre-wrap">地址：{{item.address}}\n</text>
								<text class="zwnum">桌号：{{item.zwindex+1}}\n</text>
								<text class="YuyueList">预约：{{item.MdValue}}</text>
							</view>
						</view>
					</view>
					<view class="TimeAndExp">
						<text class="TimeList">{{$u.timeFormat(item.posttime, 'yyyy-mm-dd hh:MM')}}</text>
						<text class="Expnum">￥{{Expnum(item.MdValue)}}</text>
					</view>
					<view class="but">
						<button @click="qr(item._id)" type="primary" size="mini">确认订单</button>
						<button type="default" size="mini" @click="goPaidDetail(item._id)">查看详情</button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['listOrder'],
		data() {
			return {
				onchange: 1
			}
		},
		computed: {
			Expnum() {
				return function(str) {
					if(str){
						let arr = str.split(',').map(item => parseInt(item))
						return arr.length*15;
					}
				};
			}
		},
		methods: {
			goPaidDetail(e) {
				uni.navigateTo({
					url: "/pages/index/me/MyOrder/PaidDetails/PaidDetails?id=" + e
				})
			},
			qr(e) {
				let onchange = this.onchange;
				let UserId = e;
				uniCloud.callFunction({
					name: "ConfirmOrder",
					data: {
						UserId,
						onchange
					}
				}).then(res => {
					console.log(res);
				})
				uni.showToast({
					title: "确认成功"
				})
				setTimeout(() => {
					uni.redirectTo({
						url: "/pages/index/me/MyOrder/MyOrder"
					})
				}, 1000);
			}
		},
		onLoad() {

		}
	}
</script>

<style lang="scss">
	.body {
		background-color: #E9E9E9;
		min-height: 100vh;

		.PayMid {
			// width: 100vw;
			padding: 5rpx;

			.PayMidList {
				// width: 100%;
				background-color: white;
				padding: 10px;
				margin: 10px;
				border-radius: 5px;

				.Inftitle {
					display: flex;
					justify-content: space-between;
					border-bottom: 1px solid #ccc;
					padding-bottom: 5px;
					height: 22px;
					line-height: 22px;

					.StoreName {
						font-size: 18px;
						font-weight: bold;
					}

					.WaitPay {
						font-size: 14px;
						color: red;
					}
				}

				.content {
					display: flex;

					img {
						margin: 22px 10px 0 10px;
						width: 80px;
						height: 80px;
					}

					.conText {
						display: flex;
						align-items: center;

						view {
							width: 220px;
							padding: 20rpx;
							overflow: hidden;
							text-overflow: ellipsis;
							display: box;
							display: -webkit-box;
							-webkit-line-clamp: 3;
							-webkit-box-orient: vertical;

							.StoreAddress {
								height: 40px;
								line-height: 40px;
								font-size: 15px;
								color: #464646;
								font-weight: bold;
							}

							.zwnum {
								height: 40px;
								line-height: 40px;
								font-size: 13px;
								color: #00aa7f;
								font-weight: bold;
							}

							.YuyueList {
								font-size: 14px;
								color: #a7a7a7;
								padding-right: 5px;
								// border-right: 1px solid #a7a7a7;
								overflow: hidden;
								text-overflow: ellipsis;
								display: box;
								display: -webkit-box;
								-webkit-line-clamp: 1;
								-webkit-box-orient: vertical;
							}
						}
					}
				}

				.TimeAndExp {
					display: flex;
					justify-content: space-between;
					border-bottom: 1px solid #ccc;
					margin: 20rpx 0;
					padding: 0 10rpx;

					.TimeList {
						font-size: 12px;
						color: #a7a7a7;
					}
				}

				.but {
					button {
						margin-left: 10px;
					}

					text-align: right;
				}
			}
		}
	}
</style>