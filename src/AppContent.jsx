import React, { useState, useEffect } from 'react'
import { Routes, Route, useSearchParams } from 'react-router-dom'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Available from './components/Available'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'
import RecruiterView from './components/RecruiterView'

function AppContent() {
  const [searchParams] = useSearchParams()
  const [isRecruiterView, setIsRecruiterView] = useState(false)

  useEffect(() => {
    const code = searchParams.get('recruiter')
    // Simple code validation - in production, verify against backend
    if (code === 'RAMONA2026') {
      setIsRecruiterView(true)
    }
  }, [searchParams])

  return (
    <div className="app">
      {isRecruiterView && <RecruiterView />}
      <Navigation isRecruiterView={isRecruiterView} />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Available />
            <Projects isRecruiterView={isRecruiterView} />
            <Skills />
          </>
        } />
      </Routes>
      <Footer />
    </div>
  )
}

export default AppContent