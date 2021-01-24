import ContextC from './context_c'
import { useContext } from 'react'
import { UserContext, HobbyContext } from '../pages/index'

export default function ContextB() {
  const [user, setUser] = useContext(UserContext)
  const [hobby, setHobby] = useContext(HobbyContext)

  const nextYear = () => {
    setUser({...user, age: user.age + 1})
    if(user.age + 1 >= 30) setHobby('子育て')
  }

  return <>
    <ContextC/>
    <button onClick={nextYear}>1年後</button>
  </>
}