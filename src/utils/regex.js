/*
 some useful regex
*/
export default {
  mobile: /^1[3|4|5|7|8][0-9]\d{8}$/,
  password: /^\w{6,18}$/,
  mail: /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/,
  qq: /[1-9][0-9]{4,}/,
  number: /^[0-9]\d*$/,
  age: /^(?:[1-9][0-9]?|1[01][0-9]|120)$/,
  height: /^[0-2][0-9]{2}$/,
  chinese: /[\u4E00-\u9FA5\uF900-\uFA2D]/,
  postCode: /^\d{6}$/,
  carCard:/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/,
}