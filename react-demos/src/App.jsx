import React, { useState } from 'react'

export default function App() {

  const [count, setCount] = useState(0)

  const incrementCount = () => setCount(count + 1)
  const decrementCount = () => setCount(count - 1)

  return (
    <div className="">
      <h1>App - {count}</h1>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>
    </div>
  )
}
