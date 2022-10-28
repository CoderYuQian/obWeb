
## 1 基本理解与使用

React的组件相对于Vue更加的灵活和多样，按照不同的方式可以分成很多类组件：
- 根据组件的定义方式，可以分为：函数组件(Functional Component )和类组件(Class Component)；
- 根据组件内部是否有状态需要维护，可以分成：无状态组件(Stateless Component )和有状态组件(Stateful Component)；
- 根据组件的不同职责，可以分成：展示型组件(Presentational Component)和容器型组件(Container Component)；

这些概念有很多重叠，但是他们最主要是关注数据逻辑和UI展示的分离：
函数组件、无状态组件、展示型组件主要关注UI的展示；
类组件、有状态组件、容器型组件主要关注数据逻辑；

以定义方式来分类：

1. 函数式组件：用函数定义的组件，适用于简单组件的定义（没有组件实例，this=undefined）；没有生命周期，也会被更新并挂载，但是没有生命周期函数；也没有内部状态（state）
```javascript
// 函数式组件
function App(props) {
  // 返回值: 和类组件中render函数返回的是一致
  return <h1>App Functional Component</h1>
}
export default App
```
​	注意：
​ 	(1)组件名必须首字母大写
​ 	(2)虚拟DOM元素只能有一个根元素
​ 	(3)虚拟DOM元素必须有结束标签



2. 类式组件：用类定义的组件，适用于复杂组件的定义（有实例）
（在ES6之前，可以通过create-react-class 模块来定义类组件，但是目前官网建议我们使用ES6的class类定义）
```JavaScript
import React from "react";
// 1.类组件
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      message: "App Component"
    }
  }
  render() {
    // const { message } = this.state
    // 1.react元素: 通过jsx编写的代码就会被编译成React.createElement, 所以返回的就是一个React元素
    // return <h2>{message}</h2>

    // 2.数组
    // return ["abc", "cba", "nba"]
    // return [
    //   <h1>h1元素</h1>,
    //   <h2>h2元素</h2>,
    //   <div>哈哈哈</div>
    // ]

    // 3.字符串/数字类型
    // return "Hello World"
    return true
  }
}
export default App;
```

注意：类组件的定义有如下要求：
- 组件的名称是大写字符开头（无论类组件还是函数组件）
- 类组件需要继承自 React.Component
- 类组件必须实现render函数

> 简单组件：无状态的组件
>
> 复杂组件：有状态(state)的组件

> 状态：举例子说
>
> - 人是有状态的，比如今天的精神如何，人的状态会影响人的行为
> - 组件也是有状态的，组件的状态驱动页面，数据放在状态里
>

>类组件中：
>- constructor是可选的，我们通常在constructor中初始化一些数据；
>- this.state中维护的就是我们组件内部的数据；
>- render() 方法是 class 组件中唯一必须实现的方法；

>类组件中render函数的返回值：
>当 render 被调用时，它会检查 this.props 和 this.state 的变化并返回以下类型之一：
>- React 元素：
>  通常通过 JSX 创建，例如，<div /> 会被 React 渲染为 DOM 节点，<MyComponent /> 会被 React 渲染为自定义组件；无论是 <div /> 还是 <MyComponent /> 均为 React 元素。
>- 数组或 fragments：使得 render 方法可以返回多个元素。
>- Portals：可以渲染子节点到不同的 DOM 子树中
>- 字符串或数值类型：它们在 DOM 中会被渲染为文本节点
>- 布尔类型或 null：什么都不渲染。


## 2 组件实例的三大核心属性

### 2.1 state

1. 理解：
- state是组件对象最重要的属性, 值是==对象(==可以包含多个key-value的组合),用{}包裹
-  组件被称为"状态机", 通过更新组件的state来更新对应的页面显示(重新渲染组件)

2. 注意：
- 组件中render方法中的this为组件实例对象
- 组件自定义的方法中this为undefined(作为事件的回调使用)，如何解决？
  - a)   强制绑定this: 通过函数对象的bind()
  - b)   箭头函数【要写成赋值语句+箭头函数的形式，类里面不支持function(){   }这种形式】
-  状态数据，不能直接修改或更新，要用setState

###  2.2 props

1. 理解：
-  每个组件对象都会有props(properties的简写)属性
-  组件标签的所有属性都保存在props中

2. 作用
- 通过标签属性从组件外向组件内传递变化的数据
- 注意: 组件内部不要修改props数据

3. 编码操作
-  内部读取某个属性值： this.props.name
-  对props中的属性值进行类型限制和必要性限制
  - 第一种方式（React v15.5 开始已弃用）：
    ```javascript
    Person.propTypes = {
     name: React.PropTypes.string.isRequired,
     age: React.PropTypes.number
    }
    ```
  - 第二种方式（新）：使用prop-types库进限制（需要引入prop-types库）
    ```javascript
    Person.propTypes = {
      name: PropTypes.string.isRequired,
      age: PropTypes.number. 
    }
    ```
- 扩展属性：将对象的所有属性通过props传递：<**Person** {...person}/>
-   默认属性值：
  ```javascript
  Person.defaultProps = {
    age: 18,
    sex:'男'
  }
  ```
- 组件类的构造函数              
  ```javascript
  constructor(props){
    super(props)
    console.log(props)//打印所有属性
  }
  ```

###  2.3 ref

1. 理解：组件内的标签可以定义ref属性来标识自己
2. 编码
- 字符串形式的ref：（已经不被react推荐使用）[官方说明](https://zh-hans.reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs)
  ```react
  <input ref = 'input1'/>
  ```
- 回调形式的ref
  ```react
  <input ref={(c)=>{this.input1 = c}}
  ```
-  createRef创建ref容器
  ```react
  myRef = React.createRef() ;
  <input ref={this.myRef}/>
  ```
  
深入：[[ref获取DOM和组件]]

## 3 组件的生命周期

### 3.1 认识生命周期

很多的事物都有从创建到销毁的整个过程，这个过程称之为是生命周期。React组件也有自己的生命周期，了解组件的生命周期可以让我们在最合适的地方完成自己想要的功能；

生命周期和生命周期函数的关系：
生命周期是一个抽象的概念，在生命周期的整个过程，分成了很多个阶段；React内部为了告诉我们当前处于哪些阶段，会对我们组件内部实现的某些函数进行回调，这些函数就是生命周期函数。一般谈及React生命周期时，主要谈的类的生命周期，因为函数式组件是没有生命周期函数的；（可以通过hooks来模拟一些生命周期的回调）

### 3.2 理解

1. 组件从创建到死亡它会经历一些特定的阶段。
2. React组件中包含一系列勾子函数(生命周期回调函数), 会在特定的时刻调用。
3. 我们在定义组件时，会在特定的生命周期回调函数中，做特定的工作。

### 3.3 生命周期流程图

![](https://cdn.jsdelivr.net/gh/Ignorant-Cirle/images@master/react-study/react生命周期(新).348vorlsgm80.png)

生命周期是一个抽象的概念，在生命周期的整个过程，分成了很多个阶段；
- 比如装载阶段（Mount），组件第一次在DOM树中被渲染的过程；
- 比如更新过程（Update），组件状态发生变化，重新更新渲染的过程；
- 比如卸载过程（Unmount），组件从DOM树中被移除的过程；

React内部为了告诉我们当前处于哪些阶段，会对我们组件内部实现的某些函数进行回调，这些函数就是生命周期函数：
- 比如实现componentDidMount函数：组件已经挂载到DOM上时，就会回调；
- 比如实现componentDidUpdate函数：组件已经发生了更新时，就会回调；
- 比如实现componentWillUnmount函数：组件即将被移除时，就会回调；
我们可以在这些回调函数中编写自己的逻辑代码，来完成自己的需求功能；

生命周期函数：

1. constructor()
	 如果不初始化 state 或不进行方法绑定，则不需要为 React 组件实现构造函数。
	 constructor中通常只做两件事情：通过给 this.state 赋值对象来初始化内部的state；为事件绑定实例（this）
	 
2. componentDidMount
	 componentDidMount() 会在组件挂载后（插入 DOM 树中）立即调用。
	 依赖于DOM的操作可以在这里进行；
	 在此处发送网络请求就最好的地方；（官方建议）
	 可以在此处添加一些订阅（会在componentWillUnmount取消订阅）；
	 
3. componentDidUpdate
   componentDidUpdate() 会在更新后会被立即调用，首次渲染不会执行此方法。
   当组件更新后，可以在此处对 DOM 进行操作；如果你对更新前后的 props 进行了比较，也可以选择在此处进行网络请求；（例如，当 props 未发生变化时，则不会执行网络请求）。
   
4. componentWillUnmount
   componentWillUnmount() 会在组件卸载及销毁之前直接调用。
   在此方法中执行必要的清理操作；例如，清除 timer，取消网络请求或清除在 componentDidMount() 中创建的订阅等；
   
不常用的生命周期函数：

5. getDerivedStateFromProps：state 的值在任何时候都依赖于 props时使用；该方法返回一个对象来更新state；
   
6. getSnapshotBeforeUpdate：在React更新DOM之前回调的一个函数，可以获取DOM更新前的一些信息（比如说滚动位置）；
   
7. shouldComponentUpdate：该生命周期函数很常用，（通常用于scu性能优化）。

更详细的生命周期相关的内容，可以参考官网：[https://zh-hans.reactjs.org/docs/react-component.html](https://zh-hans.reactjs.org/docs/react-component.html)

### 3.4 重要勾子和即将废弃的勾子

1. 重要勾子
   - render：必须要使用，初始化渲染或更新渲染调用
   -  componentDidMount：一般在这个钩子中做一些初始化的事，例如开启定时器、               													发送网络请求、订阅消息，开启监听, 发送ajax请求等
   - componentWillUnmount：做一些收尾工作, 如: 清理定时器，取消订阅等
2. 即将废弃的勾子
   -   componentWillMount
   -   componentWillReceiveProps
   -   componentWillUpdate

16版本能正常使用，17版本使用会出现警告，下一个大版本需要加上UNSAFE_前缀才能使用，以后可能会被彻底废弃，不建议使用。

## 4 组件通信方式


### 父子组件通信

- **父传子**

父组件在展示子组件，可能会传递一些数据给子组件：
父组件通过 属性=值 的形式来传递给子组件数据；子组件通过 props 参数获取父组件传递过来的数据。

对于传递给子组件的数据，有时候我们可能希望进行验证，特别是对于大型项目来说：
如果你项目中默认继承了Flow或者TypeScript，那么直接就可以进行类型验证；但是，即使我们没有使用Flow或者TypeScript，也可以通过 prop-types 库来进行参数验证。从 React v15.5 开始，React.PropTypes 已移入另一个包中：prop-types 库。

更多的验证方式，比如验证数组，并且数组中包含哪些元素；比如验证对象，并且对象中包含哪些key以及value是什么类型；比如某个原生是必须的，使用 requiredFunc: PropTypes.func.isRequired可以参考官网：[https://zh-hans.reactjs.org/docs/typechecking-with-proptypes.html](https://zh-hans.reactjs.org/docs/typechecking-with-proptypes.html)

如果没有传递，我们希望有默认值呢？
可以使用defaultProps

- **子传父**

某些情况，我们也需要子组件向父组件传递消息：在vue中是通过自定义事件来完成的；在React中同样是通过props传递消息，只是让父组件给子组件传递一个回调函数，在子组件中调用这个函数即可；

完成一个案例：将计数器案例进行拆解；将按钮封装到子组件中：CounterButton；CounterButton发生点击事件，将内容传递到父组件中，修改counter的值；

### 非父子组件通信

非父子组件数据的共享：
在开发中，比较常见的数据传递方式是通过props属性自上而下（由父到子）进行传递。但是对于有一些场景：比如一些数据需要在多个组件中进行共享（地区偏好、UI主题、用户登录状态、用户信息等）。如果我们在顶层的App中定义这些信息，之后一层层传递下去，那么对于一些中间层不需要数据的组件来说，是一种冗余的操作。

一个一层层传递的案例：补充一个小的知识点：[Spread Attributes](https://zh-hans.reactjs.org/docs/jsx-in-depth.html)

#### Context

React提供了一个API：Context；Context 提供了一种在组件之间共享此类值的方式，而不必显式地通过组件树的逐层传递 props；
Context 设计目的是为了共享那些对于一个组件树而言是“全局”的数据，例如当前认证的用户、主题或首选语言；

**理解：**  一种组件间通信的方式，常用于【祖组件】和【后代组件】

**Context相关API：** 
- React.createContext
  创建一个需要共享的Context对象：如果一个组件订阅了Context，那么这个组件会从离自身最近的那个匹配的 Provider 中读取到当前的context值；defaultValue是组件在顶层查找过程中没有找到对应的Provider，那么就使用默认值。
- Context.Provider
  每个 Context 对象都会返回一个 Provider React 组件，它允许消费组件订阅 context 的变化： Provider 接收一个 value 属性，传递给消费组件；一个 Provider 可以和多个消费组件有对应关系；多个 Provider 也可以嵌套使用，里层的会覆盖外层的数据；当 Provider 的 value 值发生变化时，它内部的所有消费组件都会重新渲染；
- Class.contextType
  挂载在 class 上的 contextType 属性会被重赋值为一个由 React.createContext() 创建的 Context 对象：这能让你使用 this.context 来消费最近 Context 上的那个值；你可以在任何生命周期中访问到它，包括 render 函数中；
- Context.Consumer
  这里，React 组件也可以订阅到 context 变更。这能让你在 函数式组件 中完成订阅 context。这里需要 函数作为子元素（function as child）这种做法；这个函数接收当前的 context 值，返回一个 React 节点；
  
**Context的基本使用**

使用Context.Consumer：
1. 当使用value的组件是一个函数式组件时；
2. 当组件中需要使用多个Context时；

1) 创建Context容器对象

   ```js
   const XxxContext = React.createContecxt()
   ```
   
2) 渲染子组件时，外面包裹xxxContext.Provider，通过value属性给后代组件传递数据

   ```jsx
   <xxxContext.Provider value={数据}>
   	子组件
   </xxxContext.Provider>
   ```

3) 后代组件读取数据

   ```jsx
   //第一种方式：仅适用于类组件
   static contextType = xxxContext  //声明接收context
   this.context //读取context中的value数据
   
   //第二种方式：函数组件与类组件都可以
   <xxxContext.Consumer>
       {
       value => { //value 就是 context中value数据
       要显示的内容
   }
   }
   </xxxContext.Consumer>
   ```

注意：在应用开发中一般不用context，一般都用它来封装react插件

#### 事件总线

第三方库：hy-event-bus


## 5 React插槽

React对于需要插槽的情况非常灵活，有两种方案可以实现：
- 组件的children子元素；（通过children实现的方案虽然可行，但是有一个弊端：通过索引值获取传入的元素很容易出错，不能精准的获取传入的原生）
- props属性传递React元素；（通过具体的属性名，可以让我们在传入和获取时更加的精准）

### render props
1. 如何向组件内部动态传入带内容的结构（标签）？
   1）vue中：使用slot技术。也就是通过组件标签体传入结构    \<A\>\<B/\>\<A\>
   2）React 中：
   - 使用children props：通过组件标签体传入结构
   - 使用render props：通过组件标签属性传入结构，而且可以携带数据，一般用render函数属性

2. children props
   ```jsx
   <A>
     <B>xxxx</B>
   </A>
   {this.props.children}
   问题: 如果B组件需要A组件内的数据, ==> 做不到 
   ```

3. render props
   ```jsx
   <A render={(data) => <C data={data}></C>}></A>
   A组件: {this.props.render(内部state数据)}
   C组件: 读取A组件传入的数据显示 {this.props.data} 
   ```

## 6 setState

setState方法是从Component中继承过来的。
开发中我们并不能直接通过修改state的值来让界面发生更新：
因为我们修改了state之后，希望React根据最新的State来重新渲染界面，但是这种方式的修改React并不知道数据发生了变化；React并没有实现类似于Vue2中的Object.defineProperty或者Vue3中的Proxy的方式来监听数据的变化；我们必须通过setState来告知React数据已经发生了变化；

setState更新状态的2中写法
1. setState(stateChange, [callback])------对象式的setState
   - stateChange为状态改变对象(该对象可以体现出状态的更改)
     ```js
     this.setState({count:count+1})
     ```
   - callback是可选的回调函数, 它在状态更新完毕、界面也更新后(render调用后)才被调用

2. setState（updater,[callback]  ------函数式的setState
   ```js
   this.setState((state,props) => {
           return {count:state.count+1}
       //    return {count:props.x+1}
       })
   ```
   - updater为返回stateChange对象的==函数==
   - updater可以接收到state和props
   - callback是可选的回调函数, 它在状态更新完毕、界面也更新后(render调用后)才被调用

3. 总结：
   1）对象式的setState式函数式setState的简写方式（语法糖）
   2）使用原则：(仅建议，非绝对)
   - 如果新状态不依赖于原状态  ===> 使用对象方式
   - 如果新状态依赖于原状态   ===> 使用函数方式
   - 如果需要在setState() 执行后获取最新的状态数据，要在第二个callback函数中读取

4. 备注：setState是同步方法，但是setState引起的React的更新的动作是异步执行,如果需要在setState() 执行后获取最新的状态数据，要在第二个callback函数中读取。

**深入**：[[setState为什么是异步的]]

## 7 组件优化

1. Component的两个问题
   1）只要执行setState()，即使不改变状态数据，组件也会重新render() ==>效率低
   2）只要当前组件重新render()，就会重新render子组件，纵使子组件没有用到父组件的任何数据 ==>效率低

2. 提高效率的做法
   只有当组件的state或者props数据发生变化时才重新render()

3. 原因
   Component 中的shouldComponentUpdate()总是返回true

4. 解决办法：
   1）方法1：
   - 重写shouldComponentUpdate()方法，比较新旧state或props数据，有变化才返回true，否则返回false

   2）方法2：
   - 使用PureComponent
     PureComponent重写了shouldComponentUpdate(), 只有state或props数据有变化才返回true
   - 注意：
     只是进行state和props数据的浅比较，如果只是数据对象内部数据变了，返回false
     不要直接修改state数据，而是要产生新数据
 
   3）项目中一般使用方法2来进行优化

**深入**：[[React性能优化SCU]]


## 7 非受控组件与非受控组件

非受控组件：现用现取（ref）
受控组件：随着输入维护状态为受控组件（onChange ， setState）

深入：[[受控组件与非受控组件]]

## 8 高阶组件

**高阶函数**
高阶函数的维基百科定义：至少满足以下条件之一：
- 接受一个或多个函数作为输入；
- 输出一个函数；
JavaScript中比较常见的filter、map、reduce都是高阶函数。

**高阶组件**
高阶组件：高阶组件的英文是 Higher-Order Components，简称为 HOC；
官方的定义：高阶组件是参数为组件，返回值为新组件的函数；

理解：首先， 高阶组件 本身不是一个组件，而是一个函数；其次，这个函数的参数是一个组件，返回值也是一个组件；

深入：[[高阶组件]]

## 9 Portals

某些情况下，我们希望渲染的内容独立于父组件，甚至是独立于当前挂载到的DOM元素中（默认都是挂载到id为root的DOM 元素上的）。

Portal 提供了一种将子节点渲染到存在于父组件以外的 DOM 节点的优秀的方案：
- 第一个参数（child）是任何可渲染的 React 子元素，例如一个元素，字符串或 fragment；
- 第二个参数（container）是一个 DOM 元素；

通常来讲，当你从组件的 render 方法返回一个元素时，该元素将被挂载到 DOM 节点中离其最近的父节点：然而，有时候将子元素插入到 DOM 节点中的不同位置也是有好处的

## 10 Fragment

1. 使用
   ```jsx
   <Fragment><Fragment>
   <></>
   ```
   但是，如果我们需要在Fragment中添加key，那么就不能使用短语法
   
2. 作用
   Fragment 允许你将子列表分组，而无需向 DOM 添加额外节点；
   可以不用必须有一个真实的DOM根标签了，fragment会在解析是去掉，【为了骗过jsx】

## 11 错误边界

1. 理解：
   错误边界（Error boundary）：用来捕获==后代==组件错误，渲染出备用页面
   使用于生产环境
2. 特点
   只能捕获后代组件==生命周期==产生的错误，不能捕获自己组件产生的错误和其他组件在合成事件、定时器中产生的错误
3. 使用方式：
   getDerivedStateFromError配合componentDidCatch
   ```react
   // 生命周期函数，一旦后台组件报错，就会触发
   static getDerivedStateFromError(error) {
       console.log(error);
       // 在render之前触发
       // 返回新的state
       return {
           hasError: true,
       };
   }
   
   componentDidCatch(error, info) {
       // 统计页面的错误。发送请求发送到后台去
       console.log(error, info);
   }
   ```

## 12 StrictMode

StrictMode 是一个用来突出显示应用程序中潜在问题的工具：与 Fragment 一样，StrictMode 不会渲染任何可见的 UI；它为其后代元素触发额外的检查和警告；严格模式检查仅在开发模式下运行；它们不会影响生产构建；

可以为应用程序的任何部分启用严格模式：不会对 Header 和 Footer 组件运行严格模式检查；但是，ComponentOne 和 ComponentTwo 以及它们的所有后代元素都将进行检查；

### 严格模式检查的是什么

1. 识别不安全的生命周期：
2. 使用过时的ref API
3. 检查意外的副作用  这个组件的constructor会被调用两次； 这是严格模式下故意进行的操作，让你来查看在这里写的一些逻辑代码被调用多次时，是否会产生一些副作用； 在生产环境中，是不会被调用两次的；
4. 使用废弃的findDOMNode方法  在之前的React API中，可以通过findDOMNode来获取DOM，不过已经不推荐使用了，可以自行学习演练一下
5. 检测过时的context API  早期的Context是通过static属性声明Context对象属性，通过getChildContext返回Context对象等方式来使用Context的；  目前这种方式已经不推荐使用


