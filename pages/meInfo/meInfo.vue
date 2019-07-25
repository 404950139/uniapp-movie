<template>
	<view class="page page-fill">
		<view class="page-block info-list">
			<!-- 头像 -->
			<view class="item-wrapper face-line-upbottom" @click="operator">
				<view class="info-words">
					头像
				</view>
				<view class="right-wrapper">
					<image :src="globalUser.faceImage" class="face"></image>
					<view class="arrow-block">
						<image src="../../static/icos/left-gray-arrow.png" class="arrow-ico"></image>
					</view>
				</view>
			</view>
			
			<!-- 分割线 -->
			<view class="line-top">
				<view class="line"></view>
			</view>
			
			<!-- 用户名 -->
			<view class="item-wrapper face-line-upbottom" @click="modifyNicknam">
				<view class="info-words">
					昵称
				</view>
				<view class="right-wrapper">
					<view class="gray-fields">
						{{ globalUser.nickname }}
					</view>
					<view class="arrow-block">
						<image src="../../static/icos/left-gray-arrow.png" class="arrow-ico"></image>
					</view>
				</view>
			</view>
			
			<!-- 分割线 -->
			<view class="line-top">
				<view class="line"></view>
			</view>
			
			<!-- 生日 -->
			<view class="item-wrapper face-line-upbottom" @click="modifyBirthday">
				<view class="info-words">
					生日
				</view>
				<view class="right-wrapper">
					<view class="gray-fields">
						{{ globalUser.birthday }}
					</view>
					<view class="arrow-block">
						<image src="../../static/icos/left-gray-arrow.png" class="arrow-ico"></image>
					</view>
				</view>
			</view>
			
			<!-- 分割线 -->
			<view class="line-top">
				<view class="line"></view>
			</view>
			
			<!-- 性别 -->
			<view class="item-wrapper face-line-upbottom" @click="modifySex">
				<view class="info-words">
					性别
				</view>
				<view class="right-wrapper">
					<view class="gray-fields">
						<view v-if="globalUser.sex == 1">
							男
						</view>
						<view v-else-if="globalUser.sex == 0">
							女
						</view>
						<view v-else>
							未选择
						</view>
					</view>
					<view class="arrow-block">
						<image src="../../static/icos/left-gray-arrow.png" class="arrow-ico"></image>
					</view>
				</view>
			</view>
		</view>
		
		<!-- 底部 -->
		<view class="footer-wrapper">
			<view class="footer-words" @click="cleanStorage">
				清理缓存
			</view>
			<view class="footer-words" @click="logOut" style="margin-top:10upx;">
				退出登录
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
				globalUser: {}
			}
		},
		methods: {
			// 清理缓存
			cleanStorage() {
				uni.clearStorageSync();
				uni.showToast({
					title: "清理缓存成功",
					mask: false,
					duration: 1500
				});
			},
			// 修改性别
			modifySex() {
				uni.navigateTo({
					url: "../sex/sex"
				});
			},
			// 修改昵称
			modifyNicknam() {
				uni.navigateTo({
					url: "../meNickname/meNickname"
				});
			},
			// 修改生日
			modifyBirthday() {
				uni.navigateTo({
					url: "../meBirthday/meBirthday"
				});
			},
			// 修改头像
			operator() {
				const globalUser = this.getGlobalUser("globalUser");
				uni.showActionSheet({
					itemList: ["查看我的头像", "从相册选择上传"],
					success: res => {
						const index = res.tapIndex;
						if (index == 0) {
							// 预览头像
							let faceArr = [];
							faceArr.push(globalUser.faceImage);
							uni.previewImage({
								urls: faceArr,
								current:faceArr[0]
							})
						} else if (index == 1) {
							// 选择上传头像
							uni.chooseImage({
								count:1,
								sizeType:["compressed"],
								sourceType: ["album"],
								success: res => {
									// 获得临时路径
									const tempFilePath =  res.tempFilePaths[0];
									// #ifdef H5
									uni.navigateTo({
										url: "../meFace/meFace?tempFilePath=" + tempFilePath
									});
									// #endif
									
									// #ifndef H5
									uni.navigateTo({
										url: "../faceCrop/faceCrop?tempFilePath=" + tempFilePath
									});
									// #endif
								}
							});
						}
					}
				})
			},
			logOut() {
				const qq = serverUrl.qq;
				const url = serverUrl.serverUrl;
				const globalUser = this.getGlobalUser("globalUser");
				uni.request({
					url: url + '/user/logout?qq=' + qq + '&userId=' + globalUser.id,
					method: 'POST',
					success: res => {
						if (res.data.status == 200) {
							uni.removeStorageSync("globalUser");
							uni.switchTab({
								url: '../me/me'
							});
						}
					},
					fail: () => {
						console.log('退出失败');
					}
				});
			}
		},
		onShow() {
			const globalUser =  this.getGlobalUser("globalUser");
			this.globalUser = globalUser;
		}
	}
</script>

<style scoped>
	.page-fill {
		width:100%;
		height:100%;
		position:absolute;
	}
	.info-list {
		padding:0upx 30upx 0upx 30upx;
	}
	.info-words {
		color:#333333;
		font-size:16px;
		width:25%;
		line-height:80upx;
	}
	
	.face {
		width:80upx;
		height:80upx;
		border-radius:50%;
	}
	.arrow-block {
		margin-left:10upx;
		line-height:86upx;
	}
	.arrow-ico {
		width:30upx;
		height:30upx;
	}
	.item-wrapper {
		display: flex;
		justify-content: flex-start;
	}
	.face-line-upbottom {
		margin-top:20upx;
		padding-top:20upx;
		padding-bottom:20upx;
	}
	.right-wrapper {
		width:80%;
		display: flex;
		justify-content: flex-end;
	}
	.gray-fields {
		font-size:14px;
		color:darkgray;
		line-height:80upx;
	}
	
	/* 底部 */
	.footer-wrapper {
		position:fixed;
		bottom:0;
		display: flex;
		flex-direction: column;
		width:100%;
	}
	.footer-words {
		text-align: center;
		background-color: white;
		padding:20upx;
		color:#333333;
		font-size:16px;
	}
</style>
