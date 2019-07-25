<!-- 轮播图组件 -->
<template name="swiper">
	<view class="carousel">
		<!-- #ifndef MP-ALIPAY || MP-TOUTIAO -->
		<swiper class="carousel" indicator-active-color="#ffffff" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="swiperImg in swiperImgList" :key="swiperImg.id">
				<image :src="swiperImg.image"></image>
			</swiper-item>
		</swiper>
		<!-- #endif -->
		
		<!-- #ifdef MP-ALIPAY || MP-TOUTIAO -->
		<swiper class="carousel" indicator-active-color="#ffffff" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="swiperImg in swiperImgListPay" :key="swiperImg.id">
				<image :src="swiperImg.image"></image>
			</swiper-item>
		</swiper>
		<!-- #endif -->
	</view>
</template>

<script>
	// 获取公共域名地址
	import serverUrl from '@/common/serverUrl.js';
	export default {
		name: "swiper",
		data() {
			return {
				// 图片数组
				swiperImgList: []
			}
		},
		props: {
			swiperImgListPay: {
				type: Array
			}
		},
		created() {
			// #ifndef MP-ALIPAY || MP-TOUTIAO
			// 请求轮播图数据
			const qq = serverUrl.qq;
			const url = serverUrl.serverUrl;
			uni.request({
				url: url + '/index/carousel/list?qq=' + qq,
				method: 'POST',
				success: res => {
					console.log(res);
					if (res.data.status == 200) {
						this.swiperImgList = res.data.data;
					}
				},
				fail: () => {
					console.log('获取轮播图数据失败');
				}
			});
			// #endif
		}
	}
</script>

<style scoped>
	.carousel {
		width:100%;
		height: 440upx;;
	}
	.carousel image {
		width:100%;
		height:100%;
	}
</style>
