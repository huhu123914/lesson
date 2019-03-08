//引用下载的silly-datetime模块
// var sd=require('silly-datetime');
// var str=sd.format(new Date(),'YYYY年MM月DD日 HH时mm分ss秒');
// console.log(str);

//引用下载的fecha模块
var fecha=require('fecha');
var str=fecha.format(new Date(), 'YYYY年M月D日 H时m分ss秒 A');
console.log(str);
