---
layout: post
title: 使用 PEM 登录 SSH
category: note
tags: ssh
---

```terminal
ssh -i key.pem root@IP

// 如果出现报错说明这个问题是文件的权限太大了，需要给小点 
sudo chmod 600 key.pem

然后再执行ssh -i key.pem root@IP
```