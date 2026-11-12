
import { useState, useCallback } from 'react'

import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import About from './pages/About'
import Services from './pages/Services'
import Work from './pages/Work'
import Skills from './pages/Skill'
import Contact from './pages/Contact'

import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Preloader from './components/Preloader'

import './App.css'
import './styles/Preloader.css'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  const handlePreloaderComplete = useCallback(() => {
    setIsLoaded(true)
  }, [])

  return (
    <>
      {!isLoaded ? (
        <Preloader onComplete={handlePreloaderComplete} />
      ) : (
        <>
          <Navbar />

          <main>
            <Hero />
            <About />
            <Services />
            <Work />
            <Skills />
            <Contact />
          </main>

          <Footer />
          <ScrollToTop />
        </>
      )}
    </>
  )
}

export default App