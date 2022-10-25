# setup不可以使用this

# computed函数使用

在前面我们讲解过计算属性computed：当我们的某些属性是依赖其他状态时，我们可以使用计算属性来处理，在前面的Options API中，我们是使用computed选项来完成的；在Composition API中，我们可以在 setup 函数中使用 computed 方法来编写一个计算属性；

如何使用computed呢？
- 方式一：接收一个getter函数，并为 getter 函数返回的值，返回一个不变的 ref 对象；
- 方式二：接收一个具有 get 和 set 的对象，返回一个可变的（可读写）ref 对象；

# 生命周期钩子

我们前面说过 setup 可以用来替代 data 、 methods 、 computed 等等这些选项，也可以替代 生命周期钩子。那么setup中如何使用生命周期函数呢？

可以使用直接导入的 onX 函数注册生命周期钩子；


# Provide函数

事实上我们之前还学习过Provide和Inject，Composition API也可以替代之前的 Provide 和 Inject 的选项。

我们可以通过 provide来提供数据：
- 可以通过 provide 方法来定义每个 Property；
- provide可以传入两个参数：name：提供的属性名称；value：提供的属性值；

# Inject函数

在 后代组件 中可以通过 inject 来注入需要的属性和对应的值：可以通过 inject 来注入需要的内容；
inject可以传入两个参数：
- 要 inject 的 property 的 name；
- 默认值；

# 数据的响应式

为了增加 provide 值和 inject 值之间的响应性，我们可以在 provide 值时使用 ref 和 reactive。

# 侦听数据的变化

在前面的Options API中，我们可以通过watch选项来侦听data或者props的数据变化，当数据变化时执行某一些操作。
在Composition API中，我们可以使用watchEffect和watch来完成响应式数据的侦听；
- watchEffect：用于自动收集响应式数据的依赖；
- watch：需要手动指定侦听的数据源；

## Watch的使用

watch的API完全等同于组件watch选项的Property：
- watch需要侦听特定的数据源，并且执行其回调函数；
- 默认情况下它是惰性的，只有当被侦听的源发生变化时才会执行回调；

侦听器还可以使用数组同时侦听多个源：

### watch的选项

- 如果我们希望侦听一个深层的侦听，那么依然需要设置 deep 为true；
- 也可以传入 immediate 立即执行；

## watchEffect
当侦听到某些响应式数据变化时，我们希望执行某些操作，这个时候可以使用 watchEffect。 
- 首先，watchEffect传入的函数会被立即执行一次，并且在执行的过程中会收集依赖；
- 其次，只有收集的依赖发生变化时，watchEffect传入的函数才会再次执行；

### watchEffect的停止侦听

如果在发生某些情况下，我们希望停止侦听，这个时候我们可以获取watchEffect的返回值函数，调用该函数即可。 

