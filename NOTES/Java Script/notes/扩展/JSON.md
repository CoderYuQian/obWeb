# JSON

## JSON的由来

在目前的开发中，JSON是一种非常重要的数据格式，它并不是编程语言，而是一种可以在服务器和客户端之间传输的数据格式。

JSON的全称是JavaScript Object Notation（JavaScript对象符号）：

JSON是由Douglas Crockford构想和设计的一种轻量级资料交换格式，算是JavaScript的一个子集；但是虽然JSON被提出来的时候是主要应用JavaScript中，但是目前已经独立于编程语言，可以在各个编程语言中使用；很多编程语言都实现了将JSON转成对应模型的方式；

其他的传输格式：
XML：在早期的网络传输中主要是使用XML来进行数据交换的，但是这种格式在解析、传输等各方面都弱于JSON，所以目前已经很 少在被使用了；
Protobuf：另外一个在网络传输中目前已经越来越多使用的传输格式是protobuf，但是直到2021年的3.x版本才支持JavaScript，所 以目前在前端使用的较少；

目前JSON被使用的场景也越来越多：网络数据的传输JSON数据；项目的某些配置文件；非关系型数据库（NoSQL）将json作为存储格式；

## JSON基本语法

JSON的顶层支持三种类型的值：
简单值：数字（Number）、字符串（String，不支持单引号）、布尔类型（Boolean）、null类型；

对象值：由key、value组成，key是字符串类型，并且必须添加双引号，值可以是简单值、对象值、数组值；

数组值：数组的值可以是简单值、对象值、数组值；

## JSON序列化

某些情况下我们希望将JavaScript中的复杂类型转化成JSON格式的字符串，这样方便对其进行处理：比如我们希望将一个对象保存到localStorage中；但是如果我们直接存放一个对象，这个对象会被转化成 \[object Object\] 格式的字符串，并不是我们想要的结果；

## JSON序列化方法

在ES5中引用了JSON全局对象，该对象有两个常用的方法：

**stringify方法**：将JavaScript类型转成对应的JSON字符串；
**parse方法**：解析JSON字符串，转回对应的JavaScript类型；

那么上面的代码我们可以通过如下的方法来使用：
```js
 var obj = {
      name: "why",
      age: 18,
      friend: {
        name: "kobe"
      }
    }
    console.log(obj.name, obj.age)

    // 1.将obj对象进行序列化
    var objJSONString = JSON.stringify(obj)
    console.log(objJSONString)
    // 2.将对象存储到localStorage
    localStorage.setItem("info", objJSONString)
    var item = localStorage.getItem("info")
    console.log(item, typeof item)
    // 3.将字符串转回到对象(反序列化)
    var newObj = JSON.parse(item)
    console.log(newObj)
```

## Stringify的参数replace

JSON.stringify() 方法将一个 JavaScript 对象或值转换为 JSON 字符串：
如果指定了一个 replacer 函数，则可以选择性地替换值；如果指定的 replacer 是数组，则可选择性地仅包含数组指定的属性；
```js
  var obj = {
      name: "why",
      age: 18,
      friend: {
        name: "kobe"
      },
      toJSON: function() {
        return "123"
      }
    }

    // 1.replacer参数
    // var objJSONString = JSON.stringify(obj, function(key, value) {
    //   if (key === "name") {
    //     return "coderwhy"
    //   }
    //   return value
    // }, "")
    // console.log(objJSONString)
    // 2.space参数
    // var objJSONString = JSON.stringify(obj, null, 4)
    // console.log(objJSONString)
    // 3.如果对象本身有显示toJSON方法, 那么直接调用toJSON方法
    var objJSONString = JSON.stringify(obj)
    console.log(objJSONString) 
```
## Stringify的参数space

如果对象本身包含toJSON方法，那么会直接使用toJSON方法的结果：
```js
 var obj = {
      name: "why",
      age: 18
    }
    var objJSONString = JSON.stringify(obj)
    console.log(objJSONString)
    var newObj = JSON.parse(objJSONString, function(key, value) {
      if (key === "age") {
        return value + 2
      }
      return value
    })
    console.log(newObj)
```

## parse方法

JSON.parse() 方法用来解析JSON字符串，构造由字符串描述的JavaScript值或对象。提供可选的 reviver 函数用以在返回之前对所得到的对象执行变换(操作)。

JSON的方法可以帮我们实现对象的深拷贝

## 认识Storage

WebStorage主要提供了一种机制，可以让浏览器提供一种比cookie更直观的key、value存储方式：
localStorage：本地存储，提供的是一种永久性的存储方法，在关闭掉网页重新打开时，存储的内容依然保留；
sessionStorage：会话存储，提供的是本次会话的存储，在关闭掉会话时，存储的内容会被清除；

## localStorage和sessionStorage的区别

我们会发现localStorage和sessionStorage看起来非常的相似。那么它们有什么区别呢？

验证一：关闭网页后重新打开，localStorage会保留，而sessionStorage会被删除；
验证二：在页面内实现跳转，localStorage会保留，sessionStorage也会保留；
验证三：在页面外实现跳转（打开新的网页），localStorage会保留，sessionStorage不会被保留；

## Storage常见的方法和属性

Storage有如下的属性和方法：
属性：
Storage.length：只读属性，返回一个整数，表示存储在Storage对象中的数据项数量；

方法：
Storage.key()：该方法接受一个数值n作为参数，返回存储中的第n个key名称；Storage.getItem()：该方法接受一个key作为参数，并且返回key对应的value；
Storage.setItem()：该方法接受一个key和value，并且将会把key和value添加到存储中。如果key存储，则更新其对应的值；
Storage.removeItem()：该方法接受一个key作为参数，并把该key从存储中删除；Storage.clear()：该方法的作用是清空存储中的所有key；