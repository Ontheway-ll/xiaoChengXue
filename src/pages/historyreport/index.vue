<template>
  <view>
      <view class="imgs">
        <image src="../../static/imgs/task_icon_nodata.png"></image>
        <view class="wu"><text class="bao">暂无上报</text></view>
      </view>
  </view>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  .imgs{
    display: flex;
    align-items: center;
    justify-content: center;
    image{
     height: 200rpx;
     width: 200rpx;
     margin-top: 400rpx;
    }
    .wu{
      height: 100rpx;
      width: 200rpx;
      margin-top: 700rpx;
      margin-left: -200rpx;
      text-align: center;
      .bao{
        line-height: 100rpx;
        font-size: 50rpx;
        color: #757575;
      }
    }
  }
</style>