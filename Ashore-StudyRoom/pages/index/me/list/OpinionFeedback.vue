<template>
	<view class="body">
		<view class="opinion">
			<textarea name="" id="" cols="30" rows="10" placeholder="请输入反馈内容，我们会为您更好服务"></textarea>
			<view class="cpu">
				<span>{{ write }}/{{ total }}</span>
			</view>
			<view class="picture">
				<view class="send">上传照片</view>
			</view>
			<button>提交反馈</button>
		</view>
	</view>
</template>

<script>
	export default {
		name: "App",
		data() {
			return {
				write: 0,
				total: 200,
			};
		},
	};
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	.body {
		min-height: 95vh;
		background-color: #f5f5f5;
	}

	.opinion {
		width: 90%;
		margin: 0 auto;
		padding-top: 20rpx;
		display: flex;
		flex-direction: column;
	}

	.opinion>textarea {
		border: 0;
		border-radius: 10px 10px 0 0;
		width: 98.5%;
		height: 80px;
		padding: 5px 0 0 5px;
		outline: none;
	}

	.opinion>.cpu {
		width: 100%;
		font-size: small;
		display: flex;
		justify-content: end;
		background-color: #ffffff;
	}

	.cpu>span {
		margin-right: 10px;
	}

	.opinion>.picture {
		width: 100%;
		height: 120px;
		display: flex;
		justify-content: start;
		background-color: #ffffff;
	}

	.picture>.send {
		width: 80px;
		height: 80px;
		margin: 20px 0 10px 10px;
		background: #f2f2f2;
	}

	.opinion>button {
		outline: none;
		width: 90%;
		height: 30px;
		line-height: 30px;
		margin: 25px auto;
		border-radius: 10px;
		border: 0;
		color: #ffffff;
		background: #cccccc;
	}
</style>