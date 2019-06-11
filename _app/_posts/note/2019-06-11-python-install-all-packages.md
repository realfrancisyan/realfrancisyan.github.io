---
layout: post
title: Python 一键安装所有依赖包
category: note
tags: python
---

在开发 `Python` 后端时，往往需要将所有依赖打包，以便以后安装。

```terminal

// 将依赖打包
pip3 freeze > requirements.txt

// 安装依赖
pip3 install -r requirements.txt

// 如果需要从某个源安装
pip3 install -i https://pypi.python.org/simple -r requirements.txt
```

