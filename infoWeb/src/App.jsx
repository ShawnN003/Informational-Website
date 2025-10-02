import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="src={warOfWorlds}" target="_blank">
          <img src={viteLogo}  alt="Vite logo" />
        </a>
        <a href="" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo"/>
        </a>
      </div>
      <h1>Sci-Fi Cinema</h1>

      <h3>War of worlds</h3>
      <ul>
        <li>Based from a novel in 1897</li>
        <li>One of the earliest alien invasion movies</li>
        <li>Has various adaptations</li>

      </ul>
      <h3>2000s</h3>
    </>
  )
}

export default App
