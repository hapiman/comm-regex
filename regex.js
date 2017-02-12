'use strict';
module.exports = {
  empStr:/\s/g, //全局匹配空字符串,
  lemp:/^\s*/, 字符串左边去空格
  lemp:/\s*$/, 字符串右边去空格
  lemp:/^\s*|\s*$/,字符串前后去空格
  lempStr:/^\s/,//左侧有空字符串
  rempStr:/\s+$/,//右侧有空字符串
  idcard:/^\d{6}(19|2\d)?\d{2}(0[1-9] | 1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)?*$,//身份证编号
  timeformat: /^\d{4}-\d{2}-\d{2}$/ //类似YYYY-MM-DD的时间格式
  numberic:/^[1-9]+$/, //全数字
  letters: /^[a-z]+$/i, //英文字符
  url:/^(https?|s?ftp):\/\/\S+$/i //网址
  email:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ //邮件
};
