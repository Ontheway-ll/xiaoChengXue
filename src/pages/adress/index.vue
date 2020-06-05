<template>
  <view class="bigbox">
    <view class="wrapper">
         <!-- 收货信息 -->
      <view class="shipment">
        <view class="pop">收货人：</view>
         <text class="people">李德华</text> 
      </view>
      <view class="shipment">
        <view class="tel">电话：</view>
         <text class="telphone">13555555555</text> 
      </view>
      <view class="shipment">
        <view class="address">收货地址：</view>
         <text class="ads">天津西青区某某街道凯德大厦3楼666ffkkf</text> 
      </view>
    </view>
        <button @click="getadress"  type="primary">添加收货地址</button>
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