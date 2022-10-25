# await、async、事件循环

## 异步函数 async function

async关键字用于声明一个异步函数：
async是asynchronous单词的缩写，异步、非同步
sync是synchronous单词的缩写，同步、同时；

```JS
// 普通函数

    // function foo() {}

    // const bar = function() {}

    // const baz = () => {}

  

    // 生成器函数

    // function* foo() {}

  

    // 异步函数

    async function foo() {

      console.log("foo function1")

      console.log("foo function2")

      console.log("foo function3")

    }

    foo()

  

    // const bar = async function() {}

    // const baz = async () => {}

    // class Person {

    //   async running() {}

    // }
```

## 异步函数的执行流程

**异步函数的内部代码执行过程和普通的函数是一致的，默认情况下也是会被同步执行。**

异步函数有返回值时，和普通函数会有区别：
- 情况一：异步函数也可以有返回值，但是异步函数的返回值相当于被包裹到Promise.resolve中；
- 情况二：如果我们的异步函数的返回值是Promise，状态由会由Promise决定
- 情况三：如果我们的异步函数的返回值是一个对象并且实现了thenable，那么会由对象的then方法来决定；

**如果我们在async中抛出了异常，那么程序它并不会像普通函数一样报错，而是会作为Promise的reject来传递；**

```JS
 // 返回值的区别

    // 1.普通函数

    // function foo1() {

    //   return 123

    // }

    // foo1()

  

    // 2.异步函数

    async function foo2() {

      // 1.返回一个普通的值

      // -> Promise.resolve(321)

      return ["abc", "cba", "nba"]

  

      // 2.返回一个Promise

      // return new Promise((resolve, reject) => {

      //   setTimeout(() => {

      //     resolve("aaa")

      //   }, 3000)

      // })

  

      // 3.返回一个thenable对象

      // return {

      //   then: function(resolve, reject) {

      //     resolve("bbb")

      //   }

      // }

    }

  

    foo2().then(res => {

      console.log("res:", res)

    })
```

异步函数的异常
```JS
// "abc".filter()

  

    // 什么情况下异步函数的结果是rejected

  

    // 如果异步函数中有抛出异常(产生了错误), 这个异常不会被立即浏览器处理

    // 进行如下处理: Promise.reject(error)

    async function foo() {

      console.log("---------1")

      console.log("---------2")

      // "abc".filter()

      throw new Error("coderwhy async function error")

      console.log("---------3")

  

      // return new Promise((resolve, reject) => {

      //   reject("err rejected")

      // })

  

      return 123

    }

  

    // promise -> pending -> fulfilled/rejected

    foo().then(res => {

      console.log("res:", res)

    }).catch(err => {

      console.log("coderwhy err:", err)

      console.log("继续执行其他的逻辑代码")

    })
```

## await关键字

**async函数另外一个特殊之处就是可以在它内部使用await关键字，而普通函数中是不可以的。**

await关键字特点：

**通常使用await是后面会跟上一个表达式，这个表达式会返回一个Promise；那么await会等到Promise的状态变成fulfilled状态，之后继续执行异步函数；**

如果await后面是一个普通的值，那么会直接返回这个值；

如果await后面是一个thenable的对象，那么会根据对象的then方法调用来决定后续的值；

如果await后面的表达式，返回的Promise是reject的状态，那么会将这个reject结果直接作为函数的Promise的reject值；

await关键字的使用
```js
// 1.普通函数

    // function foo1() {

    //   await 123

    // }

    // foo1()

  
  

    // 2.await关键字

    // await条件: 必须在异步函数中使用

    function bar() {

      console.log("bar function")

      return new Promise(resolve => {

        setTimeout(() => {

          resolve(123)

        }, 100000)

      })

    }

  

    async function foo() {

      console.log("-------")

      // await后续返回一个Promise, 那么会等待Promise有结果之后, 才会继续执行后续的代码

      const res1 = await bar()

      console.log("await后面的代码:", res1)

      const res2 = await bar()

      console.log("await后面的代码:", res2)

  

      console.log("+++++++")

    }

  

    foo()
```

await处理异步请求
```js
 function requestData(url) {

      return new Promise((resolve, reject) => {

        setTimeout(() => {

          resolve(url)

          // reject("error message")

        }, 2000);

      })

    }

  

    async function getData() {

      const res1 = await requestData("why")

      console.log("res1:", res1)

  

      const res2 = await requestData(res1 + "kobe")

      console.log("res2:", res2)

    }

  

    getData().catch(err => {

      console.log("err:", err)

    })
```

await与async结合使用
```js
// 1.定义一些其他的异步函数

    function requestData(url) {

      console.log("request data")

      return new Promise((resolve) => {

        setTimeout(() => {

          resolve(url)

        }, 3000)

      })

    }

  

    async function test() {

      console.log("test function")

      return "test"

    }

  

    async function bar() {

      console.log("bar function")

  

      return new Promise((resolve) => {

        setTimeout(() => {

          resolve("bar")

        }, 2000);

      })

    }

  

    async function demo() {

      console.log("demo function")

      return {

        then: function(resolve) {

          resolve("demo")

        }

      }

    }

  
  

    // 2.调用的入口async函数

    async function foo() {

      console.log("foo function")

  

      const res1 = await requestData("why")

      console.log("res1:", res1)

  

      const res2 = await test()

      console.log("res2:", res2)

  

      const res3 = await bar()

      console.log("res3:", res3)

  

      const res4 = await demo()

      console.log("res4:", res4)

    }

  

    foo()
```

## 进程和线程

线程和进程是操作系统中的两个概念：
进程（process）：计算机已经运行的程序，是操作系统管理程序的一种方式；
线程（thread）：操作系统能够运行运算调度的最小单位，通常情况下它被包含在进程中；

理解：
进程：我们可以认为，启动一个应用程序，就会默认启动一个进程（也可能是多个进程）；
线程：每一个进程中，都会启动至少一个线程用来执行程序中的代码，这个线程被称之为主线程；
所以我们也可以说进程是线程的容器；

## 操作系统的工作方式

操作系统是如何做到同时让多个进程（边听歌、边写代码、边查阅资料）同时工作呢？ 

这是因为CPU的运算速度非常快，它可以快速的在多个进程之间迅速的切换；当我们进程中的线程获取到时间片时，就可以快速执行我们编写的代码；对于用户来说是感受不到这种快速的切换的；


## 浏览器中的JavaScript线程

我们经常会说JavaScript是单线程（可以开启workers）的，但是JavaScript的线程应该有自己的容器进程：浏览器或者Node。

浏览器是一个进程吗，它里面只有一个线程吗？

目前多数的浏览器其实都是多进程的，当我们打开一个tab页面时就会开启一个新的进程，这是为了防止一个页面卡死而造成 所有页面无法响应，整个浏览器需要强制退出；每个进程中又有很多的线程，其中包括执行JavaScript代码的线程；

JavaScript的代码执行是在一个单独的线程中执行的：这就意味着JavaScript的代码，在同一个时刻只能做一件事；如果这件事是非常耗时的，就意味着当前的线程就会被阻塞；

所以真正耗时的操作，实际上并不是由JavaScript线程在执行的：浏览器的每个进程是多线程的，那么其他线程可以来完成这个耗时的操作； 比如网络请求、定时器，我们只需要在特性的时候执行应该有的回调即可；

## 浏览器的事件循环

如果在执行JavaScript代码的过程中，有异步操作呢？中间我们插入了一个setTimeout的函数调用；这个函数被放到入调用栈中，执行会立即结束，并不会阻塞后续代码的执行；

### 宏任务和微任务

但是事件循环中并非只维护着一个队列，事实上是有两个队列：

宏任务队列（macrotask queue）：ajax、setTimeout、setInterval、DOM监听、UI Rendering等

微任务队列（microtask queue）：Promise的then回调、 Mutation Observer API、queueMicrotask()等

那么事件循环对于两个队列的优先级是怎么样的呢？
1. main script中的代码优先执行（编写的顶层script代码）；
2. 在执行任何一个宏任务之前（不是队列，是一个宏任务），都会先查看微任务队列中是否有任务需要执行
   也就是宏任务执行之前，必须保证微任务队列是空的；
   如果不为空，那么就优先执行微任务队列中的任务（回调）；


