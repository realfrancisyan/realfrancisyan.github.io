---
layout: post
title: 理解 Redux
category: note
tags: react
---

`Redux` 是一状态管理工具，主要应用于以下场景：

> 某个组件的状态，需要共享  
> 某个状态需要在任何地方都可以拿到  
> 一个组件需要改变全局状态  
> 一个组件需要改变另一个组件的状态

# 1. 基本概念和 API

>

1. Store

   `Store` 是保存数据的地方，整个应用只能有一个 `Store`。

   ```js
   import { createStore } from 'redux';
   const store = createStore(reducer);
   ```

2. State

   `Store` 对象包含所有数据，包括 `State`。

   `store.getState()` 可用于获取 `State`。

   ```js
   import { createStore } from 'redux';
   const store = createStore(fn);

   const state = store.getState();
   ```

   > Redux 规定， 一个 State 对应一个 View。只要 State 相同，View 就相同，反之亦然。

3. Action

   `Action` 是由 `View` 发出的通知，表示 `State` 要发生变化。

   ```js
   const action = {
     type: 'ADD',
     payload: 'Learn Redux'
   };
   ```

4. Action Creator

   `Action Creator` 指公用同一个 `type`，但值可动态定义（类似函数的创建）。

   ```js
   function addTodo(payload) {
     return {
       type: 'ADD',
       payload
     };
   }

   const action = addTodo('Learn Redux');
   ```

5. store.dispatch()

   `store.dispatch()` 是改变数据的唯一方法。

   ```js
   import { createStore } from 'redux';
   const store = createStore(reducer);

   const action = {
     type: 'ADD',
     payload: 'Learn Redux'
   };

   store.dispatch(action);
   ```

6. Reducer

   `Reducer` 是一个函数，接收 `Action` 和 `State` 两个参数，返回新的 `State`，从而更新 `State`。

   `Reducer` 一般会有默认的 `State`。

   ```js
   const initState = 0;

   const reducer = (state = initState, action) => {
     switch (action.type) {
       case 'ADD':
         return state + action.payload;
       default:
         return state;
     }
   };
   ```

   在使用时，于 `createStore()` 添加 `reducer` 即可。

7. store.subscribe()

   `store.subscribe()` 用于监听 `State` 的变化。

   ```js
   store.subscribe(listener);
   ```

# 2. Redux 的工作流程

简单来说，就是：

1. `store.dispatch(action)`
2. 调用 `Reducer`，返回新的 `State`
3. `store.subscribe()` 监听新的 `State`
4. `store.getState()` 获取新的 `State`，重新渲染 `View`


我的理解：

`Store` 是一个大容器，包含很多个 `State`。要改变 `State`，需要通过 `dispatch()` 发起请求，然后 `Reducer` 根据请求内容（`action`）返回新的 `State`。最后用 `getState()` 获取新的数据。

---
理解后，在项目中用得还是太少，很容易忘记。
