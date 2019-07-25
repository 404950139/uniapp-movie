<!-- 我的页面 -->
<template>
	<view class="page page-fill">
		<view class="header">
			<!-- 头像 -->
			<view v-if="userIsLogin">
				<image :src="userInfo.faceImage" class="face"></image>
			</view>
			<view v-else>
				<image src="../../static/user.png" class="face"></image>
			</view>
			
			<!-- 用户名称 -->
			<view class="info-wrapper" v-if="userIsLogin">
				<view class="nickname">
					{{ userInfo.nickname }}
				</view>
				<view class="nav-info">
					ID: {{ userInfo.id }}
				</view>
			</view>
			<view v-else>
				<view class="nickname regist-login" @click="turnLogin">
					注册/登录
				</view>
			</view>
			
			<!-- 设置 -->
			<view class="set-wrapper" v-if="userIsLogin" @click="setting">
				<image src="../../static/icos/settings.png" class="settings"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userIsLogin: false,
				userInfo: {}
			}
		},
		methods: {
			turnLogin() {
				uni.navigateTo({
					url: '../registLogin/registLogin'
				});
			},
			setting() {
				uni.navigateTo({
					url: '../meInfo/meInfo'
				});
			}
		},
		onShow() {
			// 判断用户是否登录
			const userInfo = this.getGlobalUser("globalUser");
			if (userInfo != null) {
				this.userIsLogin = true;
				this.userInfo = userInfo;
			} else {
				this.userIsLogin = false;
				this.userInfo = {};
			}
		}
	}
</script>

<style scoped>
	.header {
		/* #ifdef MP */
		padding:0upx 30upx 40upx 30upx;
		/* #endif */
		/* #ifndef MP */
		padding:120upx 30upx 40upx 30upx;
		/* #endif */
		background-color:#ffd655;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
	}
	.face {
		width:120upx;
		height:120upx;
		border-radius: 50%;
		flex-shrink:0;
	}
	.info-wrapper {
		width:80%;
		margin-left:40upx;
		display: flex;
		flex-direction: column;
	}
	.nickname {
		color:#6a5018;
		font-size:18px;
		font-weight:bold;
	}
	.regist-login {
		margin-left:60upx;
		margin-top:30upx;
	}
	.nav-info {
		color:#a38e62;
		font-size:14px;
		margin-top:10upx;
	}
	.set-wrapper {
		display: flex;
		justify-content: flex-end;
		width:15%;
	}
	.settings {
		width:40upx;
		height:40upx;
	}
	
	
</style>
