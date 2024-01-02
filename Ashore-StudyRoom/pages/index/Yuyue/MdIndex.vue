<template>
	<view class="XXindex">
		<view class="XXHead">
			<u-icon name="map-fill" color="#FFFFFF" :label="MdDetail.address" label-size="18" label-color="#FFFFFF"
				size="24"></u-icon>
		</view>
		<view class="XXbody">
			<image src="../../../static/Yuyue/jiaoshi.jpg" mode=""></image>
			<view class="bodyRight">
				<view class="bodyZuohao">{{MdDetail.name}}{{zwindex+1}}号桌</view>
				<u-rate readonly :count="5" :value="MdDetail.stars" size="48rpx" inactive-color="#CCC" active-color="#F9BE0D"
					gutter="6"></u-rate>
				<view class="bodyPinjia">评价：{{MdDetail.appraise}}</view>
				<view class="bodyPinfen">评分：{{MdDetail.scoring}}</view>
			</view>
		</view>
		<view class="XXfoot">
			<view class="swiper">
				<u-swiper :list="list" duration="1000" :circular="false" indicator indicatorMode="line"
					circular></u-swiper>
			</view>
			<view class="Yytime">
				<u-divider :dot="true" textColor="#000" lineColor="#ccc"></u-divider>
				<view class="Yywz">
					<p>预约时段</p>
				</view>
				<u-divider text="可同时预约多个时段" :dashed="true" textColor="#ccc" lineColor="#ccc"></u-divider>
				<u-checkbox-group v-model="MdValue" iconPlacement="right" placement="column">
					<u-checkbox :labelDisabled="true" :customStyle="{marginBottom: '12px'}"
						v-for="(item, index) in MdDetail.checkboxList" :key="index" :label="item.name" :name="item.name"
						:disabled="item.disabled">
					</u-checkbox>
				</u-checkbox-group>
				<view class="but">
					<button @click="show = true">确认预约</button>
				</view>
				<u-popup :show="show" :round="10" mode="center" @close="close">
					<view class="popupbox">
						<p>是否预约:</p>
						<ul>
							<li v-for="(item,index) in MdValue" :key="index">{{item}}</li>
						</ul>
						<button type="primary" @click="Confirm">确定</button>
					</view>
				</u-popup>
			</view>
		</view>
		<u-loading-page :loading="loading" font-size="24" color="#03BB7A"></u-loading-page>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
				],
				MdValue: [],
				MdDetail: {},
				id: "",
				show: false,
				loading: true,
				zwindex:0
			}
		},
		methods: {
			close() {
				this.show = false
			},
			Confirm() {
				// let detailInfo=JSON.stringify(this.MdValue)
				uni.navigateTo({
					url: `/pages/index/Yuyue/PayIndex?arr=${this.MdValue}&id=${this.id}&zwindex=${this.zwindex}`
				})
				this.show = false
			},
			getDetail() {
				let id = this.id
				uniCloud.callFunction({
					name: "getStoreRow",
					data: {
						id
					}
				}).then(res => {
					this.MdDetail = res.result.data[0]
					console.log("MdDetail",res.result.data[0]);
				})
			}
		},
		onLoad(e) {
			this.id = e.id;
			this.zwindex = parseInt(e.index)
			setTimeout(() => {
				this.loading = false
			}, 1200);
			this.getDetail();
		}
	}
</script>

<style scoped>
	ul,
	li {
		list-style: none;
	}

	.XXindex {
		background-color: #E9E9E9;
		min-height: 100vh;
		width: 100vw;
	}

	.XXHead {
		height: 10vh;
		background-color: #03BB7A;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.XXbody {
		margin: 20rpx;
		padding: 20rpx;
		border-radius: 10rpx;
		background-color: #fff;
		display: flex;
	}

	.XXbody image {
		width: 250rpx;
		height: 250rpx;
	}

	.bodyRight {
		margin: 0 auto;
	}

	.bodyZuohao {
		margin-bottom: 20rpx;
		text-align: center;
		font-weight: bold;
	}

	.bodyPinjia {
		font-size: 14px;
		margin-top: 20rpx;
		color: #F9BD69;
	}

	.bodyPinfen {
		font-size: 14px;
		margin-top: 20rpx;
		color: #F9BD69;
	}

	.XXfoot {
		/* height: 100vh; */
		background-color: #fff;
		border-radius: 30rpx 30rpx 0 0;
		padding: 20rpx;
	}

	.swiper {
		padding: 10rpx;
	}

	.Yytime {
		padding: 20rpx;
	}

	.Yywz {
		display: flex;
		justify-content: space-between;
	}

	.Yywz p {
		font-weight: bold;
	}

	.Yygouxuan {
		padding: 0 20rpx;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #e5e5e5;
		height: 65rpx;
		line-height: 65rpx;
		font-size: 14px;
	}

	.but button {
		background-color: #03BB7A;
		color: #fff;
		margin-top: 20px;
		margin-bottom: 10px;
		width: 400rpx;
		font-size: 16px;
	}

	.popupbox {
		padding: 20px;
		width: 75vw;
		height: 20vh;
	}

	.popupbox p {
		font-size: 16px;
		font-weight: bold;
	}

	.popupbox ul {
		text-align: center;
		height: 70%;
		overflow: auto;
	}

	.popupbox button {
		position: absolute;
		/*或relative*/
		/* height: 40rpx; */
		top: 70%;
		left: 50%;
		transform: translateX(-50%);

	}
</style>