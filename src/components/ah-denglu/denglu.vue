<template>
	<view>
		<!-- 弹出层 -->
		<view class="uni-banner" style="background:#FFFFFF;" v-if="bannerShow">
			<view style="justify-content:flex-end;">
				<view style="justify-content:flex-end; text-align:right; " @tap="closeBanner">
					<text class="uni-icon uni-icon-close"></text>
				</view>
			</view>
			<view >
				<!-- <image src="@/static/imgs/tu.png" style="width:100%;" mode="widthFix"></image> -->
				<view class="user">用户登录</view>
				<view class="box">
					<view>用户名</view>
				    <input class="mingzi"   type="text" maxlength="11" placeholder="请输入用户名"  />
				    <view class="mima">密码</view>
				    <input type="password"  maxlength="20" placeholder="请输入密码" password />
			   </view>
				<view class="btn">
					<button class="mini-btn"  size="mini" >确定</button>
				    <button class="mini-btnn"  size="mini">取消</button>
				</view>
			</view>
			<view style="padding:50upx 0; padding-bottom:68upx; ">
				<button type='primary' open-type="getUserInfo" @getuserinfo="mpGetUserInfo" style="background:#1aad19;  margin:0 80upx; border-radius: 60rpx;">微信登录</button>
			</view>
		</view>
		<view class="uni-mask" v-if="bannerShow"></view> 
		<!-- 弹出层 -->
	</view>
</template>
<script>
    //保存登陆态
    var SESSION_KEY = 'denglutai'
	export default {
		data() {
			return {
				bannerShow: false
			}
		},
		created() {
			var session = uni.getStorageSync(SESSION_KEY)
			//如果存在session，已经登陆
			if (session) {
				//检测当前用户登录态是否有效
				var that = this
				uni.checkSession({
					success: function() {
						that.bannerShow = false;
					},
					fail: function() {
						uni.removeStorageSync(SESSION_KEY);
						that.bannerShow = true;
					},
				});
			} else {
				this.bannerShow = true;
			}
		},
		onBackPress() { //app,h5 按返回键触发
			if (this.bannerShow) {
				uni.reLaunch({
					url: '/pages/index/index'
				});
			}
		},
		methods: {
			closeBanner: function() {
				uni.reLaunch({
					url: '/pages/index/index'
				});
			},
			mpGetUserInfo(result) {
				var that = this
				if (result.detail.errMsg === 'getUserInfo:ok') {
				//小程序返回登陆态，code等，后续需要调用自己的api处理
					uni.setStorageSync(SESSION_KEY,result.authResult)
					that.bannerShow = false;
				} else {
					uni.showModal({
						title: '请授权后查看'
					});
				}
			}
		}
	}
</script>

<style>
	/* 遮罩层 */
	.uni-mask {
		background: rgba(0, 0, 0, 0.6);
		position: fixed;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		z-index: 9998;
	}

	/* 弹出层形式的广告 */
	.uni-banner {
		width: 80%;
		position: fixed;
		left: 50%;
		top: 50%;
		background: #FFF;
		border-radius: 10upx;
		z-index: 9999;
		transform: translate(-50%, -50%);
	}
	.user{
		height: 80rpx;
		line-height: 80rpx;
		font-size: 30rpx;
		text-align: center;
		background-color: royalblue;
	}
	.box{
		padding: 20rpx;
	}
	.mingzi{
		padding: 10rpx 0;
	}
	.mima{
		padding: 10rpx 0;
	}
	.btn{
		margin: 20rpx;
	}
	.mini-btn{
		background-color: royalblue;
		margin-left:100rpx;
		color: #FFF;
		border-radius: 30rpx;
	}
	.mini-btnn{
		background-color: royalblue;
		margin-left: 100rpx;
		color: #FFF;
		border-radius: 30rpx;
	}
</style>
