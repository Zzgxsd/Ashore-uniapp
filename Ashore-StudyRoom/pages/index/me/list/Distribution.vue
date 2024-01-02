<template>
	<view class="body">
		<view class="distribution">
			<view class="top">
				<span class="left">邀请好友</span>
				<span class="right">奖励多多</span>
			</view>
			<view class="main">
				<view class="title">
					<span class="big">好友Ashore积分奖励</span>
					<span class="small">详情></span>
				</view>
				<view class="text">
					直邀好友在小程序下单，即可获得Ashore积分奖励
				</view>
				<view class="number">
					<view class="reword" v-for="(item, index) in this.reword" :key="index">
						<view class="content">
							<span class="big">{{ item.number }} <span class="short">个</span></span>
							<span class="small">{{ item.text }}</span>
						</view>
						<view class="line" v-show="item.show"></view>
					</view>
					<view class="watermark">Ashore</view>
				</view>
			</view>
			<view class="mainbot">
				<view class="friend">
					<view class="left">
						我的好友：<span>{{ number }}</span>人
					</view>
					<view class="right">
						<image src="../../../../static/me/touxiang.png" alt="" v-for="(item, index) in 3"
							:key="index" />>
					</view>
				</view>
				<button>邀请好友</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "App",
		data() {
			return {
				reword: [{
						number: " 0.00",
						text: "今日奖励",
						show: 1,
					},
					{
						number: "0.00",
						text: "累计奖励",
						show: 0,
					},
				],
				number: 5,
			};
		},
	};
</script>

<style lang="scss" scoped>
	.body {
		padding: 20rpx;
		min-height: 100vh;
		.distribution {
			width: 100%;
			// display: flex;
			// flex-direction: column;

			.top {
				width: 100%;
				height: 200px;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				color: white;
				background: #03BB7A;
				font-size: 30px;
				font-weight: 1000;

				.left {
					width: 60%;
				}

				.right {
					width: 60%;
					display: flex;
					align-items: top;
					justify-content:flex-end;
				}
			}

			.main {
				width: 90%;
				padding-left: 10px;
				padding-right: 10px;
				margin: 0 auto;
				margin-top: 10px;
				background: rgb(255, 255, 255);
				border-radius: 10px;

				.title {
					display: flex;
					justify-content: space-between;
					margin-top: 20px;

					.big {
						font-weight: 500;
						font-size: larger;
					}

					.small {
						font-size: small;
						letter-spacing: 0.2rem;
						color: rgb(173, 172, 172);
					}
				}

				.text {
					font-size: small;
					color: rgb(148, 147, 147);
					margin-top: 10px;
				}

				.number {
					width: 100%;
					margin-top: 10px;
					display: flex;
					align-items: center;

					.reword {
						width: 120px;
						display: flex;
						align-items: center;
						margin-bottom: 16px;

						.content {
							display: flex;
							flex-direction: column;

							.big {
								font-weight: 800;
								margin-bottom: 8px;

								.short {
									font-weight: 500;
									font-size: small;
								}
							}
						}

						.line {
							width: 1px;
							height: 35px;
							margin: 0 auto;
							background: rgb(238, 238, 238);
						}
					}

					.watermark {
						color: rgb(233, 233, 233);
						font-size: 36px;
						font-weight: 1000;
						text-align: right;
					}
				}


			}

			.mainbot {
				.friend {
					margin-bottom: 10px;
					padding-top: 10px;
					display: flex;
					justify-content: space-between;
					align-items: center;

					.right {
						display: flex;
						align-items: center;
						color: rgb(173, 172, 172);

						image {
							width: 20px;
							height: 20px;
							margin-top: 2px;
							margin-left: -5px;
							background: #000;
							border-radius: 50%;
						}
					}

					.left {
						span {
							font-weight: 800;
						}
					}
				}

				button {
					width: 100%;
					height: 40px;
					line-height: 40px;
					margin-bottom: 16px;
					letter-spacing: 0.1rem;
					color: aliceblue;
					background: rgb(51, 51, 51);
					outline: none;
					border: 0;
					border-radius: 5px;
				}
			}
		}
	}
</style>