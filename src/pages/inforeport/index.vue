<template>
  <form action="">
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
      <text class="time">2020-05-25 14:25:00</text>
    </view>
    <view class="line"></view>
    <!-- 上报内容 -->
    <view class="infocontent">
      <textarea
        style="width:700rpx; height:250rpx "
        maxlength="2000"
        placeholder="输入您想要填报的内容 说明:为了确保您的信息被采纳，请录入事发时间、地点、相关人员、时间内容、物品、群体、组织等信息。"
      />
    </view>
    <view class="line"></view>
    <!-- 图片视频和语音 -->
    <view class="tuShiyu">
      <image src="../../static/imgs/ir_add_normal.png" mode />
      <text class="wz">图片</text>
      <image src="../../static/imgs/ir_camera_normal.png" mode />
      <text class="wz">视频</text>
      <image src="../../static/imgs/ir_record_normal.png" mode />
      <text class="wz">语音</text>
    </view>
    <view class="lines"></view>

    <view class="father">
      <view class="everyone">
        <!-- 图片 -->
        <image src="../../static/imgs/home_title.jpg" mode />
        <view class="del">
          <image src="../../static/imgs/delete_normal.png" mode />
        </view>
      </view>
      <view class="everyone">
        <!-- 图片 -->
        <image src="../../static/imgs/home_title.jpg" mode />
        <view class="del">
          <image src="../../static/imgs/delete_normal.png" mode />
        </view>
      </view>
      <view class="everyone">
        <!-- 图片 -->
        <image src="../../static/imgs/home_title.jpg" mode />
        <view class="del">
          <image src="../../static/imgs/delete_normal.png" mode />
        </view>
      </view>
      <view class="everyone">
        <!-- 图片 -->
        <image src="../../static/imgs/home_title.jpg" mode />
        <view class="del">
          <image src="../../static/imgs/delete_normal.png" mode />
        </view>
      </view>
      <view class="everyone">
        <!-- 图片 -->
        <image src="../../static/imgs/home_title.jpg" mode />
        <view class="del">
          <image src="../../static/imgs/delete_normal.png" mode />
        </view>
      </view>
      <view class="everyone">
        <!-- 图片 -->
        <image src="../../static/imgs/home_title.jpg" mode />
        <view class="del">
          <image src="../../static/imgs/delete_normal.png" mode />
        </view>
      </view>
      <view class="everyone">
        <!-- 图片 -->
        <image src="../../static/imgs/home_title.jpg" mode />
        <view class="del">
          <image src="../../static/imgs/delete_normal.png" mode />
        </view>
      </view>
    </view>
    <!-- 提交按钮 -->
    <button class="btn" form-type="submit" hover-class="button-hover">提交</button>
  </view>
  </form>
</template>

<script>
// 导入图标组件，注册使用
// import uniIcons from '@/components/uni-icons/uni-icons'
export default {
  data() {
    return {};
  }
  // components:{
  //   uniIcons
  // }
};
</script>

<style lang="less" scoped>
.words {
  display: flex;
  height: 100rpx;
  .word {
    margin-right: auto;
    line-height: 100rpx;
    color: #444444;
    margin-left: 20rpx;
  }
  .kong {
    justify-content: flex-end;
    line-height: 100rpx;
    color: #444444;
    margin-right: 20rpx;
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
  display: flex;
  height: 100rpx;
  .postion {
    margin-right: auto;
    line-height: 100rpx;
    color: #444444;
    margin-left: 20rpx;
  }
  .dress {
    justify-content: flex-end;
    line-height: 100rpx;
    color: #444444;
    margin-right: 20rpx;
  }
}
// 上报时间
.times {
  display: flex;
  height: 100rpx;
  .click {
    margin-right: auto;
    line-height: 100rpx;
    color: #444444;
    margin-left: 20rpx;
  }
  .time {
    justify-content: flex-end;
    line-height: 100rpx;
    color: #444444;
    margin-right: 20rpx;
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
    margin-bottom: -60rpx;
    margin-right: -2rpx;
    image {
      width: 200rpx;
      height: 200rpx;
      margin: 20rpx;
    }

    .del {
      width: 50rpx;
      height: 50rpx;
      position: relative;
      image {
        position: absolute;
        width: 100%;
        height: 100%;
        top: -259rpx;
        right: -200rpx;
      }
    }
  }
}
//提交按钮
.btn{
  background-color: #1744ac;
  border-radius: 5rpx 5rpx 0 0;
}
</style>