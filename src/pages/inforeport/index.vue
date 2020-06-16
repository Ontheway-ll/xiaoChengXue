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
        <view class="postion">上报位置</view>
        <uni-icons @tap="position" class="icons" type="location-filled" size="20"></uni-icons>
        <view v-if="adres" class="dress">{{adres}}</view>
        <view v-else class="dress">{{addresss}}</view>
        
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
         :value="bblur"
          name="content"
          @blur="myblur"
          style="width:700rpx; height:250rpx "
          maxlength="2000"
          placeholder="输入您想要填报的内容 说明:为了确保您的信息被采纳，请录入事发时间、地点、相关人员、时间内容、物品、群体、组织等信息。"
        />
      </view>
      <view class="line"></view>
      <!-- 图片视频和语音 -->
      <view class="tuShiyu">
        <image @tap="myphoto" src="../../static/imgs/ir_add_normal.png" mode />
        <text class="wz">图片</text>
        <image src="../../static/imgs/ir_camera_normal.png" mode />
        <text class="wz">视频</text>
        <image src="../../static/imgs/ir_record_normal.png" mode />
        <text class="wz">语音</text>
      </view>
      <view class="lines"></view>

      <view class="father">
        <view v-for="(item,index) in photos" :key="index"  class="everyone">
          <!-- 图片-->
          <image @tap= "bigphoto(index)" :src="item" mode />
          <view  @tap= "delphoto(index)"  class="del">
            <image  src="../../static/imgs/delete_normal.png" mode />
          </view>
        </view>
         
      </view>
      <!-- 提交按钮 -->
      <button   class="btn" form-type="submit" >提交</button>
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
      adres:'',
      // longitude: "", //经度
      // latitude: "" // 纬度
      time:'',
      bblur:'',
      photos:[],
      
    };
  },
  components: { uniIcons },
  onLoad(options) {
    this.getAuthorizeInfo();
    //  console.log(options);
    this.type = options.type;
    // this.getAuthorizeInfo();
    // 显示时间
    var time = util.formatTime(new Date())
    this.time=time
  },
  methods: { 
    // 获取输入框内容
    myblur(e){
      // console.log(e.detail.value);
      this.bblur=e.detail.value
      // console.log(this.bblur);
    },
    // 点击提交按钮
    formSubmit(e){
      // console.log(e);
      // console.log(e.detail.value.content);
      var inputVla = e.detail.value.content
      console.log( inputVla);
      if (inputVla==""|| inputVla==undefined) {
        uni.showToast({
          title: '内容不能为空',
          duration: 1000
        })
        return false
      }
       
        uni.showToast({
          title: '提交成功',
          duration: 1000
        })
         
      
      this.bblur=""
      this.photos=""
    },
    // 点击图片获取相册信息
    myphoto(){
      // console.log(1);
      uni.chooseImage({
          count: 9,
          sizeType: ['original', 'compressed'],
          sourceType: ['album', 'camera'], //从相册或手机选择
          success: (res) =>{
            // console.log(res.tempFilePaths);
            // console.log(JSON.stringify(res.tempFilePaths));
            if (this.photos=='') {
            this.photos = res.tempFilePaths
            }else{
              this.photos.push(res.tempFilePaths)
            }
          }
      })
    },
    // 点击删除按钮
    delphoto(index){
      console.log(index);
      uni.showModal({
        title: '删除图片',
        content: '确定要删除吗',
        cancelText: '取消',
				confirmText: '确定',
        success: (res)=> {
          if (res.confirm) {
           this.photos.splice(index,1)
          } else if (res.cancel) {
            console.log('用户点击取消');
          }
        }
      });
    },
    // 点击查看放大图片
    bigphoto(index){
      uni.previewImage({
        urls:this.photos
      });
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
          // console.log("纬度：" + res.latitude);
          // console.log("经度：" + res.longitude);
          this.adres = res.address;
        }
      });
    },

    onShow() {
    // this.getAuthorizeInfo();
      // 动态设置标题
      // uni.setNavigationBarTitle({
      //     title: this.$t('买金'),
      // })
    }
  }
};
</script>

<style lang="less" scoped>
.inforeport{
.words {
  height: 100rpx;
  .word {
    // margin-right: auto;
    line-height: 100rpx;
    color: #444444;
    margin-left: 20rpx;
  }
  .kong {
    // justify-content: flex-end;
    line-height: 100rpx;
    color: #444444;
    // margin-right: 20rpx;
    margin-left: 450rpx;
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
  // display: flex;
  height: 100rpx;
  .postion {
    display: inline-block;
    // margin-right: auto;
    line-height: 100rpx;
    color: #444444;
    margin-left: 20rpx;
    width: 150rpx;
    // margin-top: 30rpx;
    
  }
  .icons {
    width: 50rpx;
    margin-top: 28rpx;
    margin-left: 60rpx;
  }
  .dress {
    // width: calc(100% - 200rpx);
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    line-height: 100rpx;
    color: #444444;
    margin-left: 270rpx;
    margin-top: -100rpx;
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
    margin-right: 140rpx;
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
  width: 750rpx;
  position: fixed;
  bottom: 0rpx;

}
}

</style>