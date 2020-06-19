<template>
  <form action="">
    <view class="inforeport">
    <view class="words">
      <text class="word">任务一</text>
      <text class="kong">剩余时间:</text>
      <text class="daojishi">03:00:00</text>
    </view>
    <!-- 一条线 -->
    <view class="line"></view>
    <!-- 上报位置 -->
    <view class="map">
      <text class="postion">接收人:</text>
      <!-- <text><uni-icons type="location-filled"  color="#2b7fd5" ></uni-icons></text> -->
      <text class="dress">张警官</text>
    </view>
    <view class="line"></view>
    <!-- 上报时间 -->
    <view class="times">
      <text class="click">上报内容</text>
      <!-- <text><uni-icons type="location"  color="#2b7fd5" ></uni-icons></text> -->
    </view>
    <view class="line"></view>
    <!-- 上报内容 -->
    <view class="infocontent">
      <textarea
        style="width:700rpx; height:250rpx "
        maxlength="2000"
        placeholder="填报的内容..."
      />
    </view>
    <view class="line"></view>

    <view class="father">
      <view class="everyone">
        <!-- 图片 -->
        <image src="../../static/imgs/home_title.jpg" mode />
      </view>
      <view class="everyone">
        <!-- 图片 -->
        <image src="../../static/imgs/home_title.jpg" mode />
        
      </view>
      <view class="everyone">
        <!-- 图片 -->
        <image src="../../static/imgs/home_title.jpg" mode />
        
      </view>
      <view class="everyone">
        <!-- 图片 -->
        <image src="../../static/imgs/home_title.jpg" mode />
        
      </view>
      <view class="everyone">
        <!-- 图片 -->
        <image src="../../static/imgs/home_title.jpg" mode />
        
      </view>
      <view class="everyone">
        <!-- 图片 -->
        <image src="../../static/imgs/home_title.jpg" mode />
        
      </view>
      <view class="everyone">
        <!-- 图片 -->
        <image src="../../static/imgs/home_title.jpg" mode />
        
      </view>
    </view>
    <!-- 提交按钮 -->
    <button class="btn" form-type="submit" hover-class="button-hover">上报信息</button>
  </view>
  </form>
</template>

<script>
// 导入图标组件，注册使用
// import uniIcons from '@/components/uni-icons/uni-icons'
export default {
  data() {
    return {};
  },
  // components:{
  //   uniIcons
  // }
   methods:{
     
   }
};
</script>

<style lang="less" scoped>
.words {
  // display: flex;
  height: 100rpx;
  .word {
    font-size: 35rpx;
    line-height: 100rpx;
    color: #444444;
    margin-left: 20rpx;
  }
  .kong {
   
    line-height: 100rpx;
    color: red;
    margin-left: 50rpx;
    font-size: 30rpx;
  }
  .daojishi{
    
    line-height: 100rpx;
    color: red;
    margin-left: 20rpx;
    font-size: 30rpx;
  }
}
// 一条线
.line {
  margin-left: 20rpx;
  margin-right: 20rpx;
  height: 1rpx;
  border-top: solid #999999 1px;
}
// 上报位置
.map {
  height: 100rpx;
  .postion {
    font-size: 35rpx;
    line-height: 100rpx;
    color: #444444;
    margin-left: 20rpx;
  }
  .dress {
    // justify-content: flex-end;
    line-height: 100rpx;
    color: #444444;
    margin-left: 35rpx;
    font-size: 30rpx;
  }
}
// 上报时间
.times {
  height: 100rpx;
  .click {
    line-height: 100rpx;
    color: #444444;
    margin-left: 20rpx;
    font-size: 35rpx;
  }
}
// 上报内容
.infocontent {
  margin-left: 20rpx;
}
// 图片视频和语音
.tuShiyu {
  height: 70rpx;
  image {
    vertical-align: middle;
    height: 100%;
    width: 70rpx;
    padding: 15rpx;
  }
  .wz {
    line-height: 70rpx;
    margin-left: 20rpx;
    font-size: 35rpx;
    color: #444444;
  }
}
.lines {
  margin-left: 20rpx;
  margin-right: 20rpx;
  height: 1rpx;
  border-top: solid #999999 1px;
  margin-top: 40rpx;
}
// 下面的图片
.father {
  display: flex;
  flex-wrap: wrap;
  .everyone {
    margin-bottom: -52rpx;
    margin-right: -10rpx;
    margin-top: 30rpx;
    image {
      width: 200rpx;
      height: 200rpx;
      margin: 20rpx;
    }
  }
}
//提交按钮
.btn{
  background-color: #1744ac;
  border-radius: 5rpx 5rpx 0 0;
  margin-top: 55rpx;
}
</style>