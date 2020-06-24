<template>
  <view>
    <form action="" @submit="formSubmit" name="questions" >
      <view class="quest">
       <textarea class="texta"
                 :value="content"  
                  placeholder="请输入反馈内容" 
                   maxlength = 200 
                   name="questioncontent" ></textarea>
      </view>
        <button  form-type="submit" type="primary"  >提交</button>
    </form>
  </view>
</template>

<script>
export default {
  data(){
    return{
      content :'',
      
    }
  },
  methods:{
       async formSubmit(e){
      let token = uni.getStorageSync("token");
        // console.log(e.detail.value);
        var formData = e.detail.value
        console.log('e参数',formData);
        this.content = formData.questioncontent
        if (formData.questioncontent==""|| formData.questioncontent==undefined) {
               uni.showToast({
               title: '内容不能为空',
               duration: 1000
               })
                return false
              }
        let result = await this.http({
              url:'/problem/feedback',
              method:'POST',
              header:{
              'content-type': 'application/x-www-form-urlencoded',
				      'Authorization': 'Bearer ' + token  
              },
              data:{
                content:this.content
              }
            })
            console.log('请求提交',result)
            this.content= result.content

             

          uni.showModal({
          title: '提示',
          content: '确定提交吗？',
         success:(res)=> {
          if (res.confirm) {
            console.log('用户点击确定提交问题反馈');
            this.questioncontent=""
            uni.showToast({
              title: '提交成功',
              duration: 1500
            })
            this.content=''
          } else if (res.cancel) {
            console.log('用户点击取消');
          }
        }
      })
    
    }
  }
}
</script>

<style lang="less" scoped >
    .quest{
      width: 655rpx;
      border: 1px solid #ccc;
      height: 300rpx;
      // background-color: red;
      margin-top: 43rpx;
      border-radius: 20rpx;
      margin-left: 44rpx;
      .texta{
        margin-left: 10rpx;
        margin-top: 10rpx;
        padding-left: 20rpx;
      }
    }
    button{
      background-color: #1744ac;
      color: #ffffff;
      width: 230rpx;
      margin-top: 50rpx;
      text-align: center;
    }
</style>