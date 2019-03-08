---
layout: post
title: 解决 VSCode CPU 占用率过高的问题
category: note
tags: miscellaneous
---

`VSCode` 容易导致 CPU 占用率过高，令电脑温度升高，因而系统性能降低，一些插件无法使用。

可通过设置 `Follow Symlink` 为 `false` 解决问题。

在 `Preferences` -> `Settings` 中搜索 `symlink`，去除默认选择的勾即可。

![](http://ww1.sinaimg.cn/large/007epDtPgy1g0vi9dcu6aj31ck0a2myc.jpg)

