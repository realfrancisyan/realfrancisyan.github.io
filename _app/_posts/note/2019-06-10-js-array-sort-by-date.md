---
layout: post
title: JS 数组按日期分组
category: note
tags: js
---

最近在业余时间做了一个新闻 App，在实现时遇到了一个将后台返回的数据按日期分组的需求，效果如下：

![](http://ww1.sinaimg.cn/large/007epDtPgy1g3wz9113vzj311s0lemzp.jpg)

也就是将每个不同的天数分组，例如今天，昨天，前天等。

主要实现代码：

```js
const data = [
    {"time": '2019-06-11', "location": "浦东"},
    {"time": '2019-06-11', "location": "静安"},
    {"time": '2019-06-10', "location": "内环"},
    {"time": '2019-06-10', "location": "五环"},
    {"time": '2019-06-09', "location": "苏州"}
]

const mapLocation = function(arr) {
    let newArr = []
    arr.forEach((address, i) => {
        let index = -1
        let alreadyExists = newArr.some((newAddress, j) => {
            if (address.time === newAddress.time) {
                index = j
                return true
            }
        })
        if (!alreadyExists) {
            newArr.push({
                time: address.time,
                location: [address.location]
            })
        } else {
            newArr[index].location.push(address.location);
        }
    })
    return newArr;
}
```

这样便可将原本一个数组分成多个，并按日期分类。