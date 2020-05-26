<template>
  <view class="inforeport">
      <view class="words">
         <text class="word">关键词</text> 
         <text class="kong">涉恐</text>
      </view>
      <!-- 一条线 -->
      <view class="line"></view>
      <!-- 上报位置 -->
      <view class="map"> 
        <text class="postion">上报位置</text>
        <!-- <text><uni-icons type="location-filled"  color="#2b7fd5" ></uni-icons></text> -->
        <text class="dress">天津市西区荣园路7号</text>
      </view>
      <view class="line"></view>
      <!-- 上报时间 -->
       <view class="times"> 
        <text class="click">上报时间</text>
        <!-- <text><uni-icons type="location"  color="#2b7fd5" ></uni-icons></text> -->
        <text class="time">2020-05-25</text>
      </view>
      <view class="line"></view>
  </view>
</template>

<script>
// 导入图标组件，注册使用
// import uniIcons from '@/components/uni-icons/uni-icons'
export default {
  // components:{ 
  //   uniIcons
  // }
}
</script>

<style lang="less" scoped>
.words{
  display: flex;
  height: 100rpx;
  .word{
    margin-right: auto;
    line-height: 100rpx;
    color: #444444;
    margin-left: 20rpx;
  }
  .kong{
    justify-content: flex-end;
    line-height: 100rpx;
    color: #444444;
    margin-right: 20rpx;
  }
}
// 一条线
.line{
  margin-left: 20rpx;
  margin-right: 20rpx;
  height: 1rpx;
  border-top: solid #444444 1px;
}
// 上报位置
.map{
  display: flex;
  height: 100rpx;
  .postion{
    margin-right: auto;
    line-height: 100rpx;
    color: #444444;
    margin-left: 20rpx;
  }
  .dress{
    justify-content: flex-end;
    line-height: 100rpx;
    color: #444444;
    margin-right: 20rpx;
  }
}
// 上报时间
.times{
  display: flex;
  height: 100rpx;
  .click{
    margin-right: auto;
    line-height: 100rpx;
    color: #444444;
    margin-left: 20rpx;
  }
  .time{
    justify-content: flex-end;
    line-height: 100rpx;
    color: #444444;
    margin-right: 20rpx;
  }
}
</style>