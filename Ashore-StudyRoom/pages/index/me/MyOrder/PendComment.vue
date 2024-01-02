<template>
	<view>
		<view class="body">
			<view v-if="listOrder.length == 0" class="">
				<u-empty text="无需评论" mode="list">
				</u-empty>
			</view>
			<view class="PayMid" v-for="(item,index) in listOrder" :key="index">
				<view class="PayMidList">
					<view class="Inftitle">
						<p class="StoreName">{{item.Name}}</p>
						<p class="WaitPay">等待评论</p>
					</view>
					<view class="content">
						<img src="../../../../static/jiaoshi.jpg" alt="">
						<view class="conText">
							<view class="">
								<text class="StoreAddress" style="white-space:pre-wrap">地址：{{item.address}}\n</text>
								<text class="zwnum">桌号：{{item.zwindex+1}}\n</text>
								<text class="YuyueList">预约：{{item.MdValue}}</text>
								<!-- <text class="TimeList" v-for="itemList in item.TimeList">{{itemList}}</text> -->
							</view>
						</view>
					</view>
					<view class="TimeAndExp">
						<text class="TimeList">{{$u.timeFormat(item.posttime, 'yyyy-mm-dd hh:MM')}}</text>
						<text class="Expnum">￥{{Expnum(item.MdValue)}}</text>
					</view>
					<view class="but">
						<button @click="show = true" type="primary" size="mini">点击评价</button>
					</view>
					<u-popup :show="show" @close="close" @open="open">
						<view class="pinjia">
							<view class="Stars">
								<view class="lis">
									<text>门店卫生</text><u-rate active-color="#FA3534" size="24" inactive-color="#b2b2b2" gutter="20"></u-rate>
								</view>
								<view class="lis">
									<text>设备情况</text><u-rate active-color="#FA3534" size="24" inactive-color="#b2b2b2" gutter="20"></u-rate>
								</view>
								<view class="lis">
									<text>综合评分</text><u-rate active-color="#FA3534" size="24" inactive-color="#b2b2b2" gutter="20"></u-rate>
								</view>
							</view>
							<view class="textarea">
								<u--textarea v-model="value2" placeholder="请输入内容" count ></u--textarea>
							</view>
							<button @click="goPinlun(item._id)" type="primary" size="mini">点击评价</button>
						</view>
					</u-popup>
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
				// list:this.listOrder
				onchange: 2,
				show: false,
				value2: '',
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
			goPinlun(e) {
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
					title: "评论成功"
				})
				setTimeout(() => {
					uni.redirectTo({
						url: "/pages/index/me/MyOrder/MyOrder"
					})
				}, 1000);
			},
			open() {
				// console.log('open');
			},
			close() {
				this.show = false
				// console.log('close');
			}
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
						color: #00aaff;
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

				.TimeAndExp{
					display: flex;
					justify-content: space-between;
					border-bottom: 1px solid #ccc;
					margin: 20rpx 0;
					padding: 0 10rpx;
					.TimeList{
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
				.pinjia{
					height: 30vh;
					// display: flex;
					// align-items: center;
					margin: 40rpx auto;
					.Stars{
						.lis{
							display: flex;
							margin-bottom: 10rpx;
							// margin: 0 auto;
							justify-content: center;
							text{
								font-size: 16px;
								font-weight: bold;
							}
						}
					}
					.textarea{
						margin: 20rpx 0;
					}
				}
			}
		}
	}
</style>