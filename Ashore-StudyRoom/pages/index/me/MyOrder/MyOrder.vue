<template>
	<view>
		<view class="subsection">
			<u-subsection mode="subsection" :list="list" fontSize="16" activeColor="#03BB7A" :current="curNow" @change="sectionChange"></u-subsection>
		</view>
		<view class="Middle">
			<PaidVue :listOrder="listOrder2" v-if="curNow==2"></PaidVue>
			<PendCommentVue :listOrder="listOrder1" v-else-if="curNow==1"></PendCommentVue>
			<PendPaymentVue :listOrder="listOrder0" v-else="curNow==0"></PendPaymentVue>
		</view>
	</view>
</template>

<script>
	import PaidVue from './Paid.vue';
	import PendCommentVue from './PendComment.vue';
	import PendPaymentVue from './PendPayment.vue';
	export default {
		data() {
			return {
				list: ['已付款','待评价','已完成'],
				listOrder0:[],
				listOrder1:[],
				listOrder2:[],
				curNow: 0
			}
		},
		methods: {
			sectionChange(index) {
				this.curNow = index;
			},
			getList(){
				let UserId = uni.getStorageSync('namekey')
				uniCloud.callFunction({
					name:"getStoreOrder",
					data:{
						UserId
					}
				}).then(res=>{
					console.log("listOrder",res.result.data);
					const arr = res.result.data
					this.listOrder0 = arr.filter(item => item.orderStatus === 0);
					this.listOrder1 = arr.filter(item => item.orderStatus === 1);
					this.listOrder2 = arr.filter(item => item.orderStatus === 2);
				})
			}
		},
		onLoad(e) {
			this.getList()
			this.curNow = e.index
		},
		components:{
			PaidVue,
			PendCommentVue,
			PendPaymentVue
		}
	}
</script>

<style lang="scss">
	.subsection{
		padding: 10px;
		border-bottom: 1px solid #ccc;
	}
</style>