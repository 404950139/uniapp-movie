<template>
	<view class="page">
		<!-- 轮播图 start -->
		<Swiper :swiperImgListPay="swiperImgList" class="index-swiper" />
		<!-- 轮播图 end -->
		
		<!-- 热门超英 start -->
		<Hot :hotSuper=true 
				:iconSrc="'../../static/icos/hot.png'" 
				:iconTitle="'热门超英'" />
		<!-- 热门超英 end -->
		
		<!-- 热门预告 start -->
		<Hot :hotTrailer=true :iconSrc="'../../static/icos/interest.png'" :iconTitle="'热门预告'" />
		<!-- 热门预告 end -->
		
		<!-- 猜你喜欢 start -->
		<Hot :guessUlike=true ref="gUlike" :iconSrc="'../../static/icos/guess-u-like.png'" :iconTitle="'猜你喜欢'" />
		<!-- 猜你喜欢 end -->
	</view>
</template>

<script>
	// 引入轮播图组件
	import Swiper from '@/components/index/swiper.vue';
	// 引入热门组件
	import Hot from '@/components/index/hot.vue';
	// 获取公共域名地址
	import serverUrl from '@/common/serverUrl.js';
	export default {
		data() {
			return {
				swiperImgList: [],
			}
		},
		components: {
			Swiper,
			Hot
		},
		onLoad() {
			// #ifdef MP-ALIPAY || MP-TOUTIAO
			const qq = serverUrl.qq;
			const url = serverUrl.serverUrl;
			uni.request({
				url: url + '/index/carousel/list?qq=' + qq,
				method: 'POST',
				success: res => {
					if (res.data.status == 200) {
						this.swiperImgList = res.data.data;
					}
				},
				fail: () => {
					console.log('获取轮播图数据失败');
				}
			});
			// #endif
		},
		methods: {

		},
		// 下拉刷新
		onPullDownRefresh() {
			// 触发子组件猜你喜欢的刷新
			this.$refs["gUlike"].refresh();
		}
	}
</script>

<style>
	.index-swiper {
		height:440upx;
	}
</style>
