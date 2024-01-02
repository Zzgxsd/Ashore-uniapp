<template>
	<view class="yuyue">
		<view class="yylb" v-for="(item,index) in StoreListArr" :key="index"  @click="MdIndex(item._id)">
			<view class="yytop">
				<view class="yytop-1">
					<img src="../../../static/jiaoshi.jpg" alt="" srcset="">
					<view class="">
						<p class="yybt">{{item.name}}</p>
						<p class="yypj">评价：{{item.appraise}}</p>
					</view>
				</view>
				<p class="zw">有座位</p>
			</view>
			<view class="yybottom">
				<p style="color: #cccccc;">地点：{{item.address}}</p>
				<p style="color: #F9BD69;">￥15</p>
			</view>
		</view>
		<u-loading-page :loading="loading" font-size="24" color="#03BB7A"></u-loading-page>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				StoreListArr:[],
				loading: true,
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
					console.log(res);
					this.StoreListArr=res.result.data
				})
				// console.log(uni.$u.config.v);
			},
		},
		onLoad(){
			setTimeout(() => {
				this.loading = false
			}, 1200);
			this.getData()
		}
	}
</script>

<style scoped>
	.yuyue{
		min-height: 100vh;
		background-color: #e9e9e9;
		padding: 20px;
	}
	.yylb{
		/* width: 100%; */
		background-color: white;
		margin: 0 auto;
		padding: 10px;
		border-radius: 10px;
		margin-bottom: 10px;
	}
	.yytop{
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #e6e6e6;
		padding-bottom: 10px;
	}
	.yytop-1{
		display: flex;
		
	}
	.yytop img{
		width: 60px;
		height: 50px;
		margin-right: 20px;
	}
	.yybt{
		font-size: 14px;
		font-weight: bold;
		margin-bottom: 10px;
	}
	.yypj{
		font-size: 12px;
		color: #F9BD69;
	}
	.zw{
		font-size: 10px;
		color: #0379FF;
	}
	.yybottom{
		padding-top: 10px;
		font-size: 12px;
		display: flex;
		justify-content: space-between;
	}
</style>
