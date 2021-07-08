// import { useState } from 'react'
// import axios from 'axios'
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
  return (
    <Router>
      <div>
        <Appbar />
        <MediaCard />
        <Switch>
          <Route exact path='/'>
            <Search />
          </Route>
          <Route path='/saved'>
            <Saved />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
