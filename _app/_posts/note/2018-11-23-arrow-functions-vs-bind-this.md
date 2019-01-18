---
layout: post
title: 箭头函数 vs bind(this)
category: note
tags: react
---

在定义函数时，可使用 exampleFunction = () => {...} 或者在 constructor 中将函数绑定 this。两者并没有过大的区别，但 Facebook 官方推荐使用 bind(this) 的写法，为了更好的效能。因而，在项目中统一使用 bind(this)。

具体两者区别可参考：

1. [React Binding Patterns: 5 Approaches for Handling this](https://medium.freecodecamp.org/react-binding-patterns-5-approaches-for-handling-this-92c651b5af56)
2. [Use arrow functions or bind manually in es6 classes? Any performance difference?](https://github.com/facebook/react/issues/9851)
