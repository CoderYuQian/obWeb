# 爱彼迎

## 1 项目规范

1. 文件夹、文件名称统一小写、多个单词以连接符（-）连接；
2. JavaScript变量名称采用小驼峰标识，常量全部使用大写字母，组件采用大驼峰；
3. CSS采用普通CSS和styled-component结合来编写（全局采用普通CSS、局部采用styled-component）; 
4. 整个项目不再使用class组件，统一使用函数式组件，并且全面拥抱Hooks； 
5. 所有的函数式组件，为了避免不必要的渲染，全部使用memo进行包裹；
6. 组件内部的状态，使用useState、useReducer；业务数据全部放在redux中管理；
7. 函数组件内部基本按照如下顺序编写代码：
   - 组件内部state管理；
   - redux的hooks代码；
   - 其他hooks相关代码（比如自定义hooks）；
   - 其他逻辑代码；
   - 返回JSX代码；
8. redux代码规范如下： redux目前学习了两种模式，在项目实战中尽量两个都用起来，都需要掌握；每个模块有自己独立的reducer或者slice，之后合并在一起；redux中会存在共享的状态、从服务器获取到的数据状态； 
9. 网络请求采用axios  对axios进行二次封装；所有的模块请求会放到一个请求文件中单独管理； 
10. 项目使用AntDesign、MUI（Material UI）爱彼迎本身的设计风格更多偏向于Material UI，但是课程中也会尽量讲到AntDesign的使用方法；项目中某些AntDesign、MUI中的组件会被拿过来使用；但是多部分组件还是自己进行编写、封装、实现；
11. 其他规范在项目中根据实际情况决定和编写；

## 2 项目基本框架搭建

### 2.1 创建Vue项目

1. 创建项目的方式：create-react-app
2. 项目配置: 
   配置项目的icon
   配置项目的标题
   配置jsconfig.json
3. 通过craco配置别名和less文件：
   先下载craco包，然后新建craco.config.js文件，最后进行配置
   依赖：
   ```js
   npm install craco
   ```
   
   ```js
   const path = require('path')
   const CracoLessPlugin = require('craco-less');
   const resolve = pathname => path.resolve(__dirname, pathname)

   module.exports = {
  // less
  plugins: [
    {
      plugin: CracoLessPlugin//less插件
    },
  ],
  // webpack
  webpack: {
    alias: {//配置路径
      "@": resolve("src"),
      "components": resolve("src/components"),
      "utils": resolve("src/utils")
    }
  }
}
   ```
   
4. 配置jsconfig.js
	可以在使用vscode开发过程中有更好的代码提示。

### 2.2 项目目录结构划分

![[项目目录结构划分.png]]

### 2.3 CSS样式的重置

对默认CSS样式进行重置:
1. normalize.css 
2. reset.css

依赖：
```js
npm install normalize.css
```

### 2.4 Router配置

依赖：
```js
npm install react-router-dom
```

```js
import React from "react"
import { Navigate } from "react-router-dom"

const Home = React.lazy(() => import("@/views/home"))
const Entire = React.lazy(() => import("@/views/entire"))
const Detail = React.lazy(() => import("@/views/detail"))

const routes = [
  {
    path: "/",
    element: <Navigate to="/home"/>
  },
  {
    path: "/home",
    element: <Home/>
  },
  {
    path: "/entire",
    element: <Entire/>
  },
  {
    path: "/detail",
    element: <Detail/>
  }
]
export default routes
```

[[5_React路由]]

### 2.5 Redux状态管理

依赖：
```js
npm install @reduxjs/toolkit react-redux
```

Redux状态管理的选择:
- 普通方式：目前项目中依然使用率非常高;
- @reduxjs/toolkit方式：推荐方式, 未来的趋势

```js
import { createSlice } from '@reduxjs/toolkit'

const homeSlice = createSlice({
  name: "home",
  initialState: {
    productList: []
  },
  reducers: {

  }
})
export default homeSlice.reducer
```

 [[6_Redux]]

### 2.6 网络请求 - axios

```js
import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config"

class YRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout
    })

    this.instance.interceptors.response.use((res) => {
      return res.data
    }, err => {
      return err
    })
  }

  request(config) {
    return this.instance.request(config)
  }

  get(config) {
    return this.request({ ...config, method: "get" })
  }

  post(config) {
    return this.request({ ...config, method: "post" })
  }
}

export default new YRequest(BASE_URL, TIMEOUT)
```

## 3 开发过程

原网址：[Airbnb爱彼迎 - 全球民宿_公寓_短租_住宿_预订平台](https://www.airbnb.cn/)


#### 图片使用
方式一：
```js
 import coverImg from "@/assets/img/cover_01.jpeg"
 background: url(${coverImg}) center/cover;
```
方式二：
```js
 background: url(${require("@/assets/img/cover_01.jpeg")}) center/cover;

//之前的webpack版本需要加上default
  background: url(${require("@/assets/img/cover_01.jpeg").default}) center/cover;
```

#### 图片宽高比不一致(对不齐)解决
```css
.cover {
    position: relative;
    box-sizing: border-box;
    padding: 66.66% 8px 0;
    border-radius: 3px;
    overflow: hidden;
    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }
```