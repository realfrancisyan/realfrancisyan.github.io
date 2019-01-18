---
layout: post
title: MVC 和 MVVM 的区别
category: note
tags: js
---

> MVC 和 MVVM 经常被谈到他们之间的区别。今天来整理总结一下。

# MVC

>

MVC 分为以下三个点：

> Model 数据层  
> View 视图层  
> Controller 控制器（逻辑层）

他们的通信是单向的：

![](http://ww1.sinaimg.cn/large/007epDtPgy1fzajlvaty1j310u0jgwg3.jpg)

一个简单的例子：

`View` 按钮点击 -> 传入 `Controller` 后处理数据 -> 数据处理完毕后，返回 `View`。

# MVVM

>

MVVM 是 MVC 的一个延伸。

同样，MVVM 也分为三个点：

> ViewModel 视图模型  
> View 视图层  
> Controller 控制器（逻辑层）

`ViewModel` 可以理解为 `Model` 和 `View` 的桥梁。

MVVM 采用双向绑定（data-binding），`View` 通过事件绑定影响 `Model`；`Model` 通过数据绑定影响 `View`。

![](http://ww1.sinaimg.cn/large/007epDtPgy1fzak08g8t5j310w0jg400.jpg)
