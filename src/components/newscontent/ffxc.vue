<template>
  <view class="box">
      <view class="list">
		 <view  class="firstlist">
			 <view class="tupian">
				 <image src="../../static/imgs/home_title.jpg"></image>
			 </view>
			<view class="nav">
				 <view class="right">
					<view class="top">
						疫情防控，警惕！这个数字已经超过了500了！！！！
					</view> 
					<view class="down">
						<text class="lft">天津市公安局</text> 
						<text class="rit">2020-05-25</text>
					</view> 
				 </view>
			</view>
		 </view>
		</view>
        <view class="list">
             <view class="firstlist">
			 <view class="tupian">
				 <image src="../../static/imgs/home_title.jpg"></image>
			 </view>
			<view class="nav">
				 <view class="right">
					<view class="top">
						疫情防控，警惕！这个数字已经超过了500了！！！！
					</view> 
					<view class="down">
						<text class="lft">天津市公安局</text> 
						<text class="rit">2020-05-25</text>
					</view> 
				 </view>
			</view>
		 </view>
        </view>
       
        
        <!-- 111 -->
  </view>
</template>

<script>
export default {

}
</script>

<style lang="less" scopde >
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