<template>
	<view>
		<view class="Dstime">
			<u-count-down :time="1800000" format="mm:ss"></u-count-down>
		</view>
		<p class="Dstimetext">剩余支付时间:</p>
		<view class="pay">
			<u-avatar :text="TXimg" size="50" fontSize="18" randomBgColor></u-avatar>
			<view class="PayInf">
				<u--text size="18" type="success" mode="price" text="20"></u--text>
				<view class="">预约桌号:{{zwindex+1}}
				</view>
				<view class="">预约时间:<p>{{MdValue}}</p>
				</view>
				<view class="">预约地址:<p>{{MdDetail.address}}</p>
				</view>
			</view>
		</view>
		<view class="payMode">
			<p class="payModetitle">选择支付方式:</p>
			<view class="payRadio">
				<u-radio-group placement="column" icon-placement="right">
					<u-radio labelSize="16" v-for="(item, index) in radiovalue" activeColor="#03BB7A" :name="item.name"
						:label="item.name"></u-radio>
				</u-radio-group>
			</view>
		</view>
		<view class="paybut">
			<u-button @click="Pay()" loadingText="加载中" text="支付" color="#03BB7A"></u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				Paytime: '',
				MdValue: "",
				MdDetail: [],
				radiovalue: [{
					name: '微信支付',
					disabled: false
				}, {
					name: '云闪付支付',
					disabled: false
				}, {
					name: '银行卡支付',
					disabled: false
				}, {
					name: '信用卡支付',
					disabled: false
				}],
				id: "",
				StoreId: "",
				UserId: uni.getStorageSync('namekey') || 纯路人,
				TXimg: "",
				namekey: wx.getStorageSync('namekey') || 纯路人,
				zwindex: 0
			}
		},
		onLoad(e) {
			// console.log(e.arr);
			this.MdValue = e.arr
			// console.log(this.MdValue);
			this.id = e.id
			this.zwindex = parseInt(e.zwindex)
			this.Paytime = this.getTime();
			this.getDetail()
		},
		methods: {
			Pay() {
				let zwindex = this.zwindex
				let MdValue = this.MdValue
				let UserId = this.UserId
				let Name = this.MdDetail.name
				let address = this.MdDetail.address
				let orderStatus = 0
				let Store_id = this.MdDetail.Store_id
				uniCloud.callFunction({
					name: "addStoreList",
					data: {
						UserId,
						Name,
						address,
						orderStatus,
						Store_id,
						MdValue,
						zwindex
					}
				}).then(res => {
					console.log(res);
				})
				setTimeout(() => {
					uni.redirectTo({
						url: "/pages/index/me/MyOrder/MyOrder"
					})
				}, 800)
			},
			getDetail() {
				let id = this.id
				uniCloud.callFunction({
					name: "getStoreRow",
					data: {
						id
					}
				}).then(res => {
					this.MdDetail = res.result.data[0]
					console.log(this.MdDetail);
				})
				let namekey = this.namekey
				uniCloud.callFunction({
					name: "getUserRow",
					data: {
						namekey
					}
				}).then(res => {
					// console.log(res.result.data[0]);
					this.UserDetail = res.result.data[0]
					console.log(this.UserDetail);
					// wx.setStorageSync("Nickname",this.UserDetail.Nickname)
					if (this.UserDetail.Nickname != "") {
						this.TXimg = this.UserDetail.Nickname.slice(0, 1)
						console.log("Nickname", this.TXimg);
					} else {
						this.TXimg = this.UserDetail.user_name.slice(0, 3)
						console.log("UserId", this.TXimg);
					}
				})
			},
			getTime: function() {
				var date = new Date(),
					year = date.getFullYear(),
					month = date.getMonth() + 1,
					day = date.getDate(),
					hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
					minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
					second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
				month >= 1 && month <= 9 ? (month = "0" + month) : "";
				day >= 0 && day <= 9 ? (day = "0" + day) : "";
				var timer = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
				return timer;
			},
		}
	}
</script>

<style>
	.Dstime {
		margin: 40px;
		display: flex;
		justify-content: center;
	}

	.Dstimetext {
		text-align: center;
		font-weight: bold;
		color: #03BB7A;
	}

	.pay {
		width: 80vw;
		height: 30vh;
		border: 2px solid #ccc;
		margin: 30px auto;
		border-radius: 20px;
		box-shadow: 1px 2px 8px 1px #ccc;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 10px;
	}

	.pay image {
		width: 62px;
		height: 62px;
		margin: 10px;
		border-radius: 50%;
	}

	.PayInf {
		width: 65%;
		font-size: 14px;
		margin-left: 20rpx;
	}

	.PayInf view {
		padding: 4px 0;
		font-weight: bold;
	}

	.PayInf view p {
		font-weight: 500;
	}

	.payMode {
		width: 80vw;
		height: 20vh;
		border: 2px solid #ccc;
		margin: 30px auto;
		border-radius: 20px;
		box-shadow: 1px 2px 8px 1px #ccc;
		padding: 10px;
	}

	.payModetitle {
		font-weight: bold;
		font-size: 14px;
		padding: 10px;
	}

	.payRadio {
		padding: 10px;
	}

	.paybut {
		margin: 0 auto;
		width: 40vw;
	}
</style>