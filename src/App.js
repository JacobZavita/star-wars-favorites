import { useState } from 'react'
import axios from 'axios'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Search from './pages/Search'
import Saved from './pages/Saved'
import Appbar from './components/Appbar'
import MediaCard from './components/Card' 

const App = () => {
  const [charState, setCharState] = useState({
    search: '',
    char: {},
    chars: []
  })

  const handleInputChange = ({ target }) => {
    setCharState({ ...charState, [target.name]: target.value })
  }

  const handleSearchChar = () => {
    // event.preventDefault()
    axios.get(`https://swapi.dev/api/people/?search=${charState.search}`)
      .then(({ data }) => {
        console.log(data)
      })
      .catch(err => console.log(err))
  }

  const handleSaveChar = () => {
    const chars = [...charState.chars]
    chars.push(charState.char)
    setCharState({ ...charState, chars, char: {} })
  }

  return (
    <Router>
      <div>
        <Appbar />
        <Switch>
          <Route exact path='/'>
            <Search 
              search={charState.search}
              char={charState.char}
              handleSaveChar={handleSaveChar}
              handleInputChange={handleInputChange}
              handleSearchChar={handleSearchChar}
            />
          </Route>
          <Route path='/saved'>
            <Saved 
              chars={charState.chars}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
