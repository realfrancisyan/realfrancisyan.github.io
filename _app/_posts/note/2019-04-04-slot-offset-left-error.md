---
layout: post
title: 添加 slot 后出现 offsetLeft 错误解决
category: note
tags: mp
---

小程序有很多很隐蔽的 bug，例如：

当在组件中添加 `slot` 后，会无缘故出现 offsetLeft 的问题。

代码如下：

![](http://ww1.sinaimg.cn/large/007epDtPgy1g1qpkloijvj316u07475u.jpg)

错误如下：

![](http://ww1.sinaimg.cn/large/007epDtPgy1g1qpkufhrij31hu0p4qeo.jpg)

解决办法，就是在最外层加一个 `view` 标签即可。

![](http://ww1.sinaimg.cn/large/007epDtPgy1g1qpl24dyfj316409omz0.jpg)