<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	page {
		width:100%;
		height:100%;
	}
	.page {
		width: 100%;
		height:100%;
		background-color:#f7f7f7;
	}
	.page-block {
		background-color:#ffffff;
	}
	.line-wrapper {
		padding:0upx 20upx;
	}
	.line {
		height:1px;
		background-color:#dbdbda;
	}
</style>
