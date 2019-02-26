---
layout: post
title: 从现有分支建立新分支
category: note
tags: git
---

在工作中，公司要求每开始一个功能或者修复 bugs 时必须从 dev 中新建一个分支，再工作。
现记录一下，防止忘记。

1. 新建一个分支

![](http://ww1.sinaimg.cn/large/007epDtPgy1g0k7rpc0i9j30kc0lgtml.jpg)

2. 在 commit 中选择 specific commit，然后 pick，选择 dev 最新的分支，之后 push

![](http://ww1.sinaimg.cn/large/007epDtPgy1g0k7w55p4rj31xa1dg4qp.jpg)
![](http://ww1.sinaimg.cn/large/007epDtPgy1g0k7wf8y85j32e81iyhdt.jpg)
