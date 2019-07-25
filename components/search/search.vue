<!-- 搜索组件 -->
<template name="search">
	<view class="search-block">
		<view class="search-ico-wrapper">
			<image src="../../static/icos/search.png" class="search-ico"></image>
		</view>
		<input placeholder="搜索预告" 
				maxlength="10" 
				class="search-text" 
				confirm-type="search"
				@confirm="searchMe" />
	</view>
</template>

<script>
	export default {
		name: "search",
		data() {
			return {
				keywords: ''
			}
		},
		methods: {
			searchMe(e) {
				// 获取搜索的内容
				let value = e.detail.value;
				this.keywords = value;
				this.$emit('searchInp', this.keywords);
			}
		}
	}
</script>

<style scoped>
	.search-block {
		display: flex;
		padding:0upx 20upx 20upx 20upx;
		position:fixed;
		top:100;
		z-index: 2000;
		background-color:#f8f8f8;
	}
	.search-ico-wrapper {
		background-color:#eaeaea;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding:0upx 10upx;
	}
	.search-ico {
		width:40upx;
		height:40upx;
	}
	.search-text {
		font-size:14px;
		background-color:#eaeaea;
		height:60upx;
		width:650upx;
	}
</style>
