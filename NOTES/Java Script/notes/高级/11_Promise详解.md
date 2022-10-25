
# 认识Promise

**Promise 是异步编程的一种解决方案**

所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。

Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。

# Promise原理

- 对象的状态不受外界影响

- 有三种状态: pending (进行中)、fulfilled (已成功)和rejected (已失败)

- 一旦状态改变，就不会再变，任何时候都可以得到这个结果

- Promise对象的状态改变，只有两种可能:从pending变 为fulfilled和从pending变为rejected.

- 如果异步操作成功了(读文件成功了),从pending(进行中)变为fulfilled (已成功)，从pending变为fulfilled

- 如果异步操作失败了(读文件失败了),从pending (进行中)变为rejected (已失败) ， 从pending变为rejected

- **只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态 特点**


**让异步操作有顺序本质是:**  
在异步操作成功后的回调函数里返回另外的promise,调用他的then方法.

*当你new 一个promise时，就已经开始自动执行函数。promise是同步的，但then是异步的，要注意区分。*


# 使用Promise

**Promise对象是一个构造函数，用来生成Promise实例**

```js
let newPromise = new Promise((resolve,reject)=>{
	// code
	// 成功掉用
	resolve();
	// 失败调用
	reject();
})
newPrimise.then(()=>{
	// 这里是成功时调用的方法
},()=>{
	// 这里是失败时调用的方法
})

```
**Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject**。它们是两个函数，由 JavaScript 引擎提供，不用自己部署。
- resolve
将Promise对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去
- reject
reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。


## then方法：

Promise实例生成以后，可以用then方法分别指定resolved状态和rejected状态的回调函数。

异步操作成功后调用resolve()方法，他内部调用了then()里面的第一个参数函数

异步操作失败后调用reject()方法,他内部调用了then()里面的第二个参数函数.

函数名.then（参数1，参数2）

参数1 ： 回调函数是Promise对象的状态变为resolved时调用

参数2 ： （可选）第二个回调函数是Promise对象的状态变为rejected时调用

## Promise方法

- Promise 实例具有then方法，也就是说，then方法是定义在原型对象为 Promise 实例添加状态改变时的回调函数：
``Promise.prototype.then() 

- 用于指定发生错误时的回调函数
``Promise.prototype.catch() 

- 链式写法  
在同时用多个then方法时，只需要在最后一个then方法后借一个catch方法，这样就不用每个then方法都写调用失败那个函数了;
``promise名字.then((参数)=>{ //body }).catch((参数)=>{});

- 用于指定不管 Promise 对象最后状态如何，都会执行的操作
```js
Promise.all()
let 名字 = Promise.all([实例1,实例2,实例3,...])
名字.then((参数)=>{ //body }) // 
// 每一个promise实例都要成功才会成功，相当于是并且.

```
- 将多个 Promise 实例，包装成一个新的 Promise 实例
```js
Promise.race()
let 名字 = Promise.race([实例1,实例2,实例3,...])
名字.then((参数)=>{ //body })
//有一个promise实例成功就会成功，相当于是或者.
```

- 接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例。只有等到所有这些参数实例都返回结果，不管是fulfilled还是rejected，包装实例才会结束
``Promise.allSettled()

- 接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例。只要参数实例有一个变成fulfilled状态，包装实例就会变成fulfilled状态；如果所有参数实例都变成rejected状态，包装实例就会变成rejected状态
不会因为某个 Promise 变成rejected状态而结束。
``Promise.any()


**return不同值：**
1、通过return 返回一个非promise的值，则新promise的状态fulfilled，值为return 的值

2、不做任何处理（return == return undefined），所以根据结论1新promise的状态为fulfilled，值为undefined

3、通过throw主动抛出错误或者代码出现错误，则promise的状态为rejected，值为throw的值；或者代码出错也为rejected状态，例如输出一个不存在的a；console.log(a)。

4、通过return 返回一个promise对象，则新promise就是return的promsie，其中的值就是resolve和reject传递的值

catch是处理rej函数的。当返回错误时调用catch。当new promise出现rej(), throw, 语法错误以上三种形式式，就会调用catch函数。

*reject后的东西，一定会进入then中的第二个回调，如果then中没有写第二个回调，则进入catch*

*resolve的东西，一定会进入then的第一个回调，肯定不会进入catch*

throw new Error 的情况和rej一样，但是他俩只会有一个发生
另外，网络异常（比如断网），会直接进入catch而不会进入then的第二个回调


# Promise详解

## 什么是Promise呢？

在上面的解决方案中，我们确确实实可以解决请求函数得到结果之后，获取到对应的回调，但是它存在两个主要的问题：
第一，我们需要自己来设计回调函数、回调函数的名称、回调函数的使用等；
第二，对于不同的人、不同的框架设计出来的方案是不同的，那么我们必须耐心去看别人的源码或者文档，以便可以理解它 这个函数到底怎么用；

我们来看一下Promise的API是怎么样的：**Promise是一个类，可以翻译成 承诺、许诺 、期约；当我们需要的时候，给予调用者一个承诺：待会儿我会给你回调数据时，就可以创建一个Promise的对象；在通过new创建Promise对象时，我们需要传入一个回调函数，我们称之为executor，这个回调函数会被立即执行，并且给传入另外两个回调函数resolve、reject；当我们调用resolve回调函数时，会执行Promise对象的then方法传入的回调函数；当我们调用reject回调函数时，会执行Promise对象的catch方法传入的回调函数；**


## Promise的代码结构

我们来看一下Promise代码结构：上面Promise使用过程，我们可以将它划分成三个状态：
**待定（pending）**: 初始状态，既没有被兑现，也没有被拒绝；当执行executor中的代码时，处于该状态；
**已兑现（fulfilled）**: 意味着操作成功完成；执行了resolve时，处于该状态，Promise已经被兑现；
**已拒绝（rejected）**: 意味着操作失败；执行了reject时，处于该状态，Promise已经被拒绝；


## Promise重构请求

## Executor

Executor是在创建Promise时需要传入的一个回调函数，这个回调函数会被立即执行，并且传入两个参数：
通常我们会在Executor中确定我们的Promise状态：
通过resolve，可以兑现（fulfilled）Promise的状态，我们也可以称之为已决议（resolved）；
通过reject，可以拒绝（reject）Promise的状态；

这里需要注意：**一旦状态被确定下来，Promise的状态会被 锁死，该Promise的状态是不可更改的，在我们调用resolve的时候，如果resolve传入的值本身不是一个Promise，那么会将该Promise的状态变成 兑现（fulfilled）；在之后我们去调用reject时，已经不会有任何的响应了（并不是这行代码不会执行，而是无法改变Promise状态）**；

## resolve不同值的区别

情况一：如果resolve传入一个普通的值或者对象，那么这个值会作为then回调的参数；
情况二：如果resolve中传入的是另外一个Promise，那么这个新Promise会决定原Promise的状态：
情况三：如果resolve中传入的是一个对象，并且这个对象有实现then方法，那么会执行该then方法，并且根据then方法的结 果来决定Promise的状态：

## then方法 – 接受两个参数

then方法是Promise对象上的一个方法（实例方法）：它其实是放在Promise的原型上的 Promise.prototype.then 
then方法接受两个参数：
fulfilled的回调函数：当状态变成fulfilled时会回调的函数；
reject的回调函数：当状态变成reject时会回调的函数；

## then方法 – 多次调用

一个Promise的then方法是可以被多次调用的：每次调用我们都可以传入对应的fulfilled回调；当Promise的状态变成fulfilled的时候，这些回调函数都会被执行；



## then方法 – 返回值

then方法本身是有返回值的，它的返回值是一个Promise，所以我们可以进行如下的链式调用：但是then方法返回的Promise到底处于什么样的状态呢？

Promise有三种状态，那么这个Promise处于什么状态呢？
当then方法中的回调函数本身在执行的时候，那么它处于pending状态；
当then方法中的回调函数返回一个结果时，那么它处于fulfilled状态，并且会将结果作为resolve的参数；情况一：返回一个普通的值；情况二：返回一个Promise；情况三：返回一个thenable值；当then方法抛出一个异常时，那么它处于reject状态；

## catch方法 – 多次调用

catch方法也是Promise对象上的一个方法（实例方法）：它也是放在Promise的原型上的 Promise.prototype.catch
一个Promise的catch方法是可以被多次调用的：每次调用我们都可以传入对应的reject回调；当Promise的状态变成reject的时候，这些回调函数都会被执行；


## catch方法 – 返回值

事实上catch方法也是会返回一个Promise对象的，所以catch方法后面我们可以继续调用then方法或者catch方法：下面的代码，后续是catch中的err2打印，还是then中的res打印呢？答案是res打印，这是因为catch传入的回调在执行完后，默认状态依然会是fulfilled的；那么如果我们希望后续继续执行catch，那么需要抛出一个异常：



## finally方法

finally是在ES9（ES2018）中新增的一个特性：表示无论Promise对象无论变成fulfilled还是rejected状态，最终都会被执行 的代码。finally方法是不接收参数的，因为无论前面是fulfilled状态，还是rejected状态，它都会执行。


## resolve方法

前面我们学习的then、catch、finally方法都属于Promise的实例方法，都是存放在Promise的prototype上的。下面我们再来学习一下Promise的类方法。
有时候我们已经有一个现成的内容了，希望将其转成Promise来使用，这个时候我们可以使用 Promise.resolve 方法来完成。Promise.resolve的用法相当于new Promise，并且执行resolve操作：
resolve参数的形态：情况一：参数是一个普通的值或者对象，情况二：参数本身是Promise，情况三：参数是一个thenable


## reject方法

reject方法类似于resolve方法，只是会将Promise对象的状态设置为reject状态。Promise.reject的用法相当于new Promise，只是会调用reject：
Promise.reject传入的参数无论是什么形态，都会直接作为reject状态的参数传递到catch的。


## all方法

另外一个类方法是Promise.all：它的作用是将多个Promise包裹在一起形成一个新的Promise；新的Promise状态由包裹的所有Promise共同决定：
当所有的Promise状态变成fulfilled状态时，新的Promise状态为fulfilled，并且会将所有Promise的返回值组成一个数组；
当有一个Promise状态为reject时，新的Promise状态为reject，并且会将第一个reject的返回值作为参数；



## allSettled方法

all方法有一个缺陷：当有其中一个Promise变成reject状态时，新Promise就会立即变成对应的reject状态。
那么对于resolved的，以及依然处于pending状态的Promise，我们是获取不到对应的结果的；

在ES11（ES2020）中，添加了新的API Promise.allSettled：该方法会在所有的Promise都有结果（settled），无论是fulfilled，还是rejected时，才会有最终的状态；并且这个Promise的结果一定是fulfilled的；

我们来看一下打印的结果：allSettled的结果是一个数组，数组中存放着每一个Promise的结果，并且是对应一个对象的；这个对象中包含status状态，以及对应的value值；


## race方法

如果有一个Promise有了结果，我们就希望决定最终新Promise的状态，那么可以使用race方法：race是竞技、竞赛的意思，表示多个Promise相互竞争，谁先有结果，那么就使用谁的结果；


## any方法

any方法是ES12中新增的方法，和race方法是类似的：any方法会等到一个fulfilled状态，才会决定新Promise的状态；如果所有的Promise都是reject的，那么也会等到所有的Promise都变成rejected状态；
如果所有的Promise都是reject的，那么会报一个AggregateError的错误。