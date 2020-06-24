<template>
  <view class="xlbox">
       <view class="tuPian">
         <!-- <image class="imgg" src="../../static/imgs/Snipaste_2020-06-24_11-17-10.png" mode="" /> -->
         <map class="map" id="map"></map>
       </view>
      <view class="xunluo">
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
      </view>
  </view>
</template>

<script>
export default {
    data(){
      return{
        id:'',
        lisst:[]
      }
    },
    methods:{
      // 获取巡逻详情
      async getpartrolDetail(){
				let token = uni.getStorageSync('token')
				let resss = await this.http({
				 url:'/taskReceiverLine/detail',
				 method:'POST',	
				 header:{'content-type': 'application/x-www-form-urlencoded',
				 	'Authorization': 'Bearer ' + token
				 },
				 data:{
			         id:this.id
				 }
			 })
				console.log('获取巡逻详情',resss.data);
          this.lisst= resss.data
			}

      
    },
    onLoad(id){
      console.log('进入巡逻详情页面',id);
      this.getpartrolDetail()
    }
}
</script>

<style lang="less" scoped >
.xlbox{
  // background-color: royalblue;
  .tuPian{
    width: 750rpx;
    height: 940rpx;
    .map{
      width: 100%;
      height: 100%;
    }
  }
   .xunluo{
      width: 750rpx;
      padding: 20rpx;
      // position: relative;
      position: fixed;
      bottom: 60rpx;
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
         margin-left: 135rpx;
        }
        .shichang{
         margin-left: 160rpx;
        }
      }
  }
}
  
</style>