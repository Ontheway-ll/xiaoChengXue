<template>
  <view>
      <h2>新闻标题</h2>
      <text>新闻内容</text>
      <text>{{id}}</text>
      <!-- <web-view :src="url"></web-view> -->
      <text v-for="item in lists" :key="item.id">{{item.id}}</text>

  </view>
</template>

<script>
export default {
    data(){
        return{
            id:null,//''字符串null对象【】数组
             lists:[],//数据	
			//  size:10,//每页10条
            //  current:1,//当前第一页
             code:'xwdt'
             
        }
    },
    methods:{
         async getDetail(){
			let token = uni.getStorageSync('token')
            let res = await this.http({
                 url:'/news/list',
				 method:'POST',	
				 header:{'content-type': 'application/x-www-form-urlencoded',
				 	'Authorization': 'Bearer ' + token
				 },
				 data:{
					 code:'ffxc',//xwdt（新闻动态）  ffxc(防范宣传)    tzgg(通知公告)
					//  size:this.size,//每页10条
			        //  current:this.current//当前第一页
				 } 
            })  
            console.log("请求主页回来的详细信息",res);
             this. lists=res
        }
    },
    onLoad(id){
        console.log('接收到的id',id);
        // 发送请求去获取详细信息
        // 将地址中获取的参数，保存起来
        this.id = id;
        this.getDetail()
    }
}
</script>

<style lang="less" scoped >

</style>