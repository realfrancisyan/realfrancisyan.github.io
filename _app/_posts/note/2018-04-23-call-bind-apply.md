---
layout: post
title: call, apply, bind
category: note
tags: js
---

call, apply, bind 在笔试时经常被提及到，主要用于指定 `this` 的指向。

## 1. call

```js
var a = {
  user: 'Jiajun',
  fn: function(e, ee) {
    console.log(this.user);
    console.log(e + ee);
  }
};
var b = a.fn; // 目前这里的 fn 指向 window，因为 b 没有被执行
b.call(a, 1, 2); // fn 中的 this === a
```

## 2. apply

性质和 call 一样，只是在调用 apply 时，需要传数组，而不是单个参数。

```js
b.apply(a, [1, 2]);
```

注意，如果 `b.call(null)` 或 `b.apply(null)`，那么其指向 window。

## 3. bind

bind 方法返回的是修改过后的函数。

```js
var a = {
    user: 'Jiajun',
    fn: function() {
        console.log(this.user);
    }
}

var b = a.fn;
var c = b.bind(a); // 这里若不定义 c，则无输出
console.log(c); // 返回 fn
```

注意： `b.bind(a)` 是一个函数，而 `b.bind(a)()` 会执行函数。
