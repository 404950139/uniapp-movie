<!-- 点赞组件 -->
<template name="praise">
	<view class="movie-oper" @click="praiseMe">
		<image src="../../static/icos/praise.png" class="praise-ico"></image>
		<view class="praise-me">
			点赞
		</view>
		<view :animation="animationData" class="praise-me animation-opacity">
			+1
		</view>
	</view>
</template>

<script>
	export default {
		name: "praise",
		data() {
			return {
				animationData: {},
			}
		},
		created() {
			// 组件创建时,创建一个临时动画对象
			// #ifdef APP-PLUS || MP-WEIXIN
			this.animation = uni.createAnimation();
			// #endif
		},
		beforeDestroy() {
			// 组件销毁时,清楚动画数据
			this.animationData = {};
		},
		methods: {
			// #ifdef APP-PLUS || MP-WEIXIN
			praiseMe() {
				this.animation.translateY(-60).opacity(1).step({
					duration: 400
				});
				// 导出动画数据到组件
				this.animationData = this.animation.export();
				// 还原动画
				setTimeout(function() {
					this.animation.translateY(0).opacity(0).step({
						duration: 0
					});
					this.animationData = this.animation.export();
				}.bind(this), 500);
			},
			// #endif
			// #ifndef APP-PLUS || MP-WEIXIN
			praiseMe() {}
			// #endif
		}
	}
</script>

<style scoped>
	.movie-oper {
		width:140upx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		border-left:2px dashed #dbdbdb;
	}
	.praise-ico {
		width:40upx;
		height:40upx;
		align-self: center;
	}
	.praise-me {
		font-size:14px;
		color:#feab2a;
		align-self: center;
	}
	.animation-opacity {
		opacity:0;
		font-weight:bold;
	} 
</style>
