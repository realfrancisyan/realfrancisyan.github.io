---
layout: post
title: Vue 生命周期函数
category: note
tags: vue
---

> 理解 Vue 生命周期函数在项目开发很有必要。

简单来说，生命周期函数指的是项目在运行时的执行顺序。

1. **`beforeCreate()`**  
    在 `data` 和 `methods` 初始化前已被执行。
2. **`created()`**  
    在 `data` 和 `methods` 初始化后再执行。
3. **`beforeMount()`**  
    `DOM 模版` 编译在内存中，但未渲染到页面中。
4. **`mounted()`**  
    `模版`已渲染到页面中, `new Vue` 已被完全创建好。
5. **`beforeUpdate()`**  
    - 指在 `data` 改变时，执行的函数；
    - 界面未更新，但数据已更新。
6. **`updated()`**  
    `data` 和页面都完成更新同步。
7. **`beforeDestroy()`**  
    所有 `data` 和 `methods`，过滤器等都处于可用状态。
8. **`destroyed()`**  
    所有 `data` 和 `methods` 进行到不可用状态。

---

![](http://ww1.sinaimg.cn/large/007epDtPgy1fzakzvodtej30xc2cft9s.jpg)