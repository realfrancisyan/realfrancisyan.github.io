---
layout: post
title: NodeJS 学习总结
category: note
tags: nodejs
---

最近花了两天时间粗略学习了 `Node JS`，以下我将为我个人认为在目前项目中较为重要的部分罗列，本总结会不断更新。

# 1. 读写、删除文件

>

可通过引入 `fs` 库中的 `readFile`，`writeFile`，`unlinkSync` 进行各项操作。

```js
const fs = require('fs')
fs.readFile('readMe.txt', 'utf-8', (err, data) => {
	fs.writeFile('writeMe.txt', data)
})

fs.unlinkSync('readMe.txt')
```

其中：
`fs.readFile()` 可传入 2 - 3 个参数
1. 文件路径
2. 编码
3. 错误返回以及数据返回

`fs.writeFile()` 可传入 2 个参数:
1. 文件路径
2. 数据返回

`fs.unlinkSync()` 可传入 1 个参数:
1. 文件路径

# 2. 创建和删除文件夹

> 

```js
const fs = require('fs')
fs.mkdir('dir') // 创建文件夹
fs.rmdir('dir') // 删除文件夹
```

# 3. 创建服务器

> 

```js
const http = require('http')

const server = http.createServer((req, res) => {
 console.log(`request was made ${req.url}`)
 res.writeHead(200, {'content-Type': 'text/plain'})
 res.end('Hey ninjas')
})

server.listen(3000, '127.0.0.1')
```

# 4. 输出 HTML

> 

```js
const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
 console.log(`request was made ${req.url}`)
 res.writeHead(200, {'content-Type': 'text/html'})
 // readable stream
 const myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf-8')
 myReadStream.pipe(res)
})

server.listen(3000, '127.0.0.1')
```

# 5. 输出 JSON

> 

```js
const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
 console.log(`request was made ${req.url}`)
 res.writeHead(200, { 'content-Type': 'application/json' })
 const myObj = {
  name: 'Jiajun',
  job: 'web dev',
  age: 27
 }

 res.end(JSON.stringify(myObj))
})

server.listen(3000, '127.0.0.1')
```

# 6. 路由

> 

```js
const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
 console.log(`request was made ${req.url}`)
 if (req.url === '/home' || req.url === '/') {
  res.writeHead(200, { 'content-Type': 'text/html' })
  fs.createReadStream(`${__dirname}/index.html`).pipe(res)
 } else if (req.url === '/contact') {
  fs.createReadStream(`${__dirname}/contact.html`).pipe(res)
 } else if (req.url === '/api/ninjas') {
  const ninjas = [{ name: 'ryu', age: 29 }, { name: 'Jiajun', age: 27 }]
  res.writeHead(200, { 'content-Type': 'application/json' })
  res.end(JSON.stringify(ninjas))
 } else {
  res.writeHead(404, { 'content-Type': 'text/html' })
  fs.createReadStream(`${__dirname}/404.html`).pipe(res)
 }
})

server.listen(3000, '127.0.0.1')

```

