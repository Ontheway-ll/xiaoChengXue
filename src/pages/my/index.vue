<template>
  <view>
    <navigator url="/pages/historyreport/index"  hover-class="className">
          <uni-list> 
          <uni-list-item title="历史上报"></uni-list-item>
        </uni-list>
    </navigator>
    <navigator url="/pages/historyreport/index"  hover-class="className">
          <uni-list> 
          <uni-list-item title="任务列表"></uni-list-item>
        </uni-list>
    </navigator>
    <navigator url="/pages/historyreport/index"  hover-class="className">
          <uni-list> 
          <uni-list-item title="历史巡逻"></uni-list-item>
        </uni-list>
    </navigator>
    <navigator url="/pages/historyreport/index"  hover-class="className">
          <uni-list> 
          <uni-list-item title="我的积分"></uni-list-item>
        </uni-list>
    </navigator>
    <navigator url="/pages/historyreport/index"  hover-class="className">
          <uni-list> 
          <uni-list-item title="我的商城"></uni-list-item>
        </uni-list>
    </navigator>
    <navigator url="/pages/historyreport/index"  hover-class="className">
          <uni-list> 
          <uni-list-item title="收货地址"></uni-list-item>
        </uni-list>
    </navigator>
    <navigator url="/pages/historyreport/index"  hover-class="className">
          <uni-list> 
          <uni-list-item title="兑换记录"></uni-list-item>
        </uni-list>
    </navigator>
    <navigator url="/pages/historyreport/index"  hover-class="className">
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
    }
}
</script>

<style>

</style>