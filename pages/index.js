import { useState } from 'react'

export default function Home() {
  const initialCount = Math.floor(Math.random() * 10) + 1 // 初期値: 1~10
  const [count, setCount] = useState(initialCount)
  const [open, setOpen] = useState(true)
  const toggle = () => setOpen(!open)

  return <><Styles/>
      <button onClick={toggle}>{open ? 'close' : 'open'}</button>
      <div class={open ? 'opened' : 'closed'}>
        <p>現在の数字は{count}です</p>
        <button onClick={() => setCount(prevState => prevState + 1)}>+ 1</button>
        <button onClick={() => setCount(count - 1)}>- 1</button>
        <button onClick={() => setCount(0)}>０</button>
        <button onClick={() => setCount(initialState)}>最初の数値に戻す</button>
      </div>
  </>
}

const Styles = () => {
  return <style jsx>{`
    .closed {
      display: none;
    }

    .opened {
      display: block;
    }
  `}</style>
}