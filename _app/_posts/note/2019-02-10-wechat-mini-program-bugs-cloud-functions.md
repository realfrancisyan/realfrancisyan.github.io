---
layout: post
title: 小程序学习踩坑汇总（云开发篇）
category: note
tags: mp
---

小程序好处繁多，但坑也不少，现一边学习一边汇总云开发所遇到的 bugs。

1. `db.collection()` 写错数据库名没有提示

   ```js
    onGetList: function() {
        const db = wx.cloud.database();
        // db.collection() 中的数据库名称若写错，console 没提示
        db.collection('123').limit(20).get({
            success(res) {
                console.log(res);
            }
        })
    }
   ```

2. 数据库没开放权限，返回数据为空

    如果想让所有用户查看数据库的信息，必须开放数据库权限。

    对于初学者来说，数据库默认为```仅创建者及管理员可读写```，当请求数据时发现无数据（如下图），且没提示会增加不必要的学习成本。

    ![](http://ww1.sinaimg.cn/large/007epDtPgy1g01gbufnhqj310w07y3zr.jpg)

    正确方法应是，于将数据库权限设置为```所有用户可读，仅创建者及管理员可写```。

    ![](http://ww1.sinaimg.cn/large/007epDtPgy1g01gdfti7fj31hu0naack.jpg)


