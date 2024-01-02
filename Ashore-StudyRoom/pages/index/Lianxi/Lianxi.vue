<template>
	<view class="lianxi">
		<view class="tabsx">
			<u-tabs :list="list" :scrollable="false" :current="current" @click="change" lineWidth="40"
				lineColor="#03BB7A" :activeStyle="{color: '#03BB7A'}"></u-tabs>
		</view>
		<view class="liebiao" v-show="current == 0">
			<view class="lxr" @click="goChat">
				<view class="lbleft">
					<image src="../../../static/jiaoshi.jpg" alt="" srcset="">
					<view class="wz">
						<p class="dm">上岸自习室一号店</p>
						<p class="jl">周末有位置，可以预约哦！</p>
					</view>
				</view>
				<view class="lbright">
					<view class="sj">11-10</view>
				</view>
			</view>
			<view class="lxr" @click="goChat">
				<view class="lbleft">
					<image src="../../../static/jiaoshi.jpg" alt="" srcset="">
					<view class="wz">
						<p class="dm">上岸自习室二号店</p>
						<p class="jl">感谢支持！</p>
					</view>
				</view>
				<view class="lbright">
					<view class="sj">11-10</view>
				</view>
			</view>
			<view class="lxr" @click="goChat">
				<view class="lbleft">
					<image src="../../../static/jiaoshi.jpg" alt="" srcset="">
					<view class="wz">
						<p class="dm">上岸自习室三号店</p>
						<p class="jl">谢谢好评！</p>
					</view>
				</view>
				<view class="lbright">
					<view class="sj">11-10</view>
				</view>
			</view>
		</view>
		<view class="Notice" v-show="current == 1">
			<view class="lxr" @click="goChat">
				<view class="lbleft">
					<image src="../../../static/bg.jpg" alt="" srcset="">
					<view class="wz">
						<p class="dm">活动通知</p>
						<p class="jl">领限时福利！</p>
					</view>
				</view>
				<view class="lbright">
					<view class="sj">11-10</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					name: '消息'
				}, {
					name: '通知'
				}],
				current: 0
			}
		},
		methods: {
			change(index) {
				if(this.current == 0){
					this.current = 1;
				}else{
					this.current = 0;
				}
				
			},
			goChat(){
				uni.navigateTo({
					url:"/pages/index/Lianxi/chat"
				})
			}
		}
	}
</script>

<style>
	.lianxi {
		width: 100vw;
		min-height: 100vh;
		background-color: #E9E9E9;
	}

	.tabsx {
		width: 100vw;
		padding-bottom: 10px;
		display: flex;
		justify-content: center;
		border-bottom: 2px solid #03BB7A;
		background-color: white;
	}

	.liebiao {
		margin: 10px;
		padding: 8px;
		border-radius: 10px;
		height: 80vh;
		background-color: white;
	}
	.Notice{
		margin: 10px;
		padding: 8px;
		border-radius: 10px;
		height: 80vh;
		background-color: white;
	}
	.lxr{
		display: flex;
		justify-content: space-between;
		padding: 10px;
		border-bottom:1px solid #ccc;
		background-color: #f9f9f9;
	}
	.lbleft {
		display: flex;
	}

	.lbleft image {
		width: 46px;
		height: 46px;
		border-radius: 50%;
		margin-right: 10px;
	}

	.dm {
		font-size: 16px;
		font-weight: bold;
	}

	.jl {
		font-size: 14px;
		color: #707070;
	}

	.sj {
		color: #cccccc;
		font-size: 14px;
	}
</style>