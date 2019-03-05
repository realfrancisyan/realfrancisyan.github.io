---
layout: post
title: 利用 Charles 建立假文件
category: note
tags: work
---

在开发中，需要改变线上配置文件。但因为该文件十分重要，需要保证代码通过后，才可替换。

此时可利用 `Charles` 来建立假文件。

本文假设需要测试的线上文件地址为 `https://www.baidu.com/example.json`。

1. 在 `Charles` 选择 `Tools - Map Local`

![](http://ww1.sinaimg.cn/large/007epDtPgy1g0s3g2hew6j312w0qu1ee.jpg)

2. 点击 `Add`，按需填入需要替换的地址，并选择替换文件

这里需要注意的是，如果没有特别指定端口的话，不用填 `80`。

![](http://ww1.sinaimg.cn/large/007epDtPgy1g0s3hd6emtj30wg0toqb3.jpg)

确保勾选 `Enable Map Local`，至此，所有设置已完成，刷新页面即可。

![](http://ww1.sinaimg.cn/large/007epDtPgy1g0s3kx9mifj31080own3y.jpg)
