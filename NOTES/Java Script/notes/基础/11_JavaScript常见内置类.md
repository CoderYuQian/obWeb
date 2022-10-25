# JavaScript常见内置类

## 原始类型的包装类

JavaScript的原始类型并非对象类型，所以从理论上来说，它们是没有办法获取属性或者调用方法的。但是，在开发中会看到，我们会经常这样操作：那么，为什么会出现这样奇怪的现象呢？（悖论）

原始类型是简单的值，默认并不能调用属性和方法；这是因为JavaScript为了可以使其可以获取属性和调用方法，对其封装了对应的包装类型；常见的包装类型有：String、Number、Boolean、Symbol、BigInt类型。

## 包装类型的使用过程

**默认情况，当我们调用一个原始类型的属性或者方法时，会进行如下操作**：
根据原始值，创建一个原始类型对应的包装类型对象；
调用对应的属性或者方法，返回一个新的值；
创建的包装类对象被销毁；

通常JavaScript引擎会进行很多的优化，它可以跳过创建包装类的过程在内部直接完成属性的获取或者方法的调用。

注意事项：null、undefined没有任何的方法，也没有对应的“对象包装类”；
我们也可以自己来创建一个包装类的对象
```js
 var name = "Hello World"
    var height = 1.8888888
    // function String(str) {
    //   this.str = str
    //   this.length = 11
    //   this.split = function() {
    //   }
    // }

    // 在调用原始类型的属性或者方法时, 内部的操作 name = new String(name)
    console.log(name.length)
    console.log(name.split(" "))
    console.log(height.toFixed(2))
    // var obj = {
    //   name: "kobe",
    //   running: function() {
    //   }
    // }
    // obj.running()

    // 原始类型默认也是可以手动的创建对象(没有必要这样来做)
    var name1 = new String("Hello World")
    console.log(typeof name, typeof name1)
    // Number/String
```

# Number类

^01fb3c

前面我们已经学习了Number类型，它有一个对应的数字包装类型Number，我们来对它的方法做一些补充。

Number属性：
Number.MAX_SAFE_INTEGER：JavaScript 中最大的安全整数 (2^53 - 1)；Number.MIN_SAFE_INTEGER：JavaScript 中最小的安全整数 -(2^53 - 1) 

Number实例方法：
**方法一：toString(base)，** 将数字转成字符串，并且按照base进制进行转化，base 的范围可以从 2 到 36，默认情况下是 10；注意：如果是直接对一个数字操作，需要使用..运算符；
**方法二：toFixed(digits)**，格式化一个数字，保留digits位的小数；digits的范围是0到20（包含）之间； 

Number类方法：
**方法一：Number.parseInt(string\[, radix\])**，将字符串解析成整数，也有对应的全局方法parseInt；
**方法二：Number. parseFloat(string)**，将字符串解析成浮点数，也有对应的全局方法parseFloat；

更多Number的知识，可以查看MDN文档： https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number
```js
// Number构造函数 -> window.Number
    // var num = 123 // new Number(num)
    // 类属性
    // Number中本身是有自己的属性
    console.log(Number.MAX_VALUE)
    console.log(Number.MIN_VALUE)
    // integer: 整数
    console.log(Number.MAX_SAFE_INTEGER)
    console.log(Number.MIN_SAFE_INTEGER)
    // 对象的方法
    // toString(base)
    var num = 1000
    console.log(num.toString(), typeof num.toString())
    console.log(num.toString(2))//二进制
    console.log(num.toString(8))//八进制
    console.log(num.toString(16))//十六进制
    // console.log(123..toString(2))
    // toFixed的使用(重要)
    var pi = 3.1415926
    console.log(pi.toFixed(3))//四舍五入

    // 类的方法
    // parseInt//不四舍五入
    // parseFloat//不四舍五入
    // 整数: 123
    // 浮点数: 小数 123.321
    var num1 = "123.521"
    console.log(Number(num1).toFixed(0))
    console.log(Number.parseInt(num1))
    console.log(Number.parseFloat(num1))
    // window对象上面
    console.log(parseInt(num1))
    console.log(parseFloat(num1))
    // function HYNumber() {
    // }
    // HYNumber.parseInt2 = function() {
    // }
    // window.parseInt2 = HYNumber.parseInt2
    // console.log(window.parseInt2 === HYNumber.parseInt2)
    console.log(parseInt === Number.parseInt)
```

## Math对象

在除了Number类可以对数字进行处理之外，JavaScript还提供了一个Math对象。
Math是一个内置对象（不是一个构造函数），它拥有一些数学常数属性和数学函数方法；

Math常见的属性：Math.PI：圆周率，约等于 3.14159；

Math常见的方法：
Math.floor：向下舍入取整，
Math.ceil：向上舍入取整，
Math.round：四舍五入取整，
Math.random：生成0~1的随机数（包含0，不包含1），
Math.pow(x, y)：返回x的y次幂 

Math中还有很多其他数学相关的方法，可以查看MDN文档：  https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math

# String类

^38ec2f

### 基本使用

在开发中，我们经常需要对字符串进行各种各样的操作，String类提供给了我们对应的属性和方法。

String常见的属性：length：获取字符串的长度；

String也有很多常见的方法和操作。
操作一：访问字符串的字符 
使用方法一：通过字符串的索引 str\[0\]
使用方法二：通过str.charAt(pos)方法，它们的区别是索引的方式没有找到会返回undefined，而charAt没有找到会返回空字符串； 

练习：字符串的遍历 ，方式一：普通for循环 ，方式二：for..of遍历
```js
 var message = "Hello World"
    // 1.属性: length
    console.log(message.length)

    // 2.访问字符串中某个位置的字符
    // console.log(message[4])
    // console.log(message.charAt(4))
    // console.log(message[20])
    // console.log(message.charAt(20))

    // 3.字符串的遍历
    // for普通遍历
    for (var i = 0; i < message.length; i++) {
      console.log(message[i])
    }

    // for..of的遍历 -> 迭代器
    // 目前可迭代对象: 字符串/数组
    // 对象是不支持for..of
    // String对象内部是将字符串变成了一个可迭代对象
    for (var char of message) {
      console.log(char)
    }
```

###  修改字符串

**字符串的不可变性**：字符串在定义后是不可以修改的，所以下面的操作是没有任何意义的；所以，在我们改变很多字符串的操作中，都是生成了一个新的字符串；比如改变字符串大小的两个方法：
toLowerCase()：将所有的字符转成小写；
toUpperCase() ：将所有的字符转成大写
```js
// 1.严格的修改字符串, 之前的字符串内部修改掉
    // message[2] = "a"
    // console.log(message)

    // String两个方法:(重要)
    // toUpperCase: 将所有的字符变成大写
    // toLowerCase: 将所有的字符变成小写
    // var message1 = message.toUpperCase()
    // console.log(message)
    // console.log("message1:", message1)
    // message = message.toUpperCase()
    var message2 = message.toLowerCase()
    console.log(message2)
```

### 字符串方法

在开发中我们经常会在一个字符串中查找或者获取另外一个字符串，String提供了如下方法：

方法一：查找字符串位置
**indexOf(searchString, fromIndex)**
从fromIndex开始，查找searchValue的索引；如果没有找到，那么返回-1；
有一个相似的方法，叫lastIndexOf，从最后开始查找（用的较少）

方法二：是否包含字符串
**includes(searchString, pisition)**
从position位置开始查找searchString， 根据情况返回 true 或 false这是ES6新增的方法；

方法三：以xxx开头，
**startWith(searchString, pisition)**
从position位置开始，判断字符串是否以searchString开头；这是ES6新增的方法，下面的方法也一样；

方法四：以xxx结尾，
**endWith(searchString, length)**
在length长度内，判断字符串是否以searchString结尾；

方法五：替换字符串，
**replace(regexp|substr,newSubStr|function)**
查找到对应的字符串，并且使用新的字符串进行替代；这里也可以传入一个正则表达式来查找，也可以传入一个函数来替换；
```js
// 判断一个字符串中是否有另外一个字符串
    // 1.indexOf(searchString, fromIndex)
    /*
      index:
        情况一: 搜索到, 搜索字符串所在索引位置
        情况二: 没有搜索到, 返回-1
    */
    //  var index = message.indexOf(name)
    //  if (message.indexOf(name) !== -1) {
    //    console.log("message中包含name")
    //  } else {
    //    console.log("message不包含name")
    //  }

    // 2.includes: ES6中新增一个方法, 就是用来判断包含关系(返回布尔值)
    // if (message.includes(name)) {
    //   console.log("message中包含name")
    // }

    // 3.startsWith: 是否以xxx开头
    // if (message.startsWith("my")) {
    //   console.log("message以my开头")
    // }

    // 4.endsWith: 是否以xxx结束
    // if (message.endsWith("why")) {
    //   console.log("message以why结尾")
    // }

    // 5.replace 替换字符串
    // var newMessage = message.replace("why", "kobe")
    // console.log(message)
    // console.log(newMessage)
    var newName = "kobe"
    var newMessage = message.replace("why", function() {
      return newName.toUpperCase()
    })
    console.log(newMessage)
```

方法六：获取子字符串

| 方法                 | 选择方式                | 负值参数  |
| -------------------- | ----------------------- | --------- |
| slice(start,end)     | 从start到end（不含end） | 允许      |
| substring(start,end) | 从start到end（不含end） | 负值代表0 |
| substr(start,length)   |     从start开始获取长度为length的字符串  |     允许start为负数      |

开发中推荐使用slice方法。
```js
var message = "Hello World"
    // 获取子字符串
    // console.log(message.slice(3, 7))
    // console.log(message.slice(3, -1))
    // console.log(message.slice(3))
    // substr
    console.log(message.substr(3, 7))
```
### 其他方法

方法七：拼接字符串

方法八：删除首位空格

方法九：字符串分割separator：以什么字符串进行分割，也可以是一个正则表达式；limit：限制返回片段的数量；
```js
 var str1 = "Hello"
    var str2 = "World"
    var str3 = "kobe"
    // 1.字符串拼接
    // +
    // var newString = str1 + str2 + str3
    // console.log(newString)
    // concat方法: 链式调用
    var newString2 = str1.concat(str2).concat(str3)
    var newString3 = str1.concat(str2, str3, "abc", "cba")
    console.log(newString2)
    console.log(newString3)
    
    // 2.删除收尾的空格
    console.log("    why      abc   ".trim())
    
    // 3.字符串切割split
    var message = "abc-cba-nba-mba"
    var items = message.split("-")
    var newMessage = items.join("*")
    console.log(newMessage)
```

更多的字符串的补充内容，可以查看MDN的文档： https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String
