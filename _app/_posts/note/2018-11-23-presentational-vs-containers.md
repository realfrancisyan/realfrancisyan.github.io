---
layout: post
title: UI 和逻辑分离
category: note
tags: react
link: https://www.reactnative.guide/9-redux/9.2-presentational-vs-containers.html
---

为了更好管理和灵活应用代码，我们应将 UI 和业务逻辑分离。除了这是官方推荐写法外，还有以下好处：

The Container-Presentational pattern gives us many benefits:

1. Less code duplication. Because you are forced to move all the layout components out as separate presentational components, you can now directly reuse them instead of copy-pasting the code in every page.
2. Presentational components are essentially your app’s View layer. Hence, you can change the styling without touching the app's logic.
3. Better separation of concerns. You understand your app and your UI better by writing components this way.
4. Better reusability. You can use the same presentational component with completely different state sources, and turn those into separate container components that can be further reused.


在我们项目中，UI 放在 components 文件夹，业务逻辑放在 containers中。

更多可参考：

[Presentational Components vs Container Components](https://www.reactnative.guide/9-redux/9.2-presentational-vs-containers.html)