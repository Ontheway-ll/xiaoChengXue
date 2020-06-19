<template>
  <view class="box">
      <view  class="list">
		 <view  class="firstlist" v-for="item in lists" :key="item.id" @tap="newsDetail(item.id)">
			 <view class="tupian">
				 <image src="../../static/imgs/home_title.jpg"></image>
			 </view>
			<view class="nav">
				 <view class="right">
					<view class="top">
						{{item.title}}
					</view> 
					<view class="down">
						<text class="lft">天津市公安局</text> 
						<text class="rit">2020-05-25</text>
					</view> 
				 </view>
			</view>
		 </view>
		</view>
         <!-- 1 一进入页面需要加载请求回来的新闻列表，先定义一个数组，push
              2  点击其中的一条进入到详细内容，需要注册点击事件
              3  配置上拉加载，下拉刷新 -->
        
      
  </view>
</template>

<script>
export default {
    data(){
        return{
            lists:[],//新闻列表
            currentPage:1,//
            pgeSize:10,//每页条数
            code:'xwdt'
        }
    },
    methods:{
          // 获取新闻
          async getNews(){
				let token = uni.getStorageSync('token')
				console.log(token);
				
           let result = await this.http({
             url:'/news/list',
             header:{
			   'content-type': 'application/x-www-form-urlencoded',
				 'Authorization': 'Bearer ' + token
             },
             method:'POST',
             data:{
                 current:this.currentPage,
                 size:this.pgeSize,
                 code:this.code   // ffxc  
             }  
           })  
				console.log('result',result);
				this.lists=result.data.records			 
        },
        // 点击某一条信息进入信息的详情
        newsDetail(id){
			console.log('zxinwid',id);
			//接收id  点击 跳转 去详情页面 并且 传过去id
			// 在详情页面   onLoad里面 接收到  id   发送请求  去获新闻详情渲染页面
            // uni.navigateTo({
			// 	 url: '详情地址?id='+id
			// });
        }  
    },
    created(){
	  this.getNews()  
	
    }
}
</script>

<style lang="less" scoped >
.box{
    margin-top: 20rpx;
    .list{
		background-color: #f4f9fa;
		padding: 0 5rpx ;
		.firstlist{
			background-color: #ffffff ;
			display: flex;	
			height: 170rpx;
			margin-bottom: 20rpx;
			.tupian{
				flex: 2;
				margin-right: 10rpx;
				image{
					width: 100%;
                    height: 100%;
                    border-radius: 10rpx;
				}
			}
		 	.nav{
				flex: 3;
				.right{
					height: 170rpx;
					.down{
						margin-left: 40rpx;
						margin-top: 50rpx;
						color:#888888;
						.lft{
							margin-right: 20rpx;
						}
					}
				}	
		    }
		}
	}
}

</style>