---
layout: post
title: Ubuntu 下安装 MongoDB 并远程连接
category: note
tags: mongodb
---

最近在学习 `MongoDB`，发现于服务器上安装后默认是无法远程连接的，经过一番研究，总结如下：

# 1. 安装

> 

安装比较简单，按此[官方教程](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)下载安装即可

```terminal
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4
echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org
```

# 2. 启动远程连接

>

`MongoDB` 默认是无法远程连接的，需要编辑 `/etc/mongod.conf` 中的 `127.0.0.1` 改为 `0.0.0.0` 启用。

# 3. 启用登录验证

>

编辑 `/etc/mongod.conf`，并加上一下一行：

```terminal
vi /etc/mongod.conf
```

```xml
security:
  authorization: "enabled"
```

# 4. 防止报错

>

修改以上文件后，立即输入命令启动，并不会启用服务。需要设定权限：

```terminal
# storage.dbPath
chown -R mongodb:mongodb /var/lib/mongodb

# systemLog.path
sudo chown -R mongodb:mongodb /var/log/mongodb
```

# 5. 启用服务

>

```terminal
service mongod start
```

弄完以上，如果没有教程，真叫人累。不知道为什么 2019 年了这些软件还要这么麻烦耗开发者大量的时间去安装。