import {useRef, useState} from 'react'

export default function UseMemo() {
  const [text, setText] = useState("");

  const inputEl = useRef(null);
  const handleClick = () => {
    setText(inputEl.current.value);
  };

  console.log("render");

  return <>
    <input ref={inputEl} type="text" />
    <button onClick={handleClick}>set text</button>
    <p>TEXT: {text}</p>
  </>
}
