
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa// 预编译脚本
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

// 练习1：
b = 'cba';
function a(a, a){
	console.log(a); // function
	console.log(b); // undefined
	var b = 'abc';

	a();
	function a(){
		console.log(a); // function
		console.log(b); // abc
	}
}
a(5,10);
/*
1、GO
       预编译          执行
    this:window
                      b:cba
    a:function        参数绑定:参数[5,10]，a[1]=10
2、a-AO
       预编译          执行
    b:undefined       abc
    a:function,由于参数绑定a[1]=function -> 参数[5,function]
    this:window
3、a.a-AO
   参数[]
   this:window
* */

// 练习2
var str = 'aaa';
str += 1;
var test = typeof(str);
if(test.length == 6){
	test.newproperty = 'string';
//	var obj = new String(test);
//	obj.newproperty = 'string';
//	摧毁 obj
}
console.log(test.newproperty); // undefined

// 练习3
var x = 1, y = z = 0;       // x,y,z:undefined       1,0,0   1,4,4
function add(n){            // add:function
	return n = n + 1;
}

y = add(x);
function add(n){           // add:function(n+3)
	return n = n + 3;
}
z = add(x);

// 练习4、哪个可以输出：[1,2,3,4,5]
function foo(x){ // 可以
	console.log(arguments);
	return x;
}
foo(1,2,3,4,5);

function foo(x){ // 不可以
	console.log(arguments);
	return x;
}[1,2,3,4,5]

function foo(x){ // 不可以
	console.log(arguments);
	return x;
}(1,2,3,4,5);

// 练习5
function test(x, y, a){
	arguments[2] = 10;
	alert(a);
}
test(1,2,3);