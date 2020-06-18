<script>
	import Vue from 'vue'
	
	export default {
		created() {
			
		}, 
		onShow: function() {
			console.log('App 开启')
		},
		onHide: function() {
			console.log('App 关闭')
		},
		// onLaunch:{
		// 		uni-app 在app.vue文件export default里面定义globalData，在当前文件（app.vue）里面获取globalData需要用this.$options.globalData获取，其他文件则用getApp（）.globalData获取
		// 	let globalData=this.$options.globalData
		// },
		// globalData:{
        //     token: ''
        // }
	}
</script>

<style >
	
</style>
