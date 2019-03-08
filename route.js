// var str1='这是首页';
// var str2='这是信息页';
// var str3='这是错误页';
// exports.str1=str1;
// exports.str2=str2;
// exports.str3=str3;
function showIndex(req,res){
    console.log(req.url);
    res.end('这是首页')
}
function infoIndex(req,res){
    console.log(req.url);
    res.end('这是信息页')
}
function errIndex(req,res){
    console.log(req.url);
    res.end('这是错误页')
}
 
exports.showIndex=showIndex;
exports.infoIndex=infoIndex;
exports.errIndex=errIndex;