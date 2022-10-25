# Options API的弊端

在Vue2中，我们编写组件的方式是Options API：Options API的一大特点就是在对应的属性中编写对应的功能模块；比如data定义数据、methods中定义方法、computed中定义计算属性、watch中监听属性改变，也包括生命周期钩子；

但是这种代码有一个很大的弊端：当我们实现某一个功能时，这个功能对应的代码逻辑会被拆分到各个属性中；当我们组件变得更大、更复杂时，逻辑关注点的列表就会增长，那么同一个功能的逻辑就会被拆分的很分散；尤其对于那些一开始没有编写这些组件的人来说，这个组件的代码是难以阅读和理解的（阅读组件的其他人）；


# 认识Composition API

如果我们能将同一个逻辑关注 点相关的代码收集在一起会更 好。这就是Composition API想要做的事情，以及可以帮助我 们完成的事情。也有人把Vue Composition API简称为VCA

那么既然知道Composition API想要帮助我们做什么事情，接下来看一下到底是怎么做呢？为了开始使用Composition API，我们需要有一个可以实际使用它（编写代码）的地方；在Vue组件中，这个位置就是 setup 函数；

setup其实就是组件的另外一个选项：只不过这个选项强大到我们可以用它来替代之前所编写的大部分其他选项；比如methods、computed、watch、data、生命周期等等；

# setup函数

## setup函数的参数

它主要有两个参数：
- 第一个参数：props
- 第二个参数：context

### props
props非常好理解，它其实就是父组件传递过来的属性会被放到props对象中，我们在setup中如果需要使用，那么就可以直接 通过props参数获取：

对于定义props的类型，我们还是和之前的规则是一样的，在props选项中定义；并且在template中依然是可以正常去使用props中的属性

如果我们在setup函数中想要使用props，那么不可以通过 this 去获取；因为props有直接作为参数传递到setup函数中，所以我们可以直接通过参数来使用即可；

### context
另外一个参数是context，我们也称之为是一个SetupContext，它里面包含三个属性：
- attrs：所有的非prop的attribute；
- slots：父组件传递过来的插槽（这个在以渲染函数返回时会有作用，后面会讲到）；
- emit：当我们组件内部需要发出事件时会用到emit（因为我们不能访问this，所以不可以通过 this.$emit发出事件）；

## setup函数的返回值

setup既然是一个函数，那么它也可以有返回值，它的返回值用来做什么呢？

setup的返回值可以在模板template中被使用；也就是说我们可以通过setup的返回值来替代data选项；

但是，如果我们将 counter 在 increment 或者 decrement进行操作时，是否可以实现界面的响应式呢？
答案是不可以；
这是因为对于一个定义的变量来说，默认情况下，Vue并不会跟踪它的变化，来引起界面的响应式操作；


