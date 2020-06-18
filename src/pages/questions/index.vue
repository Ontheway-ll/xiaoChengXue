<template>
  <view>
    <form action="" @submit="formSubmit" name="questions" >
      <view class="quest">
      <textarea focus= true    maxlength = 250 ></textarea>
  </view>
        <button  form-type="submit" type="primary"  >提交</button>
    </form>
  </view>
</template>

<script>
export default {
  data(){
    return{

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