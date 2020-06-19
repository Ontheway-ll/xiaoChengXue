<template>
  <view class="color">
    <block v-for="(item,index) in taskdatas" :key="index"   >
      <view :data-idx="index" 
             @tap="OnTaskDetailTap"
             class="list">
          <view class="num"><text class="ll">{{item.index}}</text></view>
         <text class="task">{{item.title}}</text>
         <!-- <text class="time">{{util.formatDate(item.startTime)}}</text> -->
         <text class="time">{{item.startTime}}</text>
        <uni-icons class="icon" type="arrowright" size="25"></uni-icons>
       </view>
    </block>

     
      <view class="list" @tap="OnTaskDetailTap" >
          <view class="num"><text class="ll">2</text></view>
         <text class="task">任务二</text>
         <text class="time">2020-06-10 11:22:33</text>
        <uni-icons class="icon" type="arrowright" size="25"></uni-icons>
       </view>

        <!-- <navigator url="/pages/taskdetail/index"  hover-class="className">
      <view class="list">
          <view class="num"><text class="ll">3</text></view>
         <text class="task">任务三</text>
         <text class="time">2020-06-10 11:22:33</text>
        <uni-icons class="icon" type="arrowright" size="25"></uni-icons>
       </view>
        </navigator> -->

        <!-- <button @click="open">打开弹窗</button>
        <uni-popup ref="popup" type="center">加载中...</uni-popup> -->
         
  </view>
</template>

<script>
//  const { formatDate }  = require('../../utils/time')
import uniIcons from "@/components/uni-icons/uni-icons.vue"
import uniPopup from '@/components/uni-popup/uni-popup.vue'
import uniPopupMessage from '@/components/uni-popup/uni-popup-message.vue'
import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue'
export default {
  data(){
    return{
      	pages: 0,//总共多少页
        pageNum:1,//第一页
        pageSize:10,//每页10条
        taskdatas:[],//任务列表
        nonedata: false,
				moredata: false
    }
  },
  components: {
        uniIcons,
        uniPopup,
        uniPopupMessage,
        uniPopupDialog},
  methods:{
    // 弹层
    // open(){
    //      this.$refs.popup.open()
    //   },
      // 一进入页面获取任务列表
      async getTaskList(){
        let token = uni.getStorageSync('token')
        let res = await this.http({
          url:'/task/list',
          method:'POST',
          header:{
						'content-type': 'application/x-www-form-urlencoded',
				    'Authorization': 'Bearer ' + token
          },
          data:{
            current:this.pageNum,
            size:this.pageSize
          }
        })
           console.log("请求任务列表成功",res.data);
        if (res.code===200) {
        
          let curListData = this.taskdatas.concat(res.data.records);
          if (this.pageNum === res.data.pages) {
          this.taskdatas = curListData;
            this.pages = res.data.pages;
							this.nonedata = true;
							this.moredata = false;
          }
          
        }else{
          console.log('请求任务列表报错',res);
        }
     },
    //  点击某一条信息进入详情
     OnTaskDetailTap(res) {
				console.log("OnTaskDetailTap:", res);
			}
  },
  created(){
      if (this.taskdatas.length > 0) {
				this.taskdatas = ''
			}
      this.getTaskList()
  },
  // 上拉触底
  onReachBottom(){
    if (this.pageNum < this.pages) {
				this.pageNum = this.pageNum + 1;
         this.getTaskList()
			}
  }
}
</script>

<style lang="less" scoped>
.color{
  background-color: #f5f6fa; 
  .banner {
		width: 80%;
		position: fixed;
		left: 50%;
		top: 50%;
		background: red;
		border-radius: 10upx;
		z-index: 9999;
		transform: translate(-50%, -50%);
	}
 .list{
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
      font-size: 25rpx;
      color: #757575;
      margin-left: 180rpx;
      // margin-top: 20rpx;
    }
    .icon{
      margin-top: 25rpx;
      margin-left: 50rpx;
    }
  }
}
 
</style>