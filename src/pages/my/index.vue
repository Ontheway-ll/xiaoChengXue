<template>
  <view>
    <!-- 头像和用户名 -->
    <view class="box">
      <view class="photo">
        <!-- <image src="../../static/imgs/11.png" mode="" /> -->
        <open-data type="userAvatarUrl" class="avatar"></open-data>
      </view>
      <view class="name" >
        <open-data class="nickname" type="userNickName" ></open-data>
      </view>
    </view>
    <navigator url="/pages/historyreport/index"  hover-class="className">
          <uni-list> 
          <uni-list-item title="历史上报"></uni-list-item>
        </uni-list>
    </navigator>
    <navigator url="/pages/task/index" open-type="switchTab" hover-class="className">
          <uni-list> 
          <uni-list-item title="任务列表"></uni-list-item>
        </uni-list>
    </navigator>
    <navigator url="/pages/historypatrol/index"  hover-class="className">
          <uni-list> 
          <uni-list-item title="历史巡逻"></uni-list-item>
        </uni-list>
    </navigator>
    <navigator url="/pages/mystar/index"  hover-class="className">
          <uni-list> 
          <uni-list-item title="我的积分"></uni-list-item>
        </uni-list>
    </navigator>
    <navigator url="/pages/mystore/index"  hover-class="className">
          <uni-list> 
          <uni-list-item title="我的商城"></uni-list-item>
        </uni-list>
    </navigator>
    <navigator url="/pages/adress/index"  hover-class="className">
          <uni-list> 
          <uni-list-item title="收货地址"></uni-list-item>
        </uni-list>
    </navigator>
    <navigator url="/pages/record/index"  hover-class="className">
          <uni-list> 
          <uni-list-item title="兑换记录"></uni-list-item>
        </uni-list>
    </navigator>
    <navigator url="/pages/mysign/index"  hover-class="className">
          <uni-list> 
          <uni-list-item title="我的签到"></uni-list-item>
        </uni-list>
    </navigator>
    <navigator url="/pages/questions/index"  hover-class="className">
          <uni-list> 
          <uni-list-item title="问题反馈"></uni-list-item>
        </uni-list>
    </navigator>
    <navigator url="/pages/about/index"  hover-class="className">
          <uni-list> 
          <uni-list-item title="关于共助津门"></uni-list-item>
        </uni-list>
    </navigator>
  </view>
</template>

<script>
import uniList from "@/components/uni-list/uni-list.vue"
import uniListItem from "@/components/uni-list-item/uni-list-item.vue"
export default {
  data(){
    return{}
  },
  components:{
      uniList,uniListItem
  },
  onShareAppMessage(){
    // 监听用户转发分享函数
    // console.log('转发分享');//转发的是微信截取的当前页面的截图，
    // 自定义转发内容
    return{
      title:"公共信息采集",
      path:"/pages/index/index"
      // imageUrl： 
    }
  }
}
</script>

<style lang="less" scoped>
    .box{
      // height: 200rpx;
      // background-color: red;
      display: flex;
      align-items: center;
      // justify-content: center;
      flex-wrap: wrap;

      .photo{
        height: 120rpx;
        width: 120rpx;
        margin: 20rpx ;
        border-radius: 50%;
        .avatar{
          display: block;
          width: 100%;
          height: 100%;
        }
      }
      .name{
        .nickname{
          display: block;
          color: black;
          font-size: 35rpx;
        }
      }
    }
</style>