<!-- 热门组件 -->
<template name="hot">
	<view class='page-block hot'>
		<view class="hot-title-wrapper">
			<image :src="iconSrc" class="hot-ico"></image>
			<view class="hot-title">
				{{ iconTitle }}
			</view>
		</view>
		
		<!-- 热门超英 -->
		<scroll-view scroll-x="true" class="hot-scroll" v-if="hotSuper" >
			<view class="single-poster" v-for="hotSuper in hotSuperList" :key="hotSuper.id" @click="turnMovie(hotSuper.id)">
				<view class="poster-wrapper">
					<image :src="hotSuper.cover" class="poster"></image>
					<view class="movie-name">
						{{ hotSuper.name }}
					</view>
				</view>
				<Stars :score="hotSuper.score" />
			</view>
		</scroll-view>
		
		<!-- 热门预告 -->
		<view class="hot-movies" v-if="hotTrailer">
			<video v-for="(trailer, index) in hotTrailerList" 
					:key="index" 
					:src="trailer.trailer" 
					:poster="trailer.poster"
					class="hot-movie-single"
					controls
					:id="trailer.id"
					:data-playingIndex="trailer.id"
					@play="meIsPlaying"></video>
		</view>
		
		<!-- 猜你喜欢 -->
		<view class="guess-u-like" v-if="guessUlike">
			<view class="single-like-movie" 
					v-for="(guessU, index) in guessUlikeList"
					:key="guessU.id">
				<image :src="guessU.cover" class="like-movie"></image>
				<view class="movie-desc">
					<view class="movie-title">
						{{ guessU.name }}
					</view>
					<Stars :score="guessU.score" :showNum="1" />
					<view class="movie-info">
						{{ guessU.basicInfo }}
					</view>
					<view class="movie-info">
						{{ guessU.releaseDate }}
					</view>
				</view>
				<Praise />
			</view>
		</view>
		
	</view>
</template>

<script>
	// 获取公共域名地址
	import serverUrl from '@/common/serverUrl.js';
	// 导入评分组件
	import Stars from '@/components/index/stars.vue';
	// 导入点赞组件
	import Praise from '@/components/index/praise.vue';
	export default {
		name: "hot",
		data() {
			return {
				hotSuperList: [],
				hotTrailerList: [],
				guessUlikeList: [],
			}
		},
		props: {
			hotSuper: {
				type: Boolean,
				default: false
			},
			hotTrailer: {
				type: Boolean,
				default: false
			},
			guessUlike: {
				type: Boolean,
				default: false
			},
			iconSrc: {
				type: String,
				default: ''
			},
			iconTitle: {
				type: String,
				default: ''
			}
		},
		components: {
			Stars,
			Praise
		},
		created() {
			const qq = serverUrl.qq;
			const url = serverUrl.serverUrl;
			// 查询热门超英数据
			uni.request({
				url: url + '/index/movie/hot?type=superhero&qq=' + qq,
				method: 'POST',
				success: res => {
					if (res.data.status == 200) {
						this.hotSuperList = res.data.data;
					}
				},
				fail: () => {
					console.log('获取热门超英失败');
				}
			});
			// 查询热门预告数据
			uni.request({
				url: url + '/index/movie/hot?type=trailer&qq=' + qq,
				method: 'POST',
				success: res => {
					if (res.data.status == 200) {
						this.hotTrailerList = res.data.data;
					}
				},
				fail: () => {
					console.log('获取热门预览失败');
				}
			});
			// 查询猜你喜欢数据
			uni.request({
				url: url + '/index/guessULike?qq=' + qq,
				method: 'POST',
				success: res => {
					if (res.data.status == 200) {
						this.guessUlikeList = res.data.data;
					}
				},
				fail: () => {
					console.log('获取猜你喜欢失败');
				}
			});
		},
		methods: {
			refresh() {
				const qq = serverUrl.qq;
				const url = serverUrl.serverUrl;
				uni.showLoading({
					mask: true
				})
				// 获取查询猜你喜欢数据
				uni.request({
					url: url + '/index/guessULike?qq=' + qq,
					method: 'POST',
					success: res => {
						if (res.data.status == 200) {
							this.guessUlikeList = res.data.data;
						}
					},
					fail: () => {
						console.log('获取猜你喜欢失败');
					},
					complete: () => {
						uni.hideLoading();
						uni.stopPullDownRefresh();
					}
				});
			},
			// 热门超英跳转到电影详情页
			turnMovie(id) {
				uni.navigateTo({
					url: "../../pages/movie/movie?trailerId=" + id
				})
			},
			// 当一个视屏播放时其他视频都要暂停
			meIsPlaying(e) {
				let trailerId = '';
				if (e) {
					trailerId = e.currentTarget.dataset.playingindex;
					this.videoContext = uni.createVideoContext(trailerId);
				};
				let hotTrailerList = this.hotTrailerList;
				for (let i = 0 ; i < hotTrailerList.length ; i ++) {
					let tempId= hotTrailerList[i].id;
					if (tempId != trailerId) {
						// 必须要传入第二个参数this,因为是自定义的组件
						uni.createVideoContext(tempId, this).pause();
					};
				};
			}
		}
	}
</script>

<style scoped>
	.hot {
		margin-top:12upx;
		padding:20upx;
		vertical-align: middle;
	}
	.hot-title-wrapper {
		display: flex;
		margin-bottom:12upx;
	}
	.hot-ico {
		width:30upx;
		height:30upx;
		margin-top:15upx;
	}
	.hot-title {
		font-size:20px;
		margin-left:20upx;
		font-weight:bold;
	}
	
	/* 热门超英 */
	.hot-scroll {
		width:100%;
		white-space: nowrap;
	}
	.single-poster {
		display: inline-block;
		margin-right:20upx;
	}
	.poster-wrapper {
		display: flex;
		flex-direction: column;
	}
	.poster {
		width:200upx;
		height:270upx;
	}
	.movie-name {
		width:200upx;
		margin-top:10upx;
		font-size:14px;
		font-weight:bold;
		white-space:nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
	/* 热门预告 */
	.hot-movies {
		display: flex;
		flex-wrap:wrap;
		justify-content: space-between;
	}
	.hot-movie-single {
		width:350upx;
		height:220upx;
		margin-top:10upx;
	}
	
	/* 猜你喜欢 */
	.guess-u-like {
		display: flex;
		flex-direction: column;
	}
	.single-like-movie {
		display: flex;
		justify-content: space-between;
		padding:30upx 20upx;
	}
	.like-movie {
		width:180upx;
		height:240upx;
		border-radius:3%;
	}
	.movie-desc {
		width:340upx;
		display: flex;
		flex-direction:column;
		padding:0 15upx;
	}
	.movie-title {
		white-space:nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.movie-info {
		color:#808080;
		font-size:12px;
	}
</style>