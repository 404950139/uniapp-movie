<template>
	<view class="page page-fill">
		<form @submit="formSubmitSex">
			<view class="page-block" style="margin-top:20upx;">
				<radio-group class="radio-sex" @change="changeSex">
					<label class="radio-single">
						<radio value="1" :checked="sex == 1" />男
					</label>
					<label class="radio-single">
						<radio value="0" :checked="sex == 0" />女
					</label>
				</radio-group>
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
				sex: "-1"
			}
		},
		onLoad() {
			const globalUser =  this.getGlobalUser("globalUser");
			this.globalUser = globalUser;
			this.sex = globalUser.sex;
		},
		methods: {
			// 修改性别
			changeSex(e) {
				this.sex = e.detail.value;
			},
			// 发送修改性别请求
			formSubmitSex(e) {
				const qq = serverUrl.qq;
				const url = serverUrl.serverUrl;
				const sex = this.sex;
				// 修改昵称请求
				uni.request({
					url: url + '/user/modifyUserinfo?qq=' + qq,
					data: {
						"userId": this.globalUser.id,
						"sex": sex
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
	.radio-sex {
		display: flex;
		flex-direction:column;
	}
	.radio-single {
		padding:20upx 20upx;
	}
	.submitBtn {
		width:95%;
		margin-top:40upx;
	}
</style>
