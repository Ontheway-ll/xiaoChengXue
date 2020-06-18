<template>
  <view class="box">
      <view class="banben">
        版本号:<text class="vv">V 1.0</text>
      </view>
      <view class="line"></view>
      <view class="danwei">
        承建单位:<text class="tianjinshi">天津市公安局指挥情报中心</text>
      </view>
            <view class="line"></view>
      <view class="kaifa">
        开发单位:<text class="yingxin">天津英信科技有限公司</text>
      </view>
  </view>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped >
    .box{
      background-color: #fff;
      .line {
        // margin-left: 20rpx;
        // margin-right: 20rpx;f4f7f9
        height: 1rpx;
        border-top: solid #999999 1px;
     }
     .banben{
       color: #454545;
        margin-top: 15rpx;
       margin-left: 20rpx;
       height: 80rpx;
       line-height: 80rpx;
       .vv{
         margin-left: 15rpx;
       }
     }
     .kaifa{
       color: #454545;
       height: 80rpx;
       line-height: 80rpx;
       margin-left: 20rpx;
       .yingxin{
         margin-left: 15rpx;
       }
     }
     .danwei{
       color: #454545;

       margin-left: 20rpx;
       height: 80rpx;
       line-height: 80rpx;
       .tianjinshi{
         margin-left: 15rpx;
       }
     }

}
</style>