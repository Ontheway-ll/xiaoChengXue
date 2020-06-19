// utils/util.js
const formatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
   
    return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
  }
   
  const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : '0' + n
  }
   /**格式化日期字符串 
   *  @param {String} strDate 时间，格式：YYYYMMDDhhmmss
   */

  let formatDate = strDate => {
    let Y = strDate.substr(0, 4);
    let M = strDate.substr(4, 2);
    let D = strDate.substr(6, 2);
    let h = strDate.substr(8, 2);
    let m = strDate.substr(10, 2);
    let s = strDate.substr(12, 2);
    return `${Y}-${M}-${D} ${h}:${m}:${s}`;
  }
  module.exports = {
    formatTime: formatTime,
    formatDate:formatDate

  }