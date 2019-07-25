<!-- 影片详情页 -->
<template>
	<view class="page" v-cloak>
		<!-- 视频播放 start -->
		<view class="player">
			<video :src="trailerInfo.trailer" 
					:poster="trailerInfo.poster" 
					class="movie" 
					controls
					:id="trailerId"></video>
		</view>
		<!-- 视频播放 end -->

		<!-- 影片基本信息 start -->
		<view class="movie-info">
			<image :src="trailerInfo.cover" class="cover" @click="turnCover"></image>
			<view class="movie-desc">
				<view class="title">{{ trailerInfo.name }}</view>
				<view class="basic-info">{{ trailerInfo.basicInfo }}</view>
				<view class="basic-info">{{ trailerInfo.originalName }}</view>
				<view class="basic-info">{{ trailerInfo.totalTime }}</view>
				<view class="basic-info">{{ trailerInfo.releaseDate }}</view>
				<!-- 评分块 -->
				<view class="score-block">
					<view class="big-score">
						<view class="score-words">综合评分：</view>
						<view class="movie-score">{{ trailerInfo.score }}</view>
					</view>
					<view class="score-stars">
						<block v-if="trailerInfo.score >= 0"><Stars :score="trailerInfo.score" :showNum="1" /></block>
						<view class="prise-counts">{{ trailerInfo.prisedCounts }}人点赞</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 影片基本信息 end -->

		<!-- 分割线 -->
		<view class="line-wrapper"><view class="line"></view></view>

		<!-- 影片剧情介绍 start -->
		<view class="plots-block">
			<view class="plots-title">剧情介绍</view>
			<view class="plots-desc">{{ trailerInfo.plotDesc }}</view>
		</view>
		<!-- 影片剧情介绍 end -->

		<!-- 演职人员 start -->
		<view class="scroll-block">
			<view class="plots-title">演职人员</view>
			<scroll-view scroll-x class="scroll-list">
				<view class="actor-wrapper" v-for="(director, StaffIndex) in directorArray">
					<image :src="director.photo" class="single-actor" mode="aspectFill" @click="lookStaffs" :data-staffIndex="StaffIndex"></image>
					<view class="actor-name">{{ director.name }}</view>
					<view class="actor-role">{{ director.actName }}</view>
				</view>
				<view class="actor-wrapper" v-for="(actor, actorIndex) in actorArray">
					<image :src="actor.photo" class="single-actor" mode="aspectFill" :data-staffIndex="actorIndex + directorArray.length" @click="lookStaffs"></image>
					<view class="actor-name">{{ actor.name }}</view>
					<view class="actor-role">{{ actor.actName }}</view>
				</view>
			</scroll-view>
		</view>
		<!-- 演职人员 end -->

		<!-- 剧照 start -->
		<view class="scroll-block">
			<view class="plots-title">剧照</view>
			<scroll-view scroll-x class="scroll-list">
				<image v-for="(img, imgIndex) in plotPicsArray" :src="img" class="plot-image" mode="aspectFill" @click="lookList" :data-imgIndex="imgIndex"></image>
			</scroll-view>
		</view>
		<!-- 剧照 end -->
	</view>
</template>

<script>
// 获取公共域名地址
import serverUrl from '@/common/serverUrl.js';
// 引入星星组件
import Stars from '@/components/index/stars.vue';
export default {
	data() {
		return {
			trailerInfo: {},
			plotPicsArray: [], // 剧照
			directorArray: [], // 导演列表
			actorArray: [], // 演员列表
			trailerId: '',
			videoContext: ''
		};
	},
	// 页面初次渲染完成,获得视频上下文对象
	onReady() {
		this.videoContext = uni.createVideoContext(this.trailerId);
	},
	onHide() {
		// 页面被隐藏的时候,暂停播放
		this.videoContext.pause();
	},
	onShow() {
		// 页面再次显示的时候再次播放视频
		if (this.videoContext) {
			this.videoContext.play();
		}
	},
	methods: {
		// 预览剧照
		lookList(e) {
			// 获取图片的索引
			const imgIndex = e.currentTarget.dataset.imgindex;
			uni.previewImage({
				urls: this.plotPicsArray,
				current: this.plotPicsArray[imgIndex]
			});
		},
		// 跳转到封面页
		turnCover() {
			uni.navigateTo({
				url: '../cover/cover?cover=' + this.trailerInfo.cover
			});
		},
		// 预览导演和演职人员
		lookStaffs(e) {
			// 获取图片的索引
			const staffIndex = e.currentTarget.dataset.staffindex;
			// 拼接导演和演员的数组
			const newStaffArray = this.directorArray.concat(this.actorArray);
			let urls = [];
			// 把对象中的照片取出来
			for (let i = 0; i < newStaffArray.length; i++) {
				let tempPhoto = newStaffArray[i].photo;
				urls.push(tempPhoto);
			}
			uni.previewImage({
				urls: urls,
				current: urls[staffIndex]
			});
		}
	},
	onLoad(e) {
		// 通过API设置导航栏的颜色
		uni.setNavigationBarColor({
			// 前景色
			frontColor: '#ffffff',
			// 背景颜色
			backgroundColor: '#000000'
		});
		const qq = serverUrl.qq;
		const url = serverUrl.serverUrl;
		// 获取上个页面传入的参数
		const trailerId = e.trailerId;
		this.trailerId = trailerId;
		// 获取电影详情
		uni.request({
			url: url + '/search/trailer/' + trailerId + '?qq=' + qq,
			method: 'POST',
			success: res => {
				if (res.data.status == 200) {
					this.trailerInfo = res.data.data;
					this.plotPicsArray = JSON.parse(res.data.data.plotPics); // 剧照
				}
			},
			fail: () => {
				console.log('获取电影详情失败');
			}
		});
		// 获取导演列表
		uni.request({
			url: url + '/search/staff/' + trailerId + '/1?qq=' + qq,
			method: 'POST',
			success: res => {
				if (res.data.status == 200) {
					this.directorArray = res.data.data;
				}
			},
			fail: () => {
				console.log('获取电影详情失败');
			}
		});
		// 获取演员列表
		uni.request({
			url: url + '/search/staff/' + trailerId + '/2?qq=' + qq,
			method: 'POST',
			success: res => {
				if (res.data.status == 200) {
					this.actorArray = res.data.data;
				}
			},
			fail: () => {
				console.log('获取电影详情失败');
			}
		});
	},
	// 此函数仅仅支持小程序端的分享，分享到微信区，或者微信好友
	onShareAppMessage(res) {
		return {
			title: this.trailerInfo.name,
			path: '/pages/movie/movie?trailerId' + this.trailerId
		};
	},
	// 监听原生导航栏按钮
	onNavigationBarButtonTap(e) {
		const index = e.index;
		const trailerId = this.trailerInfo.id;
		const trailerName = this.trailerInfo.name;
		const cover = this.trailerInfo.cover;
		const poster = this.trailerInfo.poster;
		if (index == 0) {
			uni.share({
				provider: 'weixin',
				scene: 'WXSenceTimeline',
				type: 0,
				href: 'http://192.168.56.1:8080/#/pages/movie/movie?trailerId=' + trailerId,
				title: '超英预告：《' + trailerName + '》',
				summary: '超英预告：《' + trailerName + '》',
				imageUrl: cover,
				success: function(res) {
					console.log('success:' + JSON.stringify(res));
				}
			});
		}
	},
	components: {
		Stars
	}
};
</script>

<style scoped>
[v-cloak] {
	display: none;
}
.player {
	display: flex;
	justify-content: center;
	background-color: black;
}

/* 视频 */
.movie {
	width: 100%;
	height: 440upx;
}

/* 影片基本信息 */
.movie-info {
	display: flex;
	background-color: #f7f4f9;
	padding: 40upx 20upx;
}
.cover {
	width: 280upx;
	height: 380upx;
}
.movie-desc {
	display: flex;
	flex-direction: column;
	margin-left: 30upx;
	width: 400upx;
}
.title {
	font-size: 30px;
}
.basic-info {
	color: darkgray;
	font-size: 13px;
	line-height: 36upx;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

/* 评分块 */
.score-block {
	background-color: white;
	margin-top: 20upx;
	with: 360upx;
	height: 90upx;
	display: flex;
	justify-content: flex-start;
	padding: 20upx;
	box-shadow: 3px 2px 10px #dedede;
}
.score-words {
	font-size: 12px;
	color: grey;
}
.movie-score {
	font-size: 26px;
	font-weight: bold;
	margin-left: 8upx;
	color: #feab2a;
	line-height: 60upx;
}
.prise-counts {
	font-size: 12px;
	line-height: 44upx;
	color: grey;
}

/* 剧情介绍 */
.plots-block {
	background-color: #f7f4f9;
	padding: 20upx 40upx;
}
.plots-title {
	color: #a9a9a9;
	font-size: 14px;
}
.plots-desc {
	margin-top: 10upx;
	font-size: 16px;
}

/* 剧照 */
.scroll-block {
	background-color: #f7f4f9;
	padding: 20upx 40upx;
}
.scroll-list {
	width: 100%;
	white-space: nowrap;
	margin-top: 20upx;
}
.plot-image {
	width: 220upx;
	height: 320upx;
	margin-right: 10upx;
}

/* 演职人员 */
.single-actor {
	width: 170upx;
	height: 240upx;
	margin-right: 10upx;
}
.actor-wrapper {
	display: inline-block;
}
.actor-name {
	width: 170upx;
	text-align: center;
	font-size: 15px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.actor-role {
	width: 170upx;
	text-align: center;
	font-size: 13px;
	color: #a9a9a9;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
</style>
