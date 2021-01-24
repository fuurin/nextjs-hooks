import {createContext, useState} from 'react'
import ContextA from '../components/context_a'

export const UserContext = createContext()
export const HobbyContext = createContext()

export default function Home() {
  const [user, setUser] = useState({ name: 'fuurin', age: 25 })
  const [hobby, setHobby] = useState('料理')

  return <>
    <UserContext.Provider value={[user, setUser]}>
      <HobbyContext.Provider value={[hobby, setHobby]}>
        <ContextA/>
      </HobbyContext.Provider>
    </UserContext.Provider>
  </>
}
