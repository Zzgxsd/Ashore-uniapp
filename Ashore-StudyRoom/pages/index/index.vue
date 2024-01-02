<template>
	<view class="body">
		<view class="sous">
			<u-search placeholder="试着搜索“时长排行榜”" v-model="keyword"></u-search>
		</view>
		<mapVue />
		<view class="xuanx">
			<navigator url="/pages/index/Ranking"><u-icon name="integral-fill" label="时长排行榜" label-pos="bottom"
					size="50" color="#03BB7A"></u-icon></navigator>
			<navigator url="/pages/index/StarStore"><u-icon name="bookmark-fill" label="明星商家" label-pos="bottom"
					size="50" color="#03BB7A"></u-icon></navigator>
			<navigator url="/pages/index/StoreInquiry"><u-icon name="file-text-fill" label="上岸论坛" label-pos="bottom"
					size="50" color="#03BB7A"></u-icon></navigator>
			<navigator url="/pages/index/Activity"><u-icon name="coupon-fill" label="优惠活动" label-pos="bottom" size="50"
					color="#03BB7A"></u-icon></navigator>
		</view>
		<view class="jm">
			<p class="name">无人自习室</p>
			<view>
				<p class="md">300w+店铺加盟</p>
				<u-icon name="arrow-right"></u-icon>
			</view>
		</view>
		<view class="tjmd">
			<p class="tj">推荐门店</p>
			<view class="liebiao">
				<view class="mendian" v-for="item in StoreListArr" :key="item._id" @click="MdIndex(item._id)">
					<img src="../../static/jiaoshi.jpg" alt="">
					<p class="dm">{{item.name}}</p>
					<p class="dz">地点：{{item.address}}</p>
				</view>
			</view>
		</view>
		<u-loading-page :loading="loading" font-size="24" color="#03BB7A"></u-loading-page>
	</view>
</template>

<script>
	import mapVue from './map.vue';
	export default {
		data() {
			return {
				loading: true,
				keyword: '试着搜索“时长排行榜”',
				StoreListArr: []
			}
		},
		methods: {
			MdIndex(e) {
				// console.log(e);
				uni.navigateTo({
					url: "/pages/index/Yuyue/mendian?id=" + e
				})
			},
			getData() {
				uniCloud.callFunction({
					name: "getStoreList",
				}).then(res => {
					// console.log(res);
					this.StoreListArr = res.result.data
				})
				// console.log(uni.$u.config.v);
			},
		},
		onLoad() {
			this.getData(),
			setTimeout(() => {
				this.loading = false
			}, 1000);
		},
		components: {
			mapVue
		}
	}
</script>

<style lang="scss" scoped>
	.body {
		min-height: 100vh;
		width: 100vw;
		background-color: #E9E9E9;
	}

	.sous {
		height: 8vh;
		line-height: 8vh;
		background-color: white;
		border-bottom: 1px solid #BBBBBB
	}

	.xuanx {
		width: 90%;
		height: 60px;
		padding-bottom: 20px;
		border-radius: 0 0 20px 20px;
		background-color: white;
		margin: 0 auto;
		display: flex;
		justify-content: space-around;
	}

	.jm {
		display: flex;
		justify-content: space-between;
		width: 90%;
		height: 30px;
		line-height: 30px;
		margin: 0 auto;
		border-bottom: 1px solid #03BB7A;
	}

	.jm view {
		display: flex;
	}

	.name {
		color: #03BB7A;
	}

	.jm view p {
		font-size: 12px;
		color: #3291F8;
	}

	.tj {
		font-size: 16px;
		padding: 10rpx 40rpx;
		font-weight: bold;
	}

	.mendian {
		/* padding: 20px; */
		margin: 10px auto;
		width: 40%;
		/* height: 100px; */
		background-color: white;
		padding: 10px 0;
		border-radius: 10px;
	}

	.liebiao {
		display: flex;
		/* justify-content: space-around; */
		flex-flow: row wrap;
	}

	.mendian img {
		display: block;
		margin: 0 auto;
		width: 250rpx;
		height: 150rpx;
		padding-bottom: 5px;
	}

	.mendian .dm {
		font-size: 12px;
		font-weight: 700;
		height: 20px;
		line-height: 20px;
		border-top: 1px solid #ccc;
		margin: 0 auto;
		width: 80%;
	}

	.mendian .dz {
		font-size: 10px;
		width: 80%;
		margin: 0 auto;
		color: #c3c3c3;
	}
</style>