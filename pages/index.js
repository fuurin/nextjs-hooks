import {useState, useEffect} from 'react'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input';

export default function Home() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  // 第2引数の配列に渡したstate([count])が変更された時に限りuseEffectを実行
  // 第2引数を設定しなければ、同ファイル内の関係ないコンポーネントが再レンダーされた時にも実行されてしまい非効率。
  // 第2引数に[]を設定すると、初回のみ実行される。 
  useEffect(() => {
    // ボタンクリックの度にタブのタイトルが変わる
    document.title =`${count}回クリックされました`
    console.log('useEffect実行')
  }, [count])

  return <>
    <p>{`${count}回クリックされました`}</p>
    <ButtonGroup color="primary" aria-label="outlined primary button group">
      <Button onClick={() => setCount((prev) => prev + 1)}>ボタン</Button>
      <Button onClick={() => setCount(0)}>リセット</Button>
    </ButtonGroup>
    <p>名前: {name}</p>
    <Input value={name} onChange={ (e) => { setName(e.target.value) } }/>
  </>
}
