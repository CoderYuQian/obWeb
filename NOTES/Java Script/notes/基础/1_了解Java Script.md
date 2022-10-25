#JavaScript 

# 编程语言

**计算机语言**：计算机语言（computer language）指用于人与计算机之间通讯的语言，是人与计算机之间传递信息的介质。但 是其概念比通用的编程语言要更广泛。例如，HTML是标记语言，也是计算机语言，但并不是编程语言。

**编程语言**：编程语言（英语：programming language），是用来定义计算机程序的形式语言。它是一种被标准化的交流技巧， 用来向计算机发出指令，一种能够让程序员准确地定义计算机所需要使用数据的计算机语言，并精确地定义在不同情况下所 应当采取的行动。

**编程语言具备的特点：** 数据和数据结构 ，指令及流程控制，引用机制和重用机制，设计哲学。

# JavaScript

**维基百科对JavaScript的定义：** JavaScript（通常缩写为JS）是一种高级的、解释型的编程语言；JavaScript是一门基于原型、头等函数的语言，是一门多范式的语言，它支持面向对象程序设计，指令式编程，以及函数式编 程；

**通俗的说法:**  JavaScript是一门高级编程语言, 是前端开发的重要组成部分。HTML和CSS也是前端开发的重要组成部分, 而JavaScript是前端开发的灵魂。

Stack Overflow的创立者之一的 Jeff Atwood 在2007年提出了著名的**Atwood定律：** Any application that can be written in JavaScript, will eventually be written in JavaScript. （任何可以使用JavaScript来实现的应用都最终都会使用JavaScript实现）。

## JavaScript组成

JavaScript由ECMA Script规范，DOM，BOM组成
ECMAScript是JavaScript的标准，描述了该语言的语法和基本对象。 
JavaScript是ECMAScript的语言层面的实现；除了语言规范之外，JavaScript还需要对页面和浏览器进行各种操作；除了基本实现之外，还包括DOM操作和BOM操作;

## JavaScript引擎

高级的编程语言都是需要转成最终的机器指令来执行的； 事实上我们编写的JavaScript无论交给浏览器或者Node执行，最后都是需要被CPU执行的；但是CPU只认识自己的指令集，实际上是机器语言，才能被CPU所执行；我们需要JavaScript引擎帮助我们将JavaScript代码翻译成CPU指令来执行；

**比较常见的JavaScript引擎：** 
- SpiderMonkey：第一款JavaScript引擎，由Brendan Eich开发（也就是JavaScript作者）；
- Chakra：微软开发，用于IT浏览器；
- JavaScriptCore：WebKit中的JavaScript引擎，Apple公司开发；
- V8：Google开发的强大- JavaScript引擎，也帮助Chrome从众多浏览器中脱颖而出；

**浏览器内核与JS引擎之间的关系**
以WebKit为例，WebKit事实上由两部分组成的： 
- WebCore：负责HTML解析、布局、渲染等等相关的工作；
- JavaScriptCore：解析、执行JavaScript代码；
在小程序中编写的JavaScript代码就是被JSCore执行的；

## 代码规范

[[代码规范.png| JavaScript代码编写规范图]]


```js
 // 1.foo和()之间不需要有空格
    // 2.多参数,后面加上一个空格
    // 3.()和{之间有一个空格
    // 4.{和其他函数定义在同一行中
    function foo(m, n) {

    }

    foo(20, 30)

    if (true) {
    } else {
    }

    for (var i = 0; i < 10; i++) {

    }

  

    // 模板字符串(可以换行)

    var message = `
       哈哈哈哈哈${100}
    `

    // 图里面建议:
    function sum(num1, num2) {
      return num1 + num2
    }
```











