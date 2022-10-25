# Composition API

## Setup函数

### setup(  )函数是在created生命周期函数  被完全初始化之前执行的函数。通过ref(  )和reactive(  )函数的使用，可以完全替换掉以前的data{}语法形式。

### 基本语法：setup(props, context){return{name:'小明'}}

### Setup()函数特点

- 特点1：return的内容，在模板中直接可以使用，包括变量和方法
- 特点2：在setup( )中不能使用this关键字

### context参数三个关键

- attrs
- slots
- emit

## 相关函数

### ref(  )函数

- 作用：把setup函数中不可响应的基础类型数据变成响应数据。
- 使用前需要先引入：const {ref} = Vue;
- 基础语法： let  name = ref("jspang")

### reactive( )函数

- 作用：把setup函数中不可响应的非基础类型数据变成响应数据。
- 使用前需要先引入：const {reactive} = Vue;
- 基础语法： const nameObj = reactive({name:'jspang'})

### readonly(  ) 函数

- 作用：在setup()函数中把一个响应式引用变成只读属性，如果改变就会报错。
- 使用前需要先引入：const {readonly} = Vue;

### toRefs(  )函数

- 把响应式数据进行解构返回,在模板中就可以直接使用了。
- 使用前需要先引入：const {toRefs} = Vue;
- 基础语法：const { name } = toRefs(nameObj)

### computed()函数

- 作用：随着一个变量的变化，而随之变化的方法，也叫计算函数/计算属性
- 使用前需要先引入： const  {computed} = Vue；
- 基础语法：const countNew=computed(()=>{return count.value +5})
- 内部方法

	- get:( )=>{}
	- set:( )=>{}

### watch()函数

- 作用：对setup函数里某个值的变化进行监听，可以得到变化后的值和变化前的值。但它具备一定的惰性 lazy，也就是第一次不会执行，只有变化时才会执行。
- 使用前需要先引入： const  {watch} = Vue；
- 基础语法：watch(name,(currentValue,prevValue)=>{console.log(currentValue,prevValue)})
- 变成立即执行，增加第三个参数。im

### watchEffect( )函数

- 和watch( )函数基本一样，但是它是立即执行，没有惰性 immediate。不需要传递侦听内容，自动感知代码依赖。数据有依赖才会执行里边的代码，如果没有依赖，就不会执行。
- 和Watch( )函数的不同点

	- 1.立即执行，没有惰性 immediate
	- 2.不需要传递侦听内容，自动会感知代码依赖，不需要传递很多参数，只要传递一个回调函数
	- 3.不能获取之前数据的值

- 使用前需要先引入： const  {watchEffect} = Vue；
- 基础语法：watchEffect(( )=>{})

### provide( ) 函数

- 作用：在setup函数中向子组件或者孙子组件进行传值（可跨层级进行传值）。
- 使用前需要先引入： const  {provide} = Vue；
- 基础语法：provide('name','jspang')

### inject( ) 函数

- 作用：在setup函数中父组件传递过来的值（可跨层级进行接受）。
- 使用前需要先引入： const  {inject} = Vue；
- 基础语法：provide('name','hello')  , hello为传递值，不存在时的默认值

## setup中的生命周期函数

### 在使用这些函数前，都需要引入。

### onBeforeMount( )

- 在Vue应用被挂载之前，自动执行的函数

### onMounted( )

- 在Vue应用挂载完成之后，自动执行的函数

### onBeforeUpdate( )

- 在数据发生变化之前，自动执行的函数

### onUpdated( )

- 在数据发生变化之后，自动执行的函数

### onBeforeUnmount( )

- 在组件销毁之前，自动执行的函数

### onUnmounted( )

- 在组件销毁之后，自动执行的函数

### onRenderTracked( )

- 在收集响应时依赖时，自动执行的函数

### onRenderTriggered( )

- 每次处罚页面渲染被触发时，自动执行的函数

*XMind: ZEN - Trial Version*