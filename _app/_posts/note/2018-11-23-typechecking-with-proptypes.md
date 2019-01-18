---
layout: post
title: 类型检测
category: note
tags: react
link: https://reactjs.org/docs/typechecking-with-proptypes.html
---

随着应用规模的提升，你可以通过类型检测捕捉更多的 bugs，确保接收到的参数是有效的。

简单例子：

```js
import PropTypes from 'prop-types';

MyComponent.propTypes = {
  // You can declare that a prop is a specific JS type. By default, these
  // are all optional.
  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol
};
```

参考：

[Typechecking With PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)
