---
layout: post
title: 理解使用 React-Redux
category: note
tags: react
---

要理解 React-Redux，需要理解下面三个东西：

> connect()  
> mapStateToProps  
> mapDispatchToProps

---

## 1. connect()

`connect()` 就是将当前的 UI 组件（presentational component）和 `Redux` 连接起来。

```js
import { connect } from 'react-redux';

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
```

## 2. mapStateToProps

`mapStateToProps`，顾名思义，就是将接收到的 `State` 处理后返回到当前组件中的 `props`。

```js
const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};
```

通过 `this.props.todos` 获取。

```js
console.log(this.props.todos);
```

## 3. mapDispatchToProps

`mapDispatchToProps` 其实就是 `Redux` 中的 `store.dispatch()`。

```js
const action = {
  type: 'ADD',
  payload: 'Learn React-Redux'
};

const mapDispatchToProps = dispatch => {
  return {
    add: () => {
      dispatch(action);
    }
  };
};
```

之后在需要的地方调用即可。

```js
this.props.add();
```
