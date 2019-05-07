---
layout: post
title: Express 学习总结
category: note
tags: nodejs
---

以下我将为我个人认为在目前项目中较为重要的部分罗列，本总结会不断更新。

此篇为 `Node JS 学习总结` 的延续。

# 1. 设置

>

```js
const express = require('express')
const app = express()

// listens to port 3000
app.listen(3000)
```

# 2. GET 方法

>

```js
const express = require('express')
const app = express()

app.get('/', (req, res) => {
 res.send('this is the home page')
})

// route parameters
app.get('/profile/:id', (req, res) => {
 res.send(`You requested to see a profile with the id of ${req.params.id}`)
})

// listens to port 3000
app.listen(3000)

```

# 3. 获取路径参数

>

```js
const express = require('express')
const app = express()

app.get('/contact', (req, res) => {
 console.log(req.query.name)
 res.send(`${__dirname}/contact.html`)
})

// listens to port 3000
app.listen(3000)

```

# 4. POST 方法

>

```js
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })
 
app.set('view engine', 'ejs')

app.post('/contact', urlencodedParser, (req, res) => {
 console.log(req.body) // log body property
 res.send({data: req.body}) // send response
})

// listens to port 3000
app.listen(3000)
```

# 5. 发送 JSON

>

```js
const bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const data = [
 { item: 'get milk' },
 { item: 'walk dog' },
 { item: 'kick some coding ass' },
]

module.exports = app => {
 app.post('/todo', urlencodedParser, (req, res) => {
  data.push(req.body)
  res.json(data)
 })
}

```
