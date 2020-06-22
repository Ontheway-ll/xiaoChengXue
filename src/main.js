import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

Vue.prototype.getToken=async function(){ 
    let userinfo=await uni.getUserInfo()
        let coderes = await uni.login()

        console.log('gettoken方法请求的userinfo',userinfo);//coderes[1].code
        let user=userinfo[1]
        let sessRes=await uni.request({
            url: 'https://app.rl.jyxin.com/user/code2Session', //仅为示例，并非真实接口地址。
            data: {
                code: coderes[1].code
            },
            method:'POST',
            header: {
               'content-type': 'application/x-www-form-urlencoded',
            }
        });
        let sessObj=sessRes[1].data.data
        console.log('code2session获取的sessionkey和openID',sessObj)
        let loginRes =await uni.request({
            url:'https://app.rl.jyxin.com/user/login',
            method:'POST',
            header:{
                'content-type': 'application/x-www-form-urlencoded',
            },
            data:{ 
                sessionkey:sessObj.sessionKey,
                loginType:'wechatAppLogin',
                code:coderes[1].code,
                encryptedData:user.encryptedData,
                iv:user.iv,
               //   rawData:user.detail.rawData,
               //   signature:user.detail.signature,
            }  	
        })
            console.log("真正登录loginres获取的token",loginRes[1].data);
           // 存入token
        if (loginRes[1].data.code===200) {
            uni.setStorageSync('token', loginRes[1].data.data.token)
            uni.setStorageSync('userlogin', loginRes[1].data.data)
            
        }
}

// 在mainjs封装request请求，http函数，所有的组件都可以通过this.http()调用
    Vue.prototype.http= async function (options) {
    uni.showLoading({
        title: '加载中...',
        mask:true
        
        
    });  
    // 基本地址     
    let baseURL = 'https://app.rl.jyxin.com'
    let res = await uni.request({
        // url:'https://app.rl.jyxin.com/user/login',
        // method:'POST',
        // header:{
        //     'content-type': 'application/x-www-form-urlencoded',
        // },
        // data:{
        //     'loginType':'wechatAppLogin'
        // }
        url:baseURL+options.url,
        method:options.method?options.method:"GET",
        data:options.data?options.data:{},
        header:options.header?options.header:{}
    })
    //    console.log(res);
    if(res[1].data.code!=200){
        console.log('封装请求不等200错误----',res[1].data)
        await this.getToken()
        let token = uni.getStorageSync('token')
        res = await uni.request({
            url:baseURL+options.url,
            method:options.method?options.method:"GET",
            data:options.data?options.data:{},
            header:{
                ...options.header,
                'Authorization': 'Bearer ' + token
            }
        })
        console.log('main封装http请求结果',res)

    }


    uni.hideLoading();
    return res[1].data
}


const app = new Vue({
    ...App
})
app.$mount()



