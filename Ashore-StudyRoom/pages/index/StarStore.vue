<template>
	<view class="body">
		<view class="TimeTitle">
			上岸-商家好评排行榜
		</view>
		<u-skeleton :rows="1" titleWidth="60%" titleHeight="10px" rowsHeight="10" v-for="item in StarStoreList.length"
			v-if="isArticleLoading" avatarSize="50" avatar :animate="true" loading></u-skeleton>
		<view class="list" v-if="!isArticleLoading" v-for="(item,index) in StarStoreList" :key="index">
			<view class="Ranking">
				{{index+1}}
			</view>
			<image src="../../static/jiaoshi.jpg" mode=""></image>
			<view class="box">
				<p class="user_name">{{item.name}}</p>
				<p class="time">评分：{{item.scoring}}</p>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				StarStoreList: [],
				isArticleLoading: true
			}
		},
		methods: {
			getData() {
				uniCloud.callFunction({
					name: "getStoreList",
				}).then(res => {
					console.log(res.result.data);
					let arr = res.result.data
					this.StarStoreList = arr.sort((a, b) => b.scoring - a.scoring)
				})
			}
		},
		onLoad() {
			this.getData()
			// 延时2秒钟
			uni.$u.sleep(2000).then(() => {
				this.isArticleLoading = false
			})
		}
	}
</script>

<style lang="scss">
	.body {
		padding: 20px;

		.TimeTitle {
			height: 20vh;
			background-color: #03BB7A;
			color: #fff;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 25px;
			font-weight: bold;
			margin-bottom: 10px;
		}

		.list {
			background-color: #8abba7;
			padding: 4px 10px;
			display: flex;
			margin: 10px 0;
			border-radius: 15px;

			.Ranking {
				display: flex;
				align-items: center;
				font-size: 18px;
				font-weight: bold;
				color: #d1894e;
				margin: 0 10px;
			}

			image {
				width: 50px;
				height: 50px;
				border: 5px solid #fff;
				border-radius: 50%;
				margin-right: 5px;
			}

			.box {
				.user_name {
					font-size: 18px;
					color: #fff;
					font-weight: bold;
				}

				.time {
					font-size: 14px;
					color: #ffaa00;
					margin-top: 5px;
					// background-color: #fff;
					// text-align: center;
					// width: 100px;
					// border-radius: 10px;
				}
			}
		}
	}
</style>