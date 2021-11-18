// 预编译脚本
var a =1; //声明变量a
function b(xx) { // 声明函数b
    var xx = 'abc';
    function xx(yy) {
        var xx = 1;
    }
};
var c = function () {};    // 声明函数c
function f() {};           // 声明函数f
aa = 15;
b(100);

/*
* 1、第一阶段[函数声明可以覆盖变量但不能反过来；如果多次进行函数声明，最后一个有效]
* window.a -> undefined
* window.b -> function(){}
* window.c -> undefined
* window.f -> function(){}
* 2、第二阶段
* window.a -> 1
* window.b -> function(){}
* window.c -> undefined
* window.f -> function(){}
* 3、第三阶段
* window.a -> 1
* window.b -> function(){}
* window.c -> function(){}
* window.f -> function(){}
* 4、第四阶段
* window.a -> 1
* window.b -> function(){}
* window.c -> function(){}
* window.f -> function(){}
* window.aa -> 15
* 5、
* window.a -> 1
* window.b -> function(){}
* window.c -> function(){}
* window.f -> function(){}
* window.aa -> 15
*
* AO.arguments -> [100];
* AO.xx -> undefined -> 100;
*
* 函数部分变化：
* AO.arguments -> [100];
* AO.xx ->function(){};
*
* AO.arguments -> [100];
* AO.xx ->'abc';
*/