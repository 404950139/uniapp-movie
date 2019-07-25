<template>
	<view class="page-block">
		<!-- 搜索框组件 -->
		<Search @searchInp="searchInp" />
		
		<view class="movie-list page-block">
			<view class="movie-wrapper" v-for="searchSingle in searchAllList" :key="searchSingle.id">
				<image :src="searchSingle.cover" 
						:data-trailerId="searchSingle.id" 
						class="poster"
						@click="showTrailer"></image>
			</view>
		</view>
	</view>
</template>

<script>
	// 引入搜索框组件
	import Search from '@/components/search/search.vue';
	// 获取公共域名地址
	import serverUrl from '@/common/serverUrl.js';
	export default {
		data() {
			return {
				searchAllList: [],
				page: 1,
				pageSize: 15,
				totalPages: 50,
				keywords: ""
			}
		},
		methods: {
			searchInp(val) {
				this.keywords = val;
				this.searchList(true, val);
			},
			searchList(isSearch, keywords, page, pageSize) {
				const qq = serverUrl.qq;
				const url = serverUrl.serverUrl;
				// 默认的当前页数,请求个数以及关键词
				const pageQ = page || 1;
				const pageSizeQ = pageSize || 15;
				const keywordsQ = keywords || '';
				// 判断是否是搜索,如果是的话,就清空当前页的数据
				if (isSearch) {
					this.searchAllList = [];
					this.page = 1;
				};
				// 显示加载动画
				uni.showLoading({
					mask: true,
					title: "请稍后。。。"
				});
				// 查询全部预告信息
				uni.request({
					url: url + '/search/list?keywords=' + keywordsQ + '&qq=' + qq + '&page=' + pageQ + '&pageSize=' + pageSizeQ,
					method: 'POST',
					success: res => {
						if (res.data.status == 200) {
							const tempList = res.data.data.rows;
							// 把之前的数据和下拉刷新后获取的数组进行拼接
							this.searchAllList = this.searchAllList.concat(tempList);
						};
					},
					fail: () => {
						console.log('获取全部预告信息失败');
					},
					complete: () => {
						// 清楚加载动画
						uni.hideLoading();
					}
				});
			},
			// 每张图片点击跳转详情
			showTrailer(e) {
				const trailerId = e.currentTarget.dataset.trailerid;
				// 详情页面跳转
				uni.navigateTo({
					url: "../movie/movie?trailerId=" + trailerId
				});
			}
		},
		components: {
			Search
		},
		onLoad() {
			this.totalPages = Math.ceil(50 / 15);
			this.searchList(true, this.keywords, this.page, this.pageSize);
		},
		onReachBottom() {
			this.page += 1;    // 当前页数加一
			let keywords = this.keywords;	// 获取当前页的关键词
			let totalPages = this.totalPages;	// 获取总的页数
			// 如果当前页超过了总页数,那么就不再进行数据请求
			if (this.page > totalPages) {
				return;
			} else {
				this.searchList(false, keywords, this.page);
			};
		}
	}
</script>

<style>
	/* 预告片列表 */
	.poster {
		width:200upx;
		height:270upx;
	}
	.movie-list {
		display: flex;
		flex-wrap:wrap;
		padding:100upx 10upx 0 10upx;
		/* #ifdef MP-ALIPAY */
		padding:100upx 5upx 0 5upx;
		/* #endif */
	}
	.movie-wrapper {
		padding:10upx calc(130upx / 6);
	}
</style>
