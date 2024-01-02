<template>
	<view>
		<view class="invite">
			<view class="top main">
				<span>{{ number }}</span><button class="radius">复制</button>
			</view>
			<view class="center main">
				<view class="item">
					<span class="big">{{ friend }}</span>
					<span class="small">直邀好友</span>
				</view>
				<view class="item">
					<span class="big">{{ secondLevel }}</span>
					<span class="small">二级好友</span>
				</view>
			</view>
			<view class="bottom main">
				<span>邀请奖励规则:</span>
				<ol class="rule">
					<li v-for="(item, index) in rewardRules" :key="index">
						{{ item.text }}
					</li>
				</ol>
			</view>
			<button>邀请好友</button>
		</view>
	</view>
</template>

<script>
	export default {
		name: "App",
		data() {
			return {
				number: 235112,
				friend: 5,
				secondLevel: 0,
				rewardRules: [{
						text: "有效用户定义:完成实名认证的的好友才能帮你创造收入，请在“我”-“实名认证”页面进行认证。",
					},
					{
						text: "直邀好友收益:绑定你邀请码的有效用户，在上岸-无人自习室小程序中下单即可为你提供贡献积分",
					},
					{
						text: "邀请关系可以通过扫二维码、填写邀请码建立，注册后未绑定邀请关系的用户，只能通过填写邀请码建立。",
					},
					{
						text: ".《Ashore》保留本活动的最终解释权，并将严查虚假邀请行为，一经发现将取消奖励资格",
					},
				],
			};
		},
	};
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	html {
		background: rgb(241, 241, 241);
	}

	button {
		outline: none;
	}

	.invite {
		width: 90%;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
	}

	.main {
		width: 100%;
		background: rgb(255, 255, 255);
		margin-top: 10px;
		border-radius: 8px;
	}

	.top {
		height: 120px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: larger;
		font-weight: 600;
		background-color: #03BB7A;
		color: white;
	}

	.center {
		height: 90px;
		display: flex;
		justify-content: space-around;
		background-color: #03BB7A;
		color: white;
	}

	.bottom {
		height: auto;
		padding-top: 20px;
	}

	.top button {
		width: 90px;
		height: 30px;
		line-height: 30px;
		background: rgb(247, 247, 247);
		margin-top: 10px;
		border: 0;
		color: orange;
	}

	.invite>button {
		width: 100%;
		height: 38px;
		line-height: 38px;
		margin-top: 70px;
		border: 0;
		color: aliceblue;
		background: rgb(34, 34, 34);
		border-radius: 8px;
	}

	.bottom>span {
		font-weight: 600;
		font-size: 14px;
		margin-left: 10px;
	}

	ol>li {
		width: 95%;
		flex-wrap: wrap;
		margin: 10px 0 15px 10px;
		margin-left: 10px;
		margin-bottom: 20px;
		list-style-position: inside;
		margin-bottom: 15px;
	}

	.rule {
		letter-spacing: 0.1rem;
		flex-wrap: wrap;
		font-size: smaller;
	}

	.item {
		display: flex;
		justify-content: center;
		flex-direction: column;
	}

	.item>.big {
		margin: 0 auto;
		font-weight: 800;
		font-size: large;
	}

	.item>.small {
		font-size: small;
	}
</style>