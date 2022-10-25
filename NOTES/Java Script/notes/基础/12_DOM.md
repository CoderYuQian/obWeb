# DOM

## 认识DOM和BOM
前面我们花了很多时间学习JavaScript的基本语法，但是这些基本语法，但是这些语法好像和做网页没有什么关系，和前面学习 的HTML、CSS也没有什么关系呢？
这是因为我们前面学习的部分属于ECMAScript，也就是JavaScript本身的语法部分；除了语法部分之外，我们还需要学习浏览器提供给我们开发者的DOM、BOM相关的API才能对页面、浏览器进行操作；

前面我们学习了一个window的全局对象，window上事实上就包含了这些内容：我们已经学习了JavaScript语法部分的Object、Array、Date等；另外还有DOM、BOM部分；

**DOM：文档对象模型（Document Object Model）简称 DOM，** 将页面所有的内容表示为可以修改的对象；

**BOM：浏览器对象模型（Browser Object Model）简称 BOM，** 由浏览器提供的用于处理文档（document）之外的所有内容的其他对象；比如navigator、location、history等对象；

## 深入理解DOM

浏览器会对我们编写的HTML、CSS进行渲染，同时它又要考虑我们可能会通过JavaScript来对其进行操作：于是浏览器将我们编写在HTML中的每一个元素（Element）都抽象成了一个个对象；所有这些对象都可以通过JavaScript来对其进行访问，那么我们就可以通过JavaScript来操作页面；所以，**我们将这个抽象过程称之为 文档对象模型（Document Object Model）；**

整个文档被抽象到 document 对象中：
比如document.documentElement对应的是html元素；比如document.body对应的是body元素；比如document.head对应的是head元素； 所以学习DOM，就是在学习如何通过JavaScript对文档进行操作的；

## DOM Tree的理解

一个页面不只是有html、head、body元素，也包括很多的子元素：在html结构中，最终会形成一个树结构；在抽象成DOM对象的时候，它们也会形成一个树结构，我们称之为DOM Tree；

## DOM的内容
1. DOM元素之间的关系
2. 获取DOM元素 
3. DOM节点的type、tag、content 
4. DOM节点的attributes、properies 
5. DOM节点的创建、插入、克隆、删除
6. DOM节点的样式、类 
7. DOM元素/window的大小、滚动、坐标

## DOM的继承关系图

DOM相当于是JavaScript和HTML、CSS之间的桥梁，通过浏览器提供给我们的DOM API，我们可以对元素以及其中的内容做任何事情；类型之间有如下的继承关系：

[[assets/images/DOM的关系继承图.png | DOM的关系继承图]]


## document对象

Document节点表示的整个载入的网页，它的实例是全局的document对象：对DOM的所有操作都是从 document 对象开始的；**它是DOM的 入口点，可以从document开始去访问任何节点元素；**

对于最顶层的html、head、body元素，我们可以直接在document对象中获取到：
html元素： = document.documentElement，
body元素： = document.body，
head元素： = document.head，
文档声明： = document.doctype

## 导航

### 节点（Node）之间的导航（navigator）

如果我们获取到一个节点（Node）后，可以根据这个节点去获取其他的节点，我们称之为节点之间的导航。节点之间存在如下的关系：
- 父节点：parentNode
- 前兄弟节点：previousSibling
- 后兄弟节点：nextSibling
- 子节点：childNodes
- 第一个子节点：firstChild
- 第二个子节点：lastChild

### 元素（Element）之间的导航（navigator)

如果我们获取到一个元素（Element）后，可以根据这个元素去获取其他的元素，我们称之为元素之间的导航。节点之间存在如下的关系：
- 父元素：parentElement
- 前兄弟节点：previousElementSibling
- 后兄弟节点：nextElementSibling
- 子节点：children
- 第一个子节点：firstElementChild
- 第二个子节点：lastElementChild

### 表格（table）元素的导航（navigator）

- \<table\>元素支持 (除了上面给出的，之外) 以下这些属性：
	table.rows      \<tr\>元素的集合；
	table.caption/tHead/tFoot      \<caption\>，\<thead\>，\<foot\>；
	table.tBodies      \<tbody\>元素的集合；
- \<thead\>，\<tfoot\>，\<tbody\>元素提供了 rows 属性：
	tbody.rows    表格内部\<tr\>元素的集合
- \<tr\>
	tr.cells     表格内部\<tr\>元素的集合；
	r.sectionRowIndex   在给定\<tr\>中的\<td\>在封闭的 \<thead\>，\<tbody\>，\<tfoot\> 中的位置（索引）；
	tr.rowIndex   在整个表格中\<tr\>的编号（包括表格的所有行）；
- \<th\>，和\<td\>:
  td.cellIndex     在封闭的\<tr\>中单元格的编号。
  
### 表单元素的导航（navigator）
```js
  <body>
  <form action="">
    <input name="account" type="text">
    <input name="password" type="password">
    <input name="hobbies" type="checkbox" checked>
    <select name="fruits">
      <option value="apple">苹果</option>
      <option value="orange">橘子</option>
    </select>
  </form>
  
  <script>
    // 1.获取form
    // var formEl = document.body.firstElementChild
    var formEl = document.forms[0]

    // 2.获取form中的子元素
    var inputEl = formEl.elements.account
    setTimeout(function() {
      console.log(inputEl.value)
    }, 5000)
  </script>
</body>
```

## 获取元素的方法

当元素彼此靠近或者相邻时，DOM 导航属性（navigation property）非常有用。但是，在实际开发中，我们希望可以任意的获取到某一个元素应该如何操作呢？DOM为我们提供了获取元素的方法：
| 方法名              | 搜索方式      | 可以在元素上调用？ | 实时的？ |
| ------------------- | ------------- | ------------------ | -------- |
| querySelector       | CSS-selector  | yes                | no       |
| querySelectorAll    | CSS-selector  | yes                | no       |
| getElementById      | id            | no                 | no       |
| getElementByName    | name          | no                 | yes      |
| getElementByTagName | tag or \'\*\' | yes                | yes      |
|getElementByClassName     |      class         |          yes          |    yes      |

```js
<body>
  <div class="box">
    <h2>我是标题</h2>
    <div class="container">
      <p>
        我是段落, <span class="keyword">coderwhy</span> 哈哈哈哈
      </p>
      <p>
        我也是段落, <span class="keyword">kobe</span> 呵呵呵呵额
      </p>
      <div class="article">
        <h3 id="title">我是小标题</h3>
        <p>
          我是文章的内容, 嘿嘿嘿嘿嘿
        </p>
      </div>
    </div>
  </div>
  
  <script>
    // 一. 通过导航获取
    // // 1.拿到body
    // var bodyEl = document.body
    // // 2.拿到box
    // var boxEl = bodyEl.firstElementChild
    // // 3.拿container
    // var containerEl = boxEl.children[1]
    // // 4.拿p
    // var pEl = containerEl.children[0]
    // // 5.拿到keyword
    // var spanEl = pEl.children[0]
    // spanEl.style.color = "red"

    // 二. getElementBy*
    // 1.通过className获取元素
    // var keywordEls = document.getElementsByClassName("keyword")
    // // 修改第一个
    // // keywordEls[0].style.color = "red"
    // // 修改所有的
    // for (var i = 0; i < keywordEls.length; i++) {
    //   keywordEls[i].style.color = "red"
    // }
    // 2. 通过id获取元素
    // var titleEl = document.getElementById("title")
    // titleEl.style.color = "orange"

    // 三.querySelector: 通过选择器查询
    var keywordEl = document.querySelector(".keyword")
    // keywordEls是对象, 可迭代的
    // 可迭代对象: String/数组/节点的列表
    var keywordEls = document.querySelectorAll(".keyword")
    for (var el of keywordEls) {
      el.style.color = "red"
    }
    console.log(keywordEls)
    var titleEl = document.querySelector("#title")
    titleEl.style.color = "orange"
  </script>
</body>
```

开发中如何选择呢？目前最常用的是querySelector和querySelectAll；getElementById偶尔也会使用或者在适配一些低版本浏览器时；

## 节点的属性 - nodeType

目前，我们已经可以获取到节点了，接下来我们来看一下节点中有哪些常见的属性：当然，不同的节点类型有可能有不同的属性；这里我们主要讨论节点共有的属性；

nodeType属性：nodeType 属性提供了一种获取节点类型的方法；它有一个数值型值（numeric value）；常见的节点类型有如下：
| 常量               | 值  | 描述                             |
| ------------------ | --- | -------------------------------- |
| Node.ELEMENT_NOOD  | 1   | 一个元素节点，例如\<p\>和\<div\> |
| Node.TEXT_NOOD     | 3   | Element或者Attr中实际的文字      |
| Node.COMMENT_NOOD  | 8   | 一个Comment节点                  |
| Node.DOCUMENT_NOOD | 9   | 一个Document节点                 |
| Node.DOCUMENT_TYPE_NOOD  |  10   |描述文档类型的DocumentType节点。例如\<!DOCTYPE html\>就是用于HTML5的|
其他类型可以查看MDN文档： https://developer.mozilla.org/zh-CN/docs/Web/API/Node/nodeType
```js

```
## 节点的属性 – nodeName、tagName

nodeName：获取node节点的名字；
tagName：获取元素的标签名词；

tagName 和 nodeName 之间有什么不同呢？tagName 属性仅适用于 Element 节点；nodeName 是为任意 Node 定义的：
对于元素，它的意义与 tagName 相同，所以使用哪一个都是可以的；对于其他节点类型（text，comment 等），它拥有一个对应节点类型的字符串；

## 节点的属性 - innerHTML、textConten

innerHTML 属性：将元素中的 HTML 获取为字符串形式；设置元素中的内容；outerHTML 属性，包含了元素的完整 HTML，innerHTML 加上元素本身一样；

textContent 属性：仅仅获取元素中的文本内容；

innerHTML和textContent的区别：使用 innerHTML，我们将其“作为 HTML”插入，带有所有 HTML 标签。使用 textContent，我们将其“作为文本”插入，所有符号（symbol）均按字面意义处理。

## 节点的属性 - nodeValue

nodeValue/data用于获取非元素节点的文本内容
```js
<body>
  <!-- 我是注释 -->
  我是文本
  <div class="box">
    <h2>我是标题</h2>
    <p>我是内容, 哈哈哈哈</p>
  </div>
  
  <script>
    // 1.获取三个节点
    var bodyChildNodes = document.body.childNodes
    var commentNode = bodyChildNodes[1]
    var textNode = bodyChildNodes[2]
    var divNode = bodyChildNodes[3]
    // 2.节点属性
    // 2.1.nodeType 节点的类型
    for (var node of bodyChildNodes) {
      if (node.nodeType === 8) {
      } else if (node.nodeType === 3) {
      } else if (node.nodeType === 1) {
      }
    }
    console.log(commentNode.nodeType, textNode.nodeType, divNode.nodeType) // 8 3 1
    console.log(Node.COMMENT_NODE)
    // 2.2.nodeName 节点的名称
    // tagName: 针对元素(element)
    console.log(commentNode.nodeName, textNode.nodeName, divNode.nodeName)
    console.log(commentNode.tagName, divNode.tagName)
    // 2.3. data(nodeValue)/innerHTML/textContent
    // data针对非元素的节点获取数据
    // innerHTML: 对应的html元素也会获取
    // textContent: 只会获取文本内容
    // console.log(commentNode.data, textNode.data, divNode.data)
    // console.log(divNode.innerHTML)
    // console.log(divNode.textContent)
    // 设置文本, 作用是一样
    // 设置文本中包含元素内容, 那么innerHTML浏览器会解析, textContent会当成文本的一部分
    // divNode.innerHTML = "<h2>呵呵呵呵</h2>"
    // divNode.textContent = "<h2>嘿嘿嘿嘿</h2>"
    // 2.4.outerHTML
    console.log(divNode.outerHTML)
  </script>
</body>
```

## 节点的其他属性

hidden属性：也是一个全局属性，可以用于设置元素隐藏。

DOM 元素还有其他属性：
value， 和 （HTMLInputElement，HTMLSelectElement……）的 value。
href\<a href="...>（HTMLAnchorElement）的 href。
id所有元素（HTMLElement）的 “id” 特性（attribute）的值。
class和style我们会在后续专门讲解的。\<!--EndFragment--\> \</body\> \</html\>

```js
<body>
  <button class="btn">切换</button>
  <!-- hidden属性 -->
  <div id="box" class="cba" title="aaa" style="color: red">
    哈哈哈哈哈
  </div>
  
  <script>
    // 1.获取元素
    var boxEl = document.querySelector("#box")
    var btnEl = document.querySelector(".btn")
    // 2.监听btn的点击
    btnEl.onclick = function() {
      // 1.只是隐藏
      // boxEl.hidden = true
      // boxEl.style.display = "none"
      // 2.切换
      // boxEl.hidden = false
      // if (boxEl.hidden === false) {
      //   boxEl.hidden = true
      // } else {
      //   boxEl.hidden = false
      // }
      // 3.直接取反
      boxEl.hidden = !boxEl.hidden
    }
  </script>
</body>
```


