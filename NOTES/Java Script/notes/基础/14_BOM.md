# BOM

## 认识BOM

BOM：浏览器对象模型（Browser Object Model）简称 BOM，由浏览器提供的用于处理文档（document）之外的所有内容的其他对象；比如navigator、location、history等对象；JavaScript有一个非常重要的运行环境就是浏览器，而且浏览器本身又作为一个应用程序需要对其本身进行操作；所以通常浏览器会有对应的对象模型（BOM，Browser Object Model）；我们可以将BOM看成是连接JavaScript脚本与浏览器窗口的桥梁；BOM主要包括以下的对象模型：
window：包括全局属性、方法，控制浏览器窗口相关的属性、方法；
location：浏览器连接到的对象的位置（URL）；
history：操作浏览器的历史；
navigator：用户代理（浏览器）的状态和标识（很少用到）；
screen：屏幕窗口信息（很少用到）

## window对象

window对象在浏览器中可以从两个视角来看待：
**视角一：全局对象**。我们知道ECMAScript其实是有一个全局对象的，这个全局对象在Node中是global；在浏览器中就是window对象；
**视角二：浏览器窗口对象**。作为浏览器窗口时，提供了对浏览器操作的相关的API；

当然，这两个视角存在大量重叠的地方，所以不需要刻意去区分它们：事实上对于浏览器和Node中全局对象名称不一样的情况，目前已经指定了对应的标准，称之为globalThis，并且大多数现代 浏览器都支持它；放在window对象上的所有属性都可以被访问；使用var定义的变量会被添加到window对象中；window默认给我们提供了全局的函数和类：setTimeout、Math、Date、Object等；

## window对象的作用

事实上window对象上肩负的重担是非常大的：
第一：包含大量的属性，localStorage、console、location、history、screenX、scrollX等等（大概60+个属性）；
第二：包含大量的方法，alert、close、scrollTo、open等等（大概40+个方法）；
第三：包含大量的事件，focus、blur、load、hashchange等等（大概30+个事件）；
第四：包含从EventTarget继承过来的方法，addEventListener、removeEventListener、dispatchEvent方法；
那么这些大量的属性、方法、事件在哪里查看呢？MDN文档： https://developer.mozilla.org/zh-CN/docs/Web/API/Window 
查看MDN文档时，我们会发现有很多不同的符号，这里我解释一下是什么意思：
删除符号：表示这个API已经废弃，不推荐继续使用了；
点踩符号：表示这个API不属于W3C规范，某些浏览器有实现（所以兼容性的问题）；
实验符号：该API是实验性特性，以后可能会修改，并且存在兼容性问题；
```js
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <a href="http://www.baidu.com" target="_blank">百度一下</a>
  <button>百度一下</button>
  <button class="close">关闭窗口</button>
  
  <script>
    // 1.window的查看角度
    // ECMAScript规范: 全局对象 -> globalThis
    // 对于浏览器 -> window
    // 对于Node -> global
    console.log(window)
    console.log(globalThis === window)
    // 浏览器窗口
    console.log(window.outerHeight)
    // 2.补充的方法
    var openBtnEl = document.querySelector("button")
    var closeBtnEl = document.querySelector(".close")
    openBtnEl.onclick = function() {
      window.open("./page/new.html", "_blank")
    }
    closeBtnEl.onclick = function() {
      window.close()
    }
    // 3.常见的事件
    // window.onfocus = function() {
    //   console.log("窗口获取到焦点")
    // }
    // window.onblur = function() {
    //   console.log("窗口失去了焦点")
    // }
    window.onhashchange = function() {
      console.log("hash值发生改变")
    }
  </script>
</body>
</html>
```

## location对象常见的属性

location对象用于表示window上当前链接到的URL信息。常见的属性有哪些呢？
href: 当前window对应的超链接URL, 整个URL；
protocol: 当前的协议；
host: 主机地址；
hostname: 主机地址(不带端口)；
port: 端口；
pathname: 路径;
search: 查询字符串；
hash: 哈希值；
username：URL中的username（很多浏览器已经禁用）；
password：URL中的password（很多浏览器已经禁用）；

## Location对象常见的方法

我们会发现location其实是URL的一个抽象实现：
location有如下常用的方法：
assign：赋值一个新的URL，并且跳转到该URL中；
replace：打开一个新的URL，并且跳转到该URL中（不同的是不会在浏览记录中留下之前的记录）；
reload：重新加载页面，可以传入一个Boolean类型；

## URLSearchParams

URLSearchParams 定义了一些实用的方法来处理 URL 的查询字符串。可以将一个字符串转化成URLSearchParams类型；也可以将一个URLSearchParams类型转成字符串；
URLSearchParams常见的方法有如下：
get：获取搜索参数的值；
set：设置一个搜索参数和值；
append：追加一个搜索参数和值；
has：判断是否有某个搜索参数；

https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams 
中文会使用encodeURIComponent和decodeURIComponent进行编码和解码

```js
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <button>打开新的网页</button>
  <button>替换新的网页</button>
  <button>网页重新加载</button>
  <script>
    // 1.完整的URL
    console.log(location.href)
    // 2.获取URL信息
    console.log(location.hostname)
    console.log(location.host)
    console.log(location.protocol)
    console.log(location.port)
    console.log(location.pathname)
    console.log(location.search)
    console.log(location.hash)
    // 3.location方法
    var btns = document.querySelectorAll("button")
    btns[0].onclick = function() {
      location.assign("http://www.baidu.com")
    }
    btns[1].onclick = function() {
      location.replace("http://www.baidu.com")
    }
    btns[2].onclick = function() {
      location.reload()
    }
    // 4.URLSearchParams
    var urlSearchString = "?name=why&age=18&height=1.88"
    var searchParams = new URLSearchParams(urlSearchString)
    console.log(searchParams.get("name"))
    console.log(searchParams.get("age"))
    console.log(searchParams.get("height"))
    searchParams.append("address", "广州市")
    console.log(searchParams.get("address"))
    console.log(searchParams.toString())
  </script>
</body>
</html>
```

## history对象常见属性和方法

history对象允许我们访问浏览器曾经的会话历史记录。

有两个属性：
length：会话中的记录条数；
state：当前保留的状态值；

有五个方法：
back()：返回上一页，等价于history.go(-1)；
forward()：前进下一页，等价于history.go(1)；
go()：加载历史中的某一页；
pushState()：打开一个指定的地址；
replaceState()：打开一个新的地址，并且使用replace；
history和hash目前是vue、react等框架实现路由的底层原理。
```js
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <button>修改history</button>
  <button class="back">返回上一级</button>
  
  <script>
    // 前端路由核心: 修改了URL, 但是页面不刷新
    // 1> 修改hash值
    // 2> 修改history
    // 1.history对应的属性
    console.log(history.length)
    console.log(history.state)
    // 2.修改history
    var btnEl = document.querySelector("button")
    btnEl.onclick = function() {
      // history.pushState({ name: "why", age: 18 }, "", "/why")
      history.replaceState({ name: "why", age: 18 }, "", "/why")
    } 
    var backBtnEl = document.querySelector(".back")
    backBtnEl.onclick = function() {
      // history.back()
      // history.forward()
      // 类似于上面的两个方法, 只是可以传入层级
      // history.go(-2)
    }
  </script>
</body>
</html>
```
## navigator对象（很少使用）
navigator 对象表示用户代理的状态和标识等信息。
## screen对象（很少使用）
screen主要记录的是浏览器窗口外面的客户端显示器的信息：比如屏幕的逻辑像素 screen.width、screen.height；