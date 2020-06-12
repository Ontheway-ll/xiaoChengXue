<template>
  <view class="color">
      <view class="list">
         <text class="task">信息上报</text>
         <text class="time">2020-06-10 11:22:33</text>
         <text class="star">+100</text>
       </view>

      <view class="list">
         <text class="task">信息采纳</text>
         <text class="time">2020-06-10 11:22:33</text>
         <text class="star">+10</text>
       </view>
       
      <view class="list">
         <text class="task">我的签到</text>
         <text class="time">2020-06-10 11:22:33</text>
         <text class="star">+100</text>
       </view>
  </view>
</template>

<script>

export default {
  data(){
    return{

    }
  },
    
}
</script>

<style lang="less" scoped>
.color{
  background-color: #f5f6fa; 
 .list{
    margin-top: 30rpx;
    background-color: #ffffff;
    height: 80rpx;
    
    .task{
      // font-weight: 700;
      font-size: 35rpx;
      margin-left: 20rpx;
    }
    .time{
      font-size: 25rpx;
      color: #757575;
      margin-left: 50rpx;
      // margin-top: 20rpx;
    }
    .star{
      color: red;
      margin-left: 200rpx;
      font-size: 30rpx;
    }
  }
}
 
</style>