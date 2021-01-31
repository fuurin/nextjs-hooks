import React, {useMemo, useState} from 'react'

export default function UseMemo() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  const increment1 = () => setCount1(count1 + 1)
  const increment2 = () => setCount2(count2 + 1)

  const square = useMemo(() => {
    console.log('execute a heavy function square(no memo)')
    let i = 0
    while (i < 2000000000) i++
    return count2 * count2
  }, [count2])

  return <>
    <div>count1: {count1}</div>
    <div>count2: {count2}</div>
    {/* useMemoでラップすると square() から square のように書き方が変わる*/}
    <div>square of count2: {square}</div>
    <button onClick={increment1}>increment1</button>
    <button onClick={increment2}>increment2</button>
  </>
}
