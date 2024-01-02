<template>
	<view class="add">
		<view class="title">
			<input type="text" v-model="artObj.title" placeholder="请输入标题" placeholder-class="placeholderClass">
		</view>
		<view class="content">
			<editor class="myEdit" placeholder="写点什么吧.." show-img-size show-img-toolbar show-img-resize
				@ready="onEditReady" @focus="onFocus" @statuschange="onStatuschange"></editor>
		</view>
		<view class="btnGroup">
			<u-button @click="onSubmit" type="primary" text="确认发布" :disabled="!artObj.title.length"></u-button>
		</view>
		<view class="tools" v-if="toolShow">
			<view class="item" @click="clickHead">
				<text class="iconfont icon-zitibiaoti" :class="headShow ? 'active':''"></text>
			</view>
			<view class="item" @click="clickBold">
				<text class="iconfont icon-zitijiacu" :class="boldShow ? 'active':''"></text>
			</view>
			<view class="item" @click="clickItalic">
				<text class="iconfont icon-zitixieti" :class="italicShow ? 'active':''"></text>
			</view>
			<view class="item" @click="clickDivider">
				<text class="iconfont icon-fengexian"></text>
			</view>
			<view class="item" @click="clickInsertImage">
				<text class="iconfont icon-charutupian"></text>
			</view>
			<view class="item" @click="editOk">
				<text class="iconfont icon-duigou_kuai"></text>
			</view>
		</view>
	</view>
</template>

<script>
	import {getImgSrc} from "@/utils/tools.js"
	export default {
		data() {
			return {
				toolShow: false,
				headShow: false,
				boldShow: false,
				italicShow: false,
				namekey: wx.getStorageSync('namekey') || 纯路人,
				artObj:{
					title:"",
					content:"",
					description:"",
					picurls:"",
					TXimg:"",
					Nickname:"",
					user_id: wx.getStorageSync('namekey'),
					// Nickname: wx.getStorageSync('Nickname')
				}
			}
		},
		methods: {
			//点击按钮提交
			onSubmit(){
				this.editorCtx.getContents({
					success:res=>{
						this.artObj.description=res.text.slice(0,80);
						this.artObj.content=res.html;
						this.artObj.picurls=getImgSrc(res.html);
						uni.showLoading({
							title:"发布中"
						})
						this.addData();
					}
				})
			},
			//获取id所在的数据
			getData(){
				let namekey = this.namekey
				uniCloud.callFunction({
					name:"getUserRow",
					data:{
						namekey
					}
				}).then(res=>{
					console.log(res.result.data[0]);
					let UserDetail = res.result.data[0]
					if(UserDetail.Nickname != ""){
						this.artObj.TXimg = UserDetail.Nickname.slice(0,1)
						this.artObj.Nickname = UserDetail.Nickname
						console.log("Nickname",this.artObj.TXimg);
					}else{
						this.artObj.TXimg = UserDetail.user_name.slice(0,3)
						this.artObj.Nickname = UserDetail.user_name
						console.log("UserId",this.artObj.TXimg);
					}
				})
			},
			//发布添加
			addData(){
				let artObj = this.artObj
				uniCloud.callFunction({
					name:"addArticle",
					data:{
						artObj
					}
				}).then(res=>{
					uni.hideLoading();
					uni.showToast({
						title:"发布成功"
					})
					setTimeout(()=>{
						wx.redirectTo({
							url:"/pages/index/StoreInquiry"
						})
					},800)
				})
			},
			//图像上传
			clickInsertImage(){
				uni.chooseImage({
					success:async res=>{
						uni.showLoading({
							title:"上传中",
							mask:true
						})
						for(let item of res.tempFiles){
							let res = await uniCloud.uploadFile({
								filePath:item.path,
								cloudPath:toString(item.name)
							})
							this.editorCtx.insertImage({
								src:res.fileID
							})
						}
						uni.hideLoading()
					}
				})
			},
			//打钩
			editOk() {
				this.toolShow = false;
			},
			//倾斜
			clickItalic() {
				this.italicShow = !this.italicShow
				this.editorCtx.format("italic")
			},
			//加粗
			clickBold() {
				this.boldShow = !this.boldShow
				this.editorCtx.format("bold")
			},
			//添加标题
			clickHead() {
				this.headShow = !this.headShow
				this.editorCtx.format("header", this.headShow ? 'h2' : false)
			},
			//添加分割线
			clickDivider() {
				this.editorCtx.insertDivider()
			},
			//初始化
			onEditReady() {
				uni.createSelectorQuery().in(this).select('.myEdit').fields({
					size: true,
					context: true,
				}, res => {
					// console.log(res);
					this.editorCtx = res.context
				}).exec()
			},
			
			checkStatus(name,detail,obj){
				if(detail.hasOwnProperty(name)){
					this[obj] = true;
				}else{
					this[obj] = false;
				}
			},
			
			//当样式发生改变时
			onStatuschange(e){
				let detail = e.detail;
				this.checkStatus("header",detail,"headShow");
				this.checkStatus("bold",detail,"boldShow");
				this.checkStatus("italic",detail,"italicShow");
			},
			//获取焦点
			onFocus() {
				this.toolShow = true
			},
			
			onLoad(){
				this.getData()
			}
		}
	}
</script>

<style scoped lang="scss">
	/deep/ .ql-bank::before {
		font-size: normal;
		color: #e0e0e0;
	}

	.add {
		padding: 30rpx;

		.title {
			input {
				height: 120rpx;
				font-size: 46rpx;
				border-bottom: 1px solid #e4e4e4;
				margin-bottom: 30rpx;
				color: #000;
			}

			.placeholderClass {
				color: #e0e0e0;
			}
		}

		.content {
			.myEdit{
				height: calc(100vh - 500rpx);
				margin-bottom: 30rpx;
			}
		}

		.tools {
			width: 100%;
			height: 80rpx;
			background: #fff;
			border-top: 1rpx solid #f4f4f4;
			position: fixed;
			left: 0;
			bottom: 20rpx;
			display: flex;
			justify-content: space-around;
			align-items: center;

			.iconfont {
				font-size: 36rpx;
				color: #333;

				&.active {
					color: #03BB7A
				}
			}
		}

		// .item{
		// 	padding-bottom: 20rpx;
		// 	input,textarea{
		// 		border: 1rpx solid #eee;
		// 		height: 80rpx;
		// 		padding: 0 20rpx;
		// 	}
		// 	textarea{
		// 		height: 200rpx;
		// 		width: 100%;
		// 		box-sizing: border-box;
		// 	}
		// 	button{
		// 		margin-bottom: 20rpx;
		// 	}
		// }
	}
</style>