<template>
	<view class="body">
		<view class="PayMid">
			<view class="PayMidList">
				<view class="Inftitle">
					<p class="StoreName">{{PaidDetail.Name}}</p>
					<p class="WaitPay">{{PaidDetail.orderStatus==0 ? "等待确认" : "已完成该订单"}}</p>
				</view>
				<view class="content">
					<image src="../../../../../static/jiaoshi.jpg"></image>
					<view class="conText">
						<view class="">
							<text class="StoreAddress">地址：{{PaidDetail.address}}</text>
							<br>
							<text class="TimeList">时间：{{$u.timeFormat(PaidDetail.posttime, 'yyyy-mm-dd hh:MM')}}</text>
							<!-- <text class="TimeList" v-for="itemList in item.TimeList">{{itemList}}</text> -->
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="PayDetail">
			<p><text>订单号:</text><text class="val">{{PaidDetail._id}}</text></p>
			<p><text>电话号:</text><text class="val">{{PaidDetail.UserId}}</text></p>
			<p><text>桌号:</text><text class="val">{{PaidDetail.zwindex+1}}</text></p>
			<p><text>预约时间:</text><text class="valTime">{{PaidDetail.MdValue}}</text></p>
		</view>
		<view class="PayDetail">
			<p><text>总金额:</text><text class="val">￥{{Expnum(PaidDetail.MdValue)}}</text></p>
			<p><text>门店优惠:</text><text class="val1">-￥10</text></p>
			<u-line></u-line>
			<p><text>实际付款:</text><text class="val">￥{{ActualExpnum(PaidDetail.MdValue)}}</text></p>
		</view>
		<u-loading-page :loading="loading" font-size="24" color="#03BB7A"></u-loading-page>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: '',
				loading: true,
				PaidDetail: {}
			}
		},
		methods: {
			getData() {
				let id = this.id
				uniCloud.callFunction({
					name: "getStoreOrderId",
					data: {
						id
					}
				}).then(res => {
					console.log(res.result.data[0]);
					this.PaidDetail = res.result.data[0]
				})
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
			},
			ActualExpnum(){
				return function(str) {
					if(str){
						let arr = str.split(',').map(item => parseInt(item))
						return arr.length*15-10;
					}
				};
			}
		},
		onLoad(e) {
			this.id = e.id
			this.getData();
			console.log(this.id);
			setTimeout(() => {
				this.loading = false
			}, 1000);
		}
	}
</script>

<style lang="scss" scoped>
	.body {
		background-color: #E9E9E9;
		min-height: 95vh;
		.PayMid {
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

					image {
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
							-webkit-line-clamp: 2;
							-webkit-box-orient: vertical;

							.StoreAddress {
								height: 40px;
								line-height: 40px;
								font-size: 15px;
								color: #464646;
								font-weight: bold;
							}

							.TimeList {
								font-size: 14px;
								color: #a7a7a7;
								padding-right: 5px;
								// border-right: 1px solid #a7a7a7;
							}
						}
					}
				}

				.Exp {
					text-align: right;
					// border-bottom: 1px solid #ccc;
					margin-bottom: 10px;
				}

				.but {
					button {
						margin-left: 10px;
					}

					text-align: right;
				}
			}
		}
		.PayDetail{
			padding: 10px;
			margin: 10px;
			// height: 20vh;
			background-color: white;
			border-radius: 10px;
			p{
				display: flex;
				justify-content: space-between;
				font-size: 18px;
				padding: 10rpx 20rpx;
				.val{
					font-size: 16px;
					// font-weight: bold;
					color: #464646;
				}
				.valTime{
					text-align: right;
					width: 50%;
					font-size: 16px;
					// font-weight: bold;
					color: #464646;
					overflow: hidden;
					text-overflow: ellipsis;
					display: box;
					display: -webkit-box;
					-webkit-line-clamp: 1;
					-webkit-box-orient: vertical;
				}
				.val1{
					font-size: 16px;
					// font-weight: bold;
					color: #ff5500;
				}
			}
		}
	}
</style>