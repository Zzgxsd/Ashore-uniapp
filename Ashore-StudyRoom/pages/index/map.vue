<template>
	<view class="page-body">
		<view class="page-section">
			<map style="width: 100%; height: 300px;" :latitude="latitude" :longitude="longitude" :markers="covers">
			</map>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: 0, // 使用 marker点击事件 需要填写id
				title: 'map',
				latitude: 22.51193,
				longitude: 113.432587,
				covers: [{
					latitude: 22.51193,
					longitude: 113.432587,
					iconPath: '../../../static/location.png'
				}]
			}
		},
		methods: {},
		onLoad() { //钩子函数，进入之后就会立刻调用
		},
	}
</script>


<style scoped>
	.page-section {
		padding: 20px;
		background-color: white;
		border-radius: 0 0 20px 20px;
	}
</style>