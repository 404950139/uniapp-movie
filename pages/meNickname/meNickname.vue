<template>
	<view class="page page-fill">
		<form @submit="formSubmitNickname">
			<view class="page-block" style="margin-top:20upx;">
				<input type="text" 
						:value="globalUser.nickname" 
						name="nickname"
						class="input"
						placeholder="请输入昵称"
						placeholder-class="graywords" 
						maxlength="10" />
			</view>
			
			<button type="primary" form-type="submit" class="submitBtn">提交</button>
		</form>
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
		onLoad() {
			const globalUser =  this.getGlobalUser("globalUser");
			this.globalUser = globalUser;
		},
		methods: {
			formSubmitNickname(e) {
				const qq = serverUrl.qq;
				const url = serverUrl.serverUrl;
				const nickname = e.detail.value.nickname;
				// 修改昵称请求
				uni.request({
					url: url + '/user/modifyUserinfo?qq=' + qq,
					data: {
						"userId": this.globalUser.id,
						"nickname": nickname
					},
					method: "POST",
					header: {
						"headerUserId": this.globalUser.id,
						"headerUserToken": this.globalUser.userUniqueToken
					},
					success: res => {
						const resData = res.data;
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
					}
				});
			}
		}
	}
</script>

<style scoped>
	.page-fill {
		width:100%;
		height:100%;
		position:absolute;
	}
	.graywords {
		color:#eaeaea;
	}
	.input {
		height:80upx;
		line-height:80upx;
		width:500upx;
		margin-left:40upx;
	}
	.submitBtn {
		width:95%;
		margin-top:40upx;
	}
</style>
