<template>
  <view>
            <view class="map">
              <!-- latitude中心纬度	longitude中心经度 markers标记点 show-compass=true指南针 enable-traffic=true实时路况-->
                <map :latitude="latitude" :longitude="longitude" :markers="covers"  ></map>
            </view>
          <view class="xunluo">
              <view class="xunl">巡逻</view>
              <view class="shuzi">
               <text class="qianmi">1.37 <text class="km">km</text> </text> 
               <text class="fenzhong">1.03 <text class="ms">m/s</text> </text> 
               <text class="xlshichang">30.56 <text class="min">min</text> </text> 
              </view>
              <view class="wenzi">
                <text class="licheng">巡逻里程</text>
                <text class="peisu">配速</text>
                <text class="shichang">巡逻时长</text>
              </view>
              <!-- <view class="anniu">
                <text class="kaishixl">开始巡逻</text>
              </view> -->
               <view class="xianshi">
                 <view class="anniull">
                  <text  class="kaishixll">开始巡逻</text>
                 </view>
                 <view @tap="changes" class="pause">
                   <text  class="continue" v-if="isShow">继续</text>
                   <text class="zanting" v-else >暂停</text>
                 </view>
                 <view class="anniulr">
                   <text class="jieshuxl">结束巡逻</text>
                 </view>
               </view>
                <!-- <view class="xianshii">
                 <view class="anniull">
                  <text  class="kaishixll">暂停巡逻</text>
                 </view>
                 <view class="anniulr">
                   <text class="jieshuxl">结束巡逻</text>
                 </view>
               </view> -->
               <!-- <view class="xianshiii">
                 <view class="anniull">
                  <text  class="kaishixll">继续巡逻</text>
                 </view>
                 <view class="anniulr">
                   <text class="jieshuxl">结束巡逻</text>
                 </view>
               </view> -->
          </view>
  </view>
</template>

<script>
export default {
  data(){
    return{
       id:0, // 使用 marker点击事件 需要填写id
            title: 'map',
            latitude: 39.114139,
            longitude: 117.101278,
            covers: [{
                latitude: 39.114139,
                longitude: 117.101278,
                // iconPath: '../../../static/location.png'
            }],
            isShow:false  
    }
  },
  methods:{
      changes(){
        this.isShow = !this.isShow
        // console.log(this.isShow);
        
      }
  }
}
</script>

<style lang="less" scoped>
    .map{
      width: 750rpx;
      height: 1000rpx;
      map{
        width: 100%;
        height: 100%;
      }
    }
    .xunluo{
      width: 750rpx;
      padding: 20rpx;
      position: relative;
      .xunl{
        font-size: 50rpx;
        color: #444444;
        font-weight: 700;
        position: absolute; 
        top: -17rpx ;
        left: 31rpx;
      }
      .shuzi{
        margin-top: 40rpx;
        .qianmi{
          margin-left: 40rpx;
          font-size: 40rpx;
          color: #224182;
          font-weight: 700;
          .km{
            font-size: 25rpx;
            color: #898989;
            font-weight: 400;
          }
        }
        .fenzhong{
          margin-left: 120rpx;
          font-size: 40rpx;
          color: #224182;
          font-weight: 700;
          .ms{
            font-size: 25rpx;
            color: #898989;
            font-weight: 400;
            margin-left: 20rpx;
          }
        }
        .xlshichang{
          margin-left: 80rpx;
          font-size: 40rpx;
          color: #224182;
          font-weight: 700;
          .min{
            font-size: 25rpx;
            color: #898989;
            font-weight: 400;
          }
        }
      }
      .wenzi{
        margin-left: 30rpx;
         font-size: 30rpx;
          font-weight: 700;
          color: #454545;
          margin-top: 15rpx;
          .licheng{
            margin-left: 10rpx;
          }
        .peisu{
         margin-left: 110rpx;
        }
        .shichang{
         margin-left: 135rpx;
        }
      }
      .anniu{
        margin-top: 20rpx;
        margin-left: 220rpx;
        background-color: #224182;
        border-radius: 50rpx;
        height: 60rpx;
        text-align: center;
        width: 250rpx;
          .kaishixl{
          color: #ffffff;
          font-size: 35rpx;
          line-height: 60rpx;  
        }
        
      }
      .anniull{
        display: inline-block;
        margin-top: 40rpx;
        margin-left: 30rpx;
        background-color: #224182;
        border-radius: 50rpx;
        height: 60rpx;
        width: 250rpx;
        text-align: center;
        width: 250rpx;
        .kaishixll{
          color: #ffffff;
          font-size: 35rpx;
          line-height: 60rpx; 
        }
      }
      .anniulr{
        display: inline-block;
        margin-top: 40rpx;
        margin-left: 30rpx;
        background-color: #224182;
        border-radius: 50rpx;
        height: 60rpx;
        text-align: center;
        width: 250rpx;
        .jieshuxl{
           color: #ffffff;
          font-size: 35rpx;
          line-height: 60rpx; 
        }
      }
      .pause{
        display: inline-block;
        margin-top: 40rpx;
        margin-left: 20rpx;
        background-color: #224182;
        border-radius: 20rpx;
        height: 60rpx;
        text-align: center;
        width: 100rpx;
        .zanting{
           color: #ffffff;
          font-size: 35rpx;
          line-height: 60rpx; 
        }
        .continue{
           color: #ffffff;
          font-size: 35rpx;
          line-height: 60rpx;
        }
      }
    }
</style>