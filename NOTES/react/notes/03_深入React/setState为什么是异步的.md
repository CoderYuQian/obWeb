

参考链接  [https://](https://github.com/facebook/react/issues/11527)[github.com](https://github.com/facebook/react/issues/11527)[/](https://github.com/facebook/react/issues/11527)[facebook](https://github.com/facebook/react/issues/11527)[/react/issues/11527#issuecomment-360199710](https://github.com/facebook/react/issues/11527)[；](https://github.com/facebook/react/issues/11527)


总结：

setState设计为异步，可以显著的提升性能；
如果每次调用 setState都进行一次更新，那么意味着render函数会被频繁调用，界面重新渲染，这样效率是很低的；最好的办法应该是获取到多个更新，之后进行批量更新；

如果同步更新了state，但是还没有执行render函数，那么state和props不能保持同步；
state和props不能保持一致性，会在开发中产生很多的问题；

获取异步的结果：

方式一：setState的回调
setState接受两个参数：第二个参数是一个回调函数，这个回调函数会在更新后会执行；
格式如下：setState(partialState, callback)

方式二：
在生命周期函数：

React18之前：
在组件生命周期或React合成事件中，setState是异步；
在setTimeout或者原生dom事件中，setState是同步；

React18之后：
默认所有的操作都被放到了批处理中（异步处理）。如果希望代码可以同步会拿到，则需要执行特殊的flushSync操作：
