var http = require('http');
var a=require('./route.js');
var server = http.createServer(function (req, res) {
    if (req.url == '/favicon.ico') {
        return;
    };
//获取请求地址
// var urlObj = url.parse(req.url,true);
// var pathname = urlObj.pathname;// 请求地址
// res
  if(req.url=='/'){
     // res.end(a.str1); 
    a.showIndex(req,res);  
  }
  else if(req.url=='/info'){
      // res.end(a.str2);
     a.infoIndex(req,res);  
  }else{
    //  res.end(a.str3);
  
  a.errIndex(req,res);  
  }
});
server.listen(4000);