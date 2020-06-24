<template>
  <view>

     <view class="biglist"  v-for="(item,index) in lists" :key="item.id" >
         <view class="list">
          <view class="num">
            <text class="ll">{{index+1}}</text>
          </view>
          <view class="minbox">
              <view class="task">主题:
                <text class="taskcont">{{item.content}}</text>
              </view>
              <view class="toptime">上报时间:</view>
             <text class="time">{{item.createDate}}</text>
         </view>
        <!-- <uni-icons class="icon" type="arrowright" size="25"></uni-icons> -->
       </view>
        <view class="line" ></view>
       </view>

       
      <view v-if="isShow" class="imgs">
        <image class="img" src="../../static/imgs/task_icon_nodata.png"></image>
        <view class="wu"><text class="bao">暂无上报</text></view>
      </view>
		<view class="end" v-if="show">没有更多了哦</view>
  </view>
</template>

<script>
export default {
      data(){
        return{
          isShow:false,//图片默认隐藏
           current:1,
           size:10,
           lists:[],
           total:0,
			     show:false//拉到底部默认隐藏	

        }
      },
      methods:{
        // 发送请求获取历史上报
        async getHistoryReport(){ 
				let token = uni.getStorageSync('token')
				let ress = await this.http({
				 url:'/event/list',
				 method:'POST',	
				 header:{'content-type': 'application/x-www-form-urlencoded',
				 	'Authorization': 'Bearer ' + token
				 },
				 data:{
					 current:this.current,//当前第一页
					 size:this.size,//每页10条
				 }
			 })
        console.log('获取历史上报',ress.data);
        this.lists=this.lists.concat(ress.data.records)
        //  判断下请求回来的内容是否为空，如果为空显示 “暂无上报” 图片
         if (this.lists.length==0) {
            this.isShow=true
            return
         }
				// 将总数保存起来
        this.total = ress.data.total;
			}
      },
      onLoad(){
         this.getHistoryReport()
      },
      onReachBottom(){
			console.log("上拉触底");
			if (this.lists.length===this.total) {
				this.show=true
				return
			}
      this.current++
      //  或者   this.pages++  
			this.getHistoryReport()//加载上报列表
			
		}
}
</script>

<style lang="less" scoped>
  .imgs{
    display: flex;
    align-items: center;
    justify-content: center;
    .img{
     height: 200rpx;
     width: 200rpx;
     margin-top: 400rpx;
    }
    .wu{
      height: 100rpx;
      width: 200rpx;
      margin-top: 700rpx;
      margin-left: -200rpx;
      text-align: center;
      .bao{
        line-height: 100rpx;
        font-size: 50rpx;
        color: #757575;
      }
    }
  }
    .line {
  margin-left: 20rpx;
  margin-right: 20rpx;
  height: 1rpx;
  border-top: dashed #999999 1px;
  margin-top: 25rpx ;
  }
   .list{
     display: flex;
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
    .minbox{
      display: inline-block;
   .task{
        
      font-weight: 700;
      font-size: 35rpx;
      margin-left: 20rpx;
        color: #444444;
        .taskcont{
         font-weight: 600;
        font-size: 30rpx;
        margin-left: 20rpx;
        //   overflow: hidden; 
        //  text-overflow:ellipsis;
        //  white-space: nowrap;
        //  width: 300rpx;
        }
    }
    .toptime{
      margin-top: 10rpx;
      display: inline-block;
      color: #757575;
      margin-left: 13rpx;
    }
    .time{
      font-size: 25rpx;
      color: #757575;
      margin-left: 30rpx;
      // margin-top: 20rpx;
    } 
    }
   
  }
  .end{
		color: #cccccc;
		text-align: center;
		// margin-top: 10rpx;
	}

</style>