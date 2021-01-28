import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppProviders from './providers'
import Routes from './Routes'

import './styles.css'

const App = () => {
  return (
    <Router>
      <AppProviders>
        <Routes />
      </AppProviders>
    </Router>
  )
}

export default App
