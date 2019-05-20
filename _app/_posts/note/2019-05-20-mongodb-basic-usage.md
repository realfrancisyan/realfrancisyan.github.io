---
layout: post
title: MongoDB 基础用法
category: note
tags: mongodb
---

最近在学习 `MongoDB`，现将所学总结一下。

# 启动

>

```terminal
mongod --directoryperdb --dbpath data/db -logpath log/mongo.log --logappend

// or with authentication
mongod --directoryperdb --dbpath data/db -logpath log/mongo.log --logappend --auth

mongo
```

# 创建管理员用户

>

```js
use admin
db.createUser(
  {
    user: "jiajun",
    pwd: "qweasdzxc123",
    roles: [
       "root"
    ]
  }
)
db.auth('jiajun', 'qweasdzxc123') // returning 1 means success

// 登录
mongo admin -u jiajun -p qweasdzxc123 
```

# 创建表，查找表

>

```js
1. db.createCollection("customers")
2. db.customers.insert({first_name: "John", last_name: "Doe"})
3. db.customers.find().pretty() // show all content of a collection
4. Show collections
5. db.createUser({user: "brad", pwd: "1234", roles: [{role: "readWrite", db: "dbAdmin"}]})
6. db.customers.update({first_name: "John"}, {first_name: "John", last_name: "Doe", gender: "male"}); // update 
7. db.customers.update({first_name:"Steven"}, {$set:{gender: "male"}}) // append and replace an element
8. db.customers.update({first_name: "Steven"}, {$inc: {age: 5}}) // increment a certain field of an element
9. db.customers.update({first_name: "Steven"}, {$unset: {age: 1}}) // remove a field of an element
10. db.customers.update({first_name: "Mary"}, {first_name: "Mary", last_name: "Samson"}, {upsert:true}) // update an element, if it doesnt exist, insert it
11. db.customers.update({first_name: "Steven"}, {$rename: {"gener": "sex"}}) // rename a field
12. db.customers.remove({first_name: "Steven"}, {justOne: true}) // remove an element, delete the first element found, not all of them
```

# find()

> 

```js
1. db.customers.find({first_name: "John"}).pretty() // find an element with first_name "John"
2. db.customers.find({$or:[{first_name:"John"}, {first_name: "Mary"}]}).pretty() // find multiple elements
3. db.customers.find({age: {$lte: 40}}) // find element's age less than and equal to 40
4. db.customers.find({"address.city" : "Boston"}) // find matches with a field of a field
```


# Sorting

>

```js
1. db.customers.find().sort({last_name: 1}) // 1: ascending, -1: descending
```


# Count

>

```js
1. db.customers.find().count()
2. db.customers.find({gender: 'male'}).count()
```


# Limit

>

```js
1. db.customers.find({gender: 'male'}).limit() // first four elements
```

# pymongo 连接

>

```python
def create_app():
    app = Flask(__name__)
    app.config['MONGO_DBNAME'] = 'docs'
    app.config['MONGO_URI'] = 'mongodb://jiajun:qweasdzxc123@localhost:27017/docs?authSource=admin'
    mongo = PyMongo(app)

    return app
```