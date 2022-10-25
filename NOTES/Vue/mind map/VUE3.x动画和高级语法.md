# VUE3.x动画和高级语法

## Mixin 混入

### 优先级

- 数据和方法：组件data ，methods 优先级高于mixin data，methods优先级
- 生命周期：生命周期函数，先执行mixin里面的，再执行组件里的
- 自定义的属性，组件中的属性优先级高于mixin属性的优先级

### 局部Mixin

- mixins:[myMixin]  , myMixin是一个自定义组件

### 全局Mixin

- app.mixin(  )

### PS：Vue3中尽量避免使用Mixin，因为可以使用CompositionAPI来代替，可维护性更高。

## directive自定义指令

### 全局自定义指令

- 定义方法：app.directive('focus',{mounted(el){el.focus()}}) 
- 使用方法：<input v-focus  />

### 局部自定义指令

- 局部指令需要在父组件注册后才可以使用

### 生命周期函数

- directive也是由生命周期的，所以声明周期函数同样起作用。
- 生命周期函数接受两个参数
绑定形式：v-pos:abc="hello"

	- el：DOM元素
	- binding： 传递的属性值
	- 获取hello方法：binding.value
	- 获取abc方法：binding.tag

## Teleport传送门

### 通过传送门，可以把VUE里的标签，直接传送到VUE应用之外的顶层标签里去。比如直接传送到<body>标签之下。

### 基本语法：<teleport to="body">......</teleport>

## Plugin-插件

### plugin插件，目的是把通用性的功能封装起来。

### 创建插件固定语法： const myPlugin =  { install(app ,  options){}}

- app：整个Vue的实例，里边有很多东西
- options  是传递内容

### 使用插件写法：app.use(myPlugin,{name:'jspang'})

- myPlugin：插件名字
- {name:'jspang'} : 传递的参数

*XMind: ZEN - Trial Version*