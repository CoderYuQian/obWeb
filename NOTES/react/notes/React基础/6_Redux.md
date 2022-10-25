[TOC]

# 1 Redux理解

## 1.1 学习文档

1. 英文文档: https://redux.js.org/

2. 中文文档: http://www.redux.org.cn/

3. Github: https://github.com/reactjs/redux

## 1.2 Redux是什么

1. Redux是一个专门用于做==状态管理==的JS库（不是react插件库）
2. Redux就是一个帮助我们管理State的容器：Redux是JavaScript的状态容器，提供了可预测的状态管理；
3. Redux除了和React一起使用之外，它也可以和其他界面库一起来使用（比如Vue），并且它非常小（包括依赖在内，只有2kb），基本与React配合使用
4. 作用：集中式管理React应用中多个组件共享的状态

注意：React中就要求我们无论是函数还是class声明一个组件，这个组件都必须像纯函数一样，保护它们的props不被修改：


## 1.4 Redux的三大原则

**单一数据源**
整个应用程序的state被存储在一颗object tree中，并且这个object tree只存储在一个 store 中，Redux并没有强制让我们不能创建多个Store，但是那样做并不利于数据的维护；单一的数据源可以让整个应用程序的state变得方便维护、追踪、修改；
**State是只读的**
唯一修改State的方法一定是触发action，不要试图在其他地方通过任何的方式来修改State， 这样就确保了View或网络请求都不能直接修改state，它们只能通过action来描述自己想要如何修改state；这样可以保证所有的修改都被集中化处理，并且按照严格的顺序来执行，所以不需要担心race condition（竟态）的问题；
**使用纯函数来执行修改**
通过reducer将 旧state和 actions联系在一起，并且返回一个新的State。随着应用程序的复杂度增加，我们可以将reducer拆分成多个小的reducers，分别操作不同state tree的一部分；但是所有的reducer都应该是纯函数，不能产生任何的副作用；

## 1.3 什么情况下需要使用Redux

1. 某个组件的状态，需要让其他组件可以随时拿到（共享）
2. 一个组件需要改变另一个组件的状态（通信）
3. 总体原则：能不用就不用，如果不用比较吃力才考虑使用

## 1.4 Redux工作流程

![](https://cdn.jsdelivr.net/gh/Ignorant-Cirle/images@master/blog/image.5qcxewf1ah40.png)

**备注：**
React是在视图层帮助我们解决了DOM的渲染过程，但是State依然是留给我们自己来管理：
```js
UI = render(state)
```
无论是组件定义自己的state，还是组件之间的通信通过props进行传递；也包括通过Context进行数据之间的共享；
React主要负责帮助我们管理视图，state如何维护最终还是我们自己来决定；

# 2 Redux的三个核心概念

## 2.1 Action

**action**
Redux要求我们通过action来更新数据：
所有数据的变化，必须通过派发（dispatch）action来更新；action是一个普通的JavaScript对象，用来描述这次更新的type和content。
真实应用中，我们会通过函数来定义，返回一个action；

1. 动作的对象
2. 包含2个属性
   - type：标识属性，值为字符串，唯一，必要属性
   - data：数据属性，值类型任意，可选属性
3. 例子：
   ```js
   {
   	type:'ADD STUDENT',
   	data:{name:'Tom',age:18}
   }
   ```

## 2.2 Reducer

**reducer**
reducer是一个纯函数； reducer做的事情就是将传入的state和action结合起来生成一个新的state。

1. 用于初始化状态，加工状态
2. 加工时，根据旧的state和action，产生新的state的纯函数
3. 说明：
   1）reducer的本质是一个函数，接收：prestate , action，返回加工后的状态
   2）reducer的两个作用：初始化状态，加工状态
   3）reducer被第一次调用是由store自动触发的，传递的preState是undefined，传递的action是{type:'@@REDUX/INIT_a.2.b.4}【类似】

## 2.3 Store

1. 将state、action、reducer联系在一起的对象
2. 如何得到此对象
   （1）
   ```js
   import {createStroe} from 'redux'
   ```
   （2）
   ```js
   import reducer from './reducers'
   ```
   （3）
   ```js
   const stroe = createStore(reducer)
   ```
3. 此对象的功能
   （1）getState()：得到state
   （2）dispatch(action)：分发action，触发reducer调用，产生新的state
   （3）subscribe(listener)：注册监听，当产生了新的state时，自动调用
4. 编码：
   1）引入redux中的createStore函数，创建一个store
   2）createStore调用时要传入一个为其服务的reducer
   3）记得暴露store对象

# 3 使用Redux

##  3.1 基本使用
1. 创建一个对象，作为我们要保存的状态：
2. 创建Store来存储这个state  创建store时必须创建reducer；我们可以通过 store.getState 来获取当前的state；
3. 通过action来修改state  通过dispatch来派发action； 通常action中都会有type属性，也可以携带其他的数据；
4. 修改reducer中的处理代码  这里一定要记住，reducer是一个纯函数，不需要直接修改state； 
5. 可以在派发action之前，监听store的变化：

## 3.2 Redux结构划分

如果我们将所有的逻辑代码写到一起，那么当redux变得复杂时代码就难以维护。需要对代码进行拆分，将store、reducer、action、constants拆分成一个个文件。
- 创建store/index.js文件：
- 创建store/reducer.js文件：
- 创建store/actionCreators.js文件：
- 创建store/constants.js文件：

注意：从node v13.2.0开始，node才对ES6模块化提供了支持：
- node v13.2.0之前，需要进行如下操作： 在package.json中添加属性： "type": "module"； 在执行命令中添加如下选项：node --experimental-modules src/index.js;
- node v13.2.0之后，只需要进行如下操作：在package.json中添加属性： "type": "module"；

注意：导入文件时，需要跟上.js后缀名；

# 4 Redux的核心API

## 4.1 createstore()

作用：创建包含指定 reducer 的 store 对象

## 4.2 store 对象

1. 作用：redux库最为核心的管理对象

2. 它内部维护着：
   1）state
   2）reducer

3. 核心方法：
   1）getState() ：获取状态
   2）dispatch(action)：分发动作
   3）subscribe(listener)：监测redux中状态的改变，如redux的状态发生改变，那么重新渲染App组件

   备注：使用了react-redux后也不用再自己检测redux中状态的改变了，容器组件可以自动完成这个工作

4. 具体编码

   1）store.getState()
   2）store.dispatch({type:INCREMENT, nubmer})
   3）这一步在react-redux中会自动完成

   ```js
   //放在index.js中
   store.subscribe(() => {
       ReactDOM.render(<App/>,document.getElementById('root'))
   })
   ```

## 4.3 applyMiddleware()

redux也引入了中间件（Middleware）的概念： 这个中间件的目的是在dispatch的action和最终达到的reducer之间，扩展一些自己的代码；比如日志记录、调用异步接口、添加代码调试功能等等；

作用：应用上基于redux的中间件(插件库)

Middleware 最常见的使用场景是无需引用大量代码或依赖类似 Rx 的第三方库实现异步 actions。这种方式可以让你像 dispatch 一般的 actions 那样 dispatch 异步 actions。

```js
import {createStore,applyMiddleware} from 'redux';
//引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk';
//引入redux-devtools-extension
import {composeWithDevTools} from 'redux-devtools-extension'
//暴露store
export default createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)))
```

## 4.4 combineReducer()

redux给我们提供了一个combineReducers函数可以方便的让我们对多个reducer进行合并

作用：合并多个reducer函数

```js
//引入combineReducer， 用于整合多个reducer
import {combineReducers} from 'redux';
//引入为Count组件服务的reducer
import count from './count';
//引入为Person组件服务的reducer
import persons from './person';


//汇总所有的reducer变为一个总的reducer
export default  combineReducers({
    count,
    persons
})
```

#### 4.4.1 combineReducer实现原理

事实上，它也是将我们传入的reducers合并到一个对象中，最终返回一个combination的函数（相当于我们之前的reducer函 数了）； 在执行combination函数的过程中，它会通过判断前后返回的数据是否相同来决定返回之前的state还是新的state；新的state会触发订阅者发生对应的刷新，而旧的state可以有效的组织订阅者发生刷新；

# 5 react-redux

redux和react没有直接的关系，你完全可以在React, Angular, Ember, jQuery, or vanilla JavaScript中使用Redux。
尽管这样说，redux依然是和React库结合的更好，因为他们是通过state函数来描述界面的状态，Redux可以发射状态的更新， 让他们作出相应。虽然我们之前已经实现了connect、Provider这些帮助我们完成连接redux、react的辅助工具，但是实际上redux官方帮助我 们提供了 react-redux 的库，可以直接在项目中使用，并且实现的逻辑会更加的严谨和高效。

##  5.1 理解

1. 一个react插件库
2. 专门用来简化react应用使用的redux
3. 备注：redux并非是专门用于react的，也不是Facebook出的，而react-redux是Facebook出的

## 5.2 原理图

![](https://cdn.jsdelivr.net/gh/Ignorant-Cirle/images@master/blog/react-redux模型图.3i7jeiz21hg0.png)

## 5.2 react-Redux两大类组件

1. UI组件
   1）只负责UI的呈现，不带有任何业务逻辑
   2）通过props接收数据(一般数据和函数)
   3）不使用Redux中的任何API
   4）一般保存在component文件夹中

2. 容器组件
   1）负责数据和业务逻辑，不负责UI的呈现，负责和redux通信，将结果交给UI组件
   2）使用Redux的API
   3）一般保存在container文件夹中

3. 一个组件要和redux打交道要经过哪几步？
   1）定义好UI组件 ——不暴露
   2）引入connect生成要给容器组件，并暴露，写法如下
   ```js
   connect(state =>({key:value}),//映射状态
           {key:xxxAction}  //映射操作状态的方法
          )(UI组件)
   ```
   3）在UI组件中通过this.props.xxx读取和操作状态

## 5.3 相关API

1. Provider：让所有的组件都得到state数据

   ```js
       <Provider store={store}>
           <App/>
       </Provider>,document.getElementById('root'))
   
   ```

   

2. connect：用于包装UI组件生成容器组件

   ```js
   import { connect } from 'react-redux'
     connect(
       mapStateToprops,//映射状态，返回值是一个对象
       mapDispatchToProps//映射操作状态的方法，返回值是一个对象
     )(Counter)
   ```

   

3. mapStateToprops：将外部的数据（即state对象）转换为UI组件的标签组件

   1）mapStateToProps函数返回的是一个对象
   2）返回对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件的props的value
    3）mapStateToProps用于传递状态

   ```js
   const mapStateToprops = function (state) {
     return {
       value: state
     }
   }
   ```

4. mapDispatchToProps：将分发action的函数转换为UI组件的标签属性

    1）mapDispatchToProps函数返回的是一个对象
    2）返回对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件的props的value
    3）mapDispatchToProps用于传递操作对象的方法

   备注：mapDispatchToProps，也可以是一个对象

5. combindeReducers：用于合并多个reducer，使其可以数据共享，合并后的总状态是一个对象！！！
   ```js
   //引入combineReducer， 用于整合多个reducer
   import {combineReducers} from 'redux';
   //引入为Count组件服务的reducer
   import count from './count';
   //引入为Person组件服务的reducer
   import persons from './person';
   //汇总所有的reducer变为一个总的reducer
   export default  combineReducers({
       count,
       persons
   })
   
   ```

   注意：交给store的是总reducer，最后注意在组件中取出状态的时候，记得“取到位”，要明确到是哪个状态（state.xxx）。


# 6 redux异步编程

正常情况下我们必须将网络请求的异步代码放到组件的生命周期中来完成；事实上，网络请求到的数据也属于我们状态管理的一部分，更好的一种方式应该是将其也交给redux来管理；

那么在redux中如何可以进行异步的操作呢？
答案就是使用中间件（Middleware）。

官网推荐的网络请求的中间件是使用 redux-thunk；

## 6.1 理解

1. redux默认是不能进行异步处理的,

2. 某些时候应用中需要在==redux中执行异步任务==(ajax, 定时器)

```js
//异步的action ，返回值为函数,异步action中一般都会调用同步action，异步action不是必须要用的
export const incrementAsync = (data,time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(increment(data))
        }, time);
    }
    
}
```

## 6.2 说明

   1. 何时用：延迟的动作不想交给组件自身，想交给action

   2. 何时需要异步action：想要对状态进行操作，但是具体的数据靠异步任务返回

   3. 具体编码：

      1）yarn add redux-thunk，并配置在store中

      ```js
      export default createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)))
      ```

      2）创建action的函数不再返回一般对象，而是一个函数，该函数中写异步任务。

      3）异步任务有结果后，分发一个同步的action去真正操作数据。

4. 备注：异步action不是必须要写的，完全可以自己等待异步任务的结果了再去分发同步action。

## 6.3 redux-thunk

redux-thunk是如何做到让我们可以发送异步的请求呢？

我们知道，默认情况下的dispatch(action)，action需要是一个JavaScript的对象； redux-thunk可以让dispatch(action函数)，action可以是一个函数；该函数会被调用，并且会传给这个函数一个dispatch函数和getState函数；
- dispatch函数用于我们之后再次派发action；
- getState函数考虑到我们之后的一些操作需要依赖原来的状态，用于让我们可以获取之前的一些状态；

#### 4.3.1 使用redux-thunk

dispatch默认不能派发函数，只能派发对象，需要使用redux-thunk插件来让dispatch派发函数


安装redux-thunk
```js
npm install redux-thunk
```

使用：
```js
// redux-devtools
import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import reducer from "./reducer"
  
// 正常情况下 store.dispatch(object)
// 想要派发函数 store.dispatch(function)

// redux-devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true}) || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
export default store
```

# 7 redux调试工具

redux可以方便的让我们对状态进行跟踪和调试，那么如何做到呢？
redux官网为我们提供了redux-devtools的工具；利用这个工具，我们可以知道每次状态是如何被修改的，修改前后的状态变化等等；

## 使用

第一步：在对应的浏览器中安装相关的插件（比如Chrome浏览器扩展商店中搜索Redux DevTools即可）；
第二步：在redux中继承devtools的中间件；
```js
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true}) || compose;
```

# 8 Redux Toolkit

Redux Toolkit 是官方推荐的编写 Redux 逻辑的方法。
之前redux的编写逻辑过于的繁琐和麻烦。 并且代码通常分拆在多个文件中（虽然也可以放到一个文件管理，但是代码量过多，不利于管理）；Redux Toolkit包旨在成为编写Redux逻辑的标准方式，从而解决上面提到的问题；在很多地方为了称呼方便，也将之称为“RTK”；

安装：
```js
npm install @reduxjs/toolkit react-redux
```

Redux Toolkit的核心API主要是如下几个：
- configureStore：包装createStore以提供简化的配置选项和良好的默认值。它可以自动组合你的 slice reducer，添加你提供 的任何 Redux 中间件，redux-thunk默认包含，并启用 Redux DevTools Extension。
- createSlice：接受reducer函数的对象、切片名称和初始状态值，并自动生成切片reducer，并带有相应的actions。
- createAsyncThunk: 接受一个动作类型字符串和一个返回承诺的函数，并生成一个pending/fulfilled/rejected基于该承诺分 派动作类型的 thunk

## createSlice

createSlice主要包含如下几个参数：
- name：用户标记slice的名词  在之后的redux-devtool中会显示对应的名词； 
- initialState：初始化值  第一次初始化时的值； 
- reducers：相当于之前的reducer函数  对象类型，并且可以添加很多的函数；  函数类似于redux原来reducer中的一个case语句； 
   函数的参数：  参数一：state  参数二：调用这个action时，传递的action参数； 
- createSlice返回值是一个对象，包含所有的actions；

## configureStore

configureStore用于创建store对象，常见参数如下： 
- reducer，将slice中的reducer可以组成一个对象传入此处； 
- middleware：可以使用参数，传入其他的中间件
- devTools：是否配置devTools工具，默认为true；

## Redux Toolkit的异步操作：createAsyncThunk

在之前的开发中，我们通过redux-thunk中间件让dispatch中可以进行异步操作。Redux Toolkit默认已经给我们集成了Thunk相关的功能：createAsyncThunk

当createAsyncThunk创建出来的action被dispatch时，会存在三种状态： 
- pending：action被发出，但是还没有最终的结果； 
- fulfilled：获取到最终的结果（有返回值的结果）； 
- rejected：执行过程中有错误或者抛出了异常；
我们可以在createSlice的entraReducer中监听这些结果，extraReducer还可以传入一个函数，函数接受一个builder参数。


## Redux Toolkit的数据不可变性

在React开发中，我们总是会强调数据的不可变性：无论是类组件中的state，还是redux中管理的state；
事实上在整个JavaScript编码过程中，数据的不可变性都是非常重要的；
所以在前面我们经常会进行浅拷贝来完成某些操作，但是浅拷贝事实上也是存在问题的：比如过大的对象，进行浅拷贝也会造成性能的浪费；比如浅拷贝后的对象，在深层改变时，依然会对之前的对象产生影响；
事实上Redux Toolkit底层使用了immerjs的一个库来保证数据的不可变性。

参考immutable-js库的底层原理和使用方法：  https://mp.weixin.qq.com/s/hfeCDCcodBCGS5GpedxCGg 
为了节约内存，又出现了一个新的算法：Persistent Data Structure（持久化数据结构或一致性 数据结构）； 用一种数据结构来保存数据；当数据被修改时，会返回一个对象，但是新的对象会尽可能的利用之前的数据结构而不会 对内存造成浪费；

## 打印日志需求

前面我们已经提过，中间件的目的是在redux中插入一些自己的操作：比如我们现在有一个需求，在dispatch之前，打印一下本次的action对象，dispatch完成之后可以打印一下最新的store state；也就是我们需要将对应的代码插入到redux的某部分，让之后所有的dispatch都可以包含这样的操作；
如果没有中间件，我们是否可以实现类似的代码呢？ 可以在派发的前后进行相关的打印。 但是这种方式缺陷非常明显：
首先，每一次的dispatch操作，我们都需要在前面加上这样的逻辑代码；
其次，存在大量重复的代码，会非常麻烦和臃肿；

是否有一种更优雅的方式来处理这样的相同逻辑呢？我们可以将代码封装到一个独立的函数中

但是这样的代码有一个非常大的缺陷： 调用者（使用者）在使用我的dispatch时，必须使用我另外封装的一个函数dispatchAndLog；显然，对于调用者来说，很难记住这样的API，更加习惯的方式是直接调用dispatch；

事实上，我们可以利用一个hack一点的技术：Monkey Patching，利用它可以修改原有的程序逻辑；我们对代码进行如下的修改：

这样就意味着我们已经直接修改了dispatch的调用过程； 在调用dispatch的过程中，真正调用的函数其实是dispatchAndLog；当然，我们可以将它封装到一个模块中，只要调用这个模块中的函数，就可以对store进行这样的处理：

## thunk需求

redux-thunk的作用：
我们知道redux中利用一个中间件redux-thunk可以让我们的dispatch不再只是处理对象，并且可以处理函数；
那么redux-thunk中的基本实现过程是怎么样的呢？事实上非常的简单。

我们又对dispatch进行转换，这个dispatch会判断传入的

## 合并中间件

单个调用某个函数来合并中间件并不是特别的方便，我们可以封装一个函数来实现所有的中间件合并：

# React中的state如何管理

方式一：组件中自己的state管理； 
方式二：Context数据的共享状态； 
方式三：Redux管理应用状态；

建议：
UI相关的组件内部可以维护的状态，在组件内部自己来维护；
大部分需要共享的状态，都交给redux来管理和维护；
从服务器请求的数据（包括请求的操作），交给redux来维护；