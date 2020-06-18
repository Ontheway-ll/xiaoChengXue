<template>
  <view class="test">
        <view class="testNav">
            <view :class="{'selected' :tab === 1,'testTitle':true}" @click="toTab(1)">新闻动态
            <view class="nav"></view>
            </view>
            
            <view :class="{'selected':tab === 2,'testTitle':true}"  @click="toTab(2)">防范宣传
            <view class="nav"></view>

            </view>
            
            <view :class="{'selected':tab === 3,'testTitle':true}"  @click="toTab(3)">通知公告
            <view class="nav"></view>

            </view>
        </view>
        <view class="container">
            <keep-alive>
                <xwdt v-if="tab === 1">
                </xwdt>
                <ffxc v-else-if="tab === 2">
                </ffxc>
                <tzgg v-else>
                </tzgg>
            </keep-alive>
        </view>
    </view>
</template>

<script>
    import xwdt from '../../components/newscontent/xwdt.vue';
    import ffxc from '../../components/newscontent/ffxc.vue';
    import tzgg from '../../components/newscontent/tzgg.vue';
export default {
    data() {
            return {
                tab: 1
            };
        },
        components: {
            xwdt,
            ffxc,
            tzgg
        },
        methods: {
             toTab(index) {
                this.tab = index;
            },
  
        },
        onLoad(){
            
        },
        onShow(){
		
        }
}
</script>

<style lang="less" scoped>
.test {
    width: 100%;
    .testNav {
        height: 60px;
        line-height: 60px;
        display: flex;
        border-bottom: 1px solid #e5e5e5;
        font-weight: 700;
        color: #757575;
        .testTitle {
            flex: 1;
            text-align: center;
        }
        .selected {
            color: #444444;
              .nav{
              background: red;
              width: 100rpx;
              height: 9rpx;
              margin-top: -23rpx;
              margin-left: 75rpx;
              border-radius: 3rpx;
              }
        }
              
            
    }
}
</style>