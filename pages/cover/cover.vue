<template>
	<view class="black">
		<image :src="cover" 
				mode="widthFix"
				class="cover"
				@longpress="operator"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cover: ''
			}
		},
		methods: {
			operator() {
				uni.showActionSheet({
					itemList:["保存图片到本地"],
					success: res => {
						if (res.tapIndex == 0) {
							uni.showLoading({
								title: "图片保存中..."
							});
							uni.downloadFile({
								url: this.cover,
								success: result => {
									// 保存为临时文件
									const tempFilePath = result.tempFilePath;
									uni.saveImageToPhotosAlbum({
										filePath: tempFilePath,
										success: () => {
											uni.showToast({
												title: "保存成功",
												duration: 2000
											})
										},
										complete: () => {
											uni.hideLoading();
										}
									})
								}
							});
						}
					},
					complete: () => {
						uni.hideLoading();
					}
				})
			}
		},
		onLoad(e) {
			this.cover = e.cover;
			// 通过API设置导航栏的颜色
			uni.setNavigationBarColor({
				// 前景色
				frontColor: "#ffffff",
				// 背景颜色
				backgroundColor: "#000000"
			});
		}
	}
</script>

<style scoped>
	.black {
		background-color:#000000;
		width:100%;
		height:100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		position:fixed;
	}
	.cover {
		align-self: center;
	}
</style>
