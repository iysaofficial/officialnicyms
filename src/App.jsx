import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navigation from './component/navigation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navigation />
      <h1>Vite + React</h1>
    </>
  )
}

export default App
