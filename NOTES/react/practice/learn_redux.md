## 核心概念

- store：用来定义和初始化数据
- action：修改数据必须通过派发（dispatch）action来更新，action是一个普通的JavaScript对象，用来描述此次更新的type和content
- reducer：reducer是一个纯函数，将传入的state和action结合起来

## 使用
安装：
```js
npm install redux
```

**redux代码结构优化：**
1. 将派发的action生成过程放到一个actionCreators函数中
2. 将定义的所有actionCreators的函数，放到一个独立的文件中：actionCreators.js
3. actionCreators和reducer函数中使用字符串常量是一致的，所以将常量抽取到一个独立的constants的文件中
4. 将reducer和默认值（initialState）放到一个独立的reducer.js文件中，而不是在index.js中