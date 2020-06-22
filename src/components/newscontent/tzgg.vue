<template>
  <view class="box">
      <view  class="list">
		 <view  class="firstlist" v-for="item in lists" :key="item.id" @tap="tzggDetail(item.id)">
			 <view class="tupian">
				 <image class="img" :src=" 'http://file.rl.jyxin.com/'+ item.titleImg"></image>
			 </view>
			<view class="nav">
				 <view class="right">
					<view class="top">
						{{item.title}}
					</view> 
					<view class="down">
						<text class="lft">{{item.deptName}}</text> 
						<text class="rit">{{item.createDate}}</text>
					</view> 
				 </view>
			</view>	
		 </view>
		<view class="end" v-if="isShow">没有更多了哦</view>
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
			 total:0,
            lists:[],//新闻列表
            currentPage:1,//
            pgeSize:10,//每页条数
			code:'tzgg',
			 isShow:false//拉到底部默认隐藏	
        }
    },
    methods:{
          // 获取新闻
          async gettzgg(){
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
				this.lists=this.lists.concat(result.data.records)
				// 将总数保存起来
                this.total = result.data.total;		 
        },
        // 点击某一条信息进入信息的详情
        tzggDetail(id){
			console.log('新闻动态的id到详情',id);
			//接收id  点击 跳转 去详情页面 并且 传过去id
			// 在详情页面   onLoad里面 接收到  id   发送请求  去获新闻详情渲染页面
            uni.navigateTo({
					  url: '/pages/index/indexDetail?id=' + id
				 })
        }  
    },
    created(){
	  this.gettzgg()  
	},
	onReachBottom(){
			console.log("上拉触底");
			if (this.lists.length===this.total) {
				this.isShow=true
				return
			}
			this.currentPage++
			this.gettzgg()//加载新闻列表
			
		}
}
</script>

<style lang="less" scoped >
.box{
	margin-top: 20rpx;
	.end{
		color: #cccccc;
		text-align: center;
		// margin-top: 10rpx;
	}
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
				.img{
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