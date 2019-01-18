---
layout: post
title: ES 6 新特性
category: note
tags: js
---

> 在复习 ES6 的时候，发现有几个新特性经常在工作中用到，今天便再次整理一下。

索引：
1. let 和 const
2. 箭头函数
3. 模版字符串
4. Class 类
5. 参数默认值
6. 数组的展开运算
7. 模块化
8. Promise

---

# 1. let 和 const
>

两者都为块级作用域。

let 声明局部变量，而 const 声明常量（不可修改）。

{% highlight js linenos %}
const EXAMPLE = 'This is an example.'; // 声明常量时，尽量全大写
EXAMPLE = 'Example is altered.'; // 报错
{% endhighlight %}

# 2. 箭头函数
>

箭头函数最直观的三个特点：

> 不需要 function 关键字来创建函数。  
> 省略 return 关键字。  
> 继承当前上下文的 this 关键字。

而我发现，在工作中，箭头函数最能带给我的便利是对定义函数的简写，以及无需重新定义 `this` 来继承上下文。

- 函数简写：

{% highlight js linenos %}
const example = (param1, param2) => {
  return param1 + param2;
};

// 如果函数内之后一行 return，也可继续简写为：

const example = (param1, param2) => param1 + param2;
{% endhighlight %}

- 自动继承上下文的 `this` 关键字：

{% highlight js linenos %}
function Person() {
  // Person() 构造函数定义 `this`作为它自己的实例.
  this.age = 0;

  setInterval(function growUp() {
    // 在非严格模式, growUp()函数定义 `this`作为全局对象,
    // 与在 Person()构造函数中定义的 `this`并不相同.
    this.age++;
  }, 1000);
}

var p = new Person();
{% endhighlight %}

# 3. 模版字符串
>

相比 ES5，ES 6 中的模版字符串消除了很多繁琐的拼接。使用 ` `` ` 即可完成。如果需要传入变量，使用 `${}` 即可。

{% highlight js linenos %}
const day = 'Sunday';
console.log(`Today is ${day}`); // Today is Sunday
{% endhighlight %}

# 4. Class 类
>

`class` 语法为原型链的语法糖表现形式。
在 React 项目中，我们会经常看到这样的表达式：

{% highlight js linenos %}
// 引用...
...

class App extends Components {

    constructor() {
        super(); // 继承父类
        this.state = {
            ...
        }
    }

    getList() {
        ...
    }

}
{% endhighlight %}

以上就 `class` 在 ES 6 的体现。

# 5. 参数默认值
>

{% highlight js linenos %}
function printText(text = 'default') {
  console.log(text);
}

printText('hello'); // hello
printText(); // default
{% endhighlight %}


# 6. 数组的展开运算
>

在传入的数组前添加三个点 `...`：

{% highlight js linenos %}
function foo(x, y, z) {
    console.log(x, y, z);
}
const arr = [1, 2, 3];
foo(...arr); // 1, 2, 3
{% endhighlight %}

# 7. 模块化
>

使用 `import` 和 `export` 引入导出函数：

* module.js
{% highlight js linenos %}
export const port = 3000;
export function getURL(url) {
    ...
}
{% endhighlight %}

* main.js
{% highlight js linenos %}
import {port, getURL} from './main';
console.log(port);
{% endhighlight %}


# 8. Promise
>

简单来说，`Promise` 可解决回调地狱和实现异步函数顺序执行。

而当中的关键字为别为：`Promise`，`resolve`，`reject` 和 `then`。

`Promise` 用于新建一个 `Promise` 对象，使用 `resolve` 进行成功回调，`reject` 进行失败回调。最后用 `then` 处理链式操作。

{% highlight js linenos %}
// 异步函数a
var a = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('a')
    }, 1000)
  })
}

// 异步函数b
var b = function (data) {
  return new Promise(function (resolve, reject) {
    resolve(data + 'b')
  })
}

// 异步函数c
var c = function (data) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(data + 'c')
    }, 500)
  })
}
{% endhighlight %}

之后使用then链式操作:  

{% highlight js linenos %}
//链式调用
a()
  .then(function (data) {
    return b(data)
  })
  .then(function (data) {
    return c(data)
  })
  .then(function (data) {
    console.log(data)// abc
  })
{% endhighlight %}

