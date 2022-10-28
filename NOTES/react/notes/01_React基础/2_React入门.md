
# React入门

## 1 第一个react程序

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hello React</title>
</head>

<body>
  <div id="root"></div>
  <div id="app"></div>
  <!-- 添加依赖 -->
  <!-- 依赖三个包 -->
  <!-- CDN引入 注意引入的顺序-->
  <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  <!-- babel -->
  <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  <!-- 下载引入 -->
  <!-- npm下载引入(脚手架) -->
  <script type="text/babel">
    // 编写React代码(jsx语法)
    // jsx语法 -> 普通的JavaScript代码 -> babel
    
    // 渲染Hello World
    // React18之前: ReactDOM.render
    // ReactDOM.render(<h2>Hello World</h2>, document.querySelector("#root"))

    // React18之后:
    const root = ReactDOM.createRoot(document.querySelector("#root"))
    root.render(<h2>Hello World</h2>)
    
    // const app = ReactDOM.createRoot(document.querySelector("#app"))
    // app.render(<h2>你好啊, 李银河</h2>)
    
  </script>
</body>
</html>
```

## 2 虚拟DOM的创建

1. 创建虚拟DOM的两种方式

   - 纯JS方式（一般不用,过于繁琐）
   - JSX方式（简单方便，最终由babel翻译成js的形式，与用js写的结果一样）

2. 虚拟DOM和真实DOM

   - React提供一些API来创建一种“特别”的==一般js对象==

     > ```javascript
     > const VDOM = React.createElement('xx',{id:'xx'},'xx')///依次为标签名，标签属性和标签内容
     > ```

     上面创建的就是一个简单的虚拟DOM对象

     ![image-20210424164734063](https://gitee.com/the-circle-of-ignorance/images/raw/master/images%5Creact/image-20210424164734063.png)

     ![image-20210424164842135](https://i.loli.net/2021/04/25/qwd6egtIJMapLmA.png)

   - 我们编码时基本只需要操作react的虚拟DOM相关数据，react就会转换为真实的DOM

   >关于虚拟DOM总结：
   >
   >1. 本质是Object类型的对象（一般对象）
   >2. 虚拟DOM比较“轻”，真实DOM比较“重”，因为虚拟DOM是React内部在用，无需真实DOM上那么多的属性
   >3. 虚拟DOM对象最终都会被React转换为真实DOM，呈现在页面上
   
## 3 JSX

> 链接：[JSX基本语法规则](https://www.runoob.com/react/react-jsx.html)

>1. 全称: JavaScript XML
>
>2. react定义的一种类似于XML的JS扩展语法: JS + XML，本质上还是JavaScript
>
>3. 是**React.createElement(component, props, ...children)** 方法的语法糖
>
>4. 作用：用来简化创建虚拟DOM
>
>  - 写法：var ele =\<h1\>Hello JSX!\</h1\>
>  - 它不是字符串（不要加引号），也不是HTML/XML标签
>  - 它最终产生的就是一个js对象
>
>5. 标签名任意：HTML标签或其他标签
>
>6. 标签属性随意：HTML标签属性或其它
>
>7. 基本语法规则
>
>  - 标签首字母
>
>    ​    	（1）若小写字母开头，则将该标签转为HTML中同名元素，若HTML中无该标签对应的同名元素，则报错。
>
>    ​		 （2）若大写字母开头，则react就去渲染对用的组件，若组件没有定义，则报错
>
>  - 标签中的==js表达式==必须用{ }包含
>
>    > 一定要区分：【JS语句（代码）】与【js表达式】
>    >
>    > 1. 表达式：一个表达式会产生一个值，可以放在任何一个需要值的地方
>    >
>    >    下面这些都是表达式：
>    >
>    >    - a
>    >    - a+b
>    >    - demo(1) //函数调用表达式
>    >    - arr.map()
>    >    - function test() { }
>    >
>    > 2. 语句（代码）：不产生值
>    >
>    >    ​	下面这些都是语句（代码）：
>    >
>    >    - if(){}
>    >    - for(){}
>    >    - switch(){case:xxx}
>
>  - 注释需要写在花括号{}中
>
>  - 样式的类名指定不要写class，要写className
>
>  - 内联样式要用style={{key:value}}的形式写第一个{}表示里面是一个js表达式，第二个{}表示里面是一个键值对，里面要写小驼峰的形式， 比如font-size要写成fontSize
>
>    >\<span style={{color:'#e0e0e0', fontSize:18} }\> myData\</span\>
>
>  - 虚拟DOM只能有一个根标签，有多个标签时，可用一个div包起来
>
>  - 标签必须闭合
>
>8.   babel.js的作用
>
>  - 浏览器不能直接解析JSX代码, 需要babel转译为纯JS的代码才能运行
>  - 只要用了JSX，都要加上type="text/babel", 声明需要babel来处理

## 4 模块与组件，模块化与组件化的理解

> 1. 模块
>
> - 理解：向外提供特定功能的js程序，一般就是一个js文件
> - 为什么要拆成模块：因为随着业务逻辑增加，代码越来越多且复杂
> - 作用：复用js代码，简化js代码的编写，提高js运行效率

> 2. 组件
>
> - 理解：用来实现局部功能的代码和资源的集合（html/css/js/image等等）
> - 为什么一个界面的功能很复杂，不可能写成一整块，要分成一块块写，然后拼起来
> - 作用：复用编码，简化项目编码，提高运行效率

>3. 模块化
>
>   当一个应用的js都是以模块来编写，这个应用就是一个模块化的应用
>
>4. 组件化
>
>   当应用是以多组件的方式实现，这个应用就是一个组件化的应用

## 5 React中的事件处理

1. 通过onXxx属性指定处理函数（注意大小写，与原生的js区分开）

   ​a)   React使用的是自定义(合成)事件, 而不是使用的原生DOM事件  ——目的是为了更好的兼容性
   ​b)   React中的事件是通过事件委托方式处理的(委托给组件最外层的元素)  ——目的是为了高效

2.  通过event.target得到发生事件的DOM元素对象 ——为了避免过度使用ref

   不要过度使用ref，当发生事件的DOM正好是要操作的DOM元素时可以用event.target的形式