<template>
	<view class="art">
		<view class="head">
			<view class="userinfo">
				<view class="avatar">
					<!-- {{item.TXimg}} -->
					<!-- <image src="../../static/me/touxiang.png" mode="aspectFill"></image> -->
					<u-avatar :text="item.TXimg" size="32" fontSize="18"></u-avatar>
				</view>
				<view class="name">
					{{item.Nickname ? item.Nickname : item.user_id}}
				</view>
				<view class="time">
					<text>{{$u.timeFormat(item.posttime, 'mm月dd日 hh时MM分')}}</text>
				</view>
			</view>

			<view class="more">
				<u-icon name="more-dot-fill"></u-icon>
			</view>
		</view>
		<view class="body">
			<view class="title" @click="goDetail">{{item.title}}</view>
			<view class="text" @click="goDetail">
				<view class="t">{{item.description}}</view>
			</view>
			<view class="piclist">
				<view class="pic" :class="item.picurls.length==1 ? 'only': ''" v-for="(pic,index) in item.picurls" :key="pic">
					<image @click="clickPic(index)" :src="pic" mode="aspectFill"></image>
				</view>
			</view>
		</view>
		<view class="info">
			<view class="box"><u-icon name="eye"></u-icon> <text>15</text></view>
			<view class="box" @click="goDetail"><u-icon name="chat"></u-icon> <text>30</text></view>
			<view class="box"><u-icon name="thumb-up"></u-icon> <text>22</text></view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "art-item",
		props:{
			item:{
				type:Object,
				default(){
					return{
						
					}
				}
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			//跳转详情
			goDetail(){
				uni.navigateTo({
					url:"/pages/index/StoreInquiryDetail?id="+this.item._id
				})
			},
			//预览图片
			clickPic(index){
				uni.previewImage({
					urls:this.item.picurls,
					current:index
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.art {
		.head {
			display: flex;
			font-size: 32rpx;
			align-items: center;
			justify-content: space-between;

			.userinfo {
				display: flex;
				align-items: center;

				// .avatar {
				// 	width: 40rpx;
				// 	height: 40rpx;
				// 	border-radius: 50%;
				// 	border-radius: 50%;
				// 	overflow: hidden;

				// 	image {
				// 		width: 100%;
				// 		height: 100%;
				// 		display: block;
				// 	}
				// }

				.name {
					color: #222;
					padding-left: 10rpx;
				}

				.time {
					color: #888;
					font-size: 22rpx;
					padding-left: 20rpx;
				}
			}
		}

		.body {
			padding: 15rpx 0 30rpx;

			.title {
				font-size: 44rpx;
				color: #000;
				font-weight: 600;
				text-align: justify;
			}

			.text {
				padding-top: 10rpx;
				padding-bottom: 10rpx;
				font-size: 30rpx;
				text-align: justify;
				color: #888;

				.t {
					text-overflow: -o-ellipsis-lastline;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					line-clamp: 2;
					-webkit-box-orient: vertical;
				}
			}

			.piclist {
				display: flex;
				padding-top: 20rpx;

				.pic {
					width: 225rpx;
					height: 225rpx;
					margin-right: 6rpx;
					overflow: hidden;

					image {
						width: 100%;
						height: 100%;
					}

					&:first-child {
						border-radius: 20rpx 0 0 20rpx;
					}

					&:last-child {
						border-radius: 0 20rpx 20rpx 0;
					}

					&.only {
						border-radius: 20rpx;
					}

				}

			}
		}




		.info {
			display: flex;
			align-items: center;
			justify-content: space-around;
			font-size: 26rpx;
			color: #333;

			.box {
				display: flex;
				align-items: center;
				padding: 15rpx 0 5rpx;
				flex: 1;
				display: flex;
				justify-content: center;

				.iconfont {
					font-size: 40rpx;
					padding-right: 10rpx;
				}
			}

		}
	}
</style>