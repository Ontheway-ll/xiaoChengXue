<template>
  <view class="color">
    <navigator url="/pages/taskdetail/index"  hover-class="className">
      <view class="list">
          <view class="num"><text class="ll">1</text></view>
         <text class="task">任务一</text>
         <text class="time">2020-06-10 11:22:33</text>
        <uni-icons class="icon" type="arrowright" size="25"></uni-icons>
       </view>
    </navigator>

    <navigator url="/pages/taskdetail/index"  hover-class="className">
      <view class="list">
          <view class="num"><text class="ll">2</text></view>
         <text class="task">任务二</text>
         <text class="time">2020-06-10 11:22:33</text>
        <uni-icons class="icon" type="arrowright" size="25"></uni-icons>
       </view>
        </navigator>
        <navigator url="/pages/taskdetail/index"  hover-class="className">
      <view class="list">
          <view class="num"><text class="ll">3</text></view>
         <text class="task">任务三</text>
         <text class="time">2020-06-10 11:22:33</text>
        <uni-icons class="icon" type="arrowright" size="25"></uni-icons>
       </view>
        </navigator>
        <navigator url="/pages/taskdetail/index"  hover-class="className">
      <view class="list">
          <view class="num"><text class="ll">4</text></view>
         <text class="task">任务四</text>
         <text class="time">2020-06-10 11:22:33</text>
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
      font-size: 25rpx;
      color: #757575;
      margin-left: 180rpx;
      // margin-top: 20rpx;
    }
    .icon{
      margin-top: 25rpx;
      margin-left: 50rpx;
    }
  }
}
 
</style>