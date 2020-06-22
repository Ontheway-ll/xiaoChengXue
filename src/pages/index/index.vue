<template>
	<view class="index">
		<view class="title">
		  <image src="../../static/imgs/home_title.jpg"></image>
	    </view>
		<view class="content">
			<view class="images">
			 <!-- redirect页面跳转后无法在返回 -->
			 <view class="liu" @tap="onsend" data-type="6" >
			 <image src="../../static/imgs/home_sb_down.png" />
			 </view>
		 </view>
		 <!-- 下面5个小球 -->
		 <view class="fiveball">
			<view class="five" @tap="onsend" data-type="1" >
				<img src="../../static/imgs/home_sk_down.png" alt="">
			</view>
			<view  class="five" @tap="onsend" data-type="2" >
				<img src="../../static/imgs/home_sw_down.png" alt="">
			</view>
			<view  class="five" @tap="onsend" data-type="3" >
				<img src="../../static/imgs/home_xs_down.png" alt="">
			</view>
			<view  class="five" @tap="onsend" data-type="4" >
				<img src="../../static/imgs/home_za_down.png" alt="">
			</view>
			<view class="five"  @tap="onsend" data-type="5">
				<img src="../../static/imgs/home_yh_down.png" alt="">
			</view>
		 </view>
		 <!-- 下面的一条线 -->
		 <view class="one">
			 <view class="oneline">防范宣传</view>
		 </view>
		</view>
		<!-- 下面图片文字列表部分 -->
		<view class="list" >
		 <view @tap="infodetail(item.id)" class="firstlist" v-for="item in lists" :key="item.id" >
			 <view class="tupian">
				 <image :src=" 'http://file.rl.jyxin.com/'+ item.titleImg"></image>
			 </view>
			<view class="nav">
				 <view class="right">
					<view class="top">
						{{item.title}}
					</view> 
					<view class="contents">
						{{item.content}}
					</view> 
					<view class="down">
						<text class="lft">{{item.deptName}}</text> 
						<text class="rit">{{item.createDate}}</text>
					</view> 
				 </view>
			</view>
		 </view>

		 
		</view>
		<view class="end" v-if="isShow">没有更多了哦</view>
		<!-- 登录 -->
		<denglu v-if="showLogin"></denglu>
	</view>
</template>

<script>
 import denglu from "@/components/ah-denglu/denglu.vue"
	export default {
		data() {
			return {
			 total:0,
			 lists:[],//数据	
			 size:10,//每页10条
			 current:1,//当前第一页
			 showLogin:false, //默认隐藏
			 isShow:false//拉到底部默认隐藏	
			}
		},
		components:{
			denglu
		},
		methods: {
			onsend(e){
			 // 点击按钮跳转对应的页面
			 console.log(e);
			 var type = e.currentTarget.dataset.type
			 uni.navigateTo({
				  url: '/pages/inforeport/index?type='+ type,
				  success: function(res) {
						// console.log(res);
					},
					fail: function(res) {
						console.log('主页点击按钮请求错误',res);
					},
					complete: function(res) {}  
			    })
			},
			//   1 一进入页面需要加载请求回来的新闻列表，先定义一个数组，push
            //   2  点击其中的一条进入到详细内容，需要注册点击事件
			//   3  配置上拉加载，

			
			// 点击图文进入详情，传参
			 infodetail(id){
				console.log('点击主页某一条信息',id);
			 	uni.navigateTo({
					  url: '/pages/index/indexDetail?id=' + id
				 })
			},
			// 进入主页获取新闻列表
			async getArticles(){
				let token = uni.getStorageSync('token')
				let ress = await this.http({
				 url:'/news/list',
				 method:'POST',	
				 header:{'content-type': 'application/x-www-form-urlencoded',
				 	'Authorization': 'Bearer ' + token
				 },
				 data:{
					 code:'ffxc',//xwdt（新闻动态）  ffxc(防范宣传)    tzgg(通知公告)
					 size:this.size,//每页10条
			         current:this.current//当前第一页
				 }
			 })
				console.log('主页获取的新闻列表',ress);
				this.lists=this.lists.concat(ress.data.records)
				// 将总数保存起来
                this.total = ress.data.total;

			}

		},
		created(){
			// 进入就 判断 有没有授权登录
			 	uni.getSetting({
					success: data => {
						console.log('授权登录',data)
						if (data.authSetting['scope.userInfo']) { //如果授权登录过了
							console.log('授权登录过了  ',)
							var userInfoStorage=uni.getStorageSync("userInfo") //那我直接去缓存中拿到userInfo的值
							this.showLogin= false //控制页面条件绑定条件渲染 false就不展示登录按钮
							// var globalData = getApp().globalData.token
							// console.log('globalData',globalData)  
							this.getToken()
							this.getArticles()//加载新闻列表
						} else {
							this.showLogin=true  //控制页面条件绑定条件渲染 true  就展示登录按钮
						}
					}
				})

			
		},
		onReachBottom(){
			console.log("上拉触底");
			if (this.lists.length===this.total) {
				this.isShow=true
				return
			}
			this.current++
			this.getArticles()//加载新闻列表
			
		}
	}
</script>
<style lang="less" scoped> 
	.title{
		height: 250rpx;
		width: 740rpx;
		padding: 4rpx;
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
		 .liu{
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
	}
	.fiveball{
		display: flex;
		padding: 20rpx 0;
		background-color: #f4f9fa;
		.five{
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
	.list{
		background-color: #f4f9fa;
		padding: 0 5rpx ;
		.firstlist{
			background-color: #ffffff ;
			display: flex;	
			height: 200rpx;
			margin-bottom: 40rpx;
			.tupian{
				flex: 1;
				margin-right: 10rpx;
				image{
					width: 100%;
					height: 100%;
				}
			}
		 	.nav{
				flex: 2;
				.right{
					position: relative;
					height: 200rpx;
					.contents{
						font-size: 25rpx;
					}
					.down{
						position: absolute;
						margin-left: 40rpx;
						top: 200rpx;
						height: 20rpx;
						color:#888888;
						.lft{
							margin-right: 20rpx;
						}
					}
				}	
		    }
		}
	}
	.end{
		color: #cccccc;
		text-align: center;
		// margin-top: 10rpx;
	}
	
</style>
