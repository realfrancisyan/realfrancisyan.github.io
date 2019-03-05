---
layout: post
title: 删除远程错误上传 commit
category: note
tags: git
---

> 在工作中，很难避免错误上传 commit，造成不必要的麻烦。

1. 要删除错误上传的 `commit`，先重置到上次 `commit`。

右键并选择 `reset branch-name to this commit`。

![](http://ww1.sinaimg.cn/large/007epDtPgy1g0s2u0uewmj30r80pwkam.jpg)

2. 选择 `Mixed`

![](http://ww1.sinaimg.cn/large/007epDtPgy1g0s2vullk5j30rs0d2gwh.jpg)

3. 完成后，会发现旧 `commit` 依旧存在，需要通过命令行强制删除

点击右上角的 `terminal`，并输入：

```shell
git push -f
```

![](http://ww1.sinaimg.cn/large/007epDtPgy1g0s31w7zxuj31wg164gwx.jpg)

![](http://ww1.sinaimg.cn/large/007epDtPgy1g0s3254mgoj312q0qiaii.jpg)




