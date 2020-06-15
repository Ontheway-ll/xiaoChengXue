<template>
 <view>
  <form action @submit="formSubmit" name="textarea" >
    <view class="inforeport">
      <view class="words">
        <text class="word">关键词</text>
        <text class="kong">{{obj[type]}}</text>
      </view>
      <!-- 一条线 -->
      <view class="line"></view>
      <!-- 上报位置location-filled -->
      <view class="map">
        <text class="postion">上报位置</text>

        <uni-icons @tap="position" class="icons" type="location-filled" size="20"></uni-icons>

        <text class="dress">{{addresss}}</text>
      </view>
      <view class="line"></view>
      <!-- 上报时间 -->
      <view class="times">
        <text class="click">上报时间</text>
        <!-- <text><uni-icons type="location"  color="#2b7fd5" ></uni-icons></text> -->
        <text class="time" v-if="time" >{{time}}</text>
      </view>
      <view class="line"></view>
      <!-- 上报内容 -->
      <view class="infocontent">
        <textarea
          @input="myinput"
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
      <button   class="btn" form-type="submit" hover-class="button-hover">提交</button>
    </view>
  </form>
 </view>
</template>

<script>
import uniIcons from "@/components/uni-icons/uni-icons.vue";
var util =require('../../utils/time.js')
export default {
  data() {
    return {
      obj: {
        1: "涉恐",
        2: "涉稳",
        3: "刑事",
        4: "治安",
        5: "隐患",
        6: "其他"
      },
      type: 0,
      addresss:"",
      // longitude: "", //经度
      // latitude: "" // 纬度
      time:'',
      inputt:null
    };
  },
  components: { uniIcons },
  onLoad(options) {
    //  console.log(options);
    this.type = options.type;
    // this.getAuthorizeInfo();
    // 显示时间
    var time = util.formatTime(new Date())
    this.time=time
  },
  methods: {
    
    // 获取输入框内容
    myinput(e){
      // console.log(e.detail.value);
      this.inputt = e.detail.value
      console.log(inputt);
      
    },
    // 点击提交按钮
    formSubmit(e){
      // console.log(e);
      // console.log(e.detail.value.textarea);
      // var inputVla = e.detail.value.textarea
      // console.log(inputVla);
      // if (inputVla==""|| inputVla==undefined) {
      //   uni.showToast({
      //     title: '内容不能为空',
      //     duration: 1000
      //   })
      //   return false
      // }else {
      //   uni.showToast({
      //     title: '提交成功',
      //     duration: 1000
      //   })
      //   this.inputt=""
      // }
      
    },
    getAuthorizeInfo() {
      const that = this;
      // 提前向用户发起授权请求
      uni.authorize({
        // 需要获取权限的 scope  地理位置
        scope: "scope.userLocation",
        success() {
          // 允许授权
          that.getLocationInfo();
        },
        fail() {
          // 拒绝授权
          that.openConfirm();
          console.log("你拒绝了授权，无法获得周边信息");
        }
      });
    },
    // 获取地理位置
    getLocationInfo() {
      uni.getLocation({
        type: "gcj02",
        success: res => {
          var QQMapWX = require("../../utils/qqmap-wx-jssdk.min");
          // 实例化API核心类
          var qqmapsdk = new QQMapWX({
            key: "LPHBZ-4CACG-DVFQM-IILX4-W7M3S-X5BTZ"
          });
          qqmapsdk.reverseGeocoder({
            location: {
              latitude: res.latitude,
              longitude: res.longitude
            },
            // location: e.detail.value.reverseGeo || '', //获取表单传入的位置坐标,不填默认当前位置,示例为string格式
            success: (res)=> {
              //成功后的回调
              console.log(res);
             this.addresss = res.result.address
            },
            fail: function(error) {
              console.log("获取地址失败", error);
            },
            complete: function(completeres) {}
          });
        }
      });

    },
    // 再次获取授权
    // 当用户第一次拒绝后再次请求授权
    openConfirm() {
      uni.showModal({
        title: "请求授权当前位置",
        content: "需要获取您的地理位置，请确认授权",
        success: res => {
          if (res.confirm) {
            uni.openSetting(); // 打开地图权限设置
          } else if (res.cancel) {
            uni.showToast({
              title: "你拒绝了授权，无法获得周边信息",
              icon: "none",
              duration: 1000
            });
          }
        }
      });
    },
    // 点击地图图标的时候选择位置
    position() {
      uni.chooseLocation({
        success: res => {
          console.log(res);
          console.log("位置名称：" + res.name);
          console.log("详细地址：" + res.address);
          console.log("纬度：" + res.latitude);
          console.log("经度：" + res.longitude);
          this.addresss = res.address;
        }
      });
    },

    onShow() {
    this.getAuthorizeInfo();
      // 动态设置标题
      // uni.setNavigationBarTitle({
      //     title: this.$t('买金'),
      // })
    }
  }
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
  .icons {
    margin-top: 28rpx;
    margin-right: 20rpx;
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
.btn {
  background-color: #1744ac;
  border-radius: 5rpx 5rpx 0 0;
}
</style>