<template>
  <view>
      测试
      <button type="primary" open-type="getUserInfo" @getuserinfo="getUserInfo">微信登录</button>
  </view>
</template>

<script>
export default {
    data(){
        return{

        }
    },
     onLoad(){
        // 当页面加载，发送请求获取轮播图数据
        this.getswiper()
    },
    methods:{
         async  getswiper(){
            // uni.request({
            //     url: '', //仅为示例，并非真实接口地址。
            //     data: {},
            //     header: {},
            //     success: (res) => {
            //         console.log(res);
            //     }
            // });
            // 第二种promise,uni封装好了
            let res = await uni.request({
                url:'https://app.rl.jyxin.com/login'
            })
            console.log(res);
            
        },
        // 点击按钮获取用户信息
         async getUserInfo(info){
            console.log(info);  
            if (info.detail.errMsg==="getUserInfo:fail auth deny") {
              uni.showToast({
                  title: '不要拒绝我哦'
              })
              return      
            }  
            // 没有拒绝可以获取用户信息,用微信特有的方法，获取我们的账号信息
            // 用我们的账号去登录，需要code，小程序登录都需要
            // https://app.rl.jyxin.com/login 
            let res = await uni.login()
            console.log(res);//res[1].code
            
        }

    }
   
}
</script>

<style>

</style>