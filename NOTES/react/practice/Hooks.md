
## 类组件和函数式组件实现计数器对比
**类组件**
```js
import React, { PureComponent } from 'react'

export class CounterClass extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  decrement() {
    this.setState({
      counter: this.state.counter - 1
    })
  }

  render() {
    const { counter } = this.state
    return (
      <div>
        <h2>当前计数: {counter}</h2>
        <button onClick={e => this.increment()}>+1</button>
        <button onClick={e => this.decrement()}>-1</button>
      </div>
    )
  }
}

export default CounterClass
```
**hooks实现**
```js
import { memo, useState } from "react";

// 普通的函数, 里面不能使用hooks
// 在自定义的hooks中, 可以使用react提供的其他hooks: 必须使用use开头
// function useFoo() {
//   const [ message ] = useState("Hello World")
//   return message
// }
  
function CounterHook(props) {
  const [counter, setCounter] = useState(0)
  const [name] = useState("why")
  console.log(name)
  
  // const message = useFoo()

  return (
    <div>
      <h2>当前计数: {counter}</h2>
      <button onClick={e => setCounter(counter+1)}>+1</button>
      <button onClick={e => setCounter(counter-1)}>-1</button>
    </div>
  )
}

export default memo(CounterHook)
```

