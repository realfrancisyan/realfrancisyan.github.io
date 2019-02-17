---
layout: post
title: mpvue 使用注意事项
category: note
tags: mp
---

[mpvue](http://mpvue.com/) 是基于 `vue.js` 的小程序框架。经过最近几天的使用，相比原生的框架，其的确好处很多，适合有 `vue.js` 的开发者，值得推荐。

(**不断更新**)  
以下我会将自己在使用 `mpvue` 时遇到的注意点和 bug 汇总，方便自己查阅。

1. 添加下拉刷新

与原生不同，`mpvue` 需要在页面目录下与 `index.vue` 同级的 `main.js` 中添加配置项，才可添加下拉刷新（`onPullDownRefresh`）。

在 `main.js` 中添加：

```js
{
  "enablePullDownRefresh": true,
  "backgroundTextStyle": "dark"
}
```
