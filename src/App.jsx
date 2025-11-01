import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Resources from './components/Resources/Resources'

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
      </main>
    </div>
  )
}

export default App
