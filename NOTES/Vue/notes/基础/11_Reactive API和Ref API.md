
# Reactive API

如果想为在setup中定义的数据提供响应式的特性，那么我们可以使用reactive的函数：

当我们使用reactive函数处理我们的数据之后，数据再次被使用时就会进行依赖收集；当数据发生改变时，所有收集到的依赖都是进行对应的响应式操作（比如更新界面）；事实上，我们编写的data选项，也是在内部交给了reactive函数将其编程响应式对象的；

## Reactive判断的API

- isProxy  检查对象是否是由 reactive 或 readonly创建的 proxy。
- isReactive  检查对象是否是由 reactive创建的响应式代理：  如果该代理是 readonly 建的，但包裹了由 reactive 创建的另一个代理，它也会返回 true；
- isReadonly  检查对象是否是由 readonly 创建的只读代理。
- toRaw  返回 reactive 或 readonly 代理的原始对象（不建议保留对原始对象的持久引用。请谨慎使用）。
- shallowReactive  创建一个响应式代理，它跟踪其自身 property 的响应性，但不执行嵌套对象的深层响应式转换 (深层还是原生对象)。 
- shallowReadonly  创建一个 proxy，使其自身的 property 为只读，但不执行嵌套对象的深度只读转换（深层还是可读、可写的）。

# Ref API

reactive API对传入的类型是有限制的，它要求我们必须传入的是一个对象或者数组类型：如果我们传入一个基本数据类型（String、Number、Boolean）会报一个警告；

这个时候Vue3给我们提供了另外一个API：ref API
ref 会返回一个可变的响应式对象，该对象作为一个 响应式的引用 维护着它内部的值，这就是ref名称的来源；它内部的值是在ref的 value 属性中被维护的；

这里有两个注意事项：
- 在模板中引入ref的值时，Vue会自动帮助我们进行解包操作，所以我们并不需要在模板中通过 ref.value 的方式来使用；
- 但是在 setup 函数内部，它依然是一个 ref引用， 所以对其进行操作时，我们依然需要使用 ref.value的方式；

## Ref自动解包

模板中的解包是浅层的解包，如果我们将ref放到一个reactive的属性当中，那么在模板中使用时，它会自动解包

## ref的API

### toRefs

如果我们使用ES6的解构语法，对reactive返回的对象进行解构获取值，那么之后无论是修改结构后的变量，还是修改reactive 返回的state对象，数据都不再是响应式的：

那么有没有办法让我们解构出来的属性是响应式的呢？
Vue为我们提供了一个toRefs的函数，可以将reactive返回的对象中的属性都转成ref； 

这种做法相当于已经在state.name和ref.value之间建立了 链接，任何一个修改都会引起另外一个变化；

### toRef

如果我们只希望转换一个reactive对象中的属性为ref, 那么可以使用toRef的方法：

### 其他ref的API
- unref 如果我们想要获取一个ref引用中的value，那么也可以通过unref方法：  如果参数是一个 ref，则返回内部值，否则返回参数本身；  这是 val = isRef(val) ? val.value : val 的语法糖函数；
- isRef  判断值是否是一个ref对象。 
- shallowRef  创建一个浅层的ref对象； 
- triggerRef  手动触发和 shallowRef 相关联的副作用：

# readonly

我们通过reactive或者ref可以获取到一个响应式的对象，但是某些情况下，我们传入给其他地方（组件）的这个响应式对象希 望在另外一个地方（组件）被使用，但是不能被修改，这个时候如何防止这种情况的出现呢？

Vue3为我们提供了readonly的方法；
readonly会返回原始对象的只读代理（也就是它依然是一个Proxy，这是一个proxy的set方法被劫持，并且不能对其进行修 改）；

在开发中常见的readonly方法会传入三个类型的参数：
- 类型一：普通对象；
- 类型二：reactive返回的对象；
- 类型三：ref的对象；

## readonly的使用

在readonly的使用过程中，有如下规则：
- readonly返回的对象都是不允许修改的；
- 但是经过readonly处理的原来的对象是允许被修改的；
  比如 const info = readonly(obj)，info对象是不允许被修改的；
  当obj被修改时，readonly返回的info对象也会被修改；
  但是我们不能去修改readonly返回的对象info；

**其实本质上就是readonly返回的对象的setter方法被劫持了而已；**

## readonly的应用

在我们传递给其他组件数据时，往往希望其他组件使用我们传递的内容，但是不允许它们修改时，就可以使用readonly了；

# setup中使用ref

在setup中如何使用ref获取元素或者组件？
其实非常简单，我们只需要定义一个ref对象，绑定到元素或者组件的ref属性上即可；
