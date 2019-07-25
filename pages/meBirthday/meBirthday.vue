<template>
	<view class="page page-fill">
		<form @submit="formSubmitBirthday">
			<view class="page-block" style="margin-top:20upx;">
				<picker mode="date" @change="dataChange">
					<view class="birthday">{{ birthday }}</view>
				</picker>
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
				globalUser: {},
				birthday: ""
			}
		},
		onLoad() {
			const globalUser =  this.getGlobalUser("globalUser");
			this.globalUser = globalUser;
			this.birthday = globalUser.birthday;
		},
		methods: {
			// 改变显示的日期
			dataChange(e) {
				this.birthday = e.detail.value;
			},
			formSubmitBirthday(e) {
				const qq = serverUrl.qq;
				const url = serverUrl.serverUrl;
				const birthday = this.birthday;
				// 修改昵称请求
				uni.request({
					url: url + '/user/modifyUserinfo?qq=' + qq,
					data: {
						"userId": this.globalUser.id,
						"birthday": birthday
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
	.birth-inpug {
		background-color:white;
		height:80upx;
		line-height:40upx;
		padding-left:20upx;
	}
	.birthday {
		background-color:white;
		height:80upx;
		padding-left:20upx;
		padding-top:30upx;
	}
	.submitBtn {
		width:95%;
		margin-top:40upx;
	}
</style>
