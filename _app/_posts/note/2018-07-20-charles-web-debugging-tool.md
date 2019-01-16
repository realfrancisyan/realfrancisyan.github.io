---
layout: post
title: 利用 Charles 进行手机端抓包
category: note
tags: work
---

在开发小程序时，因为手机不像 PC 端可以直接通过浏览器进行 debug 排查，因而需要用到 Charles 进行 debug。

[Charles](https://www.charlesproxy.com/) 目前只有 Mac 客户端。安装后，确保手机和 Mac 都在同一无线网络，再进行如下设置：

1. 查看 Mac 在网络的 IP 地址：

    可通过 `系统偏好`，选择 `网络`，找到当前的 IP 地址。

    ![](http://ww1.sinaimg.cn/large/007epDtPgy1fz8tdm839yj317c11i7gx.jpg)

2. 在手机中设置代理

    以 iPhone 为例，在 `设置` 里选择 `Wi-Fi`，点击当前的网络最右边的 `（i）`（如图）。

    点击 `设置代理`，并选择 `手动`，将之前获得 IP 地址填到服务器，端口为 `8888`。

    ![](http://ww1.sinaimg.cn/large/007epDtPgy1fz8tuecczuj32zx1voqps.jpg)

    连接后，`Charles` 会有如下提示，按 `Allow`。

    ![](http://ww1.sinaimg.cn/large/007epDtPgy1fz8tw7kqsjj31di0f6wk2.jpg)

3. Debug

    连接后界面如下。左边的 `Structure` 部分是手机访问的每个网络地址。每个地址均可展开。

    ![](http://ww1.sinaimg.cn/large/007epDtPgy1fz8tyb51usj31xu1boh76.jpg)

    展开某个地址，会看到发起的 `API` 请求，以及其参数。

    在右边的 `Content` 栏里，可看到我们想要排查的 JSON 格式，根据自己的情况排查即可。至此，debug 教程完毕。

    ![](http://ww1.sinaimg.cn/large/007epDtPgy1fz8u0jnshgj31xu1botq0.jpg)
    