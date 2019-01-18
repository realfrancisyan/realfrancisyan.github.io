---
layout: post
title: 管理 NPM 镜像地址
category: note
tags: work
---

由于 NPM 默认镜像地址在国内经常出现不稳定的情况，因而用户经常需要切换到淘宝到镜像地址。

而当我们需要切换回默认的地址时，很多时候都无法记住其详细的链接，只能再次网上搜索，当中产生的时间成本毫无必要。

要解决此情况，使用 NRM 即可。

1.  于 Terminal 终端输入：

    ```
    npm install -g nrm
    ```

2. 查看镜像列表

    ```
    nrm ls
    ```

    ![](http://ww1.sinaimg.cn/large/007epDtPgy1fz7nr4wskoj312q0qigtz.jpg)

    地址旁的星号（*）指的是当前选中的镜像。

3. 切换镜像地址

    选择某个镜像，输入以下命令即可切换

        ```
        nrm use npm
        ```

    ![](http://ww1.sinaimg.cn/large/007epDtPgy1fz7nseg1doj312q0qi7db.jpg)