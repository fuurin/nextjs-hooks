import { useContext } from 'react'
import { UserContext, HobbyContext } from '../pages/index'

export default function ContextC() {
  const [user, setUser] = useContext(UserContext)
  const [hobby, setHobby] = useContext(HobbyContext)

  return <p>{user.name}({user.age}): 趣味は{hobby}です。</p>
}
