import reactLogo from './assets/react.svg'
import firstMovie from './images/warOfworlds.webp'
import secondMovie from './images/RougeImage.jpg'
import thirdMovie from './images/interstellar.jpg'


import './App.css'

function App() {

  return (
    <>
      <div id="header">
              <h1>Sci-Fi Cinema</h1>

          <img src={reactLogo} className="logo react" alt="React logo"/>
      </div>
      
      <div className='movieList'>
        <h3>War of worlds</h3>
        <img src={firstMovie} className="imgChanges"  alt="warWorlds"/>
        <ul>
          <li>Based from a novel in 1897</li>
          <li>One of the earliest alien invasion movies</li>
          <li>Has various adaptations</li>
        </ul>
      </div>
      
      <div className='movieList'>
        <h3>Interstellar</h3>
        <img src={thirdMovie} className="imgChanges"  alt="rogueOne"/>      
        <ul>
          <li>They had an actual physicist to simulate how the the black hole would effect the characters</li>
          <li>The work was accurate enough that it inspired a new scientific discovery about how light behaves</li>
          <li>Has various adaptations</li>
        </ul>
      </div>
      <div className='movieList'>
        <h3>Rouge One</h3>
        <img src={secondMovie} className="imgChanges"  alt="rogueOne"/>      
        <ul>
          <li>First stand alone film in the star wars franchise</li>
          <li>The work was accurate enough that it inspired a new scientific discovery about how light behaves</li>
        </ul>
      </div>
    </>
  )
}

export default App
