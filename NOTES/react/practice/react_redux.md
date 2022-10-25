## 介绍
react-redux是一个将react与redux结合起来的库

## 使用
下载：
```js
npm install react-redux
```

1. 提供store

```jsx
import { Provider } from "react-redux"
import store from "./store"

    <Provider store={store}>
      <App />
    </Provider>
```
2. 使用store

使用connect函数：
   ```js
import { connect } from "react-redux"

//connect是一个高阶函数，接受两个函数作为参数，返回值是一个高阶组件接收一个组件作为参数
//第一个参数（函数）要映射store中的哪些state到组件的Props中
//第二个参数（函数）要映射store中的哪些dispatch到组件的Props中

//通过props使用store中的数据

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addNumber(num) {
      dispatch(addNumberAction(num))
    },
    subNumber(num) {
      dispatch(subNumberAction(num))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(About)
   ```
