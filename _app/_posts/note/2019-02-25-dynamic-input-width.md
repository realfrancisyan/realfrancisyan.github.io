---
layout: post
title: 动态改变 input 宽度
category: note
tags: mp
---


在工作中遇到这样一种情况，需要 `input` 右对齐显示并输入金额。但 `input` 有其默认的宽度，且不能随文字的输入动态改变。

思考良久，想通过计算输入字体的长度而动态改变其宽度。实践时发现，其的确可以达到此目的，但有两个弊端：
1. 性能要求高，在低配置手机会出现卡顿情况；
2. 需要额外处理中英文字的宽度差距。通过请教同事后得知，有一个很巧妙且网上没有提及的解决办法。

**效果：**（[前往优酷观看](https://v.youku.com/v_show/id_XNDA3ODAzNzYwNA==.html?spm=a2h3j.8428770.3416059.1)）

实现原理是，建立一个 `view`，通过双向数据绑定，映射 `input` 的输入的结果。

换言之，创建一个 `view` 和一个 `input`，`input` 输入时动态修改 `data` 中的数据，并使用 `view` 通过数据绑定显示出来。

实际代码：

```html
<view class="container">
  <view class="title">输入金额：</view>
  <view class="input">
    <view class="currency">$</view>
    <view class="amount" bindtap="invokeInput">{{amount}}</view>
    <input bindinput="onInputChange" value="{{amount}}" type="digit" focus="{{focus}}" hidden="{{true}}" />
  </view>
</view>
```

```css
.container {
  display: flex;
  justify-content: space-between;
}

.input {
  display: flex;
  align-items: center;
}

```

```js
const app = getApp()

Page({
  data: {
    amount: 100,
    focus: false
  },

  invokeInput() {
    this.setData({
      focus: true
    })
  },

  onInputChange(e) {
    console.log(e)
    const amount = e.detail.value
    this.setData({
      amount
    })
  }
})

```

具体实例和 demo 可以通过导入代码片段来查看：

[
https://developers.weixin.qq.com/s/YzPZlrmn7K6I](
https://developers.weixin.qq.com/s/YzPZlrmn7K6I)