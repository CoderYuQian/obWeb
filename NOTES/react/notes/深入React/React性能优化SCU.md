
## React的渲染流程：

jsx => 虚拟DOM => 真实DOM

## React更新流程：

props/state改变=>render函数重新执行=>产生新的DOM树=>新旧DOM树进行diff=>计算出差异进行更新=>更新到真实的DOM

- React在props或state发生改变时，会调用React的render方法，会创建一颗不同的树。
- React需要基于这两颗不同的树之间的差别来判断如何有效的更新UI：
  如果一棵树参考另外一棵树进行完全比较更新，那么即使是最先进的算法，该算法的复杂程度为 O(n³)，其中 n 是树中元素的数量； https://grfia.dlsi.ua.es/ml/algorithms/references/editsurvey_bille.pdf； ；如果在 React 中使用了该算法，那么展示 1000 个元素所需要执行的计算量将在十亿的量级范围；这个开销太过昂贵了，React的更新性能会变得非常低效；
- 于是，React对这个算法进行了优化，将其优化成了O(n)
  同层节点之间相互比较，不会垮节点比较；不同类型的节点，产生不同的树结构；开发中，可以通过key来指定哪些节点在不同的渲染下保持稳定；

## kerys的优化

- 在最后位置插入数据  
  这种情况，有无key意义并不大
- 在前面插入数据 
   这种做法，在没有key的情况下，所有的li都需要进行修改；
- 当子元素(这里的li)拥有 key 时，React 使用 key 来匹配原有树上的子元素以及最新树上的子元素： 在下面这种场景下，key为111和222的元素仅仅进行位移，不需要进行任何的修改； 将key为333的元素插入到最前面的位置即可；

key的注意事项： 
- key应该是唯一的； 
- key不要使用随机数（随机数在下一次render时，会重新生成一个数字）；
- 使用index作为key，对性能是没有优化的；

## render函数被调用

可以思考一下，在开发中，我们只要是修改了 App中的数据，所有的组件都需要重新render，进行diff算法， 性能必然是很低的：
事实上，很多的组件没有必须要重新render；它们调用render应该有一个前提，就是依赖的数据（state、 props）发生改变时，再调用自己的render方法；

我们可以通过shouldComponentUpdate方法来控制render方法是否被调用。

### shouldComponentUpdate

React给我们提供了一个生命周期方法 shouldComponentUpdate（很多时候，我们简称为SCU），这个方法接受参数，并且需要有 返回值；
该方法返回值是一个boolean类型：  返回值为true，那么就需要调用render方法；  返回值为false，那么久不需要调用render方法；  默认返回的是true，也就是只要state发生改变，就会调用render方法；

该方法有两个参数：
- 参数一：nextProps 修改之后，最新的props属性
- 参数二：nextState 修改之后，最新的state属性

比如我们在App中增加一个message属性：  jsx中并没有依赖这个message，那么它的改变不应该引起重新渲染；  但是因为render监听到state的改变，就会重新render，所以最后render方法还是被重新调用了；

如果所有的类，我们都需要手动来实现 shouldComponentUpdate，那么会给我们开发者增加非常多的工作量。事实上React已经考虑到了这一点，所以React已经默认帮我们实现好了：**将class继承自PureComponent**

#### shallowEqual方法

调用 !shallowEqual(oldProps, newProps) || !shallowEqual(oldState, newState)，这个shallowEqual就是 进行浅层比较：

## 高阶组件memo

目前我们是针对类组件可以使用PureComponent，那么函数式组件呢？
事实上函数式组件我们在props没有改变时，也是不希望其重新渲染其DOM树结构的。

我们需要使用一个高阶组件memo：
我们将之前的Header、Banner、ProductList都通过memo函数进行一层包裹；Footer没有使用memo函数进行包裹；最终的效果是，当counter发生改变时，Header、Banner、ProductList的函数不会重新执行；而Footer的函数会被重新执行；

## 不可变的数据力量

参考官方文档：[性能优化 – React (reactjs.org)](https://zh-hans.reactjs.org/docs/optimizing-performance.html)

