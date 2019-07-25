<template name="stars">
	<view class="movie-score-wrapper">
		<image src="../../static/icos/star-yellow.png" v-for="yellow in yellowStart" class="star-ico"></image>
		<image src="../../static/icos/star-gray.png" v-for="gray in grayStart" class="star-ico"></image>
		<view class="movie-score" v-if="showNum">
			{{ score }}
		</view>
	</view>
</template>

<script>
	export default {
		name: "stars",
		data() {
			return {
				yellowStart: '',	// 黄色星星数量
				grayStart: ''		// 灰色星星数量
			}
		},
		props: {
			// 评分
			score: {
				type: Number,
				default: 0		// 默认分数为0分
			},
			// 是否显示评分
			showNum: {
				type: Number,
				default: 1			//判断是否显示分数 0为不显示 1为显示
			}
		},
		// 组件创建完成后调用
		created() {
			let scoreStart = 0;
			if (this.score !== null && this.score !== undefined && this.score !== '') {
				scoreStart = this.score;
				this.yellowStart = parseInt(scoreStart / 2);
				this.grayStart = 5 - this.yellowStart;
			}
		}
	}
</script>

<style scoped>
	.movie-score-wrapper {
		display: flex;
	}
	.star-ico {
		width:20upx;
		height:20upx;
		margin-top:6upx;
	}
	.movie-score {
		font-size:12px;
		color:gray;
		margin-left:8upx;
	}
</style>
