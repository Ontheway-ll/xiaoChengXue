<template>
  <view class="color">
    
      <view @tap="getPartolDetail(item.id)" class="list" v-for="(item,index) in lists" :key="item.id" >
          <view class="num"><text class="ll">{{index+1}}</text></view>
          <view class="time">{{item.createDate}}</view>
          <view class="detail"><text class="km">里程:{{item.mileage}}km</text><text class="min">时长:{{item.timeLength}}min</text></view>
        <uni-icons class="icon" type="arrowright" size="25"></uni-icons>
       </view>
		<view class="end" v-if="isShow">没有更多了哦</view>
      
  </view>
</template>

<script>
import uniIcons from "@/components/uni-icons/uni-icons.vue"
export default {
  data(){
    return{
          current:1,//当前页码
          size:10,//每页条数
          total:0,
          lists:[],
          isShow:false
    }
  },
  methods:{
        // 一进入页面请求历史巡逻接口
      async historypartol(){
				let token = uni.getStorageSync('token')
				let ress = await this.http({
				 url:'/taskReceiverLine/list',
				 method:'POST',	
				 header:{'content-type': 'application/x-www-form-urlencoded',
				 	'Authorization': 'Bearer ' + token
				 },
				 data:{
					 current:this.current,//
					 size:this.size,//每页10条
				 }
			  })
				console.log('我的历史巡逻请求列表',ress);
				this.lists=this.lists.concat(ress.data.records)
				// 将总数保存起来
        this.total = ress.data.total;
      },
            // 点击其中一条进入巡逻详情
            getPartolDetail(id){
              console.log('点击历史巡逻进入详情',id);
              uni.navigateTo({
                url: '/pages/patroldetail/index?id=' + id
            })
            },
  },
     onLoad(){
        this.historypartol()
     },
    components: { uniIcons },
    onReachBottom(){
			console.log("上拉触底");
			if (this.lists.length===this.total) {
				this.isShow=true
				return
			}
			this.current++
			this.historypartol()//加载
			
		}
}
 </script>

<style lang="less" scoped>
.color{
  background-color: #f5f6fa; 
  .end{
    color: #cccccc;
		text-align: center;
		// margin-top: 10rpx;
  }
 .list{
   position: relative;
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
      font-size: 30rpx;
      color: #757575;
      margin-left: 129rpx;
      margin-top: -77rpx;
    }
    .detail{
      margin-left: 83rpx;
      font-size: 25rpx;
      margin-top: 10rpx;
      .km{
        margin-left: 50rpx;
      color: #757575;
      }
      .min{
        margin-left: 20rpx;
      color: #757575;
      }
    }
    .icon{
      position: absolute;
      top: 10rpx;
      right: 30rpx;
    }
  }
}
 
</style>