---
layout: post
title: 小程序学习踩坑汇总
category: note
tags: mp
---

小程序好处繁多，但坑也不少，现一边学习一边汇总云开发所遇到的 bugs。

1. `wx:for` 循环必须加花括号，否则会额外重复循环，且没提示

```js
<view class="text-small text-secondary__color flex-box flex-column">
    <text wx:for="reason" wx:key="{{index}}">{{ reason[index] }}</text>
</view>
```

上述代码中的 `wx:for="reason"` 没有添加双花括号，导致额外的循环。这比较难发现，因为如果页面渲染后，显示正确。但如果添加了伪类如 `:before` 或者 `<text></text>` 中间再添加一个 `tag`，就会发现这情况。

2. `scroll-view` 坑很多

工作中会用 `scroll-view` 中的 `scroll-into-view` 的锚点功能定位某个指定位置，但如果将其包装到一个组件中，会出现嵌套。如果要使用锚点，不能包装成组件。

同时使用锚点和绝对定位，在锚点定位到某位置时会出现屏幕抖动的情况。