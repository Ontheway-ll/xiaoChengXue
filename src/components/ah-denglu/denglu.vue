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
				<button type='primary' open-type="getUserInfo" @getuserinfo="GetUserInfo" style="background:#1aad19;  margin:0 80upx; border-radius: 60rpx;">微信登录</button>
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
			// 同步获取本地缓存SESSION_KEY
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
			// 同步移除本地缓存SESSION_KEY
						uni.removeStorageSync(SESSION_KEY);
						that.bannerShow = true;
					},
				});
			} else {
				this.bannerShow = true;
			}
		},
		// onBackPress() { //app,h5 按返回键触发
		// 	if (this.bannerShow) {
		// 		uni.reLaunch({
		// 			url: '/pages/index/index'
		// 		});
		// 	}
		// },
	   methods: {
			closeBanner: function() {
				uni.reLaunch({
					url: '/pages/index/index'
				});
			},
			 async GetUserInfo(user){
				var that = this;
				console.log(user);
				// 点击等会出现弹框，如果用户点击拒绝user.detail.errMsg=== "getUserInfo:fail auth deny
				if (user.detail.errMsg==='getUserInfo:fail auth deny') {
					uni.showToast({
						title: '别拒绝啊~~~',
					});
				       return
				}
				// 如果用户点击的是允许
				 let res = await uni.login()
				 console.log(res);//res[1].code
				 let loginRes= await  this.http({
					 url:'/user/login',
					 method:'post',
					 data:{
						 code:res[1].code,
						 encryptedData:user.detail.encryptedData,
						 iv:user.detail.iv,
						 rawData:user.detail.rawData,
						 signature:user.detail.signature
					 }
				 })
				   console.log(loginRes);
					// 存入token
					// if (loginRes.meta.status===200) {
					// 	uni.setStorageSync('token', loginRes.message.token)
					// }
					// 跳转回去
					//  uni.navigateBack()
			         that.bannerShow = false;
				
			}
			// 实现在微信小程序端的微信登录
			// GetUserInfo(res) {
			// 	console.log(res);
			// 					// avatarUrl: "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqUseKO3Aopp9I8r3htsDrY4a3Gj5piaNS5qJsC9r3YPkOPle9ha7VZAsLcgpFepCkGxibZ0977DiaFQ/132"
			// 					// city: ""
			// 					// country: "China"
			// 					// gender: 1
			// 					// language: "zh_CN"
			// 					// nickName: "ABC时间跑去哪了！"
			// 					// province: "Tianjin"
			// 	var that = this;
			// 	// 1 通过微信开发能力，获得微信用户的基本信息
			// 	var userInfo = res.detail.userInfo;
			// 	// 2 实现微信授权登录
				 
			// 	 uni.login({
			// 		provider: "weixin",
			// 		async success() {
			// 		// 3 获得微信登录的code授权码，传递给后端，后端通过调用auth.code2Session 接口，换取用户唯一标识 OpenID 和 会话密钥 session_key
			// 		var code = res.code;
			// 		let res = await this.http({
			// 			url: '/user/login',
			// 			data: {
			// 			"code": code,
			// 			"avatarUrl": userInfo.avatarUrl,
			// 			"nickName": userInfo.nickName
			// 			},
			// 			method: "POST"
			// 			});
			// 			console.log(res);
			// 			var userInfo_wx = res.data.data;
			// 			// 4 保存用户信息到全局的缓存中
			// 			uni.setStorageSync("globalUser", userInfo_wx);
			// 			that.bannerShow = false;
			// 			// 5 切换页面跳转，使用tab切换的api
			// 			uni.switchTab({
			// 				url: '/pages/index/index'
			// 			});
			// 		}
			// 	})
			// }
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
