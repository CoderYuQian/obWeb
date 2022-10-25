
# script setup语法

\<script setup\> 是在单文件组件 (SFC) 中使用组合式 API 的编译时语法糖，当同时使用 SFC 与组合式 API 时则推荐该语法。

- 更少的样板内容，更简洁的代码；
- 能够使用纯 Typescript 声明 prop 和抛出事件；
- 更好的运行时性能 ；
- 更好的 IDE 类型推断性能 ；

使用这个语法，需要将 setup attribute 添加到\<script\> 代码块上

里面的代码会被编译成组件 setup() 函数的内容：
- 这意味着与普通的\<script\> 只在组件被首次引入的时候执行一次不同；
- \<script setup\> 中的代码会在每次组件实例被创建的时候执行。

## 顶层的绑定会被暴露给模板

当使用\<script setup\> 的时候，任何在 \<script setup\> 声明的顶层的绑定 (包括变量，函数声明，以及 import 引入的内容) ，都能在模板中直接使用

响应式数据需要通过ref、reactive来创建。

## 导入的组件直接使用

\<script setup\> 范围里的值也能被直接作为自定义组件的标签名使用

# defineProps() 和 defineEmits()

为了在声明 props 和 emits 选项时获得完整的类型推断支持，我们可以使用 defineProps 和 defineEmits API，它们将自动 地在\<script setup\> 中可用

## defineExpose()

使用\<script setup\> 的组件是默认关闭的：

通过模板 ref 或者 $parent 链获取到的组件的公开实例，不会暴露任何在 \<script setup\> 中声明的绑定；

通过 defineExpose 编译器宏来显式指定在 \<script setup\> 组件中要暴露出去的 property

