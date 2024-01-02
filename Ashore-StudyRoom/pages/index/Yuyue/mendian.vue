<template>
	<view class="Mdindex">
		<view class="MdHead">
			<view class="MdAddress">
				<u-icon name="map-fill" color="#FFFFFF" :label="MdDetail.address" label-size="18" label-color="#FFFFFF"
					size="24"></u-icon>
			</view>
		</view>
		<view class="MdBody">
			<view class="wrap">
				<u-toast ref="uToast"></u-toast>
				<u-grid col="2">
					<u-grid-item bgColor="#e5e9f2" v-for="(item, index) in MdDetail.TableList" :key="index">
						<view class="Tbox">
							<view class="Tnum">
								{{item.title}}
							</view>
							<button style="color:#ffffff;" :style="{'background-color':item.bcolor}" size="mini"
								@click="MdIndex(item,index)">{{item.but}}</button>
						</view>
					</u-grid-item>
				</u-grid>
			</view>
		</view>
		<u-loading-page :loading="loading" font-size="24" color="#03BB7A"></u-loading-page>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				loading: true,
				optionId: 0,
				MdDetail: {}
			}
		},
		methods: {
			MdIndex(params, index) {
				this.$refs.uToast.show({
					...params,
				})
				if (params.type == "default") {
					uni.navigateTo({
						url: "/pages/index/Yuyue/MdIndex?id="+this.optionId +'&index='+index
					})
				}
				console.log(params.type);
			},
			getStoreList() {
				let id = this.optionId
				uniCloud.callFunction({
					name: "getStoreRow",
					data: {
						id
					}
				}).then(res => {
					this.MdDetail = res.result.data[0]
					console.log("mendian",res.result.data[0]);
				})
			},
		},
		// 详情页面通过 onLoad生命周期中接收到传递过来的参数 id
		onLoad(option) {
			this.optionId = option.id
			console.log(this.optionId);
			this.getStoreList()
			setTimeout(() => {
				this.loading = false
			}, 1000);
		}
	}
</script>

<style scoped lang="scss">
	.Mdindex {}

	.MdHead {
		height: 10vh;
		background-color: #03BB7A;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.wrap {
		padding: 12rpx 48rpx 48rpx 48rpx;
	}

	.demo-layout {
		height: 160rpx;
		border-radius: 8rpx;
		margin: 40rpx 0;
	}

	.Tlong {
		display: flex;
	}

	.Tbox {
		padding: 20rpx;
		margin: 40rpx;
		text-align: center;
	}

	.Tnum {
		padding-bottom: 8rpx
	}

	.Tleft {
		width: 50%;
		border-left: #000;
	}

	.Tright {
		width: 50%;
	}

	.bg-purple-light {
		background: #e5e9f2;
	}
</style>