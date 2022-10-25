
# 1 为什么要使用React
1. **开发迅速**。React组件化的特性使得React可以在项目中大量复用封装好的组件，提高代码的复用率，减少了重复写相同代码的繁琐而无聊的工作

> - 原生的JavaScript操作DOM繁琐，效率低（DOM-API操作UI）
> - 使用JavaScript，包括jQuery直接操作DOM，浏览器会进行大量的重绘和重排（虽然jQuery简化了操作DOM的步骤，但依然效率低下）
> - 原生的JavaScript没有组件化编码方案，代码复用率低

2. **生态相对完善**。React 起源于 Facebook 的内部项目，具有相对稳定的维护，周边生态相对完善，像各种的UI库，路由库等，可以在更少的时间内完成更多的工作。
3. **有强大的开源社区**。开源项目的社区非常重要，在社区开发者的贡献下会让一些开源项目变得越来越好，项目的issue的解决速度也会得到提升，同时还会提供大量的周边技术工具和技术博客。

# 2 React的定义
React的定义：用于==构建用户界面==的==JavaScript库==。
**关键字**：
1. **构建用户界面**:说明React专注于视图的构建，既不是一个请求库，也不是一个打包工具，而是主要提供UI层面的解决方案。
2. **JavaScript库**：这说明React并不是一个框架，并不能解决项目中的所有问题，为了在项目中使用它，需要结合其他的库，例如Redux/React-router等来协助提供完整的解决方案。在这些周边生态的配合下才能组合成一个框架
> 换句话来说，React所做的有三步
>
> 1. 发送请求获得数据
> 2. 处理数据（过滤，整理格式等）
> 3. 操作DOM呈现页面
>
> 也就是说React也可以定义为一个将数据渲染为HTML视图的开源JavaScript库。

# 3 React的三大特性
1. **声明式编程**：
>命令式编程 VS 声明式编程：<br>
>
>简单来说，命令式编程就是通过代码来告诉计算机去做什么。<br>
>
>而声明式编程是通过代码来告诉计算机你想要做什么，让计算机想出如何去做。<br>
>
>举个生活中的例子就是：
>**命令式编程**：我想喝一个冰可乐，然后我就会对身边的XXX说：“XXX，你去厨房，打开冰箱，拿出一瓶冰可乐，打开之后送过来给我。”
>**声明式编程**：我想喝一个冰可乐，然后我就会对身边的XXX说：“XXX，我想喝冰可乐。”而具体他是怎么拿到的冰可乐，怎么送过来的，是下楼买的还是在冰箱里拿的，我并不关心，我只关心我喝冰可乐的需求是否得到了满足。<br>
>
>用代码来举个例子：
>如果我要在界面上展示一个按钮，并且点击按钮后会改变该按钮的class。<br>
>用DOM编程写的代码就是命令式编程：首先你要指挥浏览器，第一步先要找到id为container的节点，然后创建一个button element，接着给这个button添加一个class name，然后添加一个点击事件，最后将button添加到container节点里。这整个过程每一步操作都是命令式的，一步一步告诉浏览器要做什么。

```javascript
const container = document. getElementById ( "container" );
const btn = document.createElement ("button");

btn.className = "btn red " ;
btn.textContent = "Demo" ;

btn.onclick = function ( ) {
    if ( this.classList.contains ( "red" ) ) {
		this.classList.remove( "red" );
		this.classList.add ( "blue" );
	}else {
	this.classList.remove( "blue" );
	this.classList.add ( "red" );
	}
};
container.appendChild( btn);
```
>而要实现相同功能，采用声明式编程的React就简单得多了。
>首先我们定义一个Button组件，在render函数里通过返回一个类似HTML的数据结构，告诉React我要渲染一个Button，它是id为container的子节点。Button上的ClassName是动态变化的，当点击按钮时class要改变，这样就可以了。至于render什么时候被执行，是如何渲染到页面上的，点击按钮之后classname是如何更新的，这些都不需要你关心，你只需要告诉React你希望当前的UI应该是一个什么样的状态就可以了。
```javascript
class Button extends React. Component {
    state = { color: "red" };
    handleChange =()=> {
        const color = this.state.color == "red" ? "blue" : "red" ;this.setState({ color });
    };
    render( ) {
        return (
        <div id="container">
            <button
                className={ `btn ${this.state.color}` }
                onclick={this.handleChange}
            >
                Demo
            </button>
        </div>
     );
    }
}
```

2. **组件化**：React提供了一种全新的语法扩展，JSX。JSX创造性地将渲染逻辑和UI逻辑结合在了一起，而这个结合体在React中就被称为组件。一个页面由多个组件组成，甚至整个应用都可以视为一个组件，只不过是最大的组件。组件可以层层嵌套，一个组件可以由多个组件组成，一个大的组件由很多个小组件组成，这些小组件也有可能由更小的组件组成。同一个组件可能会被使用在不同的地方。<br>
组件化的出现大幅度地提升了代码地复用率，同时也改变了前端开发人员的一个编程思维
3. **一次学会，随处编写**：这句话的意思不是学会了想写什么就可以写什么，也不是说写一次想在哪里跑就在哪里跑，而是说学会后可以在很多地方使用React的语法来写代码，比如配合React DOM来编写web端的页面，配合React Native来写手机客户端APP，配合React 360开发VR界面等。
<br>React的灵活性是由于它自身的定位决定的。React是一个用于构建用户界面的JS库，对于React来说，这里的用户界面是一个抽象的虚拟的用户界面，其实就是一个描述页面状态的数据结构。web页面，移动客户端页面，VR界面都是用户界面，只要配合相应的渲染器就能在不同的平台中展示正确的UI界面。
<br>通俗来说，我们可以把React的执行结果想象成一个视频文件数据，在不同的播放器设备，我们通过转换器将视频编译成不同的格式来让他们在不同的播放器上正常地播放。所以在写web端React时我们要额外引入React DOM来做渲染。

> 此外，React使用虚拟DOM+优秀的Diffing算法，尽量减少与真实DOM的交互，最小化页面重绘
