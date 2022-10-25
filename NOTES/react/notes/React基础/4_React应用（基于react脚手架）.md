

## 1 使用create-react-app创建react应用

### 1.1 react脚手架

1. xxx脚手架: 用来帮助程序员快速创建一个基于xxx库的模板项目
   1）包含了所有需要的配置（语法检查、jsx编译、devServer…）

   2） 下载好了所有相关的依赖、

   3）可以直接运行一个简单效果

2. react提供了一个用于创建react项目的脚手架库: create-react-app

3. 项目的整体技术架构为: react + webpack + es6 + eslint

4. 使用脚手架开发的项目的特点: 模块化, 组件化, 工程化


### 1.2 创建项目并启动

**第一步**，全局安装：npm i -g create-react-app

**第二步**，切换到想创项目的目录，使用命令：create-react-app hello-react

**第三步**，进入项目文件夹：cd hello-react

**第四步**，启动项目：npm start

注意：项目名称不能包含大写字母


### 1.3 react脚手架项目结构

>public ---- 静态资源文件夹
>
>​           favicon.icon ------ 网站页签图标(一定要是icon格式)
>
>​          <font color=red> **index.html --------** **主页面**</font>（整个项目只有这一个html文件，SPA应用，即单页面应用）
>
>​           logo192.png ------- logo图 
>
>​           logo512.png ------- logo图
>
>​           manifest.json ----- 应用加壳的配置文件
>
>​           robots.txt -------- 爬虫协议文件
>
>src ---- 源码文件夹
>
>​           App.css -------- App组件的样式
>
>​            <font color=red>**App.js --------- App** **组件**</font>
>
>​           App.test.js ---- 用于给App做测试（几乎不用）
>
>​           index.css ------ 样式
>
>​          <font color=red>  **index.js -------** **入口文件**</font>
>
>​           logo.svg ------- logo图
>
>​           reportWebVitals.js
>
>​                 --- 页面性能分析文件(需要web-vitals库的支持)
>
>​           setupTests.js
>
>​                 ---- 组件单元测试的文件(需要jest-dom库的支持)

### 1.4 功能界面的组件化编码流程（通用）

1. 拆分组件: 拆分界面,抽取组件

2. 实现静态组件: 使用组件实现静态页面效果

3. 实现动态组件

   ​	3.1 动态显示初始化数据

   ​				3.1.1 数据类型

   ​				3.1.2 数据名称

   ​				3.1.3 保存在哪个组件?

   ​	3.2 交互(从绑定事件监听开始)

## 2 react ajax

### 2.1 理解

1. 注意

- React本身只关注于界面, 并不包含发送ajax请求的代码

-  前端应用需要通过ajax请求与后台进行交互(json数据)

- react应用中需要集成第三方ajax库(或自己封装)

2. 常用的ajax请求库

-   Query: 比较重, 如果需要另外引入不建议使用

-   axios: 轻量级, 建议使用

  ​		1)   封装XmlHttpRequest对象的ajax

  ​       2)    promise风格

  ​       3)   可以用在浏览器端和node服务器端

### 2.2 axios

1. [文档](https://github.com/axios/axios)
2. 相关API

- GET请求

  ```javascript
  axios.get('/user?ID=12345')
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  
  axios.get('/user', {
      params: {
        ID: 12345
      }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  
  ```

  

- POST请求

  ```js
  axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
  console.log(response);
  })
  .catch(function (error) {
  console.log(error);
  });
  
  ```

  

### 2.3 react脚手架配置代理总结

1. 方法1

	​	在package.json中追加如下配置

   ```json
   "proxy":"http://localhost:5000"
   ```
   
   ​	说明：
   
   ​				1）优点：配置简单，前端请求资源时可以不加任何前缀。
   
   ​				2）缺点：不能配置多个代理。
   
   ​				3）工作方式：上述方式配置代理，当请求了3000不存在的资源时，那么该请求会转发给5000					（优先匹配前端资源）
   
2. 方法2：

   ​				1)第一步：创建代理配置文件

   ​								在src下创建配置文件：src/setupProxy.js

   ​				2) 编写setupProxy.js配置具体代理规则：

   ```js
   const proxy = require('http-proxy-middleware')
      
      module.exports = function(app) {
        app.use(
          proxy('/api1', {  //api1是需要转发的请求(所有带有/api1前缀的请求都会转发给5000)
            target: 'http://localhost:5000', //配置转发目标地址(能返回数据的服务器地址)
            changeOrigin: true, //控制服务器接收到的请求头中host字段的值
            /*
            	changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
            	changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000
            	changeOrigin默认值为false，但我们一般将changeOrigin值设为true
            */
            pathRewrite: {'^/api1': ''} //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
          }),
          proxy('/api2', { 
            target: 'http://localhost:5001',
            changeOrigin: true,
            pathRewrite: {'^/api2': ''}
          })
        )
      }
   ```

   ​	说明：

   1. 优点：可以配置多个代理，可以灵活的控制请求是否走代理。
   2. 缺点：配置繁琐，前端请求资源时必须加前缀。

### 2.4 消息订阅-发布机制

1. 工具库: PubSubJS

2. 下载: npm install pubsub-js --save

3. 使用: 

   ​	1)   import PubSub from 'pubsub-js' //引入

   ​	2)   PubSub.subscribe('delete', function(data){ }); //订阅

   ​	3)   PubSub.publish('delete', data) //发布消息

4. 理解

   ​	1）先订阅，再发布（理解：有一种隔空对话的感觉）

   ​    2）适用于任意组件间通信

​              3）要在组件的componentWillUnmount中取消订阅

###  2.5 扩展：Fetch(关注分离思想)

1. 文档

   1） https://github.github.io/fetch/

   2） https://segmentfault.com/a/1190000003810652

2. 特点

   1）fetch: 原生函数，不再使用XmlHttpRequest对象提交ajax请求（axios和jQuery都是对XmlHttpRequset的封装）

   2）老版本浏览器可能不支持

3. 相关API

   1）GET请求

   ```js
   fetch(url).then(function(response) {
       return response.json()
     }).then(function(data) {
       console.log(data)
     }).catch(function(e) {
       console.log(e)
     });
   
   ```

   2）POST请求

   ```js
   fetch(url, {
       method: "POST",
       body: JSON.stringify(data),
     }).then(function(data) {
       console.log(data)
     }).catch(function(e) {
       console.log(e)
     })
   
   ```