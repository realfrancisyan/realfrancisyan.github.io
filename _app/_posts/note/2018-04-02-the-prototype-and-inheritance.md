---
layout: post
title: 原型链与继承
category: note
tags: js
---

> 原型链与继承是 JS 的重要部分，经常在面试中提及。虽然工作中甚少接触，但为免忘记，再次总结一下。

索引：

1. 构造函数
2. 引用类型
3. 原型链继承例子
4. 描述 new 一个对象的过程

---

# 1. 构造函数

>

`构造函数（constructor）` 的名字的首个字母默认为大写，用 `new` 定义。

```js
function Foo(name, age) {
  this.name = name;
  this.age = age;
}

var f = new Foo('zhangsan', 26);
f.name; // zhangsan
```

**注意点：**

如何判断一个函数是否一个变量的 `constructor`？

1. `var a = {}` 等于 `var a = new Object();`
2. `var b = []` 等于 `var b = new Array();`
3. `function Foo()` 等于 `var Foo = new Function();`

答案： `variable` **_instanceof_** `Array`。

# 2. 引用类型

## 介绍

引用类型包括：`Object 类型`，`Array 类型`，`Function 类型` 等。

所有引用类型都有对象属性，即：

```js
var a = {};
a.age = 100;

var b = [];
b.age = 100;

var c = function() {};
c.age = 100;
```

所有引用类型都有一个 `__proto__` 属性。  
所有函数都有一个 `prototype` 属性。

```js
var obj = {};
obj.__proto__...
```

```js
function fn() {}
fn.prototype...
```

引用类型中的 `__proto__` 属性指向它的构造函数的 `prototype` 属性：

```js
var a = [];
a.__proto__ === Array.prototype; // true
```

## 原型链如何继承

如果当获取一个对象的某个属性时，而此对象本身没有这个属性，则会去它的 `__proto__` 中找。  
`__proto__` 中会含有 `push`，`pop`，`concat` 这些属性。

例子：

```js
function Foo(name, age) {
  this.name = name;
  this.age = age;
}

// 1.
Foo.prototype.alertName = function() {
  alert(this.name);
};

// 2.
var f = new Foo('zhangsan', 26);

f.printName = function() {
  console.log(this.name);
};

f.alertName(); // 'zhangsan'
f.printName(); // 'zhangsan'
```

后一种方法是 `f` 独有的。  
而前一种方法是 `f` 自身没有，但通过 `__proto__` 往上查找。

如何判断 `f` 有几种属性：

```js
for (var item in f) {
  if (f.hasOwnProperty(item)) {
    console.log(item);
  }
}
```

上述代码片段打印出来的是：

> name  
> age  
> printName

如果不加 `hasOwnProperty` 判断，则为：

> name  
> age  
> printName  
> alertName

当中 `alertName` 是 `Foo` 中创建，不属于 `f` 自身。

## 图例

![](http://ww1.sinaimg.cn/large/007epDtPgy1fzbyir2jxdj31bs0lsgoy.jpg)

`f` **_instanceof_** `Foo`, `f` **_instanceof_** `Object`  
**_instanceof_** 通过 `f` 的 `__proto__` 一层一层往上找。

# 3. 原型链继承例子

>

```js
function Dog() {
  this.barks = function() {
    console.log('dog barks');
  };
}

function Animal() {
  this.eats = function() {
    console.log('animal eats');
  };
}

Dog.prototype = new Animal();
var dog = new Dog();
dog.barks(); // dog barks
dog.eats(); // animal eats
```

# 4. 描述 new 一个对象的过程

>

1. 创建一个新对象
2. `this` 指向这个新对象
3. 执行代码，即对 `this` 赋值
4. 返回 `this`

```js
function Foo(name, age) {
  this.name = name;
  this.age = age;
}

var f = new Foo('Jiajun', 26);
```
