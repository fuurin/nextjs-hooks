import { useReducer } from 'react'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const initialCounts = { first: 0, second: 100 }

const reducer = (counts, action)=> {
  switch (action.type){
    case 'increment1': return {...counts, first: counts.first + action.value}
    case 'decrement1': return {...counts, first: counts.first - action.value}
    case 'increment2': return {...counts, second: counts.second + action.value}
    case 'decrement2': return {...counts, second: counts.second - action.value}
    case 'reset1': return {...counts, first: initialCounts.first}
    case 'reset2': return {...counts, second: initialCounts.second}
    default: return counts
  }
}

export default function Counters() {
  const [counts, dispatch] = useReducer(reducer, initialCounts)

  return <>
    <h2>カウント1：{counts.first}</h2>
    <ButtonGroup color="primary" aria-label="outlined primary button group">
      <Button onClick={()=>dispatch({type: 'increment1', value: 1})}>increment</Button>
      <Button onClick={()=>dispatch({type: 'decrement1', value: 1})}>decrement</Button>
      <Button onClick={()=>dispatch({type: 'reset1'})}>reset</Button>
    </ButtonGroup>
    <h2>カウント2：{counts.second}</h2>
    <ButtonGroup color="secondary" aria-label="outlined primary button group">
      <Button onClick={()=>dispatch({type: 'increment2', value: 100})}>increment</Button>
      <Button onClick={()=>dispatch({type: 'decrement2', value: 100})}>decrement</Button>
      <Button onClick={()=>dispatch({type: 'reset2'})}>reset</Button>
    </ButtonGroup>
  </>
}
