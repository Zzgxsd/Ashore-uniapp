<template>
	<view class="body">
		<view class="headTime">
			<view class="daytime">
				<p class="">距离2024年高考还剩：<em>{{GaoKaoTime}}天</em></p>
				<p class="">距离2024年专升本考试还剩：<em>{{EngTime}}天</em></p>
			</view>
		</view>

		<view class="loadingState" v-show="loadState">
			<u-skeleton rows="5" avatar title loading></u-skeleton>
		</view>

		<view class="content">
			<view class="item" v-for="item in ArtList">
				<art-item :item="item"></art-item>
			</view>
		</view>
		<view class="goAdd" @click="goAdd">
			<u-icon name="edit-pen-fill" color="#fff" size="30"></u-icon>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				GaoKaoTime: "",
				EngTime: "",
				KaoYanTime: "",
				ArtList: [],
				loadState: true,
			}
		},
		methods: {
			clickNav(e) {
				console.log(e);
			},
			// goDetail(e) {
			// 	console.log(e);
			// 	uni.navigateTo({
			// 		url: "/pages/index/StoreInquiryDetail?id=" + e
			// 	})
			// },
			getTime() {
				// 获取当前日期
				var currentDate = new Date(); // 计算差值
				// 假设你想计算的特定日期是2023年11月7日
				var GaoKaoDate = new Date(2024, 5, 7); // 注意：JavaScript中月份是从0开始的，所以10代表11月
				var EngTime = new Date(2024, 2, 30);
				var KaoYanTime = new Date(2024, 5, 7);
				// 计算天数差
				var GaoKaodelta = GaoKaoDate - currentDate;
				var EngTimedelta = EngTime - currentDate;
				var KaoYandelta = KaoYanTime - currentDate;
				this.GaoKaoTime = Math.ceil(GaoKaodelta / (1000 * 60 * 60 * 24));
				this.EngTime = Math.ceil(EngTimedelta / (1000 * 60 * 60 * 24));
				this.KaoYanTime = Math.ceil(KaoYandelta / (1000 * 60 * 60 * 24));
				console.log("距离高考还剩 " + this.GaoKaoTime + " 天");
				console.log("距离英语四六级还剩 " + this.GaoKaoTime + " 天");
				console.log("距离考研还剩 " + this.GaoKaoTime + " 天");
			},
			goAdd() {
				uni.navigateTo({
					url: "/pages/index/addText"
				})
			},
			// 获取ArtList
			getArtList() {
				uniCloud.callFunction({
					name: "getArt",
					data: {
						skip: this.ArtList.length
					}
				}).then(res => {
					console.log(res);
					let oldList = this.ArtList;
					let nsList = [...oldList, ...res.result.data]
					this.ArtList = nsList
					console.log("resArtlist", this.ArtList);
					this.loadState = false
				})
			}
		},
		onLoad() {
			this.getArtList();
			this.getTime();
		},
		onReachBottom() {
			this.getArtList();
		},
	}
</script>

<style scoped lang="scss">
	.body {
		padding: 10px;

		.headTime {
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: #03BB7A;
			// height: 20vh;

			.daytime {
				margin: 0 auto;

				p {
					font-size: 40rpx;
					font-weight: bold;
					color: #fff;
					margin-bottom: 10px;

					em {
						font-size: 44rpx;
						color: #DC5E04;
					}
				}
			}
		}

		.loadingState {
			padding: 30rpx;
		}

		.content {
			padding: 30rpx;

			.item {
				padding: 30rpx 0;
				border-bottom: #F7F7F7 10rpx solid;
			}
		}

		.goAdd {
			width: 100rpx;
			height: 100rpx;
			background: #03BB7A;
			color: #fff;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 50%;
			font-size: 50rpx;
			position: fixed;
			right: 60rpx;
			bottom: 100rpx;
			box-shadow: 0 0 20rpx rgba(3, 187, 133, 0.6);
		}
	}
</style>