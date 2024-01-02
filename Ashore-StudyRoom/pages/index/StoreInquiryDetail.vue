<template>
	<view class="detail">
		<view class="container">
			<view class="title">{{ArtRowList.title}}</view>
			<view class="userinfo">
				<view class="avatar">
					<u-avatar :text="ArtRowList.TXimg" size="32" fontSize="18"></u-avatar>
				</view>
				<view class="text">
					<view class="name">{{ArtRowList.Nickname ? ArtRowList.Nickname : ArtRowList.user_id}}</view>
					<view class="small">{{$u.timeFormat(ArtRowList.posttime, 'mm月dd日 hh时MM分')}}</view>
				</view>
			</view>
			<view class="content">
				<!-- <view v-html="ArtRowList.content"></view> -->
				<u-parse :content="ArtRowList.content" :tagStyle="tagStyle"></u-parse>
			</view>
			
			<view class="like">
				<view class="btn">
					<text class="iconfont icon-good-fill"></text>
					<text>88</text>
				</view>								
				<view class="users">					
					<image src="../../static/jiaoshi.jpg" mode="aspectFill" ></image>
				</view>				
				<view class="text"><text class="num">998</text>人看过</view>
			</view>
			
		</view>
	
<!-- 		<view class="comment">
			<view>
				<u-empty
						mode="comment"
						icon="https://cdn.uviewui.com/uview/empty/comment.png"
				>
				</u-empty>
			</view>
			
			<view class="content">
				<view class="item" v-for="item in 3">
					<comment-item></comment-item>									
				</view>
			</view>
			
		</view>
		
		
		
		<comment-frame></comment-frame> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				artid:"",
				ArtRowList:{},
				tagStyle:{
					p:"line-height:1.7em;font-size:16px;padding-bottom:10rpx",
				}
			};
		},
		methods:{
			getData(){
				uniCloud.callFunction({
					name:"getArtRow",
					data:{
						id : this.artid
					}
				}).then(res=>{
					this.ArtRowList = res.result.data[0]
					console.log(this.ArtRowList);
				})
			}
		},
		onLoad(e) {
			this.artid=e.id;
			this.getData();
			console.log(this.artid);
		}
	}
</script>

<style lang="scss">
.detail{
	background: #f8f8f8;
	min-height: calc(100vh - var(--window-top));	
	.container{
		padding:30rpx;	
		background: #fff;
		.title{
			font-size: 46rpx;
			color:#333;
			line-height: 1.4em;
			font-weight: 600;
		}
		.userinfo{
			padding:20rpx 0 50rpx;
			display: flex;
			align-items: center;
			// .avatar{
			// 	width: 60rpx;
			// 	height: 60rpx;
			// 	padding-right: 15rpx;
			// 	image{
			// 		width: 100%;
			// 		height: 100%;
			// 		border-radius: 50%;
			// 	}
			// }
			.text{
				font-size: 28rpx;
				color:#555;
				.small{
					font-size: 20rpx;
					color:#999;
				}
			}
		}
		.content{
			
		}
		.like{
			display: flex;
			flex-direction: column;
			align-items: center;
			padding:80rpx 50rpx 50rpx;
			.btn{
				width: 260rpx;
				height: 120rpx;
				background: #e4e4e4;
				border-radius: 100rpx;
				color:#fff;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				font-size: 28rpx;
				.iconfont{
					font-size: 50rpx;
				}
				&.active{
					background: #0199FE;
				}
			}
			.text{
				font-size: 26rpx;
				color:#666;				
				.num{
					color:#0199FE
				}
				.spot{
					padding:0 10rpx;
				}
			}
			.users{
				display: flex;
				justify-content: center;
				padding:30rpx 0;
				image{
					width: 50rpx;
					height: 50rpx;
					border-radius: 50%;
					border:3px solid #fff;
					margin-left:-20rpx;
				}
			}
		}
		
	}

	.comment{
		padding:30rpx;
		padding-bottom:120rpx;
		.item{
			padding:10rpx 0;
		}
	}

}
</style>
