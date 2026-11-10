import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import About from './pages/About'
import Services from './pages/Services'
import Work from './pages/Work'
import Skills from './pages/Skill'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import './App.css'

function App() {
  return (
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
  )
}

export default App