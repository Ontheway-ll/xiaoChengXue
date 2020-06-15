<template>
  <view class="color">
    <navigator url="/pages/patroldetail/index"  hover-class="className">
      <view class="list">
          <view class="num"><text class="ll">1</text></view>
          <view class="time">2020-06-10 11:22:33</view>
          <view class="detail"><text class="km">里程:10.10km</text><text class="min">时长:100min</text></view>
        <uni-icons class="icon" type="arrowright" size="25"></uni-icons>
       </view>
    </navigator>
        
        <navigator url="/pages/patroldetail/index"  hover-class="className">
      <view class="list">
          <view class="num"><text class="ll">2</text></view>
          <view class="time">2020-06-10 11:22:33</view>
          <view class="detail"><text class="km">里程:10.10km</text><text class="min">时长:100min</text></view>
        <uni-icons class="icon" type="arrowright" size="25"></uni-icons>
       </view>
    </navigator>

    <navigator url="/pages/patroldetail/index"  hover-class="className">
      <view class="list">
          <view class="num"><text class="ll">3</text></view>
          <view class="time">2020-06-10 11:22:33</view>
          <view class="detail"><text class="km">里程:10.10km</text><text class="min">时长:100min</text></view>
        <uni-icons class="icon" type="arrowright" size="25"></uni-icons>
       </view>
    </navigator>

    <navigator url="/pages/patroldetail/index"  hover-class="className">
      <view class="list">
          <view class="num"><text class="ll">4</text></view>
          <view class="time">2020-06-10 11:22:33</view>
          <view class="detail"><text class="km">里程:10.10km</text><text class="min">时长:100min</text></view>
        <uni-icons class="icon" type="arrowright" size="25"></uni-icons>
       </view>
    </navigator>
       
  </view>
</template>

<script>
import uniIcons from "@/components/uni-icons/uni-icons.vue"
export default {
  data(){
    return{

    }
  },
    components: {uniIcons}
}
</script>

<style lang="less" scoped>
.color{
  background-color: #f5f6fa; 
 .list{
   position: relative;
    margin-top: 30rpx;
    background-color: #ffffff;
    height: 80rpx;
    .num{
      display: inline-block;
      background-color: #224182;
      border-radius: 50%;
      height: 80rpx;
      width: 80rpx;
      text-align: center;
      margin-left: 20rpx;
      .ll{
        font-size: 35rpx;
        font-weight: 700;
        color: #ffffff;
        line-height: 80rpx;
      }
    }
    .task{
      // font-weight: 700;
      font-size: 35rpx;
      margin-left: 20rpx;
    }
    .time{
      font-size: 30rpx;
      color: #757575;
      margin-left: 129rpx;
      margin-top: -77rpx;
    }
    .detail{
      margin-left: 83rpx;
      font-size: 25rpx;
      margin-top: 10rpx;
      .km{
        margin-left: 50rpx;
      color: #757575;
      }
      .min{
        margin-left: 20rpx;
      color: #757575;
      }
    }
    .icon{
      position: absolute;
      top: 10rpx;
      right: 30rpx;
    }
  }
}
 
</style>