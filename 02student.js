//使用Student模板
//1.引入Student
var Student=require('./student.js');
//2.创建对象
var s1=new Student('jack',23);
s1.sayHi();
s1.study();
var s2=new Student('mike',18);
s2.sayHi();
s2.study();
