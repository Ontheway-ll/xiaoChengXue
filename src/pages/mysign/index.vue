<template>
  <view>
    <view>
      <uni-calendar
        :selected="info.selected"
        :insert="true"
        :start-date="'2018-3-2'"
        :end-date="'2019-5-20'"
        @change="change"
      />
    </view>
  </view>
</template>

<script>
/**
 * 获取任意时间
 */
function getDate(date, AddDayCount = 0) {
  if (!date) {
    date = new Date();
  }
  if (typeof date !== "object") {
    date = date.replace(/-/g, "/");
  }
  const dd = new Date(date);

  dd.setDate(dd.getDate() + AddDayCount); // 获取AddDayCount天后的日期

  const y = dd.getFullYear();
  const m =
    dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1; // 获取当前月份的日期，不足10补0
  const d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate(); // 获取当前几号，不足10补0
  return {
    fullDate: y + "-" + m + "-" + d,
    year: y,
    month: m,
    date: d,
    day: dd.getDay()
  };
}
import uniCalendar from "@/components/uni-calendar/uni-calendar.vue";
export default {
  components: {
    uniCalendar
  },

  data() {
    return {
      info: {
        // lunar: true,//显示农历
        range: true, //范围选择
        insert: true, //插入模式
        selected: [] //签到数据
      },
       signDate: null,//当天日期
       nowDate: ""//当前年月
    };
  },
  methods: {
       // 封装当前年月日
    dateToString: function(date) {
				var year = date.getFullYear();
				var month = (date.getMonth() + 1).toString();
				var day = (date.getDate()).toString();

				if (month.length == 1) {
					month = "0" + month;
				}
				if (day.length == 1) {
					day = "0" + day;
				}

				var dateTime = year + month + day;
				return dateTime;
      },
        //  封装当前年月
      dateToMonth: function(date) {
				var year = date.getFullYear();
				var month = (date.getMonth() + 1).toString();

				if (month.length == 1) {
					month = "0" + month;
				}

				var dateTime = year + month;
				return dateTime;
			},
   async getList() {
      let token = uni.getStorageSync("token");
      // console.log('签到请求获取token',token);
               let signDate = this.dateToString(new Date());
               this.signDate=signDate
               
      let res = await this.http({
        url: "/sign/doSign",
        header: {
          "content-type": 'application/x-www-form-urlencoded',
          Authorization: "Bearer " + token
        },
        method: "POST",
        data: {
          signDate: this.signDate
        }
      });
      console.log("请求签到结果", res.data);
      // this.signDate = res.data.signDate
      // this.signDate =res.data.signDate
      // this.info.selected = res.data
      // this.info.selected.push({
			// 		date: e.fulldate,
			// 		info: '打卡'
			// })
     
    },

    //  请求接口  签到记录
    async getSign() {
      let token = uni.getStorageSync("token");
      // console.log('签到请求获取token',token);
               let signDate = this.dateToString(new Date());
               this.signDate=signDate 
               let nowDate = this.dateToMonth(new Date())
               this.nowDate=nowDate
      let res = await this.http({
        url: "/sign/list",
        header: {
          "content-type": "application/x-www-form-urlencoded",
          Authorization: "Bearer " + token
        },
        method: "POST",
        data: {
          nowDate: this.nowDate,//当前年月
          signDate: this.signDate//当天 日期
        }
      });
      console.log("请求签到历史记录", res.data);
      this.info.selected = res.data.signDetails.signDetails; //  res.data.signDetails
      // 格式要一致  如果不一致 就自己循环数组 重新弄个数组
      //    let arr=[]

      //  this.info.selected = [
      //   {
      //     date: getDate(new Date(), -3).fullDate,
      //     info: "已签到"
      //   },
      //   {
      //     date: getDate(new Date(), -2).fullDate, // '2020-06-22'
      //     info: "已签到"
      //   },
      //   {
      //     date: getDate(new Date(), -1).fullDate,
      //     info: "已签到"
      //   }
      // ];
    },
    change(e) {
      console.log("日期改变事件", e);
      // 模拟动态打卡
      if( getDate().date !=e.date ){
        console.log('不是今天不能签到',getDate())
        return;
      }
      // 发送去签到  签到成功 前台才显示签到
       this. getList()
       this.info.selected.push({
        date: e.fulldate,
        info: '已签到'
      })
        uni.showToast({
          title: '签到成功',
          duration: 2000
        });
    }
  },
  onLoad() {
    this.getSign(); //签到记录
  },
};
</script>

<style lang="less" scoped >
</style>