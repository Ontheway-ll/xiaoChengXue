<template>
  <view>
    <form action="" @submit="formSubmit" name="questions" >
      <view class="quest">
       <textarea focus= true    maxlength = 250 name="questioncontent" ></textarea>
      </view>
        <button  form-type="submit" type="primary"  >提交</button>
    </form>
  </view>
</template>

<script>
export default {
  data(){
    return{
      content : null
    }
  },
  methods:{
       async formSubmit(e){
        // console.log(e.detail.value);
        var formData = e.detail.value
        console.log(formData);
  
      uni.showModal({
        title: '提示',
        content: '确定提交吗？',
        success:  (res)=> {
          if (res.confirm) {
            console.log('用户点击确定');
           // 点击确定去请求提交
            // let result = await this.http({
            //   url:'/problem/feedback',
            //   method:'POST',
            //   header:{
            //   'content-type': 'application/x-www-form-urlencoded',
				    //   // 'Authorization': 'Bearer ' + token  
            //   },
            //   data:{
            //     content:this.content
            //   }
            // })


            uni.showToast({
              title: '提交成功',
              duration: 1500
            });
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
      .textarea{
        margin-left: 10rpx;
        margin-top: 10rpx;
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