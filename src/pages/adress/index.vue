<template>
  <view class="bigbox">
    <view v-if="address" class="wrapper">
         <!-- 收货信息 -->
      <view class="shipment">
        <view class="pop">收货人：</view>
         <text class="people">{{address.userName}}</text> 
      </view>
      <view class="shipment">
        <view class="tel">电话：</view>
         <text class="telphone">{{address.telNumber}}</text> 
      </view>
      <view class="shipment">
        <view class="address">收货地址：</view>
         <text class="ads">{{detailAddress}}</text> 
      </view>
    </view>
        <button v-else  @click="getadress"  type="primary">添加收货地址</button>
  </view>
</template>

<script>
export default {
  data(){
    return{
      address:null//收货地址
    }
  },
  methods:{
    getadress(){
      // 点击添加收货地址，小程序只需要调用微信小程序的api函数就行
      uni.chooseAddress({
        success:(res)=>{
          console.log(res);
          this.address=res  
        }
      })
    }
  },
  computed:{
    // 拼接详细地址
    detailAddress(){
      if (this.address) {
      return this.address.provinceName+this.address.cityName+this.address.countyName+this.address.detailInfo
      }
    }
  }
}
</script>

<style lang="less" scoped>
.bigbox{
  height: 5000rpx;
  background-color: #f4f7f9;
  .wrapper{
    padding-left: 30rpx;
    background-color: #fff;
    .shipment{
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      margin-top: 20rpx;
      margin-bottom: 10rpx;
      
    }
    
  }
}
  
</style>