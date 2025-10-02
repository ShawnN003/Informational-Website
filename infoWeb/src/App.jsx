import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import firstMovie from './images/warOfworlds.webp'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="src/images/warOfworlds.webp" target="_blank">
          <img src={firstMovie}  alt="Vite logo"/>
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
      <h3>Interstellar</h3>
      <ul>
        <li>They had an actual physicist to simulate how the the black hole would effect the characters</li>
        <li>The work was accurate enough that it inspired a new scientific discovery about how light behaves</li>
        <li>Has various adaptations</li>
      </ul>
    </>
  )
}

export default App
