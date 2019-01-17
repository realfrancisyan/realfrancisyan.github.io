---
layout: post
title: 使用 JSON-server 创建假数据
category: note
tags: work
---

> 工作中前后端分离开发，当后台还没写好对应的 API 时，前端工程师必须自己模拟数据进行调试，避免时间浪费。

[JSON-server](https://github.com/typicode/json-server) 在本地环境建立了 `REST` 风格的 `API` 接口，给前端页面提供模拟数据，加快开发进度。

1. 下载

   我根据 [Traversy Media 的视频教程](https://www.youtube.com/watch?v=1zkgdLZEdwM) 写了一个 `json-server` 的项目，读者只需将其克隆到本地环境，安装即可。

   项目地址：[create-json-server](https://github.com/realfrancisyan/create-json-server)。

2. 安装运行

   于终端运行：

   ```
   npm install

   npm run json:server
   ```

   至此安装完毕，浏览器访问 [`http://127.0.0.1:8090`](http://127.0.0.1:8090)，如下：

   ![](http://ww1.sinaimg.cn/large/007epDtPgy1fz9zb03aojj315o0qkmy4.jpg)

3. 使用

   其使用方式非常简单，和往常发送 `AJAX` 一样。

   以 [Postman](https://www.getpostman.com/) 为例，发送默认的 `GET` 请求到 `http://127.0.0.1:8090/orgLesson/week` 会获得如下结果：

   ![](http://ww1.sinaimg.cn/large/007epDtPgy1fz9ze810x5j315o0ti7fj.jpg)

4. 修改 JSON 内容

   所有 `JSON` 的返回结果都储存在 `db.json` 里：

   ```json
   {
     "orgLessonWeek": {
       "name": "sample",
       "date": "Thu Jan 17 2019 22:22:49"
     }
   }
   ```

   其中 `orgLessonWeek` 是 `API` 接口名，他的值则为接口内容，按需修改即可。如需添加多个接口，用逗号续写：

   ```json
   {
     "orgLessonWeek": {
       "name": "sample",
       "date": "Thu Jan 17 2019 22:22:49"
     },
     "orgLessonMonth": {
       "name": "sample month",
       "date": "Thu Jan 17 2019 22:22:49"
     },
     "orgLessonYear": {
       "name": "sample year",
       "date": "Thu Jan 17 2019 22:22:49"
     }
   }
   ```

5. 自定义接口名

   在实际开发中，接口通常会有多个 `/` 连接。这在 `db.json` 文件中的 `key` 里是不允许的。

   因而可以修改 `routes.json`，根据接口修改路由。

   ```json
   {
     "/orgLesson/week": "/orgLessonWeek",
     "/orgLesson/Month": "/orgLessonMonth",
     "/orgLessonYear": "/orgLessonYear"
   }
   ```

   注意每个接口名的前面均要添加 `/`。

更详细的教程可参考：[Create a Fake REST API with JSON-Server](https://www.youtube.com/watch?v=1zkgdLZEdwM)
