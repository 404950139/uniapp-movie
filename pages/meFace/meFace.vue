<template>
	<view class="page page-fill">
		
		<view class="pending-wapper">
			<image id="face" :src="tempFace" class="pending-face" mode="scaleToFill"></image>
		</view>
		
		<view class="notice">
			<view class="notice-words">
				* 请从相册中选择等比宽高的图片噢~
			</view>
		</view>
		
		<view class="footer-opertor">
			<view class="opertor-words" @click="changePendingFace">
				重新选择
			</view>
			<view class="opertor-words" @click="upload">
				确认上传
			</view>
		</view>
		
	</view>
</template>

<script>
	// 获取公共域名地址
	import serverUrl from '@/common/serverUrl.js';
	export default {
		data() {
			return {
				tempFace: ""
			}
		},
		methods: {
			// 重新选择头像
			changePendingFace() {
				uni.chooseImage({
					count:1,
					sizeType:["compressed"],
					sourceType: ["album"],
					success: res => {
						// 获得临时路径
						const tempFilePath =  res.tempFilePaths[0];
						this.tempFace = tempFilePath;
					}
				});
			},
			// 确认上传
			upload() {
				const qq = serverUrl.qq;
				const url = serverUrl.serverUrl;
				
				const globalUser = this.getGlobalUser("globalUser");
				uni.showLoading({
					mask: true,
					title: "上传中，请稍后"
				});
				uni.uploadFile({
					url: url + '/user/uploadFace?qq=' + qq + '&userId=' + globalUser.id,
					filePath: this.tempFace,
					name: "file",
					header: {
						"headerUserId":globalUser.id,
						"headerUserToken":globalUser.userUniqueToken
					},
					success: res => {
						const resDataStr = res.data;
						const resData = JSON.parse(resDataStr);
						if (resData.status == 200) {
							// 获得最新的用户数据
							const userInfo = resData.data;
							uni.setStorageSync("globalUser", userInfo);
							uni.navigateBack({
								delta:1
							});
						} else if (resData.status == 500 || resData.status == 502) {
							uni.showToast({
								title: resData.msg,
								duration:2000,
								image: "../../static/icos/error.png"
							});
						}
					},
					complete: () => {
						uni.hideLoading();
					}
				});
			}
		},
		onLoad(params) {
			const tempFilePath = params.tempFilePath;
			this.tempFace = tempFilePath;
		}
	}
</script>

<style scoped>
/* 页面铺满屏幕 */
.page-fill {
	width:100%;
	height: 100%;
	position: absolute;
	background: black;
}

.pending-wapper {
	display: flex;
	flex-direction: row;
	justify-content: center;
	
	margin-top: 40upx;
}
.pending-face {
	width: 600upx;
	height: 600upx;
}

.notice {
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
}

.notice-words {
	color: gray;
	font-size: 13px;
	margin-top: 30upx;
	width: 600upx;
}

/* 底部操作 start */
.footer-opertor {
	position: fixed;
	bottom: 0;
	
	border-top: #515050 solid 1px;
	width: 100%;
	
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	
	padding: 30upx;
}
.opertor-words {
	color: #e8e5e5;
	font-size: 16px;
	width: 200upx;
}
/* 底部操作 end */
</style>
