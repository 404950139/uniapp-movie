<!-- 登录注册页面 -->
<template>
	<view class="body">
		<form @submit="formSumit">
			
			<!-- 头像 -->
			<view class="face-wrapper">
				<image src="../../static/icos/default-face.png" class="face"></image>
			</view>
			
			<!-- 账号密码 -->
			<view class="info-wrapper">
				<label class="words-lbl">账号</label>
				<input type="text" name="username" value="" class="input" placeholder="请输入用户名">
			</view>
			<view class="info-wrapper" style="margin-top: 40upx">
				<label class="words-lbl">密码</label>
				<input type="text" name="password" password="true" class="input" placeholder="请输入密码" value="" />
			</view>
			
			<!-- 按钮 primary在微信小程序为绿色，其他的设备为蓝色 -->
			<button type="primary" form-type="submit" style="margin-top: 60upx;width:90%">注册/登录</button>
		</form>
		
		<!-- 第三方登录h5不支持，所以隐藏掉 -->
		<!-- #ifndef H5 -->
		<view class="third-wrapper">
			<view class="third-line">
				<view class="single-line">
					<view class="line"></view>
				</view>
				
				<view class="third-words">
					第三方账号登录
				</view>
				<view class="single-line">
					<view class="line">	</view>
				</view>
			</view>
		</view>
		<!-- #endif -->
		
		<view class="third-icos-wrapper">
			<!-- 5+app 用qq 微信 微博登录  小程序用微信小程序登录 -->
			<!-- #ifdef APP-PLUS -->
			<image src="../../static/icos/weixin.png" data-logintype="weixin" @click="appOAuthLogin" class="third-ico"></image>
			<image src="../../static/icos/qq.png" class="third-ico" data-logintype="qq" @click="appOAuthLogin" style="margin-left:80upx;"></image>
			<image src="../../static/icos/weibo.png" class="third-ico" data-logintype="sinaweibo" @click="appOAuthLogin" style="margin-left:80upx;"></image>
			<!-- #endif -->
			<!-- #ifdef MP-WEIXIN -->
			<button type="primary" open-type="getUserInfo" @getuserinfo="wxLogin" class="third-btn-ico"></button>
			<!-- #endif -->
		</view>
		
	</view>
</template>

<script>
	// 获取公共域名地址
	import serverUrl from '@/common/serverUrl.js';
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			appOAuthLogin(e) {
				// 获取用户的登录类型
				const logintype = e.currentTarget.dataset.logintype;
				
				const qq = serverUrl.qq;
				const url = serverUrl.serverUrl;
				
				// 授权登录
				uni.login({
					provider:logintype,
					success: res => {
						// 授权登录成功后,获取用户的信息
						uni.getUserInfo({
							provider:logintype,
							success: info => {
								const userInfo = info.userInfo;
								let face = "";
								let nickname = "";
								let openIdUid = "";
								if (logintype == "weixin") {
									face = userInfo.avatarUrl;
									nickname = userInfo.nickName;
									openIdUid = userInfo.openId;
								} else if (logintype == "qq") {
									openIdUid = userInfo.openId;
									nickname = userInfo.nickname;
									face = userInfo.figureurl_qq_2;
								} else if (logintype == "sinaweibo") {
									openIdUid = userInfo.id;
									nickname = userInfo.nickname;
									face = userInfo.avatar_large;
								}
								
								// 调用开发者后台,执行一键注册或登录
								uni.request({
									url: url + '/appUnionLogin/' + logintype + '?qq=' + qq,
									data: {
										"openIdOrUid": openIdUid,
										"nickname": nickname,
										"face": face
									},
									method: "POST",
									success: (result) => {
										if (result.data.status == 200) {
											const userInfo = result.data.data;
											// 保存用户信息到全局的缓存中
											uni.setStorageSync("globalUser", userInfo);
											// 切换页面跳转
											uni.switchTab({
												url: "../me/me"
											});
										}
									}
								})
							}
						})
					}
				})
			},
			// 实现在微信小程序的微信登录
			wxLogin(e) {
				// 通过微信开放能力,获得微信用户的基本信息
				const userInfo = e.detail.userInfo;
				
				const qq = serverUrl.qq;
				const url = serverUrl.serverUrl;
				
				// 实现微信登录
				uni.login({
					provider: "weixin",
					success: loginResult => {
						// 获得微信登录的code:授权码
						const code = loginResult.code;
						// 设置登录到哪个对应的微信小程序
						const loginToWhichMP = 1;
						uni.request({
							url: url + '/stu/mpWXLogin/' + code + '?qq=' + qq,
							data: {
								"avatarUrl": userInfo.avatarUrl,
								"nickName": userInfo.nickName,
								"whichMP": loginToWhichMP
							},
							method: "POST",
							success: res => {
								console.log(res);
								const userInfo = res.data.data;
								// 保存用户信息到全局的缓存中
								uni.setStorageSync("globalUser", userInfo);
								// 切换页面跳转
								uni.switchTab({
									url: "../me/me"
								});
							}
						})
					}
				});
			},
			formSumit(e) {
				const qq = serverUrl.qq;
				const url = serverUrl.serverUrl;
				const username = e.detail.value.username;
				const password = e.detail.value.password;
				
				// 发起注册/登录请求
				uni.request({
					url: url + '/user/registOrLogin?qq=' + qq,
					data: {
						"username": username,
						"password": password
					},
					method: 'POST',
					success: res => {
						if (res.data.status == 200) {
							const userInfo = res.data.data;
							// 保存用户信息到全局的缓存中
							uni.setStorageSync("globalUser", userInfo);
							// 切换页面跳转
							uni.switchTab({
								url: "../me/me"
							});
						} else if (res.data.status == 500) {
							uni.showToast({
								title: res.data.msg,
								duration:2000,
								image:"../../static/icos/error.png"
							});
						}
					},
					fail: () => {
						console.log('登录或注册失败');
					}
				});
			}
		}
	}
</script>

<style scoped>
	.body {
		border-top:1px solid @dbdbda;
		padding:0 40upx;
	}
	
	/* 头像 */
	.face-wrapper {
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-top:120upx;
		margin-bottom:120upx;
	}
	.face {
		width:160upx;
		height:160upx;
	}

	/* 注册登录 */
	.info-wrapper {
		display: flex;
		justify-content: center;
		border-bottom:1px solid #dbdbda;
		padding-bottom:20upx;
	}
	.words-lbl {
		color:#808080;
	}
	.input {
		width:500upx;
		margin-left:40upx;
	}
	.graywords {
		color:#eaeaea;
	}
	
	/* 第三方登录 */
	.third-wrapper {
		width: 100%;
		/* 固定底部 */
		/* bottom: 0;
		position: fixed; */
		
		margin-top: 60upx;
		
	}
	
	.third-line {
		display: flex;
		flex-direction: row;
		justify-content: center
	}
	
	.third-words {
		color: #A9A9A9;
		font-size: 13px;
		
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	
	.single-line {
		padding: 15upx 20upx;
		width: 25%;
		align-items: center;
	}
	
	.third-icos-wrapper {
		margin-top: 30upx;
		
		display: flex;
		flex-direction: row;
		justify-content: center
	}
	
	.third-ico {
		width: 60upx;
		height: 60upx;
	}
	
	.third-btn-ico {
		background-image:url(http://122.152.205.72:88/group1/M00/00/05/CpoxxFxFO-yAOjTaAAATCIZEzRU503.png);
		width: 60upx;
		height: 60upx;
		background-color: white;
		background-size: 60upx 60upx;
		background-repeat:no-repeat;
		border:none;
		padding: 0;
	}
	button::after{
		border: none;
	}
</style>
