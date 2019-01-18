---
layout: post
title: React 生命周期函数
category: note
tags: react
---

> 理解 React 生命周期函数在项目开发很有必要。

1. `componentWillMount` -> Immediately before the initial rendering
2. `componentDidMount` -> Immediately after the initial rendering
3. `componentWillReceiveProps(nextProps)` -> When component receives new props
4. `shouldComponentUpdate(nextProps, nextState)` -> Before rendering, after receiving new props or state (return false to prevent rendering)
5. `componentWillUpdate(nextProps, nextState)` -> Before rendering, after receiving new props or state
6. `componentDidUpdate(prevProps, prevState)` -> After component’s updates are flushed to DOM
7. `componentWillUnmount` -> Immediately before removing component from DOM

其中，`shouldComponentUpdate` 和 `componentWillUpdate` 的区别在于，`componentWillUpdate` 只有在 `shouldComponentUpdate` 返回 `true` 的时候才会执行。他们是上下关系。

参考：[What is the difference between shouldComponentUpdate and componentWillUpdate in React?](https://stackoverflow.com/questions/45076564/what-is-the-difference-between-shouldcomponentupdate-and-componentwillupdate-in)

延伸阅读：[`React 生命周期函数图表`](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)