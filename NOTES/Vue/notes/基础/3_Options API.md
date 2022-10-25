# data属性

data属性是传入一个函数，并且该函数需要返回一个对象：
在Vue2.x的时候，也可以传入一个对象（虽然官方推荐是一个函数）；
在Vue3.x的时候，必须传入一个函数，否则就会直接在浏览器中报错；

data中返回的对象会被Vue的响应式系统劫持，之后对该对象的修改或者访问都会在劫持中被处理：所以我们在template或者app中通过 {{counter}} 访问counter，可以从对象中获取到数据；所以我们修改counter的值时，app中的 {{counter}}也会发生改变；

# methods属性

methods属性是一个对象，通常我们会在这个对象中定义很多的方法：这些方法可以被绑定到 模板中；在该方法中，我们可以使用this关键字来直接访问到data中返回的对象的属性；

**注意：
Vue 自动为 methods中的方法绑定了永远指向组件实例的 this。这确保了方法在作为事件监听器或回调函数时始终保持正确的 this。你不应该在定义 methods时使用箭头函数，因为箭头函数没有自己的 this上下文。**


# 计算属性computed

## 为什么要使用computed

在模板中可以直接通过插值语法显示一些data中的数据。但是在某些情况，我们可能需要对数据进行一些转化后再显示，或者需要将多个数据结合起来进行显示；

比如我们需要对多个data数据进行运算、三元运算符来决定结果、数据进行某种转化后显示；
在模板中使用表达式，可以非常方便的实现，但是设计它们的初衷是用于简单的运算；
在模板中放入太多的逻辑会让模板过重和难以维护；并且如果多个地方都使用到，那么会有大量重复的代码；

我们有没有什么方法可以将逻辑抽离出去呢？可以，其中一种方式就是将逻辑抽取到一个method中，放到methods的options中；但是，这种做法有一个直观的弊端，就是所有的data使用过程都会变成了一个方法的调用；**另外一种方式就是使用计算属性computed**；

## 认识计算属性computed

什么是计算属性呢？官方并没有给出直接的概念解释；而是说：对于任何包含响应式数据的复杂逻辑，你都应该使用计算属性；计算属性将被混入到组件实例中，所有 getter 和 setter 的 this 上下文自动地绑定为组件实例；

计算属性的用法：
- 选项：computed
- 类型：{ \[key: string\]: Function | { get: Function, set: Function } }

## 计算属性 vs methods

计算属性和methods的实现看起来是差别是不大的，但计算属性有缓存的。

### 计算属性的缓存

计算属性会基于它们的依赖关系进行缓存；在数据不发生变化时，计算属性是不需要重新计算的；但是如果依赖的数据发生变化，在使用时，计算属性依然会重新进行计算；

## 计算属性的setter和getter

计算属性在大多数情况下，只需要一个getter方法即可，所以我们会将计算属性直接写成一个函数。但是，如果我们确实想设置计算属性的值呢？这个时候我们也可以给计算属性设置一个setter的方法；
```js
// 1.创建app

    const app = Vue.createApp({
      // data: option api
      data() {
        return {
          firstname: "coder",
          lastname: "why"
        }
      },

      computed: {
        // 语法糖的写法
        // fullname() {
        //   return this.firstname + " " + this.lastname
        // },
        // 完整的写法:
        fullname: {
          get: function() {
            return this.firstname + " " + this.lastname
          },
          set: function(value) {
            const names = value.split(" ")
            this.firstname = names[0]
            this.lastname = names[1]
          }
        }
      },

      methods: {
        setFullname() {
          this.fullname = "kobe bryant"
        }
      }
    })
  
    // 2.挂载app
    app.mount("#app")
```

# watch

## 认识侦听器watch

开发中我们在data返回的对象中定义了数据，这个数据通过插值语法等方式绑定到template中；当数据变化时，template会自动进行更新来显示最新的数据；但是在某些情况下，我们希望在代码逻辑中监听某个数据的变化，这个时候就需要用侦听器watch来完成了；

侦听器的用法如下：
- 选项：watch
- 类型：{ \[key: string\]: string | Function | Object | Array}

```js
// Proxy -> Reflect
    // 1.创建app
    const app = Vue.createApp({
      // data: option api
      data() {
        return {
          message: "Hello Vue",
          info: { name: "why", age: 18 }
        }
      },
      methods: {
        changeMessage() {
          this.message = "你好啊, 李银河!"
          this.info = { name: "kobe" }
        }
      },

      watch: {
        // 1.默认有两个参数: newValue/oldValue
        message(newValue, oldValue) {
          console.log("message数据发生了变化:", newValue, oldValue)
        },
        info(newValue, oldValue) {
          // 2.如果是对象类型, 那么拿到的是代理对象
          // console.log("info数据发生了变化:", newValue, oldValue)
          // console.log(newValue.name, oldValue.name
          // 3.获取原生对象
          // console.log({ ...newValue })
          console.log(Vue.toRaw(newValue))
        }
      }
    })
    // 2.挂载app
    app.mount("#app")
```

## 侦听器watch的配置选项

默认情况下，watch只是在侦听侦听的源的引用变化，对于内部属性的变化是不会做出响应的：这个时候我们可以使用一个选项**deep**进行更深层的侦听；
注意前面我们说过watch里面侦听的属性对应的也可以是一个Object；

另外一个属性，是希望一开始的就会立即执行一次：这个时候我们使用**immediate**选项；这个时候无论后面数据是否有变化，侦听的函数都会有限执行一次；

```js
 // 1.创建app
    const app = Vue.createApp({
      // data: option api
      data() {
        return {
          info: { name: "why", age: 18 }
        }
      },
      methods: {
        changeInfo() {
          // 1.创建一个新对象, 赋值给info
          // this.info = { name: "kobe" }
          // 2.直接修改原对象某一个属性
          this.info.name = "kobe"
        }
      },
      watch: {
        // 默认watch监听不会进行深度监听
        // info(newValue, oldValue) {
        //   console.log("侦听到info改变:", newValue, oldValue)
        // }
        // 进行深度监听
        info: {
          handler(newValue, oldValue) {
            console.log("侦听到info改变:", newValue, oldValue)
            console.log(newValue === oldValue)
          },
          // 监听器选项:
          // info进行深度监听
          deep: true,
          // 第一次渲染直接执行一次监听器
          immediate: true
        },
        "info.name": function(newValue, oldValue) {
          console.log("name发生改变:", newValue, oldValue)
        }
      }
    })
    // 2.挂载app
    app.mount("#app")
```

## 侦听器watch的其他方式


还有另外一种方式就是使用 \$watch 的API：
我们可以在created的生命周期中，使用 this.$watchs 来侦听；
第一个参数是要侦听的源；
第二个参数是侦听的回调函数callback；
第三个参数是额外的其他选项，比如deep、immediate；

```js
 // 1.创建app
    const app = Vue.createApp({
      // data: option api
      data() {
        return {
          message: "Hello Vue"
        }
      },
      methods: {
        changeMessage() {
          this.message = "你好啊, 李银河!"
        }
      },
      // 生命周期回调函数: 当前的组件被创建时自动执行
      // 一般在该函数中, 会进行网络请求
      created() {
        // ajax/fetch/axios
        console.log("created")
        this.$watch("message", (newValue, oldValue) => {
          console.log("message数据变化:", newValue, oldValue)
        }, { deep: true })
      }
    })
    // 2.挂载app
    app.mount("#app")
```




