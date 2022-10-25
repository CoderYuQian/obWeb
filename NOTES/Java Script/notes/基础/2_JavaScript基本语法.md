#JavaScript 

# JavaScript的基本语法
## JavaScript的编写方式

- 位置一：HTML代码行内（不推荐）
```javascript
  <!-- 1.编写位置一: 编写在html内部(了解) -->

  <a href="#" onclick="alert('百度一下')">百度一下</a>

  <a href="javascript: alert('百度一下')">百度一下</a>
```

- 位置二：script标签中
```js
  <!-- 2.编写位置二: 编写在script元素之内 -->

  <a class="google" href="#">Google一下</a>

  <script>

    var googleAEl = document.querySelector(".google")

    googleAEl.onclick = function() {

      alert("Google一下")

    }

  </script>
```

- 位置三：外部的script文件
```js
  <!-- 3.编写位置三: 独立的js文件 -->
  <script src="./js/bing.js"></script>
```

## noscript元素使用

如果运行的浏览器不支持JavaScript, 那么我们如何给用户更好的提示呢? 针对早期浏览器不支持 JavaScript 的问题，需要一个页面优雅降级的处理方案; 最终，\<noscript\> 元素出现，被用于给不支持 JavaScript 的浏览器提供替代内容；下面的情况下, 浏览器将显示包含在\<noscript\>中的内容:
```js
  <noscript>

    <h1>您的浏览器不支持JavaScript, 请打开或者更换浏览器~</h1>

  </noscript>
```

## JavaScript的编写的注意事项

- **注意一**： script元素不能写成单标签 在外联式引用js文件时，script标签中不可以写JavaScript代码，并且script标签不能写成单标签；即不能写成\<script src=“index.js”/\>；
- **注意二**: 省略type属性在以前的代码中，\<script\>标签中会使用 type=“text/javascript”；现在可不写这个代码了，因为JavaScript 是所有现代浏览器以及 HTML5 中的默认脚本语言；
- **注意三**: 加载顺序  作为HTML文档内容的一部分，JavaScript默认遵循HTML文档的加载顺序，即自上而下的加载顺序；推荐将JavaScript代码和编写位置放在body子元素的最后一行；
- **注意四**: JavaScript代码严格区分大小写 ，HTML元素和CSS属性不区分大小写，但是在JavaScript中严格区分大小写；

## JavaScript的交互方式

- 交互方式一: alert函数
- 交互方式二: console.log函数, 将内容输出到控制台中(console)
- 交互方式三: document.write
- 交互方式四: prompt函数, 作用获取用户输入的内容

如果在代码中出现了错误，那么可以在console中显示错误；console中有个 > 标志，它表示控制台的命令行，在命令行中我们可以直接编写JavaScript代码，按下enter会执行代码；如果希望编写多行代码，可以按下shift+enter来进行换行编写。

## JavaScript语句和分号

语句是向浏览器发出的指令，通常表达一个操作或者行为（Action）。语句英文是Statements；比如我们前面编写的每一行代码都是一个语句，用于告知浏览器一条执行的命令；

通常每条语句的后面我们会添加一个分号，表示语句的结束：分号的英文是semicolon，当存在换行符（line break）时，在大多数情况下可以省略分号；JavaScript 将换行符理解成“隐式”的分号； 这也被称之为自动插入分号（an automatic semicolon）；

## JavaScript的注释

注意：JavaScript也不支持注释的嵌套
```JS
	// 1.单行注释

    // 2.多行注释

    /*

     我是一行注释

     我是另外一行注释

    */

    // 3.文档注释

    /**

     * 和某人打招呼

     * @param {string} name 姓名

     * @param {number} age 年龄

     */

    function sayHello(name, age) {

    }

    sayHello()
```

