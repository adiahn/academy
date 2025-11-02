import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import VideoHighlight from './components/VideoHighlight/VideoHighlight'
import Resources from './components/Resources/Resources'
import Courses from './components/Courses/Courses'
import About from './components/About/About'
import Footer from './components/Footer/Footer'

/**
 * Main App Component
 * KASEDA Digital Academy - Root component
 */
function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Resources />
        <Courses />
        <VideoHighlight />
        <About />
      </main>
      <Footer />
      </div>
  )
}

export default App
