<template>
	<view class="index">
		<view class="title">
		  <image src="../../static/imgs/home_title.jpg"></image>
	    </view>
		<view class="content">
			<view class="images">
			 <!-- redirect页面跳转后无法在返回 -->
			 <navigator url=""  hover-class="className">
			 <image src="../../static/imgs/home_sb_down.png" />
			 </navigator>
		 </view>
		 <!-- 下面5个小球 -->
		 <view class="fiveball">
			<navigator url=""  hover-class="className">
				<img src="../../static/imgs/home_sk_down.png" alt="">
			</navigator>
			<navigator url=""  hover-class="className">
				<img src="../../static/imgs/home_sw_down.png" alt="">
			</navigator>
			<navigator url=""  hover-class="className">
				<img src="../../static/imgs/home_xs_down.png" alt="">
			</navigator>
			<navigator url=""  hover-class="className">
				<img src="../../static/imgs/home_za_down.png" alt="">
			</navigator>
			<navigator url=""  hover-class="className">
				<img src="../../static/imgs/home_yh_down.png" alt="">
			</navigator>
		 </view>
		 <!-- 下面的一条线 -->
		 <view class="one">
			 <view class="oneline">防范宣传</view>
		 </view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="less" scoped>
	.title{
		height: 250rpx;
		width: 750rpx;
		image{
			width: 100%;
			height: 100%;
		}
	}
	.content{
		background-color: #f4f9fa;
		.images{
		display: flex;
		padding-top: 10rpx;
		background-color: #f4f9fa;
		navigator{
			display: flex;
			flex: 1;
			justify-content: center;
			align-items: center;
			image{
				height: 350rpx;
				width: 350rpx;
			}
		}
	}
	.fiveball{
		display: flex;
		padding: 20rpx 0;
		background-color: #f4f9fa;
		navigator{
			display:flex;
			flex: 1;
			justify-content: center;
			align-items: center;
			image{
				height: 120rpx;
				width: 120rpx;
			}
		}
	}
	.one{
		width: 750rpx;
		height: 60rpx;
		border-top: 1rpx solid #7b7e7e;
		margin: 20rpx auto;
		background-color: #f4f9fa;
		.oneline{
			width: 240rpx;
			height: 40rpx;
			background-color:#f4f9fa;
			margin: 0 auto;
			margin-top: -30rpx;
			text-align: center;
			font-size: 40rpx;
			color: #444444;
		}
	}
	}
</style>
