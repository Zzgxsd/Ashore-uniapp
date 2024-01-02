<template>
	<view class="address">
		<view class="card" v-for="(item, index) in list" :key="index">
			<view class="top">
				<image src="../../../../static/jiaoshi.jpg" mode=""></image>
				<view class="title">
					<span class="big">{{ item.merchantName }}</span>
					<span class="small">评分：{{ item.score }}分</span>
				</view>
			</view>
			<view class="bottom">地址：{{ item.address }}</view>
		</view>
		<button>返回</button>
	</view>
</template>

<script>
	export default {
		name: "App",
		data() {
			return {
				list: [{
						merchantName: "上岸自习室一号",
						imgURL: "",
						score: "4.5",
						address: "中山博爱七路",
					},
					{
						merchantName: "上岸自习室二号",
						imgURL: "",
						score: "4.5",
						address: "中山博爱七路",
					},
				],
			};
		},
	};
</script>

<style scoped lang="scss">
	* {
		margin: 0;
		padding: 0;
	}

	.address {
		display: flex;
		flex-direction: column;
		.card {
			width: 90%;
			height: 100px;
			margin: 20px auto 0;
			border: 2px solid #e2e2e2;
			border-radius: 5px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			.top {
				width: 100%;
				display: flex;
				align-items: center;
				margin: 0 0 5px 40px;
				image {
					width: 35px;
					height: 35px;
					border-radius: 50%;
					margin-right: 10px;
					background: #000;
				}
				.title {
					display: flex;
					flex-direction: column;
					.big {
						font-weight: bolder;
						margin-bottom: 5px;
					}
					.small {
						font-size: small;
						font-weight: lighter;
					}
					
				}
			}
			.bottom {
				letter-spacing: 0.8rem;
				margin: 0 auto;
			}
		}
		button {
			width: 90%;
			height: 30px;
			line-height: 30px;
			margin: 30px auto;
			letter-spacing: 0.3rem;
			/* border: 1.5px solid #80aec5; */
			color: #fff;
			background-color: #03BB7A;
			border-radius: 5px;
		}
	}
</style>