import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import DefaultLayoutRoute from './hoc/DefaultLayoutRoute'
import './App.css'
import Home from './pages/home/Home'
import About from './pages/about/About'

const App: React.FC = () => {
  return (
    <Router>
      <>
        <DefaultLayoutRoute exact path='/' component={Home} />
        <Route path='/about' component={About} />
      </>
    </Router>
  )
}

export default App
