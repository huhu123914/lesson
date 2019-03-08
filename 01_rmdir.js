var fs=require('fs');
function delDir(path){
    //因为异步执行顺序的问题,采用同步方法
    //先检查path是不是一个文件夹
    var stats=fs.statSync(path);
    if(stats.isDirectory()){
        //是文件夹
        //读取文件夹
        var files=fs.readdirSync(path);
        for(var i=0;i<files.length;i++){
            var newpath=path+'/'+files[i];//文件夹内容的路径
            var newstats= fs.statSync(newpath);
           //判断newstats是不是一个文件夹
           if(newstats.isDirectory){//文件夹
               //删文件夹
               delDir(newpath);
           }else{ //是文件  
               //删文件
               fs.unlinkSync(newpath);
            }
           }
            //删自己
            fs.rmdirSync(path);
    }else{
            //是文件
            fs.unlinkSync(path);
        }    
    }
    delDir('a');
