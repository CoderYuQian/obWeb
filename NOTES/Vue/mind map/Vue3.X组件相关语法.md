# Vue3.X组件相关语法

## 基本概念：组件的基本给概念:就是把一个大的功能，拆分成一个个子组件。组件是页面中的一部分。

## 全局组件

### 特点：全局组件只要定义，处处可以使用，性能不高，但是使用起来简单。

### 组件具备复用性，在一个页面里，可以使用多次。

### 定义方法：app.component('组件名'，{})

## 局部组件

### 定义局部组件： const Counter={...}，以变量的形式定义局部组件, 使用时需要进行注册。

### 局部组件的使用需要进行注册：例如在父组件里：components:{xxx:xxx}

### PS：为了和普通变量区分，建议首字母进行大写。

## 父子组件传值

### 父组件中-属性传值

- 子组件中-props接收

### 校验

- 校验方法：props;{content:String}  校验字符串
- 可校验类型

	- String
	- Boolean
	- Array
	- Object
	- Function
	- Symbol

- 非空校验

	- required:true

- 默认值

	- default: xxx

- validator方法校验

	- validator:function(value){return value<1000}  参数必须小于1000

## 单项数据流

### 基本概念

- 子组件可以使用父组件传递过来的数据，但是绝对不能修改传递过来的数据。

### Non-prop属性

- 父组件向子组件传值，但子组件并部接受，这种叫做Non-prop属性。这时候的属性会放到子组件最外层的标签上面。
- inheritAttrs:false

	- 不展示属性

- v-bind="$attrs"

	- 绑定传递过来的属性
	- <div v-bind="$attrs">xxx</div>

- this.$attrs

	- 在子组件中用程序的方法获取父组件传递过来的属性

### this.$emit('jspang','参数')方法

- 子组件向父组件传递方法，从而改变父组件里的变量
- <div @jspang="handleXxx" >xxx</div>

### emits:['aaa','bbb']

- 如果向父组件传递的方法很多，可以在这里醒目标识出来。

## slot插槽

### 概念：在调用子组件时，使用两个标签(例如：<myComp><div></div></myComp>),并在中间插入其它HTML标签的形式。然后在子组件中，使用`<slot></slot>`接收，这种就叫做插槽。

### 基础语法：

- 父组件

	- <myComp><div></div></myComp>

- 子组件

	- <slot></slot>

- 默认值

	- <slott>default value</solt>

### 具名插槽

- 概念：一个组件里，可以设置多个插槽，然后在父组件里可以写多个<template>来填充这些插槽
- 基础语法

	- 父组件

		- 基础写法：<template v-slot:header>
		- 简单写法:<template #header>

	- 子组件

		- <slot name="header">

### 作用域插槽

- 当子组件的具体标签输出方式，要有父组件决定时，可以使用作用域插槽。

## 动态组件

### 概念：根据数据的编号，结合compoent 这个标签，来随时动态切换组件的显示

### 基础语法：<component :is="xxxx"  />

### 保持状态：<keep-alive></keep-alive>

- 经常和动态组件一起使用

## 异步组件

### 基础语法：Vue.defineAsyncComponent(  )

### ES6异步方法：Promise((resolve,reject)=>{})

### 概念：是异步执行某些组件的逻辑，这叫做异步组件

*XMind: ZEN - Trial Version*