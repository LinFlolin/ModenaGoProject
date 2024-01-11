import { useState } from 'react'
import './App.css'
import GETLuoghiAttrazione from './componenti/GetData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <GETLuoghiAttrazione></GETLuoghiAttrazione>
    </div>
  )
}

export default App
