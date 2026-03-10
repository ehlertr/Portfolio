import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppContent from './AppContent'

function App() {
  return (
    <Router basename="/portfolio">
      <AppContent />
    </Router>
  )
}

export default App