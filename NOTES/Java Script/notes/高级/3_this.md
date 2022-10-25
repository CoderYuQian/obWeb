# JavaScript函数this指向

## 认识this关键字

在常见的编程语言中，几乎都有this这个关键字（Objective-C中使用的是self），但是JavaScript中的this和常见的面向对象语言中的this不太一样：常见面向对象的编程语言中，比如Java、C++、Swift、Dart等等一系列语言中，this通常只会出现在类的方法中。也就是你需要有一个类，类中的方法（特别是实例方法）中，this代表的是当前调用对象；

目前掌握两个this的判断方法：在全局环境下面，this指向window；通过对象调用，this指向调用的对象
```js
// 函数中是有一个this的变量, this变量在大多数情况下会指向一个对象
    // arguments保存的是传入的所有参数
    
    // 情况一: 如果普通的函数被默认调用, 那么this指向的就是window
    // function foo(name, age) {
    //   console.log(arguments)
    //   console.log(this)
    // }
    // foo("abc", 123)
    // function sayHello(name) {
    //   console.log(this)
    // }
    // sayHello()
  
    // 情况二: 如果函数它是被某一个对象来引用并且调用它, 那么this会指向这个对象(调用的那个调用)
    // var obj = {
    //   name: "why",
    //   running: function() {
    //     console.log(this)
    //     // console.log(obj)
    //     // console.log(this === obj)
    //   }
    // }
    // obj.running()

  

    // 考验题目
    // 1.题目一:
    // var fn = obj.running
    // fn() // window

    // 2.题目二:

    function bar() {
      console.log(this) // obj对象
    }
    var obj = {
      name: "why",
      bar: bar
    }
    obj.bar()
```

```js
 var info = {
      name: "why",
      age: 18,
      running: function() {
        console.log("running~", this.name)
      },
      eating: function() {
        console.log("eating~", this.name)
      },
      studying: function() {
        console.log("studying~", this.name)
      }
    }
    info.running()
    info.eating()
    info.studying()
```

## this指向

函数在调用时，JavaScript会默认给this绑定一个值，**this的绑定和定义的位置（编写的位置）没有关系，this的绑定和调用方式以及调用的位置有关系**，***this是在运行时被绑定的***；

## this绑定规则

### 规则一：默认绑定

独立的函数调用我们可以理解成函数没有被绑定到某个对象上进行调用。
1. 普通的函数被独立的调用
2. 函数定义在对象中, 但是独立调用
3. 高阶函数
   ```js
   var obj = {
      name: "why",
      bar: function() {
        console.log("bar:", this)
      }
    }
    
    function test(fn) {
      fn()
    }
    test(obj.bar)
```
4. 严格模式下, 独立调用的函数中的this指向的是undefined

### 规则二：隐式绑定

另外一种比较常见的调用方式是通过某个对象进行调用的：也就是它的调用位置中，是通过某个对象发起的函数调用。

### 规则三：显式绑定

隐式绑定有一个前提条件：**必须在调用的对象内部有一个对函数的引用（比如一个属性）；
如果没有这样的引用，在进行调用时，会报找不到该函数的错误；正是通过这个引用，间接的将this绑定到了这个对象上；**
如果我们不希望在对象内部包含这个函数的引用，同时又希望在这个对象上进行强制调用，该怎么做呢？

JavaScript所有的函数都可以使用**call和apply**方法。第一个参数是相同的，要求传入一个对象；这个对象的作用是什么呢？就是给this准备的。在调用这个函数时，会将this绑定到这个传入的对象上。**后面的参数，apply为数组，call为参数列表；** 因为上面的过程，我们明确的绑定了this指向的对象，所以称之为 显式绑定。
```js
// call/apply

    function foo(name, age, height) {
      console.log("foo函数被调用:", this)
      console.log("打印参数:", name, age, height)
    }


    // ()调用
     foo("why", 18, 1.88)
     
    // apply
    // 第一个参数: 绑定this
    // 第二个参数: 传入额外的实参, 以数组的形式
     foo.apply("apply", ["kobe", 30, 1.98])

    // call
    // 第一个参数: 绑定this
    // 参数列表: 后续的参数以多参数的形式传递, 会作为实参
    foo.call("call", "james", 25, 2.05)
```

#### call、apply、bind

通过call或者apply绑定this对象  显示绑定后，this就会明确的指向绑定的对象
如果我们希望一个函数总是显示的绑定到一个对象上，可以怎么做呢？

使用bind方法，bind() 方法创建一个新的绑定函数（bound function，BF）；
绑定函数是一个 exotic function object（怪异函数对象，ECMAScript 2015 中的术语）

在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。
```js
 function foo(name, age, height, address) {
      console.log("foo:", this)
      console.log("参数:", name, age, height, address)
    }
    var obj = { name: "why" }
    // 需求: 调用foo时, 总是绑定到obj对象身上(不希望obj对象身上有函数)
    // 1.bind函数的基本使用
    // var bar = foo.bind(obj)
    // bar() // this -> obj

    // 2.bind函数的其他参数(了解)
    var bar = foo.bind(obj, "kobe", 18, 1.88)
    bar("james")
```

### new绑定

JavaScript中的函数可以当做一个类的构造函数来使用，也就是使用new关键字。 使用new关键字来调用函数是，会执行如下的操作： 
1. 创建一个全新的对象； 
2. 这个新对象会被执行prototype连接；
3. 这个新对象会绑定到函数调用的this上（this的绑定在这个步骤完成）；  
4. 如果函数没有返回其他对象，表达式会返回这个新对象；

### 内置函数的绑定思考

有些时候，我们会调用一些JavaScript的内置函数，或者一些第三方库中的内置函数。这些内置函数会要求我们传入另外一个函数；我们自己并不会显示的调用这些函数，而且JavaScript内部或者第三方库内部会帮助我们执行；这些函数中的this又是如何绑定的呢？根据经验：
```js
// 内置函数(第三方库): 根据一些经验
    // 1.定时器，指向window
    // setTimeout(function() {
    //   console.log("定时器函数:", this)
    // }, 1000)

    // 2.按钮的点击监听 指向button按钮
    // var btnEl = document.querySelector("button")
    // btnEl.onclick = function() {
    //   console.log("btn的点击:", this)
    // }

    // btnEl.addEventListener("click", function() {
    //   console.log("btn的点击:", this)
    // })

    // // 3.forEach  可以在第二个参数指定绑定的对象，不指定指向windowz
    var names = ["abc", "cba", "nba"]
    names.forEach(function(item) {
      console.log("forEach:", this)
    }, "aaaa")
```

### 规则优先级

学习了四条规则，接下来开发中我们只需要去查找函数的调用应用了哪条规则即可，但是如果一个函数调用位置应用了多 条规则，优先级谁更高呢？ 
1. 默认规则的优先级最低，毫无疑问，默认规则的优先级是最低的，因为存在其他规则时，就会通过其他规则的方式来绑定this 
2. 显示绑定优先级高于隐式绑定
3. new绑定优先级高于隐式绑定
4. new绑定优先级高于bind，new绑定和call、apply是不允许同时使用的，所以不存在谁的优先级更高
5. new绑定可以和bind一起使用，new绑定优先级更高 

## this规则之外

### 忽略显示绑定

如果在显示绑定中，我们传入一个null或者undefined，那么这个显示绑定会被忽略，使用默认规则

###  间接函数引用

创建一个函数的 间接引用，这种情况使用默认绑定规则。 赋值(obj2.foo = obj1.foo)的结果是foo函数；foo函数被直接调用，那么是默认绑定；
```js
// 1.情况一: 显式绑定null/undefined, 那么使用的规则是默认绑定
    // function foo() {
    //   console.log("foo:", this)
    // }

    // foo.apply("abc")
    // foo.apply(null)
    // foo.apply(undefined)
  
    // 2.情况二: 间接函数引用
    var obj1 = {
      name: "obj1",
      foo: function() {
        console.log("foo:", this)
      }
    }
    var obj2 = {
      name: "obj2"
    };
    
    // {}[]()

    // obj2.foo = obj1.foo
    // obj2.foo()
    (obj2.foo = obj1.foo)()
```

### this规则之外 – ES6箭头函数

箭头函数不使用this的四种标准规则（也就是不绑定this），而是根据外层作用域来决定this。
之前的代码在ES6之前是我们最常用的方式，从ES6开始，我们会使用箭头函数： 为什么在setTimeout的回调函数中可以直接使用this呢？ 因为箭头函数并不绑定this对象，那么this引用就会从上层作用于中找到对应的this

## 箭头函数 arrow function

箭头函数是ES6之后增加的一种编写函数的方法，并且它比函数表达式要更加简洁：
- 箭头函数不会绑定this、arguments属性；
- 箭头函数不能作为构造函数来使用（不能和new一起来使用，会抛出错误）；
- 箭头函数如何编写呢？
- (): 函数的参数  {}: 函数的执行体

### 箭头函数的编写优化

1. 如果箭头函数只有一个参数, 那么()可以省略
2. 如果函数体中只有一行执行代码, 那么{}可以省略。一行代码中不能带return关键字, 如果省略, 需要带return一起省略(下一条规则)
3. 只有一行代码时, 这行代码的表达式结果会作为函数的返回值默认返回的
4. 如果默认返回值是一个对象, 那么这个对象必须加()
