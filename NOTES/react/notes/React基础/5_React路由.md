
# React路由

## 1 相关理解

### 1.1 SPA 的理解

1. 单页Web应用（single page web application，SPA）。

2. 整个应用只有==**一个完整的页面**==。

3. 点击页面中的链接==**不会刷新**==页面，只会做页面的==**局部更新。**==

4. 数据都需要通过ajax请求获取, 并在前端异步展现。

### 1.2 路由的理解

**1.**   **什么是路由?**

- 一个路由就是一个映射关系(key:value)
- key为路径, value可能是function或component

**2.**   **路由分类**

​	1）  后端路由：
-  理解： value是function, 用来处理客户端提交的请求。
-  注册路由： router.get(path, function(req, res))
- 工作过程：当node接收到一个请求时, 根据请求路径找到匹配的路由, 调用路由中的函数来处理请求, 返回响应数据

​    2）   前端路由：
-  浏览器端路由，value是component，用于展示页面内容。
-  注册路由: \<Route path="/test" component={Test}\>
-  工作过程：当浏览器的path变为/test时, 当前路由组件就会变为Test组件

### 1 .3 react-router-dom的理解

1. react的一个插件库。
2. 专门用来实现一个SPA应用。
3. 基于react的项目基本都会用到此库。

注意：
安装时，我们选择react-router-dom；react-router会包含一些react-native的内容，web开发并不需要；

## 2 react-router-dom相关API

react-router最主要的API是给我们提供的一些组件。

Router中包含了对路径改变的监听，并且会将相应的路径传递给子组件； 
BrowserRouter使用history模式； 
HashRouter使用hash模式；

### 2.1 内置组件

1. \<BrowserRouter\>
2. \<HashRouter\>
3. \<Route\>
4. \<Redirect\>
5. \<Link\>
6. \<NavLink\>
7. \<Switch\>

### 2.2. 其它

1. history对象
2. match对象
3. withRouter函数

### 2.3 路由映射配置

Routes：包裹所有的Route，在其中匹配一个路由 
Router5.x使用的是Switch组件

Route：Route用于路径的匹配； 
path属性：用于设置匹配到的路径； 
element属性：设置匹配到路径后，渲染的组件；  Router5.x使用的是component属性 
exact：精准匹配，只有精准匹配到完全一致的路径，才会渲染对应的组件；  Router6.x不再支持该属性

### 2.4 路由配置和跳转

Link和NavLink：  
通常路径的跳转是使用Link组件，最终会被渲染成a元素；  
NavLink是在Link基础之上增加了一些样式属性；  
to属性：Link中最重要的属性，用于设置跳转到的路径；

### 2.5 NavLink的使用

需求：路径选中时，对应的a元素变为红色

这个时候，我们要使用NavLink组件来替代Link组件：
style：传入函数，函数接受一个对象，包含isActive属性 
className：传入函数，函数接受一个对象，包含isActive属性

默认的activeClassName： 事实上在默认匹配成功时，NavLink就会添加上一个动态的active class； 所以我们也可以直接编写样式，当然，如果你担心这个class在其他地方被使用了，出现样式的层叠，也可以自定义class。

### 2.6 Navigate导航

Navigate用于路由的重定向，当这个组件出现时，就会执行跳转到对应的to路径中

## 3 路由的嵌套

在开发中，路由之间是存在嵌套关系的。 这里我们假设Home页面中有两个页面内容： 推荐列表和排行榜列表； 点击不同的链接可以跳转到不同的地方，显示不同的内容；\<outlet/> 组件用于在父路由元素中作为子路由的占位元素。

## 4 手动路由的跳转

目前我们实现的跳转主要是通过Link或者NavLink进行跳转的，实际上我们也可以通过JavaScript代码进行跳转。
我们知道Navigate组件是可以进行路由的跳转的，但是依然是组件的方式。如果我们希望通过JavaScript代码逻辑进行跳转（比如点击了一个button），那么就需要获取到navigate对象。

在Router6.x版本之后，代码类的API都迁移到了hooks的写法： 如果我们希望进行代码跳转，需要通过useNavigate的Hook获取到navigate对象进行操作；那么如果是一个函数式组件，我们可以直接调用，但是如果是一个类组件呢？

## 5 路由参数传递

传递参数有二种方式： 动态路由的方式； search传递参数；

动态路由的概念指的是路由中的路径并不会固定：  比如/detail的path对应一个组件Detail；  如果我们将path在Route匹配时写成/detail/:id，那么 /detail/abc、/detail/123都可以匹配到该Route，并且进行显示；  这个匹配规则，我们就称之为动态路由；  通常情况下，使用动态路由可以为路由传递参数。
```js
<link to="detail/123">详情：123</link>
```

search传递参数
```js
<link to="user?name=why&age=18">用户信息</link>
```

```js
const [searchParams] = useSearchParams()
const query = Object.fromEntries(searchParams)
```

## 6 路由的配置文件

目前我们所有的路由定义都是直接使用Route组件，并且添加属性来完成的。但是这样的方式会让路由变得非常混乱，我们希望将所有的路由配置放到一个地方进行集中管理：
在早期的时候，Router并且没有提供相关的API，我们需要借助于react-router-config完成；
在Router6.x中，为我们提供了useRoutes API可以完成相关的配置；

##  7 lazyLoad

路由组件的lazyLoad：防止资源一次性加载过多，让用户可以按需加载

如果我们对某些组件进行了异步加载（懒加载），那么需要使用Suspense进行包裹：
```js
  <Suspense fallback="loading">
    <HashRouter>
      <App/>
    </HashRouter>
  </Suspense>
```