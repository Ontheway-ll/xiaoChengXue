import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
// 在mainjs封装request请求，http函数，所有的组件都可以通过this.http()调用
Vue.prototype.http= async function (options) {
    uni.showLoading({
        title: '加载中...'
    });

    // 基本地址
    let baseURL = "https://app.rl.jyxin.com"
    let res = await uni.request({
        // url:'https://app.rl.jyxin.com/user/login',
        // method:'post'
        url:baseURL+options.url,
        method:options.method?options.method:"get",
        data:options.data?options.data:{},
        header:options.header?options.header:{}
    })
    console.log(res);
    
        uni.hideLoading();
       return res[1].data
}

