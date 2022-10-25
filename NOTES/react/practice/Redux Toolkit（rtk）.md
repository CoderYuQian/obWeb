
是官方推荐的编写Redux逻辑的方法

## 使用

安装：
```js
npm install @reduxjs/toolkit react-redux
```

主要API：
1. configureStore：包装createStore以提供简化的配置选项和良好的默认值。它可以自动组合你的 slice reducer，添加你提供 的任何 Redux 中间件，redux-thunk默认包含，并启用 Redux DevTools Extension。
2. createSlice：接受reducer函数的对象、切片名称和初始状态值，并自动生成切片reducer，并带有相应的actions。
3. createAsyncThunk: 接受一个动作类型字符串和一个返回承诺的函数，并生成一个pending/fulfilled/rejected基于该承诺分 派动作类型的 thunk

代码编写：
1. 创建store通过使用configureStore
   常见参数： 
  > reducer，将slice中的reducer可以组成一个对象传入此处； 
  
  > middleware：可以使用参数，传入其他的中间件
   
  > devTools：是否配置devTools工具，默认为true；
   ```js
import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./features/counter"
import homeReducer from "./features/home"

const store = configureStore({
  reducer: {
    counter: counterReducer,
    home: homeReducer
  }
})

export default store
   ```
2. 创建代码片段使用createSlice
   主要参数：
   >name：用户标记slice的名词，在之后的redux-devtool中会显示对应的名词 
   
   >initialState：初始化值，第一次初始化的值
   
   >reducers：相当于之前的reducer函数  对象类型，并且可以添加很多的函数；  函数类似于redux原来reducer中的一个case语句； 
   函数的参数：  参数一：state  参数二：调用这个action时，传递的action参数；
   
   >createSlice返回值是一个对象，包含所有的actions；

   ```js
import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 888
  },
  
  reducers: {
    addNumber(state, { payload }) {
      state.counter = state.counter + payload
    },
    subNumber(state, { payload }) {
      state.counter = state.counter - payload
    }
  }
})

export const { addNumber, subNumber } = counterSlice.actions
export default counterSlice.reducer
   ```
3. 进行异步操作使用createAsyncThunk
   >当createAsyncThunk创建出来的action被dispatch时，会存在三种状态： 
   pending：action被发出，但是还没有最终的结果； 
   fulfilled：获取到最终的结果（有返回值的结果）； 
   rejected：执行过程中有错误或者抛出了异常；
   我们可以在createSlice的entraReducer中监听这些结果，extraReducer还可以传入一个函数，函数接受一个builder参数。
  
   ```js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchHomeMultidataAction = createAsyncThunk(

  "fetch/homemultidata",
  async (extraInfo, { dispatch, getState }) => {//第一个参数:传过来的参数,第二个参数:store
    // console.log(extraInfo, dispatch, getState)
    // 1.发送网络请求, 获取数据
    const res = await axios.get("http://123.207.32.32:8000/home/multidata")

    // 2.取出数据, 并且在此处直接dispatch操作(可以不做)
    const banners = res.data.data.banner.list
    const recommends = res.data.data.recommend.list
    dispatch(changeBanners(banners))
    dispatch(changeRecommends(recommends))

    // 3.返回结果, 那么action状态会变成fulfilled状态
    return res.data
})

const homeSlice = createSlice({
  name: "home",
  initialState: {
    banners: [],
    recommends: []
  },

  reducers: {
    changeBanners(state, { payload }) {
      state.banners = payload
    },
    changeRecommends(state, { payload }) {
      state.recommends = payload
    }
  },

//监听fetchHomeMultidataAction的状态,第一种写法
  // extraReducers: {
  //   [fetchHomeMultidataAction.pending](state, action) {
  //     console.log("fetchHomeMultidataAction pending")
  //   },
  //   [fetchHomeMultidataAction.fulfilled](state, { payload }) {
  //     state.banners = payload.data.banner.list
  //     state.recommends = payload.data.recommend.list
  //   },
  //   [fetchHomeMultidataAction.rejected](state, action) {
  //     console.log("fetchHomeMultidataAction rejected")
  //   }
  // }
//第二种写法
  extraReducers: (builder) => {
    // builder.addCase(fetchHomeMultidataAction.pending, (state, action) => {
    //   console.log("fetchHomeMultidataAction pending")
    // }).addCase(fetchHomeMultidataAction.fulfilled, (state, { payload }) => {
    //   state.banners = payload.data.banner.list
    //   state.recommends = payload.data.recommend.list
    // })
  }
})

export const { changeBanners, changeRecommends } = homeSlice.actions
export default homeSlice.reducer
   ```